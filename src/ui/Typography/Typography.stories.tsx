import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import { TYPOGRAPHY_VARIANTS } from './constants';

const meta = {
  title: 'ui/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadlineH1: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_H1,
  },
};

export const HeadlineH2: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_H2,
  },
};

export const HeadlineH3: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_H3,
  },
};

export const HeadlinePrimary: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_PRIMARY,
  },
};

export const HeadlinePrimaryUppercase: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_PRIMARY_UPPERCASE,
  },
};

export const HeadlineSecondary: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_SECONDARY,
  },
};

export const HeadlineSecondaryBold: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_SECONDARY_BOLD,
  },
};

export const HeadlineUppercase: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.HEADLINE_UPPERCASE,
  },
};

export const BodyLarge: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.BODY_LARGE,
  },
};

export const BodyLargeBold: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.BODY_LARGE_BOLD,
  },
};

export const BodyLargeUppercase: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.BODY_LARGE_UPPERCASE,
  },
};

export const BodySmall: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.BODY_SMALL,
  },
};

export const BodySmallMono: Story = {
  args: {
    ...HeadlineH1.args,
    variant: TYPOGRAPHY_VARIANTS.BODY_SMALL_MONO,
  },
};
