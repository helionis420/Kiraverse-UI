import { memo } from 'react';
import Typography from '@/ui/Typography';
import s from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <section className={s.wrap}>
      <Typography variant="headline-h2" component="h1">
        404 - Page Not Found
      </Typography>
    </section>
  );
};

export default memo(NotFound);
