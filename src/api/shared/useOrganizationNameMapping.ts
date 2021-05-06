import { Document, useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Organization } from 'types/shared';
import { isNotNil } from 'utils/general';

type useOrganizationMappingNameResponse = { organizationNameMapping: Nilable<Map<string, string>>; error: Error };

export default function useOrganizationNameMapping(): useOrganizationMappingNameResponse {
    const { data, error } = useCollection<Organization>(Collections.Shared.Organizations);
    const organizationNameMappingEntries: Nilable<[string, string][]> = isNotNil(data)
        ? data
              .filter((organizationDoc: Document<Organization>) => organizationDoc.exists)
              .map(({ id, name }: Document<Organization>) => [id, name])
        : data;
    const organizationNameMapping: Nilable<Map<string, string>> = isNotNil(organizationNameMappingEntries)
        ? new Map<string, string>(organizationNameMappingEntries)
        : organizationNameMappingEntries;
    return { organizationNameMapping, error: error as Error };
}
