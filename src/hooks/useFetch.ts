import { api } from '@/services';
import useSWR from 'swr';

function useFetch(url: string) {
    const { data, error } = useSWR(url, async url => {
        const response = await api.get(url);
        const data = response.data;
        return data;
    });

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}

export default useFetch;