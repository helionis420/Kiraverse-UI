import { memo } from 'react';
import { URL_LINK_DOWNLOAD, ABOUT_VIDEO_YT_URL } from '@/constants';
import { VIDEO_PREVIEW_SRC, VIDEO_MOB_PREVIEW_SRC } from '@/components/VideoPreview/constants';
import { SEASON_TITLE } from '@/components/Season/constants';
import { NFT_COLLECTION_TITLE } from '@/components/NFTCollection/constants';
import Typography from '@/ui/Typography';
import Button from '@/ui/Button';
import Link from '@/ui/Link';
import PopupCookies from '@/ui/PopupCookies';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Season from '@/components/Season';
import NFTCollection from '@/components/NFTCollection';
import Developers from '@/components/Developers';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import s from './Home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <div className={s['hero-wrap']}>
          <div className={s['hero-content']}>
            <div className="my-auto">
              <Typography className={s['hero-title']} variant="headline-h1" component="h1">
                Enter the kiraverse
              </Typography>
              <div className={s['hero-desc']}>
                <Typography variant="body-large" component="p">
                  Kiraverse is an online multiplayer game where users across the globe can compete,
                  unlock rentable assets, earn, and more.
                </Typography>
              </div>
              <div className={s['hero-actions']}>
                <Button variant="primary" href="/register">
                  Get started
                </Button>
                <Button href={URL_LINK_DOWNLOAD} variant="secondary">
                  Download
                </Button>
              </div>
            </div>
          </div>
          <PopupCookies className={s['hero-popup']} />
        </div>
      </Hero>
      <AboutUs
        title="About kiraverse"
        videoSrc={VIDEO_PREVIEW_SRC}
        videoMobSrc={VIDEO_MOB_PREVIEW_SRC}
        urlToVideo={ABOUT_VIDEO_YT_URL}
      >
        Kiraverse is a free-to-play multiplayer game that allows users to compete and earn digital
        assets in competitive game modes. Players can team up to earn tokens and collectables, which
        they can trade freely or rent to other players. Users can also enter risk-based matches to
        earn cryptocurrency, or even utilize the option of importing custom characters into the
        Kiraverse using our{' '}
        <Link
          className={s['about-link']}
          href="https://twitter.com/pixeltopoly"
          variant="tertiary"
          underline
        >
          Pixel-to-Poly
        </Link>{' '}
        service for a fun and personalized gameplay experience.
      </AboutUs>
      <Season title={SEASON_TITLE}>
        Kiraverse offers multiple competitive game modes: “Battle Royale,” “Elimination,”
        “Free-For-All,” “Point Control” & “1-vs-1.” Players can unlock in-game achievements and own,
        purchase, or rent characters, skins, weapons, and more to enhance their gameplay experience.
      </Season>
      <NFTCollection title={NFT_COLLECTION_TITLE} />
      <Developers title="Who is Param Labs?" />
      <Partners title="PARTNERS & TEAM EXPERIENCE">
        Thanks to our major partners we will introduce KIRAVERSE to millions of gamers. As a long
        time leader in the gaming industry, GameStop and ImmutableX are powering the next generation
        of games!
      </Partners>
      <FAQ title="FREQUENTLY ASKED QUESTIONS">
        KIRAVΞRSΞ is a multiplayer game that allows players to explore a virtual world, collect
        unique digital assets, and generate real world value while battling opponents.
      </FAQ>
      <CTA title="Enter the Kiraverse" />
    </>
  );
};

export default memo(Home);
