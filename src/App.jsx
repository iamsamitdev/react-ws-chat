import { useState, useRef, useEffect } from 'react'
import MainLayout from './components/layouts/MainLayout'

const sendIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 10L1 1L5 10L1 19L19 10Z"
      stroke="black"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
)

function App() {

  // set state for the message
  const [messages, setMessages] = useState([])

  // set is connected to false
  const [isConnectionOpen, setConnectionOpen] = useState(false)

  // set message body to empty
  const [messageBody, setMessageBody] = useState("")

  // read the username from the localStorage
  const username = localStorage.getItem("username")

  // create a ref for the websocket
  const ws = useRef()

  // send message function
  const sendMessage = () => {
    if(messageBody) {
      // send the message to the server
      ws.current.send(
        JSON.stringify({
          sender: username,
          body: messageBody,
        })
      )
      // clear the message body
      setMessageBody("")
    }
  }

  // handle the message change
  useEffect(() => {
    // create a new websocket
    ws.current = new WebSocket("ws://localhost:8080")

    // set the connection to true
    ws.current.onopen = () => {
      console.log("Connection opened")
      setConnectionOpen(true)
    }

    // on message received
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setMessages((prevMessage) => [...prevMessage, data])
    }

    return () => {
      // close the connection
      console.log("Connection closed")
      ws.current.close()
    }
  }, [])

  const scrollTarget = useRef(null)

  // scroll to the bottom of the chat
  useEffect(() => {
    if(scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages.length])

  return (
    <MainLayout>
      <div id="chat-view-container" className="flex flex-col w-1/2">
        {messages.map((message, index) => (
          <div key={index} className={`my-3 rounded py-3 w-full text-white ${
            message.sender === username ? "self-end bg-purple-600" : "bg-blue-600"
          }`}>
            <div className="flex items-center">
              <div className="ml-2">
                <div className="flex flex-row">
                  <div className="text-sm font-medium leading-5 text-gray-900">
                    {message.sender} at
                  </div>
                  <div className="ml-1">
                    <div className="text-sm font-bold leading-5 text-gray-900">
                      {new Date(message.sentAt).toLocaleTimeString(undefined, {
                        timeStyle: "short",
                      })}{" "}
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-sm font-semibold leading-5">
                  {message.body}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollTarget} />
      </div>
      <footer className="w-full">
        <p>
          You are chatting as <span className="font-bold">{username}</span>
        </p>

        <div className="flex flex-row">
          <input
            id="message"
            type="text"
            className="w-full border-2 border-gray-200 focus:outline-none rounded-md p-2 hover:border-purple-400"
            placeholder="Type your message here..."
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            required
          />
          <button
            aria-label="Send"
            onClick={sendMessage}
            className="m-3"
            disabled={!isConnectionOpen}
          >
            {sendIcon}
          </button>
        </div>
      </footer>
    </MainLayout>
  )
}

export default App