import { type ISegment } from '@api/clm/types';
import { type IPromoBanner } from '@api/content/types';

import { getImagePath } from '@scripts/helpers/common';

export const serializeBanners = ({
    banners,
    bannerType,
    segments,
    width = 1440,
    mobileWidth = 754,
    bannerClass,
}: {
    banners: IPromoBanner[] | null;
    bannerType: string;
    segments: ISegment[] | null;
    width?: number;
    mobileWidth?: number;
    bannerClass?: string;
}) =>
    banners && banners.length > 0
        ? banners
              .filter(banner => {
                  if (!banner) return false;
                  if (!banner.segments?.length) return true;
                  if (segments && segments?.length > 0) {
                      return banner.segments.some(segment => segments?.some(s => s.code === segment.code));
                  }
                  return false;
              })
              .map(({ desktopImageUrl, mobileImageUrl, url, isWide = false, ...bannerProps }) => ({
                  ...bannerProps,
                  img: {
                      desktop: getImagePath(desktopImageUrl, { w: width }),
                      mobile: mobileImageUrl ? getImagePath(mobileImageUrl, { w: mobileWidth }) : null,
                  },
                  link: url,
                  isWide,
                  bannerType,
                  bannerClass,
              }))
        : null;
