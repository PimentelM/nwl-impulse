interface ButtonProps {
  text: string;
}


function Button({text} : ButtonProps){
  return <button className="bg-violet-500 p-2 rounded hover:bg-blue-300">{text}</button>

}


function App() {
  return (
      <div>
        <Button text="Hello" />
        <Button text="World"/>
      </div>
  )
}

export default App
