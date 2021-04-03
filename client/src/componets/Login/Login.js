import {useContext,useState} from 'react';

import ColorContext from '../../contexts/ColorContext';

function Login() {
  const {setLogin,setUser} = useContext(ColorContext);
  const [username,setUsername] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
    setLogin(true);
  };

  return (
    <form 
      className="login"
      onSubmit={handleSubmit}
    >
      <label>Enter a username!</label>
      <br />
      <br />
      <input 
        id={"username"} 
        onChange={e=>setUsername(e.target.value)}
      />

    </form>
  )
}

export default Login
