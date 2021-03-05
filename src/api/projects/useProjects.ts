import { Document, useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Project } from 'types/project';
import { isNotNil } from 'utils/general';

type useProjectsResponse = { projects: Nilable<Document<Project>[]>; error: Error };

export default function useProjects(): useProjectsResponse {
    const { data, error } = useCollection<Project>(Collections.Project.Projects, {
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'desc'],
    });
    const projects = isNotNil(data) ? data.filter((project) => project.exists) : data;
    return { projects, error: error as Error };
}
