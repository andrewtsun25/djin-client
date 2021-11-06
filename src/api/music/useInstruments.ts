import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { useMemo } from 'react';
import { Nilable } from 'types/alias';
import { InstrumentType } from 'types/music';
import { Instrument } from 'types/music/Instrument';
import { isNotNil } from 'utils/general';

type useInstrumentsResponse = {
    instruments: Nilable<Map<InstrumentType, Instrument>>;
    error: Nilable<Error>;
};

export default function useInstruments(): useInstrumentsResponse {
    const { data, error } = useCollection<Instrument>(Collections.Music.Instruments);
    const instruments: Nilable<Map<InstrumentType, Instrument>> = useMemo(
        () =>
            isNotNil(data)
                ? new Map<InstrumentType, Instrument>(
                      data.filter(isNotNil).map((instrument) => [instrument.type, instrument]),
                  )
                : data,
        [data],
    );
    return { instruments, error: error as Error };
}
