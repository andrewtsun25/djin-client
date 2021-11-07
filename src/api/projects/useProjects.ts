import { useCollection } from 'api/firestore';
import useOrganizationNameMapping from 'api/shared/useOrganizationNameMapping';
import Collections from 'const/collections';
import { orderBy } from 'firebase/firestore';
import { Nilable } from 'types/alias';
import { Project, ProjectResponse } from 'types/project';
import { isNotNil } from 'utils/general';

type useProjectsResponse = { projects: Nilable<Project[]>; error: Error };

export default function useProjects(): useProjectsResponse {
    const { data, error: projectsError } = useCollection<ProjectResponse>(Collections.Project.Projects, {
        query: [orderBy('startDate', 'desc')],
        parseDates: ['startDate', 'endDate'],
    });
    const { organizationNameMapping, error: orgNameMappingError } = useOrganizationNameMapping();
    const projects: Nilable<Project[]> =
        isNotNil(data) && isNotNil(organizationNameMapping)
            ? data.map((project) => ({
                  ...project,
                  organizationName: organizationNameMapping.get(project.organization.id),
              }))
            : undefined;
    return { projects, error: (projectsError as Error) || (orgNameMappingError as Error) || undefined };
}
