import { RulesLogic } from 'json-logic-js';

import jsonLogic from './jsonLogic';

export function filterCollectionWithLogicTree<T>(collection: T[], logicTree: RulesLogic): T[] {
    return collection.filter((item) => jsonLogic.apply(logicTree, item));
}
