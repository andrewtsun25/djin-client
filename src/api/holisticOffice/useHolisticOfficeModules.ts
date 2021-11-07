import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { HolisticOfficeModule } from 'types/holisticOffice';

type useHolisticOfficeModulesResponse = {
    modules: Nilable<HolisticOfficeModule[]>;
    error: Nilable<Error>;
};

export default function useHolisticOfficeModules(): useHolisticOfficeModulesResponse {
    const { data: modules, error } = useCollection<HolisticOfficeModule>(Collections.HolisticOffice.Modules);
    return { modules, error };
}
