import Display from "./components/Display"
import Login from "./components/Login"
import { DataProvider } from "./contextApi/Data"

function App() {


  return (
    <DataProvider>
      <div className="h-screen w-full flex">
      <div className=" w-[50%]">
          <Login />
        </div>
        <div className="bg-blue-400 w-[50%]">
          <Display />
        </div>

      </div>
    </DataProvider>
  )
}

export default App
