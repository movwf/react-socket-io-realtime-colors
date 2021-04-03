import {useContext} from 'react';
import ColorContext from '../../contexts/ColorContext';

function Name() {
  const {color,user} = useContext(ColorContext);

  return (
    <div
      style={{
        color:(color.v<50)?"white":"black",
        fontWeight:400,
        position:"fixed",
        right:"25px",
        bottom:"25px",
        fontFamily:"Roboto",
        fontSize:"32px",
        textAlign:"right"
      }}
    >
      <span
        style={{
          fontSize:"14px"
        }}
      >
        Username
      </span>
      <br/>
      {user===null?"-":user}
    </div>
  )
}

export default Name;
