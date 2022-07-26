import { Component } from 'react';

class CreateContent extends Component {
    render () {
      console.log("CreateContent가 랜더링됨");
        return (
        <article>
          <h2>생성하기(Create)</h2>
          <form action='/create_process' method='post' onSubmit={function(event) {
            event.preventDefault();
            //debugger;
            //alert("생성되었음");
            this.props.onSubmit(
              event.target.title.value,
              event.target.desc.value,
            )
          }.bind(this)}>
            <p><label id='content1'>목차이름</label>
            <input type="text" name="title" placeholder="목차이름"></input>
            </p>
            <p><label>세부설명</label>
            <textarea name="desc" placeholder="세부설명"></textarea>
            </p>
            <p><input type="submit" value="생성"></input></p>
          </form>
        </article>
        );
    }
}

export default CreateContent;