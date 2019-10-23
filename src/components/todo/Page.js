import React, { Component } from 'react';
import List from './List';
import Create from './Create';

class Page extends Component {
    state= {
        data: [],
    } 
    tem = [];

    onSucess = (item) => {   
        this.tem.push(item);
        this.setState({data: this.tem});
    }
     
    render(){
        return(
            <div>
                <Create onSucess={this.onSucess}/>
                <List data={this.state.data} />
            </div>
        );
    }
}

export default Page;