import Studios from 'data/martialArts/studios';
import { useEffect, useState } from 'react';
import { MartialArtsStudio } from 'types/martialArts';

export default function useMartialArtsStudios(): MartialArtsStudio[] {
    const [studios, setStudios] = useState<MartialArtsStudio[]>([]);
    useEffect(() => {
        setStudios(Studios);
    }, []);
    return studios;
}
