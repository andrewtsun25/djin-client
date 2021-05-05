import { JsonLogicTree } from 'react-awesome-query-builder';
import { decodeJson, encodeJson, QueryParamConfig } from 'serialize-query-params';
import { Nilable } from 'types/alias';

/* Deserializes/Serializes into a tree parsable by JsonLogic */
const JsonLogicTreeParam: QueryParamConfig<Nilable<JsonLogicTree>> = {
    encode: (jsonLogicTree: Nilable<JsonLogicTree>): Nilable<string> => encodeJson(jsonLogicTree),
    decode: (jsonLogicTreeStr: (string | null)[] | Nilable<string>): Nilable<JsonLogicTree> =>
        decodeJson(jsonLogicTreeStr) as Nilable<JsonLogicTree>,
};

export default JsonLogicTreeParam;
