import logo from './logo.svg';
import './App.css';

function App() {

  var data = "데이터바인딩 테스트";

  return (
    <div className="App">
      <div className="blue-nav">
        <div>SM's HowToUseReact </div>
        {/* 
          인라인 스타일 줄 땐
          style = { {여기 안에다가.} }
          속성 명에 -가 들어가면 안됨. 대신 대문자로
          ex) font-size -> fontSize
        */}
        <div style={{ fontSize:'15px', color:'black'} }>{data}</div>
      </div>  
    </div>
  );
}

export default App;
