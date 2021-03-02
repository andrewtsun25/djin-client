import { Map } from 'immutable';
import { EduType, EduTypeInfo } from 'types/education';

import { Urls } from './urls';

const EduTypeInfos: Map<EduType, EduTypeInfo> = Map([
    [
        EduType.CODING,
        {
            name: 'Coding',
            type: EduType.CODING,
            backgroundUrl: `${Urls.AssetRoot}/education/bg/usc_bg.jpg`,
        },
    ],
    [
        EduType.MUSIC,
        {
            name: 'Music',
            type: EduType.MUSIC,
            backgroundUrl: `${Urls.AssetRoot}/education/bg/pbla_bg.jpg`,
        },
    ],
] as [EduType, EduTypeInfo][]);

export default EduTypeInfos;
