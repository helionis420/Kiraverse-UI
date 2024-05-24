import { forwardRef, memo } from 'react';
import type { InputProps } from './types';
import { useInput } from './hooks/useInput';
import Typography from '@/ui/Typography';
import s from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, classes, label, rightAddonJSX, descriptionJSX, ...rest } = useInput(props);

  return (
    <div className={classes.wrap}>
      {label ? (
        <label className={classes.label} htmlFor={id}>
          <Typography className={s['label-content']} variant="body-small-mono" component="span">
            {label}
          </Typography>
        </label>
      ) : null}
      <div className={s['input-wrap']}>
        <div className={classes.inner}>
          <input id={id} className={classes.input} ref={ref} {...rest} />
          {rightAddonJSX}
        </div>
      </div>
      {descriptionJSX ? <div className={s['description-wrap']}>{descriptionJSX}</div> : null}
    </div>
  );
});

Input.displayName = 'Input';

export default memo(Input);
