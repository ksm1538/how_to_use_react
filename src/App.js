import React, { useState } from 'react';
import './App.css';

function App() {

  let title = '지금 날씨는 영하 9도네요.';
  let [state_title, state_title_change] = useState(["This is State", "오늘 풋살합니다~"]);
  
  return (
    <div className="App">
      <div className="yellow-nav">
        <div>SM's HowToUseReact </div>
      </div>  
      <div className="div-list">
        <h3>{ title }</h3>
        <p>2021-12-17</p>
        <hr/>

        <h3>{ state_title[0] }</h3>
        <p>2021-12-18</p>
        <hr/>

        <h3>{ state_title[1] }</h3>
        <p>2021-12-18</p>
        <hr/>
        
      </div>
    </div>
  );
}

export default App;
