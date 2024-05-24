import { memo } from 'react';
import clsx from 'clsx';
import type { CTAProps } from './types';
import Container from '@/components/Container';
import Banner from '@/components/Banner';
import Typography from '@/ui/Typography';
import Button from '@/ui/Button';
import s from './CTA.module.css';
import { URL_LINK_DOWNLOAD } from '@/constants';

const CTA: React.FC<CTAProps> = ({ className, title }) => {
  return (
    <section className={clsx(s.wrap, className)}>
      <Container>
        <div className={s.holder}>
          <Banner className={s.banner} innerBlockSize="md" withInnerBlock withInnerImage>
            <div className={s.head}>
              <Typography className={s.title} component="h3" variant="headline-h3">
                {title}
              </Typography>
              <div className={s.action}>
                <Button className={s.btn} href={URL_LINK_DOWNLOAD} size="md" variant="primary">
                  Enter
                </Button>
              </div>
            </div>
          </Banner>
        </div>
      </Container>
    </section>
  );
};

export default memo(CTA);
