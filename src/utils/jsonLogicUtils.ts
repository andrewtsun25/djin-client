import { RulesLogic } from 'json-logic-js';

import jsonLogic from './jsonLogic';

export function filterCollectionWithLogicTree<T>(collection: T[], logicTree: RulesLogic): T[] {
    console.log('Logic tree: ', logicTree);
    return collection.filter((item) => jsonLogic.apply(logicTree, item));
}
