import {useContext,memo} from 'react';
//import InputColor from 'react-input-color';

import ColorContext from '../../contexts/ColorContext';

import {sendColor} from '../../services/websocket';

import {hexToHSL} from '../../lib/hexToHSL';

function ColorInput() {
  const {user,color,setColor} = useContext(ColorContext);

  const handleColorChange = (c) => {
    const hslValue = hexToHSL(c.target.value);
    const colorVal = {
      "username":user,
      "hex":c.target.value,
      "v":hslValue.s
    };

    setColor(colorVal);
    // Send color to socket.
    sendColor({
       "username":user,
       "hex":c.target.value
     });
     localStorage.setItem("lastColor",colorVal.hex);
  }

  return (
    <input 
      type="color"
      className="colorPicker"
      style={{
        "height":"50px",
        "width":"50px",
        border:(color.v<60)?"2px solid white":"2px solid black"
      }}
      value={color.hex}
      onChange={(c)=>{handleColorChange(c)}}
      placement="center"
    >
    
    </input>
    // <InputColor 
    //     className="colorPicker"
    //     style={{
    //       "height":"50px",
    //       "width":"50px",
    //       border:(color.v<60)?"2px solid white":"2px solid black"
    //     }}
    //     initialValue={color.hex}
    //     onChange={(c)=>{handleColorChange(c)}}
    //     placement="center"
    //   />
  )
}

export default memo(ColorInput);
