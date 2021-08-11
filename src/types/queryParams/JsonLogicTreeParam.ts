import { traverse } from '@tsmx/json-traverse';
import { JsonLogicTree } from 'react-awesome-query-builder';
import { decodeJson, encodeJson, QueryParamConfig } from 'serialize-query-params';
import { Nilable } from 'types/alias';
import { isIsoDate } from 'utils/general';

/* Deserializes/Serializes into a tree parsable by JsonLogic */
const JsonLogicTreeParam: QueryParamConfig<Nilable<JsonLogicTree>> = {
    encode: (jsonLogicTree: Nilable<JsonLogicTree>): Nilable<string> => encodeJson(jsonLogicTree),
    decode: (jsonLogicTreeStr: (string | null)[] | Nilable<string>): Nilable<JsonLogicTree> => {
        const decodedJson = decodeJson(jsonLogicTreeStr);
        traverse(decodedJson, {
            processValue: (
                key: string,
                value: any,
                level: number,
                path: string[],
                isObjectRoot: boolean,
                isArrayElement: boolean,
                cbSetValue: (val: any) => void,
            ) => {
                // Replace date strings with their TypeScript equivalents
                if (typeof value === 'string' && isIsoDate(value)) {
                    cbSetValue(new Date(value));
                }
            },
        });
        return decodedJson as Nilable<JsonLogicTree>;
    },
};

export default JsonLogicTreeParam;
