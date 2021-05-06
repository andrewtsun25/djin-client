import { useDocument } from '@nandorojo/swr-firestore';
import firebase from 'firebase';
import { isNil } from 'lodash';
import { Organization, OrganizationResponse } from 'types/shared';
import { isNotNil } from 'utils/general';

type DocumentReference = firebase.firestore.DocumentReference;

const OrganizationLoadingState = {
    UNAVAILABLE: 'Organization unavailable',
    LOADING: 'Loading organization...',
    UNKNOWN: 'Unknown Organization',
};

export default function useOrganization(organizationRef: DocumentReference): Organization {
    const { data, error } = useDocument<OrganizationResponse>(organizationRef.path);

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
        isPresent: data?.exists ? !Object.values(OrganizationLoadingState).includes(name) : false,
    };
}
