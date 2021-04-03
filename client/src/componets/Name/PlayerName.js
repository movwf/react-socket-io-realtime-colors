import {useContext} from 'react';
import ColorContext from '../../contexts/ColorContext';

function PlayerName() {
  const {color} = useContext(ColorContext);

  return (
    <div
      style={{
        color:(color.v<50)?"white":"black",
        fontWeight:400,
        position:"fixed",
        right:"25px",
        top:"25px",
        fontFamily:"Roboto",
        fontSize:"20px",
        textAlign:"right"
      }}
    >
      {color.username?color.username:"Player"}
      {color.username?color.hex:"#xxxxxx"}
      <br/>
      <span
        style={{
          fontSize:"14px"
        }}
      >
        Latest Player
      </span>
    </div>
  )
}

export default PlayerName;
