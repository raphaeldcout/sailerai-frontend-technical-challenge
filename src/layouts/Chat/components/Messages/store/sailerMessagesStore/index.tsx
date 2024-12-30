import { Store } from '@tanstack/store';

import { SailerMessagesStoreProps } from './types';

export const sailerMessagesStore = new Store<SailerMessagesStoreProps>({
  sailerMessages: [],
});
