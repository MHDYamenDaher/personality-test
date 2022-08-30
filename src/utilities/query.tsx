import { QueryClient } from 'react-query';

// This is used when we need to use queryClient outside React components

let queryClient: any = null;
function getQuery() {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          notifyOnChangeProps: 'tracked',
          retry: false,
          staleTime: Infinity,
        },
      },
    });
  }
  return queryClient;
}

export default getQuery;