import React from 'react';
interface AdvertisementProps {
    adType: 'square' | 'horizontal' | 'vertical';
    adId: number;
}
declare const Advertisement: React.FC<AdvertisementProps>;
export default Advertisement;
