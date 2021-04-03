import './App.css';
import ColorPicker from './componets/ColorPicker/ColorPicker';
import {ColorProvider} from './contexts/ColorContext';

function App() {

  return (
    <ColorProvider>
      <ColorPicker />
    </ColorProvider>
  );
};

export default App;
