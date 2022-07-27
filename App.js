import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC"
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
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
  } // constructor 종료
  //getReadContent 메서드
  getReadContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }
  //getContent 메서드
  getContent () {
    var _title, _desc=null, _article=null, _content;
    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === "read") {
      /*_title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;*/
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content._desc}></ReadContent>
    }else if(this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        //console.log(_title, _desc);
        this.max_content_id = this.max_content_id + 1;
        /*this.state.contents.push({
          id : this.max_content_id,
          title : _title,
          desc : _desc
        });
        this.setState({
          contents:this.state.contents
        });*/
        var _contents = this.state.contents.concat({
          id : this.max_content_id,
          title : _title,
          desc : _desc
        });
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === "update") {
      _content = this.getReadContent();
      _article = <UpdateContent data = {_content} onSubmit = {function(_title, _desc) {

      }.bind(this)}></UpdateContent>
    }
    return _article;
  }//getContent() 종료
  render() {
    console.log("웹앱이 랜더링됨");
    
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
          <Control onChangeMode={function(_mode) {
            this.setState({
              mode : _mode
            }); 
          }.bind(this)}></Control>
          {/*_article*/this.getContent()}
        </div>
      );
    }
  }

export default App;
