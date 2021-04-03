import {useContext,useEffect} from 'react';

import Name from '../Name/Name';
import GameName from '../Name/GameName';
import ColorName from '../Name/ColorName';
import PlayerName from '../Name/PlayerName';

import Login from '../Login/Login';
import ColorInput from './ColorInput';
import ColorContext from '../../contexts/ColorContext';

import {
  initSocket,
  disconnectSocket,
  subscribeColorStream
} from '../../services/websocket'


function ColorPicker() {
  const {login,color,setColor} = useContext(ColorContext);

  useEffect(() => {
    initSocket();

    return () => disconnectSocket();
  }, [setColor])

  useEffect(()=>{
    subscribeColorStream((coolor)=>{
      setColor(coolor);
    });
  },[setColor]);

  return (
    <div className="App"
      style={{background:color.hex}}
    >
        <GameName />
      {login?
        <>
        <PlayerName />
        <ColorInput />
        </>
        :
        <Login />
      }
      <ColorName />
      <Name />
    </div>
  )
}

export default ColorPicker;
