import type { FCProps } from '@/types';
import type { PartnerName } from '@/ui/PartnerLogo';

export type PartnersProps = FCProps<{
  /**
      The title of component.
    */
  title: string;
}>;

export type PartnerLogoArrayItem = {
  id: string;
  name: PartnerName;
};
