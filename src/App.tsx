import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('user') || '{"logged": false}')
}

function App() {
  const [user, userDispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <AuthContext.Provider value={{user, userDispatch}}>
      <div>
        <h1>Hello App</h1>      
      </div>
    </AuthContext.Provider>
  );
}

export default App;
