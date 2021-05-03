import { useQuery } from 'react-query';
import { Http } from '@metall/common/tools/http/HttpClient';

const getMessages = async () => {
  try {
    const { data } = await Http.get('/messages');

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export default function useMessages(threadId: string) {
  return useQuery(['thread', threadId], () => getMessages());
}
