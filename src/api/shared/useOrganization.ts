import { useDocument } from '@nandorojo/swr-firestore';
import firebase from 'firebase';
import { isNil } from 'lodash';
import { Organization } from 'types/shared';
import { isNotNil } from 'utils/general';

type DocumentReference = firebase.firestore.DocumentReference;

export default function useOrganization(organizationRef: DocumentReference): Organization {
    const { data, error } = useDocument<Organization>(organizationRef.path);

    const name: string = isNotNil(error)
        ? 'Organization unavailable'
        : isNil(data)
        ? 'Loading organization...'
        : data.exists
        ? data.name
        : 'Unknown Organization';
    const logoUrl = data?.exists ? data.logoUrl : undefined;

    return {
        name,
        logoUrl,
    };
}
