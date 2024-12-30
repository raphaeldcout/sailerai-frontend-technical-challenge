import { Store } from '@tanstack/store';

import { TextInputStoreProps } from './types';

export const textInputStore = new Store<TextInputStoreProps>({
  value: '',
});
