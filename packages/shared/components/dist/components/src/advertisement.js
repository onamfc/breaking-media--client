'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const Advertisement = ({ adType, adId }) => {
    const [ad, setAd] = (0, react_1.useState)(null);
    const [imageError, setImageError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const fetchAd = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`https://api.breakingmedia.ai/ads/${adId}`, {
                    headers: {
                        'X-Origin-Domain': 'https://breakingmedia.ai',
                    },
                });
                if (response.data) {
                    console.log('Ad data fetched:', response.data);
                    setAd(response.data);
                }
                else {
                    console.error('Ad data is empty or invalid');
                }
            }
            catch (error) {
                console.error('Error fetching ad:', error);
            }
        });
        fetchAd();
    }, [adId]);
    const trackAdClick = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.post(`https://breakingmedia.ai/ads/click`, {
                ad_id: adId,
                ad_slot: (ad === null || ad === void 0 ? void 0 : ad.slot) || 'default',
            });
        }
        catch (error) {
            console.error('Error tracking ad click:', error);
        }
    });
    const handleClick = () => {
        if (ad && ad.click_url) {
            trackAdClick();
            window.open(ad.click_url, '_blank');
        }
    };
    if (!ad) {
        return (react_1.default.createElement("div", { style: { backgroundColor: '#f0f0f0' } },
            react_1.default.createElement("p", { style: { textAlign: 'center', padding: '10px', color: '#888' } }, "Loading ad...")));
    }
    const imageUrl = ad.image_url.startsWith('http')
        ? ad.image_url
        : `https://breakingmedia.ai/storage/${ad.image_url}`;
    return (react_1.default.createElement("div", { style: {
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
        }, onClick: handleClick },
        react_1.default.createElement("img", { src: imageUrl, alt: ad.name || 'Advertisement', style: {
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                backgroundColor: '#fff',
            }, onError: () => {
                console.error('Image failed to load:', imageUrl);
                setImageError(true);
            } }),
        imageError && (react_1.default.createElement("div", { style: { width: '100%', height: '100%', backgroundColor: '#f0f0f0' } },
            react_1.default.createElement("p", { style: { textAlign: 'center', padding: '10px', color: '#888' } }, "Failed to load ad image.")))));
};
exports.default = Advertisement;
