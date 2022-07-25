import { Component } from 'react';

class Subject extends Component {  // Subject에 header의 정보가 들어있음
    render () {
        return ( // {}안에 작성한건 자바스크립트가 아니고 jsx임
        <header>
          <h1>{this.props.title}</h1> 
          <p>{this.props.sub}</p>
        </header>
        );
    }
}

export default Subject;