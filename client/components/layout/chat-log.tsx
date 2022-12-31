import * as React from 'react';
import { ChatMessage, Data } from './ChatMessage';


interface ChatLogProps {
  chatData: Data[]
}



export function ChatLog(props: ChatLogProps) {
  return (
    <>
      {props.chatData.map((item) => <ChatMessage key={item.message} item={item} />)}
    </>
  );
}
