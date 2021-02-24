import Instruments from 'data/music/instruments';
import { useEffect, useState } from 'react';
import { Instrument } from 'types/music/Instrument';

export default function useInstruments(): Instrument[] {
    const [instruments, setInstruments] = useState<Instrument[]>([]);
    useEffect(() => {
        setInstruments(Instruments);
    }, []);
    return instruments;
}
