import { Component, useState } from 'react';
import './App.css';

// 함수형 스타일 컴포넌트
function FuncComp(props) {
  var numState = useState(props.num); // useState는 배열로 값을 반환함, 첫번째 값은 속성에 전달받은 값이고 두번째 값은 함수를 호출하도록 구현함.
  var number = numState[0];
  var setNumber = numState[1];
  console.log("numState값=", numState);
  /*var dateState = useState((new Date()).toString());
  var _date = dateState[0];
  var setDate = dateState[1];*/
  var [_date, setDate] = useState((new Date()).toString());
  return (
    <div className="container">
      <h2>함수 스타일 컴포넌트</h2>
      <input type="button" value="random" onClick={function() {
        setNumber(Math.floor(Math.random()*100)+1);
      }}></input>
      <input type="button" value="current" onClick={function() {
        setDate((new Date().toString()));
      }}></input>
      <p>숫자 : {number}</p>
      <p>날짜 : {_date}</p>
    </div>
  );
}
// 클래스형 스타일 컴포넌트
class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : this.props.num,
      date : (new Date()).toString()
    }
  }
  render() {
    return (
      <div className="container">
        <h2>클래스 스타일 컴포넌트</h2>
        <input type="button" value="random" onClick={function() {
          this.setState({number : Math.floor(Math.random()*100)+1});
        }.bind(this)}></input>
        <input type="button" value="current" onClick={function() {
          this.setState({date :(new Date()).toString()});
        }.bind(this)}></input>
        <p>숫자 : {this.state.number}</p>
        <p>날짜 : {this.state.date}</p>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>리엑트 클래스 스타일 VS 함수형 스타일</h1>
      <FuncComp num = {2}></FuncComp>
      <ClassComp num = {2}></ClassComp>
    </div>
  );
}

export default App;
