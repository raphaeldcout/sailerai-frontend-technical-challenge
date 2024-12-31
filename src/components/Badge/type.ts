export const BadgeColors = ['information', 'positive', 'negative', 'warning', 'neutral'] as const;

export type BadgeColor = (typeof BadgeColors)[number];

export const VariantSizes = ['small', 'medium', 'large'] as const;

export type VariantSize = (typeof VariantSizes)[number];

export interface OwnProps {
    color: BadgeColor;
    variant: VariantSize;
};

export type Props = OwnProps;