import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'rgb(30, 30, 30)',
        },
        {
          name: 'light',
          value: 'rgb(255, 255, 255)',
        },
      ],
    },
  },
};

export default preview;
