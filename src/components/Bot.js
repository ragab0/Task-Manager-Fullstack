"use client";
import { useState } from 'react';


export default function Bot() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  async function handleSendMessage() {
    try {
      const response = await fetch('/api/tod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();
        setReply(data.reply);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // return (
  //   <div className='w-[500px] h-[500px] fixed bottom-4 right-4 z-30 bg-white rounded-xl'>
  //     <div>
  //       <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} 
  //       className='w-full p-3 rounded-md bg-slate-100'/>
  //       <button onClick={handleSendMessage}>Send</button>
  //     </div>
  //     {reply && <p>{reply}</p>}
  //   </div>
  // );
}