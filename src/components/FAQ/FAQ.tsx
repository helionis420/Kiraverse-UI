import { memo } from 'react';
import clsx from 'clsx';
import type { FAQProps } from './types';
import { ID_FAQ } from '@/constants';
import { ACCORDION_ITEMS } from './constants';
import Container from '@/components/Container';
import Caption from '@/ui/Caption';
import Typography from '@/ui/Typography';
import Accordion from '@/ui/Accordion';
import Button from '@/ui/Button';
import s from './FAQ.module.css';

const FAQ: React.FC<FAQProps> = ({ className, children, title }) => {
  return (
    <section id={ID_FAQ} className={clsx(s.wrap, className)}>
      <Container className={s.container}>
        <Caption className={s.caption} title="FAQ" />
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
            <Accordion items={ACCORDION_ITEMS} />
          </div>
          <div className={s.action}>
            <Button
              href="https://discord.gg/Kiraverse"
              className={s.btn}
              size="md"
              variant="secondary"
            >
              Get guided support
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(FAQ);
