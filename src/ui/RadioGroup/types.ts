import type {
  RadioGroupProps as RadixRadioGroupProps,
  RadioGroupItemProps,
} from '@radix-ui/react-radio-group';
import { WithClassName } from '@/types';

export type RadioDataType = {
  /**
        Label of the radio.
    */
  label: string;
} & Pick<RadioGroupItemProps, 'value' | 'disabled'>;

export type RadioGroupProps = WithClassName<{
  /**
        The radio data list.
    */
  radioDataList: RadioDataType[];
}> &
  RadixRadioGroupProps;

export type RadioProps = Omit<RadioDataType, 'value' | 'disabled'> & RadioGroupItemProps;
