import './App.css';
import React from 'react';
import TextEnterBox from './Components/TextEnterBox';
import IgnoreTextBox from './Components/IgnoreTextBox';
import TextReturnBox from './Components/TextReturnBox';
import SubmitButton from './Components/Submit Button';


function App() {
  return (
    <div className="App">
      <TextEnterBox/> 
      <IgnoreTextBox/>
      <SubmitButton/>
      <TextReturnBox/>

    </div>
  );
}

export default App;
