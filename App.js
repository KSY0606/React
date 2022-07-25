import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC"
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject : {title : "웹카페(WebCafe)", sub : "웹표준에 대해서 알아봅시다."},
      contents : [
        {id : 1, title : "HTML", desc : "html이란 마크업 언어로 홈페이지 뼈대를 말한다."},
        {id : 2, title : "CSS", desc : "css란 홈페이지를 꾸미고 레이아웃을 설정 기능"},
        {id : 3, title : "JavaScript", desc : "정적인 홈페이지를 동적으로 변환"}
      ]
    }
  }
  render() {
      return (
        <div className='app'>
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
          {/* jsx의 주석 
          <Subject title="웹접근성" sub="장애인 차별 금지법에 의해 웹환경을 누구나 편하게 사용"></Subject>
          */}
          <TOC data={this.state.contents}></TOC>
          <Content title="HTML" desc="html이란 마크업 언어로 홈페이지 뼈대를 말한다."></Content>
        </div>
      );
    }
  }

export default App;
