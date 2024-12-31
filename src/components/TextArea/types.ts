import { TextareaHTMLAttributes } from 'react';

export interface OwnProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value: string;
    handleInputChange: (value: string) => void
}

export type Props = OwnProps;