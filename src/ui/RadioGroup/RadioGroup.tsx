import { forwardRef, memo } from 'react';
import { Root as RadioGroupRoot, Item as RadioGroupItem } from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import type { RadioGroupProps, RadioProps } from './types';
import Typography from '@/ui/Typography';
import s from './RadioGroup.module.css';

const Radio: React.FC<RadioProps> = ({ label, ...rest }) => {
  return (
    <label className={s['radio-wrap']}>
      <RadioGroupItem className={s.radio} {...rest}>
        <span className={s.checkmark} />
      </RadioGroupItem>
      <Typography className={s.label} component="span" variant="body-small-mono">
        {label}
      </Typography>
    </label>
  );
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ radioDataList, className, ...rest }, ref) => {
    return (
      <RadioGroupRoot className={clsx(s.wrap, className)} {...rest} ref={ref}>
        {radioDataList.map(({ value, ...others }) => {
          return <Radio key={value} value={value} {...others} />;
        })}
      </RadioGroupRoot>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

export default memo(RadioGroup);
