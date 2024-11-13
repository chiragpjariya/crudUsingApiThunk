import Lists from "./component/Lists";
import Login from "./component/Login";
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <div className="h-screen w-full flex">
        <div className="h-full w-full flex items-center justify-center">
          <Login />
        </div>
        <div className="h-full w-full bg-gray-900 flex items-center justify-center">
          <Lists />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
