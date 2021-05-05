import { RulesLogic } from 'json-logic-js';
import { isNil } from 'lodash';
import { Config, ImmutableTree, JsonLogicTree, JsonTree, Utils as QbUtils } from 'react-awesome-query-builder';

const defaultQueryValue: JsonTree = { id: QbUtils.uuid(), type: 'group' };

/**
 * Creates a default query builder tree for a given config.
 *
 * @param config - The configuration for the query builder
 */
export function createDefaultTreeForConfig(config: Config): ImmutableTree {
    return QbUtils.checkTree(QbUtils.loadTree(defaultQueryValue), config);
}

/**
 * Exports the internal state tree of the query builder into a JsonLogic tree that can be applied by JsonLogic to
 * filter a collection.
 *
 * @param qbTree - The internal state of the query builder
 * @param config - The configuration of the query builder
 */
export function exportTree(qbTree: ImmutableTree, config: Config): RulesLogic | undefined {
    const { logic, errors } = QbUtils.jsonLogicFormat(qbTree, config);
    if (!isNil(errors) && errors.length > 0) {
        throw new Error(errors.join(', '));
    }
    return isNil(logic) ? undefined : (logic as RulesLogic);
}

/**
 * Imports a JsonLogic tree that can be applied to filter a collection to sett the internal state tree of the query
 * builder.
 *
 * @param logicTree - The JsonLogic tree that can be applied by JsonLogic to filter a collection
 * @param config - The configuration of the query builder
 */
export function importTree(logicTree: JsonLogicTree, config: Config): ImmutableTree {
    return QbUtils.loadFromJsonLogic(logicTree, config);
}

/**
 * Checks too see if the internal state of the query builder is valid to perform any subsequent operations.
 *
 * @param qbTree - The internal state of the query builder
 */
export function isValidTree(qbTree: ImmutableTree): boolean {
    return QbUtils.isValidTree(qbTree);
}
