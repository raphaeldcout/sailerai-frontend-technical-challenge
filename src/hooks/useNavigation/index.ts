import { useParams } from 'next/navigation';

export const useNavigation = () => {
    const { id } = useParams();
    const formattedId = Array.isArray(id) ? id[0] : id;
    const activeItemByUrl = formattedId ? formattedId : 'sailer';

    return { id: activeItemByUrl };
};