import { useQuery } from 'react-query';
import { Http } from '../../tools/http/HttpClient';

const getMessages = async () => {
  try {
    const { data } = await Http.get('/messages');

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const useMessages = (threadId: string) => useQuery(['thread', threadId], () => getMessages());
