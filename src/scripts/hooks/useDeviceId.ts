import { useCallback } from 'react';

import { useCookies } from 'react-cookie';

import { DEVICE_ID_COOKIE } from '@scripts/constants/cookies';

/** Хук получения/проставления в куки deviceId на клиенте */
const useDeviceId = () => {
    const [cookies, setCookie] = useCookies<string>([DEVICE_ID_COOKIE]);

    const getDeviceId = useCallback(() => {
        const deviceId = cookies.device_id || (Math.random() * Date.now()).toString();
        setCookie(DEVICE_ID_COOKIE, deviceId, { secure: true, path: '/' });
        return deviceId;
    }, [cookies.device_id, setCookie]);

    return getDeviceId;
};

export default useDeviceId;
