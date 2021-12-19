import React, { useState } from 'react';
import './App.css';

function App() {

  let [state_title, state_title_change] = useState(["지금 날씨는 영하 9도네요.","This is State", "오늘 풋살합니다~"]);
  let [recommendCnt, recommendCnt_change] = useState(0);
  let [date_, date_change] = useState(["2021-12-17","2021-12-18","2021-12-19"]);
  let [modal_check, modal_check_change] = useState(false);
  

  return (
    <div className="App">
      <div className="yellow-nav">
        <div>SM's HowToUseReact </div>
      </div>  
      <div className="div-list">
      {/*
        <h3>{ state_title[0] }<span onClick={ ()=>{recommendCnt_change(recommendCnt+1)} }> ❤ </span>{ recommendCnt }</h3>
        <p>2021-12-17</p>
        <hr/>

        <h3>{ state_title[1] }</h3>
        <p>2021-12-18</p>
        <hr/>

        <h3>{ state_title[2] }</h3>
        <p>2021-12-18</p>
        <hr/>
        */}
      
      {
        state_title.map(function(item){
          return(
          <div className="div-list">
            <h3>{ item }<span onClick={ ()=>{recommendCnt_change(recommendCnt+1)} }> ❤ </span>{ recommendCnt }</h3>
            <p>2021-12-18</p>
            <hr/>
          </div>
          )
        })
      }

      </div>
      <button onClick={ ()=>{modal_check_change(!modal_check)} }>모달 on/off</button>
      { modal_check == true ? <Modal>contents={state_title}</Modal> : null  }
    </div>
  );
}

function Modal(props){

  return (
      <div className="modal">
      안뇽
      </div>
  )
}

export default App;
