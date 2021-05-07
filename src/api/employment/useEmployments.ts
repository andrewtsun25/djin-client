import { useCollection } from '@nandorojo/swr-firestore';
import useOrganizationNameMapping from 'api/shared/useOrganizationNameMapping';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Employment, EmploymentResponse } from 'types/employment';
import { isNotNil } from 'utils/general';

type useEmploymentsResponse = { employments: Nilable<Employment[]>; error: Error };

export default function useEmployments(): useEmploymentsResponse {
    const { data, error: employmentError } = useCollection<EmploymentResponse>(Collections.Employment.Companies, {
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'desc'],
    });
    const { organizationNameMapping, error: orgNameMappingError } = useOrganizationNameMapping();
    const employments: Nilable<Employment[]> =
        isNotNil(data) && isNotNil(organizationNameMapping)
            ? data
                  .filter((employment) => employment.exists)
                  .map((employment) => ({
                      ...employment,
                      organizationName: organizationNameMapping.get(employment.organization.id),
                  }))
            : undefined;
    return { employments, error: (employmentError as Error) || (orgNameMappingError as Error) || undefined };
}
