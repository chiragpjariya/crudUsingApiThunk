import Display from "./component/Display"
import Login from "./component/Login"


function App() {


  return (
    <>
      <div className="h-screen w-full bg-[#FBEAEB] flex ">
        {/* section one */}
        <div className="w-1/2 h-full bg-[#1E2761] flex items-center justify-center">
          <Login />
        </div>

        {/* section two */}
        <div className="w-1/2 h-full bg-[#F9E795]">
          <Display />
        </div>

      </div>
    </>
  )
}

export default App
