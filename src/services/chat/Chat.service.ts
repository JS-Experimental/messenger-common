import { useMutation, useQuery, useQueryClient } from 'react-query';
import { HTTP } from '../../tools/http/HttpClient';

export function ChatService() {
  const queryClient = useQueryClient();

  const getMessages = async () => {
    try {
      const { data } = await HTTP.client().get('/messages');

      return data;
    } catch (e) {
      throw new Error(e);
    }
  };

  const sendMessage = (messageText: string) => HTTP.client().post('/message', { messageText });

  const useMessages = (threadId: string) => useQuery(['thread', threadId], () => getMessages());

  const useSendMessage = () => useMutation(sendMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries('thread');
    }
  });

  return {
    useMessages,
    useSendMessage
  };
}
