import { useContext, useEffect, useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';
import Range from './components/Range';
import Button from './components/Button';
import { ColorContext } from './Context/ColorsContext';
import { OptionSelectedContext } from './Context/OptionSelectedContext';
import { MyPaletteContext } from './Context/MyPaletteContext';

function App() {

  const [_, setColors] = useContext(ColorContext);
  const [myPalette] = useContext(MyPaletteContext);
  const [optionSelected] = useContext(OptionSelectedContext);
  const [amount, setAmount] = useState(3);

  const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  const generateColor = () => {
    let max = 15;
    let min = 0;
    let code;
    let listOfColors = [];
    
    if(optionSelected === 'Dark'){
      max = 6;
    }
    if(optionSelected === 'Light'){
      min = 11;
    }

    for (let i = 0; i < amount; i++){
      code = '#';
      for (let j = 0; j < 6; j++){
        code += characters[Math.floor(Math.random()*(max-min+1)+min)];
      }
      listOfColors.push({color: code, my_palette: false});
    }
    setColors(listOfColors);
  }


  useEffect(() => {
    if(optionSelected === 'My palette'){
      setColors(myPalette);
    }
  }, [optionSelected, myPalette])

  useEffect(() => {
    if(optionSelected !== 'My palette'){
        generateColor();
    }
  }, [optionSelected])

  return (
    <div className='App'>
      <h3 className='app-title'>Color palette generator</h3>
      <Navbar/>
      <CardContainer/>
      {optionSelected !== 'My palette' ? 
      <>
        <Range min='3' max='12' step='1' amount={amount} setAmount={setAmount}/>
        <Button onClick={generateColor}/>
      </>
      : null}
    </div>
  );
}

export default App;
