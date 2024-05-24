import { memo } from 'react';
import clsx from 'clsx';
import type { PartnersProps } from './types';
import { PARTNERS_MAIN_ITEMS, PARTNERS_ITEMS } from './constants';
import PartnerLogo from '@/ui/PartnerLogo';
import Container from '@/components/Container';
import Caption from '@/ui/Caption';
import Typography from '@/ui/Typography';
import s from './Partners.module.css';

const Partners: React.FC<PartnersProps> = ({ className, children, title }) => {
  return (
    <section className={clsx(s.wrap, className)}>
      <Container className={s.container}>
        <Caption className={s.caption} title="Partners" />
        <div className={s.holder}>
          <div className={s.head}>
            <Typography className={s.title} component="h3" variant="headline-h3">
              {title}
            </Typography>
            <div className={s.desc}>
              <Typography className={s.text} variant="body-large" component="p">
                {children}
              </Typography>
            </div>
          </div>
          <div className={s.items}>
            {PARTNERS_MAIN_ITEMS.map((item) => {
              return <PartnerLogo className={s.item} key={item.id} name={item.name} />;
            })}
          </div>
          <div className={s.subtitle}>
            <Typography className={s.text} variant="body-large" component="p">
              Our team members come from a diverse background in the gaming and tech industry.
            </Typography>
          </div>
          <div className={s.items}>
            {PARTNERS_ITEMS.map((item) => {
              return <PartnerLogo className={s.item} key={item.id} name={item.name} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(Partners);
