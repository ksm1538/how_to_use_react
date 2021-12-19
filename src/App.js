import React, { useState } from 'react';
import './App.css';

function App (){
  let [state_title, state_title_change] = useState(["지금 날씨는 영하 9도네요.","This is State", "오늘 풋살합니다~"]);
  let [date_, date_change] = useState(["2021-12-17","2021-12-18","2021-12-19"]);

  return (
    <div>
      <Modal state_title={state_title} date_={date_}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.state_title[0] }</h2>
      <p>날짜 { props.date_[0]} </p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
