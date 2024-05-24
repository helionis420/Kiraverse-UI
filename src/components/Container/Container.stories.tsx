import type { Meta, StoryObj } from '@storybook/react';
import type { ContainerProps } from './types';
import Typography from '@/ui/Typography';
import Container from './Container';

const meta = {
  title: 'components/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: (
      <Typography component="p" variant="body-large">
        The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The
        quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The
        quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The
        quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The
        quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The
        quick brown fox jumps over the lazy dog
      </Typography>
    ),
  } as ContainerProps,
};

export const WithPaddingsSmX: Story = {
  args: {
    ...Base.args,
    withPaddingsSmX: true,
  } as ContainerProps,
};
