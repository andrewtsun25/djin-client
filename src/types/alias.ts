import { Semester } from './education';

export type SemesterLookup = { [k: string]: Semester };

export type Nilable<T> = T | null | undefined;
