import { OwnProps as ChatFooterProps } from '@/layouts/Chat/components/Footer/types';
import { OwnProps as ChatHeaderProps } from '@/layouts/Chat/components/Header/types';
import { OwnProps as ChatMessageProps } from '@/layouts/Chat/components/Messages/types';

export interface OwnProps extends ChatHeaderProps, ChatMessageProps, ChatFooterProps {};

export type Props = OwnProps;