import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Http } from '../../tools/http/HttpClient';

export function ChatService() {
  const queryClient = useQueryClient();

  const getMessages = async () => {
    try {
      const { data } = await Http.get('/messages');

      return data;
    } catch (e) {
      throw new Error(e);
    }
  };

  const sendMessage = (messageText: string) => Http.post('/message', { messageText });

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
