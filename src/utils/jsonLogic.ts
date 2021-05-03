import * as jsLogic from 'json-logic-js';
import { isNil } from 'lodash';
import { Nilable } from 'types/alias';

function inIgnoresCase(subStr: Nilable<string>, searchStr: Nilable<string>): boolean {
    if (isNil(subStr) || isNil(searchStr)) {
        return false;
    }
    const searchStrLowerCase = searchStr.toLowerCase();
    const subStrLowerCase = subStr.toLowerCase();
    return searchStrLowerCase.includes(subStrLowerCase);
}

jsLogic.add_operation('inIgnoresCase', inIgnoresCase);

const jsonLogic = jsLogic;

export default jsonLogic;
