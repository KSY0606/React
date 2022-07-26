import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC"
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode : "read",
      selected_content_id : 2,
      subject : {title : "웹카페(WebCafe)", sub : "웹표준에 대해서 알아봅시다."},
      welcome : {title : "환영합니다.", desc : "리엑트 수업을 환영합니다."},
      contents : [
        {id : 1, title : "HTML", desc : "html이란 마크업 언어로 홈페이지 뼈대를 말한다."},
        {id : 2, title : "CSS", desc : "css란 홈페이지를 꾸미고 레이아웃을 설정 기능"},
        {id : 3, title : "JavaScript", desc : "정적인 홈페이지를 동적으로 변환"}
      ]
    }
  }
  render() {
    console.log("웹앱이 랜더링됨");
    var _title, _desc=null;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read") {
      /*_title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;*/
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }
    console.log("랜더링중...", this);
      return (
        <div className='app'>
          
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}onChangePage = {function() {
            //alert("컴퍼넌트 페이지가 바뀌었다.");
            this.setState({mode : "welcome"});
          }.bind(this)}></Subject>
          {/*  jsx의 주석 
          <Subject title="웹접근성" sub="장애인 차별 금지법에 의해 웹환경을 누구나 편하게 사용"></Subject>
          
          <header>
            <h1><a href='/' onClick={function(event) {
              console.log("이벤트 호출", this);
              // debugger;
              event.preventDefault();
              this.setState({mode : "welcome"});
            }.bind(this)}>{this.state.subject.title}</a></h1>
            <p>{this.state.subject.sub}</p>
          </header>
          */}
          <TOC onChangePage = {function(id) {
            //alert("TOC 컴포넌트 클릭");
            //debugger;
            this.setState({
              mode : "read",
              selected_content_id : Number(id)
            })
          }.bind(this)}
          data={this.state.contents}></TOC>
          <ul>
            <li><a href="/create">create</a></li>
            <li><a href="/update">update</a></li>
            <li><input type="button" value="delete"></input></li>
          </ul>
          <Content title={_title} desc={_desc}></Content>
        </div>
      );
    }
  }

export default App;
