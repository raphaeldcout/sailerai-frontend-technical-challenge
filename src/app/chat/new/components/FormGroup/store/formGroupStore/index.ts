import { Store } from '@tanstack/store';

import { FormGroupStoreProps } from './types';

export const formGroupStore = new Store<FormGroupStoreProps>({
    firstParticipantInputValue: '',
    secondParticipantInputValue: 'owner',
});
