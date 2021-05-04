import { RulesLogic } from 'json-logic-js';
import { isNil } from 'lodash';
import { Config, ImmutableTree, JsonLogicTree, JsonTree, Utils as QbUtils } from 'react-awesome-query-builder';

const defaultQueryValue: JsonTree = { id: QbUtils.uuid(), type: 'group' };

/**
 * Creates a default React Awesome Query Builder tree for a given config
 * @param config - The configuration for the query builder
 */
export function createDefaultTreeForConfig(config: Config): ImmutableTree {
    return QbUtils.checkTree(QbUtils.loadTree(defaultQueryValue), config);
}

export function exportTree(qbTree: ImmutableTree, config: Config): RulesLogic | undefined {
    const { logic, errors } = QbUtils.jsonLogicFormat(qbTree, config);
    if (!isNil(errors) && errors.length > 0) {
        throw new Error(errors.join(', '));
    }
    if (isNil(logic)) {
        return logic;
    }
    return logic as RulesLogic;
}

export function importTree(logicTree: JsonLogicTree, config: Config): ImmutableTree {
    return QbUtils.loadFromJsonLogic(logicTree, config);
}

export function isValidTree(qbTree: ImmutableTree): boolean {
    return QbUtils.isValidTree(qbTree);
}
