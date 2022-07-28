import { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        };
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(event) {
      this.setState({
        [event.target.name] : event.target.value
      });
    }
    render () {
      console.log("UpdateContent가 랜더링됨");
        return (
        <article>
          <h2>수정하기(Update)</h2>
          <form action='/update_process' method='post' onSubmit={function(event) {
            event.preventDefault();
            //debugger;
            //alert("생성되었음");
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id}></input>
            <p><label>목차이름</label>
            <input type="text" name="title" placeholder="목차이름" value={this.state.title} onChange={this.inputFormHandler}></input>
            </p>
            <p><label>세부설명</label>
            <textarea name="desc" placeholder="세부설명" value={this.state.desc} onChange={this.inputFormHandler}></textarea>
            </p>
            <p><input type="submit" value="수정"></input></p>
          </form>
        </article>
        );
    }
}

export default UpdateContent;