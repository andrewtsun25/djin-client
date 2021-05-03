import { JsonLogicTree } from 'react-awesome-query-builder';
import { decodeJson, encodeJson, QueryParamConfig } from 'serialize-query-params';
import { Nilable } from 'types/alias';

/** Uses a comma to delimit entries. e.g. ['a', 'b'] => qp?=a,b */
const JsonLogicTreeParam: QueryParamConfig<Nilable<JsonLogicTree>> = {
    encode: (jsonLogicTree: Nilable<JsonLogicTree>): Nilable<string> => encodeJson(jsonLogicTree),
    decode: (jsonLogicTreeStr: (string | null)[] | Nilable<string>): Nilable<JsonLogicTree> =>
        decodeJson(jsonLogicTreeStr) as Nilable<JsonLogicTree>,
};

export default JsonLogicTreeParam;
