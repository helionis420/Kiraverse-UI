import type { FCProps } from '@/types';

export type VideoPreviewProps = FCProps<{
  /**
      The video id of the youtube video.
    */
  videoId?: string;
  /**
        Redirect link to full video
    */
  urlToVideo?: string;
  /**
        The URL of the background video for the inner component to display.
    */
  videoSrc?: string;
  /**
      The URL of the background video mobile for the inner component to display.
    */
  videoMobSrc?: string;
}>;
