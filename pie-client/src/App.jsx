import React, {useState, useEffect} from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Pies from './components/Pies/Pies';

/*
    useState:
      useState uses array destructuring and acceots tw values
        1: A state variable that is based upon the initial value we pass into useState
        2: A function defined as "setState" or set[VariableName]. This is our means of changing the value of our state variable.
*/
function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  // console.log(sessionToken)
  const viewConductor = () => {
    return sessionToken !== undefined ?
      <Pies sessionToken = {sessionToken}/> : <Auth updateLocalStorage= {updateLocalStorage} />
  }

  useEffect(() => {
      if(localStorage.getItem('token')) {
        setSessionToken(localStorage.getItem('token'))
      }
  }, [])

  const updateLocalStorage = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken)
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  return (
    <div className="App">
      <Navbar clearSession = {clearLocalStorage}/>
      {/* <Auth/>
      <Pies/> */}
      {viewConductor()}
    </div>
  );
}

export default App;
