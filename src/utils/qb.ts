import { Config, ImmutableTree, JsonTree, Utils as QbUtils } from 'react-awesome-query-builder';

const defaultQueryValue: JsonTree = { id: QbUtils.uuid(), type: 'group' };

/**
 * Creates a default React Awesome Query Builder tree for a given config
 * @param config - The configuration for the query builder
 */
export function createDefaultTreeForConfig(config: Config): ImmutableTree {
    return QbUtils.checkTree(QbUtils.loadTree(defaultQueryValue), config);
}
