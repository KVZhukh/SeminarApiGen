import { type IGeocodeSuggest, type INewAddress } from '@api/address/types';

export const convertGeocodeToApi = (suggestion: IGeocodeSuggest): INewAddress => {
    const { address } = suggestion;

    return {
        address_string: address.address_string,
        geo_lat: address.geo_lat,
        geo_lon: address.geo_lon,
        region_id: Number(suggestion.region_id),
        ...(suggestion?.uri && { uri: suggestion.uri }),
    };
};
