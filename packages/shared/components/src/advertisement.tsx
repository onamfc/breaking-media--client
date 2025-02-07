'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AdvertisementProps {
    adType: 'square' | 'horizontal' | 'vertical';
    adId: number;
}

const Advertisement: React.FC<AdvertisementProps> = ({ adType, adId }) => {
    const [ad, setAd] = useState<any | null>(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const response = await axios.get(`http://192.168.0.17:8000/api/ads/${adId}`, {
                    headers: {
                        'X-Origin-Domain': 'http://localhost:3000',
                    },
                });

                if (response.data) {
                    console.log('Ad data fetched:', response.data);
                    setAd(response.data);
                } else {
                    console.error('Ad data is empty or invalid');
                }
            } catch (error) {
                console.error('Error fetching ad:', error);
            }
        };

        fetchAd();
    }, [adId]);

    const trackAdClick = async () => {
        try {
            await axios.post(`http://192.168.0.17:8000/api/ads/click`, {
                ad_id: adId,
                ad_slot: ad?.slot || 'default',
            });
            console.log('Ad click tracked successfully.');
        } catch (error) {
            console.error('Error tracking ad click:', error);
        }
    };

    const handleClick = () => {
        if (ad && ad.click_url) {
            trackAdClick();
            window.open(ad.click_url, '_blank');
        }
    };

    if (!ad) {
        return (
            <div style={{ backgroundColor: '#f0f0f0' }}>
                <p style={{ textAlign: 'center', padding: '10px', color: '#888' }}>
                    Loading ad...
                </p>
            </div>
        );
    }

    const imageUrl = ad.image_url.startsWith('http')
        ? ad.image_url
        : `${process.env.NEXT_PUBLIC_API_URL}/storage/${ad.image_url}`;

    return (
        <div
            style={{
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            <img
                src={imageUrl}
                alt={ad.name || 'Advertisement'}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    backgroundColor: '#fff',
                }}
                onError={() => {
                    console.error('Image failed to load:', imageUrl);
                    setImageError(true);
                }}
            />
            {imageError && (
                <div style={{ width: '100%', height: '100%', backgroundColor: '#f0f0f0' }}>
                    <p style={{ textAlign: 'center', padding: '10px', color: '#888' }}>
                        Failed to load ad image.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Advertisement;
