import {useContext} from 'react';
import ColorContext from '../../contexts/ColorContext';

function ColorName() {
  const {color} = useContext(ColorContext);
  return (
    <div
      style={{
        color:(color.v<50)?"white":"black",
        fontWeight:400,
        position:"fixed",
        left:"25px",
        bottom:"25px",
        fontFamily:"Roboto",
        fontSize:"24px",
        textAlign:"left"
      }}
    >
      <span
        style={{
          fontSize:"14px"
        }}
      >
        Color
      </span>
      <br/>
      {color.hex}
    </div>
  )
}

export default ColorName;
