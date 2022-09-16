import React, {useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ContextAuth } from './context/Authentication';
import LogV from './page/Loginv';
import Main from './page/Main';

function App() {
  const authContext = useContext(ContextAuth);
  return (
    <div className="App">
      {!authContext.isLogin ? (
        <LogV/>
      ) : (
        <>
          <header className="App-header">
            <Navbar/>
          </header>
          <main>
            <Main/>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
