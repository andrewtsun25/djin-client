import { useDocument } from '@nandorojo/swr-firestore';
import { isNil } from 'lodash';
import { DocumentReference } from 'types/firebase/firestore';
import { Organization } from 'types/shared';
import { isNotNil } from 'utils/general';

const OrganizationLoadingState = {
    UNAVAILABLE: 'Organization unavailable',
    LOADING: 'Loading organization...',
    UNKNOWN: 'Unknown Organization',
};

export default function useOrganization(organizationRef: DocumentReference): Organization {
    const { data, error } = useDocument<Organization>(organizationRef.path);

    const name: string = isNotNil(error)
        ? OrganizationLoadingState.UNAVAILABLE
        : isNil(data)
        ? OrganizationLoadingState.LOADING
        : data.exists
        ? data.name
        : OrganizationLoadingState.UNKNOWN;
    const logoUrl = data?.exists ? data.logoUrl : undefined;

    return {
        name,
        logoUrl,
    };
}
