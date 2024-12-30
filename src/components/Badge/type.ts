export type BadgeColor = 'information' | 'positive' | 'negative' | 'warning' | 'neutral';

export interface OwnProps {
    color: BadgeColor;
    variant: 'small' | 'medium' | 'large';
};

export type Props = OwnProps;