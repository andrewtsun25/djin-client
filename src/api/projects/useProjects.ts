import { useCollection } from '@nandorojo/swr-firestore';
import useOrganizationNameMapping from 'api/shared/useOrganizationNameMapping';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Project, ProjectResponse } from 'types/project';
import { isNotNil } from 'utils/general';

type useProjectsResponse = { projects: Nilable<Project[]>; error: Error };

export default function useProjects(): useProjectsResponse {
    const { data, error: projectsError } = useCollection<ProjectResponse>(Collections.Project.Projects, {
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'desc'],
    });
    const { organizationNameMapping, error: orgNameMappingError } = useOrganizationNameMapping();
    const projects: Nilable<Project[]> =
        isNotNil(data) && isNotNil(organizationNameMapping)
            ? data
                  .filter((project) => project.exists)
                  .map((project) => ({
                      ...project,
                      organizationName: organizationNameMapping.get(project.organization.id),
                  }))
            : undefined;
    return { projects, error: (projectsError as Error) || (orgNameMappingError as Error) || undefined };
}
