import { CodingProjects } from 'data/projects';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { Project } from 'types/project';

export default function useProjects(): Project[] {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        setProjects(orderBy(CodingProjects, 'startDate', 'desc'));
    }, []);
    return projects;
}
