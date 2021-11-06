import React from 'react';
import { FirebaseServices } from 'types/api';

export const FirebaseContext: React.Context<FirebaseServices> = React.createContext<FirebaseServices>({
    db: undefined,
});
