import { useState } from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { Meta, StoryObj } from '@storybook/react';
import type { RadioGroupProps } from './types';
import { MOCK_RADIO_GROUP_LIST } from './RadioGroup.mocks';
import Typography from '@/ui/Typography';
import RadioGroup from './RadioGroup';

const meta = {
  title: 'ui/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <form>{Story()}</form>;
    },
  ],
  argTypes: {
    onValueChange: {
      action: 'onValueChange',
    },
  },
  parameters: {
    docs: {
      page() {
        return (
          <>
            <Title />
            <Typography>
              More info about RadioGroup component
              <a
                href="https://www.radix-ui.com/docs/primitives/components/radio-group"
                target="_blank"
                rel="noreferrer"
                className="inline"
              >
                here
              </a>
              .
            </Typography>
            <Subtitle />
            <Description />
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
          </>
        );
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (args: RadioGroupProps) => {
  const [value, setValue] = useState(args.defaultValue);

  return (
    <RadioGroup
      {...args}
      defaultValue={value}
      onValueChange={(value) => {
        setValue(value);
        args.onValueChange?.(value);
      }}
    />
  );
};

export const Base: Story = {
  args: {
    radioDataList: MOCK_RADIO_GROUP_LIST,
    defaultValue: '3',
  } as RadioGroupProps,
  render: Component,
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    defaultValue: '2',
    disabled: true,
  } as RadioGroupProps,
  render: Component,
};
