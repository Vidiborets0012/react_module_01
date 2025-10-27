//Оператор &&

// interface MailboxProps {
//   username: string;
//   messages: string[];
// }

// export default function Mailbox({ username, messages }: MailboxProps) {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
//     </>
//   );
// }

//Тернарний оператор
// interface MailboxProps {
//   username: string;
//   unreadMessages: string[];
// }

// export default function Mailbox({ username, unreadMessages }: MailboxProps) {
//   return (
//     <>
//       <p>Hello {username}</p>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages`
//           : 'No unread messages'}
//       </p>
//     </>
//   );
// }

//Якщо результатом має бути не просто рядок, а різна структура JSX, пишемо так:

interface MailboxProps {
  username: string;
  messages: string[];
}

export default function Mailbox({ username, messages }: MailboxProps) {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <>
          <p>You have {messages.length} unread messages</p>
          <p>Check your inbox to read them!</p>
          <button>Open inbox</button>
        </>
      ) : (
        <p>No unread messages</p>
      )}
    </>
  );
}
