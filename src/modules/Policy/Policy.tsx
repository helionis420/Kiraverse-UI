import { memo } from 'react';
import { PolicyProps } from './types';
import { PRIVACY_POLICY_ITEMS } from './constants';
import Container from '@/components/Container';
import PolicyItem from './components/PolicyItem';
import Typography from '@/ui/Typography';
import s from './Policy.module.css';

const Policy: React.FC<PolicyProps> = ({ title, items = PRIVACY_POLICY_ITEMS }) => {
  return (
    <section className={s.wrap}>
      <Container size="sm">
        <div className={s.holder}>
          <Typography className={s.title} variant="headline-h3" component="h1">
            {title}
          </Typography>
          <div className={s.items}>
            {items.map((item, i) => {
              return (
                <div key={i}>
                  {item.map((props, y) => {
                    return <PolicyItem key={y} {...props} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(Policy);
