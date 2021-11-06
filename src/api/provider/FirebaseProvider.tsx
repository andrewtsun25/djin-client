import { FirebaseContext } from 'api/context';
import { config } from 'config/firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { isNil } from 'lodash';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { FirebaseServices } from 'types/api';

const FirebaseProvider: React.FC = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
    const [services, setServices] = useState<FirebaseServices>({
        db: undefined,
    });
    useEffect(() => {
        if (isNil(services)) {
            const app = initializeApp(config);
            const db = getFirestore(app);
            setServices({
                db: db,
            });
        }
    }, [services]);
    return <FirebaseContext.Provider value={services}>{children}</FirebaseContext.Provider>;
};

export default FirebaseProvider;
