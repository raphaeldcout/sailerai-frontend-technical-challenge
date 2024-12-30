export interface OwnProps {
    src: string;
    minWidth?: string | number;
};

export interface AudioPlayerContainerProps {
    minWidth: OwnProps['minWidth'];
}

export type Props = OwnProps;