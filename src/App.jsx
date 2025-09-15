import MyChatBox from "./MyChatBox"

const App = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground py-10">
      <div className="flex max-w-[850px] h-[89vh] mx-auto gap-[3vw] px-3">
        <MyChatBox />
      </div>
    </div>
  )
}
export default App