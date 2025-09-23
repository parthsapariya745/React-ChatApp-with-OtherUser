import { useState } from "react"

const MyChatBox = () => {
  let [message, setMessage] = useState("")
  let [message2, setMessage2] = useState("")
  let [messages, setMessages] = useState(JSON.parse(localStorage.getItem("chat")) || []);

  let handleMsg1 = (e) => {
    e.preventDefault()
    if (message) {
      setMessages([...messages, { text: message, sender: "my" }]);
      setMessage("")
      localStorage.setItem("chat", JSON.stringify(messages))
    }
    else {
      alert("Please type any msg")
    }
  }
  let handleMsg2 = (e) => {
    e.preventDefault()
    if (message2) {
      setMessages([...messages, { text: message2, sender: "other" }]);
      setMessage2("")
    }
    else {
      alert("Please type any msg")
    }
  }
  localStorage.setItem("chat", JSON.stringify(messages))

  return (
    <>
      <div className="flex-1 flex flex-col bg-gray-900 rounded-4xl">
        <div className="bg-gray-800 border-b border-gray-700 p-4 text-center rounded-t-4xl">
          <h1 className="text-xl font-semibold text-white">My Messages</h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="max-w-full">
            {messages.map((e, i) => (
              <div key={i} className={`flex ${e.sender === "my" ? "justify-end" : "justify-start"}`}>
                <div className={`${e.sender === "my" ? "bg-[#9810FA]" : "bg-[#1E2939]"} rounded-lg rounded-bl-sm px-3 py-1.5 mb-2 shadow-sm border border-gray-700`}>
                  <p className="text-white leading-relaxed flex justify-between gap-3">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 border-t border-gray-700 p-4 rounded-b-4xl">
          <form className="flex gap-2" action="">
            <div className="flex-1 bg-gray-700 rounded-lg border border-gray-600 px-4 py-2">
              <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Type a message..." className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm" />
            </div>
            <button onClick={handleMsg1} className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">Send</button>
          </form>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-gray-900 rounded-4xl">
        <div className="bg-gray-800 border-b border-gray-700 p-4 text-center rounded-t-4xl">
          <h1 className="text-xl font-semibold text-white">Other User</h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="max-w-full">
            {messages.map((e, i) => (
              <div key={i} className={`flex ${e.sender === "other" ? "justify-end" : "justify-start"}`}>
                <div className={`${e.sender === "other" ? "bg-[#9810FA]" : "bg-[#1E2939]"} rounded-lg rounded-bl-sm px-3 py-1.5 mb-2 shadow-sm border border-gray-700`}>
                  <p className="text-white leading-relaxed flex justify-between gap-3">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 border-t border-gray-700 p-4 rounded-b-4xl">
          <form action="" className="flex gap-2">
            <div className="flex-1 bg-gray-700 rounded-lg border border-gray-600 px-4 py-2">
              <input type="text" onChange={(e) => setMessage2(e.target.value)} value={message2} placeholder="Type a message..." className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm" />
            </div>
            <button onClick={handleMsg2} className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default MyChatBox