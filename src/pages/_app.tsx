import { injectStore } from '@/api/api.helpers';
import { ALCHEMY_API_KEY, SCROLL_DURATION } from '@/constants';
import useIsClient from '@/hooks/useIsClient';
import { scrollTo } from '@/utils/common';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';
import { store } from '../store';
import type { NextPageWithLayout } from './page';

import { createWeb3Modal } from '@web3modal/wagmi/react';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const configuredChain = mainnet;

const projectId = '3b6fe02b079fa3ad4b5447d6d74e1d48';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [configuredChain],
  [publicProvider()],
);

const metadata = {
  name: 'Kiraverse',
  description: 'Enter the Kiraverse',
  url: 'https://v2.kiraverse.game',
  icons: ['https://v2.kiraverse.game/favicon.ico'],
};

const wagmiConfig = createConfig(
  getDefaultConfig({
    alchemyId: ALCHEMY_API_KEY,
    walletConnectProjectId: projectId,
    appName: 'kiraverse',
    autoConnect: true,
    chains,
    publicClient,
    webSocketPublicClient,
    connectors: [
      new MetaMaskConnector({ chains }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId,
          metadata,
          qrModalOptions: {
            explorerRecommendedWalletIds: [
              'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
            ],
          },
        },
      }),
    ],
  }),
);

const persistor = persistStore(store);

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

injectStore(store);

createWeb3Modal({ wagmiConfig, projectId, chains });

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();

  const isClient = useIsClient();

  const queryClient = new QueryClient();

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const hash = router.asPath.replace(/.*#/, '');

    if (hash) {
      const elem = document.getElementById(hash);

      if (elem) {
        const headerHeight =
          parseInt(document.documentElement.style.getPropertyValue('--main-header-height')) || 0;
        const top = elem?.offsetTop - headerHeight;

        const timer = setTimeout(() => {
          scrollTo(document.documentElement, top, SCROLL_DURATION);
          clearTimeout(timer);
        }, 500);
      }
    }
  }, [isClient, router]);

  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>Kiraverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      {/* Add Providers here of needed */}
      <WagmiConfig config={wagmiConfig}>
        <Provider store={store}>
          <ConnectKitProvider>
            <PersistGate persistor={persistor}>
              <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                  {getLayout(<Component {...pageProps} />)}
                </Hydrate>
              </QueryClientProvider>
            </PersistGate>
          </ConnectKitProvider>
        </Provider>
      </WagmiConfig>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className={'text-center'}
      />
    </>
  );
};

export default App;
