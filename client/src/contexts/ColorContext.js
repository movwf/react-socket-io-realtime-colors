import {createContext,useState} from 'react';
import {defaultColor} from '../constants/ColorPick';

const ColorContext = createContext(null);

export function ColorProvider({children}) {
  const lastColor = localStorage.getItem("lastColor");
  const [color,setColor] = useState(
                            lastColor?
                            Object.assign(defaultColor,{hex:lastColor}):
                            defaultColor
                          );
  const [backgroundColor,setBackgroundColor] = useState(color);
  const [user,setUser] = useState(null);
  const [login,setLogin] = useState(false);


  const values={
    color,
    setColor,
    login,
    setLogin,
    user,
    setUser,
    backgroundColor,
    setBackgroundColor
  };

  return (
    <ColorContext.Provider value={values}>
      {children}
    </ColorContext.Provider>
  )
}

export default ColorContext;
