import SedanIcon from './images/icon-sedans.svg';
import SUVIcon from './images/icon-suvs.svg';
import LuxuryIcon from './images/icon-luxury.svg';

export type ContentType = {
    title: string;
    icon: string;
    body: string;
    bgColor: string;
};

export const mockContent : ContentType[] = [
    {
        title: 'Sedans',
        icon: SedanIcon,
        body: 'Sedans Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
        bgColor: 'hsl(31, 77%, 52%)'
    },
    {
        title: 'SUVs',
        icon: SUVIcon,
        body: 'SUVs Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        bgColor: 'hsl(184, 100%, 22%)'
    },
    {
        title: 'Luxury',
        icon: LuxuryIcon,
        body: 'Luxury Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        bgColor: 'hsl(179, 100%, 13%)'
    }
];