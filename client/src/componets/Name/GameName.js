import {useContext} from 'react';
import ColorContext from '../../contexts/ColorContext';

function GameName() {
  const {color} = useContext(ColorContext);

  return (
    <div
      style={{
        color:(color.v<50)?"white":"black",
        fontWeight:400,
        position:"fixed",
        left:"25px",
        top:"25px",
        fontFamily:"Roboto",
        fontSize:"20px",
        textAlign:"left"
      }}
    >
      Color-Sockets v0.1a
      <br/>
      <span
        style={{
          fontSize:"14px"
        }}
      >
        x player in game
      </span>
    </div>
  )
}

export default GameName;
