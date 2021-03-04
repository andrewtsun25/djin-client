import { soundCloudUserName, storageBucket } from './config';

const Urls: Record<string, string> = {
    AssetRoot: `https://storage.googleapis.com/${storageBucket}`,
    SoundCloudRoot: `https://soundcloud.com/${soundCloudUserName}`,
};

export { Urls };
