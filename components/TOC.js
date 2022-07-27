import { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log("==> TOC의 컴포넌트가 수정되어 랜더링됨", newProps.data, this.props.data);
        if(newProps.data === this.props.data) {
            return false;  
        }
        return true;
    }
    render () {
        console.log("TOC이 랜더링됨");
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length) {
            lists.push(<li key={data[i].id}><a 
            //data-id = {data[i].id}
            onClick = {function(id, event) {
                // debugger;
                event.preventDefault();
                this.props.onChangePage(id);
                //this.props.onChangePage(event.target.dataset.id);
            }.bind(this, data[i].id)}
            href={'/content/' + data[i].id}>{data[i].title}</a></li>);
            i++;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;