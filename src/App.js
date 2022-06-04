import { useEffect, useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';
import Range from './components/Range';
import Button from './components/Button';

function App() {

  const [colors, setColors] = useState([]);
  const [myPalette, setMyPalette] = useState([]);
  const [optionSelected, setOptionSelected] = useState('Default');
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

  useEffect(() => {
    let palette = JSON.parse(localStorage.getItem('myPalette'));
    if(palette !== null){
        setMyPalette(palette);
    }
  }, [])

  return (
    <div className='App'>
      <h3 className='app-title'>Color palette generator</h3>
      <Navbar value={[optionSelected, setOptionSelected]}/>
      <CardContainer value={colors} colorPalette={[myPalette, setMyPalette]}/>
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
