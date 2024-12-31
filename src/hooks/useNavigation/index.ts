import { useParams, usePathname } from 'next/navigation';

const ROBOT_SAILER_PATH = 'sailer';

const buildIdByUrl = (urlPathName: string, id: string) => {
    if (id) return id;
    if (urlPathName.includes(ROBOT_SAILER_PATH) || urlPathName === '/') return ROBOT_SAILER_PATH;
    return '';
};

export const useNavigation = () => {
    const urlPathName = usePathname();
    const { id } = useParams();
    const formattedId = Array.isArray(id) ? id[0] : id;
    const activeItemByUrl = buildIdByUrl(urlPathName, formattedId);

    return { id: activeItemByUrl };
};