import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { HolisticOfficeModule } from 'types/holisticOffice';
import { isNotNil } from 'utils/general';

type useHolisticOfficeModulesResponse = {
    modules: Nilable<HolisticOfficeModule[]>;
    error: Error;
};

export default function useHolisticOfficeModules(): useHolisticOfficeModulesResponse {
    const { data, error } = useCollection<HolisticOfficeModule>(Collections.HolisticOffice.Modules);
    const modules = isNotNil(data) ? data.filter((module) => module.exists) : data;
    return { modules, error: error as Error };
}
