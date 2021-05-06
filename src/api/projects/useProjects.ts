import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Project, ProjectResponse } from 'types/project';
import { isNotNil } from 'utils/general';

import useOrganizationNameMapping from '../shared/useOrganizationNameMapping';

type useProjectsResponse = { projects: Nilable<Project[]>; error: Error };

export default function useProjects(): useProjectsResponse {
    const { data, error: projectsError } = useCollection<ProjectResponse>(Collections.Project.Projects, {
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'desc'],
    });
    const { organizationNameMapping, error: orgNameMappingError } = useOrganizationNameMapping();
    const projectsResponses = isNotNil(data) ? data.filter((project) => project.exists) : data;
    const projects: Nilable<Project[]> =
        isNotNil(projectsResponses) && isNotNil(organizationNameMapping)
            ? projectsResponses.map((projectResponse) => ({
                  ...projectResponse,
                  organizationName: organizationNameMapping.get(projectResponse.organization.id),
              }))
            : undefined;
    return { projects, error: (projectsError as Error) || (orgNameMappingError as Error) };
}
