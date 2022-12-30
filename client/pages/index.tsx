import Head from 'next/head'
import { IoIosAdd } from "react-icons/io"

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatgpt-Enhanced</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main-container'>
        <aside className='side-menu'>
          <div className='newChat-btn'>
            <IoIosAdd size={20} /> <h3>New Chat</h3>
          </div>
        </aside>
        <section className='chatbox'>
          <div className=' chat-input-container'>
            <textarea rows={1} />
          </div>
        </section>
      </main>
    </>
  )
}
