
import * as React from 'react';

interface Props {
  item: Data
}

export type Data = {
  user: string,
  message: string,
}

export function ChatMessage(props: Props) {
  return (
    <div className={`${props.item.user === "person" ? "" : "bg-[#444654]"}`}>
      <div className='max-w-[640px] m-auto flex gap-5 py-2 items-center'>
        <div className={`rounded-[50%] w-[40px] h-[40px] ${props.item.user === "person" ? "bg-white" : "bg-[#0da37f]"}`}></div>
        <div className='w-full'>
          <h2>{props.item.message}</h2>
        </div>
      </div>
    </div>
  );
}
