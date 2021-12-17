import React, { useState } from 'react';
import './App.css';

function App() {

  let [state_title, state_title_change] = useState(["지금 날씨는 영하 9도네요.","This is State", "오늘 풋살합니다~"]);
  let [recommendCnt, recommendCnt_change] = useState(0);

  // state 수정 방법
  function change_title(){
    var value = [...state_title];
    value.sort();
    

    state_title_change(value);
  }


  return (
    <div className="App">
      <div className="yellow-nav">
        <div>SM's HowToUseReact </div>
      </div>  
      <div className="div-list">
        <button onClick={change_title}>정렬</button>
        <h3>{ state_title[0] }<span onClick={ ()=>{recommendCnt_change(recommendCnt+1)} }> ❤ </span>{ recommendCnt }</h3>
        <p>2021-12-17</p>
        <hr/>

        <h3>{ state_title[1] }</h3>
        <p>2021-12-18</p>
        <hr/>

        <h3>{ state_title[2] }</h3>
        <p>2021-12-18</p>
        <hr/>

      </div>
    </div>
  );
}

export default App;
