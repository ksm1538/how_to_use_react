import React, { useState } from 'react';
import './App.css';

function App (){
  let [state_title, state_title_change] = useState(["지금 날씨는 영하 9도네요.","This is State", "오늘 풋살합니다~"]);
  let [date_, date_change] = useState(["2021-12-17","2021-12-18","2021-12-19"]);
  let [current_no, current_no_change] = useState(0);
  let [recommendCnt, recommendCnt_change] = useState(0);
  let [modal_check, modal_check_change] = useState(false);
  let [user_input, user_input_change] = useState("");

  function currentNoChange(num){
    current_no_change(num)
  }

  function add(){
    if(user_input == ""){
      alert("입력하세요");
    }else{
      var array = [...state_title];
      array.push(user_input);
      //array.shift(user_input); 
      
      // push : 배열 뒤에 추가
      // unshift : 배열 앞에 추가
      // shift : 배열 앞에서 삭제

      state_title_change(array);

      var array=[...date_];
      array.push("2021-12-25");
      date_change(array);
    }
  }


  return (
    <div className="App">
      <div className="yellow-nav">
          <div>SM's HowToUseReact </div>
      </div>  
      <div className="publish">
        제목 : <input onChange={ (e)=>{ user_input_change(e.target.value) } }/>
        <button onClick={()=>{ add() }}>저장</button>

      </div>
      <div className="div-list">

      {
        state_title.map(function(item, cnt){
          return(
          <div className="div-list" key={cnt}>
            <h3 onClick={ ()=>{currentNoChange(cnt)} }>{ item }<span onClick={ ()=>{recommendCnt_change(recommendCnt+1)} }> ❤ </span>{ recommendCnt }</h3>
            <p>{date_[cnt]}</p>
            <hr/>
          </div>
          )
        })
      }

        <button onClick={ ()=>{currentNoChange(0)} }>버튼 1</button>
        <button onClick={ ()=>{currentNoChange(1)} }>버튼 2</button>
        <button onClick={ ()=>{currentNoChange(2)} }>버튼 3</button>
        <Modal state_title={state_title} date_={date_} current_no={current_no}></Modal>
      </div>
      <div>
        <Profile/>
      </div>
    </div>  
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h1>Detail</h1>
      <h2>제목 : { props.state_title[props.current_no] }</h2>
      <p>날짜 : { props.date_[props.current_no]} </p>
      <p>상세내용 : </p>
    </div>
  )
}

// 예전의 React 문법
// React.Component 클래스를 상속받아 Profile에서도 같은 기능을 사용함
class Profile extends React.Component {
  constructor(){    // 변수를 넣는 공간
    super();    // 상속받은 React.Component에 있는 변수를 사용하겠단 뜻.
    this.state = {name : "React", age : "26.9"};
  }

  // function 문법으로 아래 함수 생성 후, this가 새롭게 재정의 됨.
  changeName(){
    this.setState( {name : 'Park'} )
  }


  render(){
    return (
      <div>
        <h3>My name is {this.state.name}.</h3>
        {/* 아래에서 changeName()이 아닌, this.changeName을 써야함 */}
        <button onClick={ ()=>{ this.changeName() } }></button>
      </div>
    )
  }
}

export default App;
