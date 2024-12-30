export interface OwnProps {
    isCollapsed: boolean;
    handleCollapse: () => void;
}

export interface RootStyledProps {
    isCollapsed: OwnProps['isCollapsed'];
};

export type Props = OwnProps;