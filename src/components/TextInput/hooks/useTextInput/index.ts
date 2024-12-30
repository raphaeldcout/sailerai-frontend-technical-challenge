import { textInputStore } from '@/components/TextInput/store';
import { useStore } from '@tanstack/react-store';

export const useTextInput = () => {
    const value = useStore(textInputStore, (state) => state.value);

    const handleInputChange = (value: string) => {
        textInputStore.setState(() => ({ value: value }));
    };

    return { value, handleInputChange };
};