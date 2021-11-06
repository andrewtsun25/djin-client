import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Organization } from 'types/shared';
import { isNotNil } from 'utils/general';

import { FirestoreDocument } from '../../types/api';

type useOrganizationMappingNameResponse = { organizationNameMapping: Nilable<Map<string, string>>; error: Error };

export default function useOrganizationNameMapping(): useOrganizationMappingNameResponse {
    const { data, error } = useCollection<Organization>(Collections.Shared.Organizations);
    const organizationNameMappingEntries: Nilable<[string, string][]> = isNotNil(data)
        ? data.filter(isNotNil).map(({ id, name }: FirestoreDocument<Organization>) => [id, name])
        : undefined;
    const organizationNameMapping: Nilable<Map<string, string>> = isNotNil(organizationNameMappingEntries)
        ? new Map<string, string>(organizationNameMappingEntries)
        : organizationNameMappingEntries;
    return { organizationNameMapping, error: error as Error };
}
