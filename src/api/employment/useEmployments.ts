import { useCollection } from 'api/firestore';
import useOrganizationNameMapping from 'api/shared/useOrganizationNameMapping';
import Collections from 'const/collections';
import { orderBy } from 'firebase/firestore';
import { Nilable } from 'types/alias';
import { Employment, EmploymentResponse } from 'types/employment';
import { isNotNil } from 'utils/general';

type useEmploymentsResponse = { employments: Nilable<Employment[]>; error: Nilable<Error> };

export default function useEmployments(): useEmploymentsResponse {
    const { data, error: employmentError } = useCollection<EmploymentResponse>(Collections.Employment.Companies, {
        query: [orderBy('startDate', 'desc')],
        parseDates: ['startDate', 'endDate'],
    });
    const { organizationNameMapping, error: orgNameMappingError } = useOrganizationNameMapping();
    const employments: Nilable<Employment[]> =
        isNotNil(data) && isNotNil(organizationNameMapping)
            ? data.map((employment) => ({
                  ...employment,
                  organizationName: organizationNameMapping.get(employment.organization.id),
              }))
            : undefined;
    return { employments, error: (employmentError as Error) ?? (orgNameMappingError as Error) ?? undefined };
}
