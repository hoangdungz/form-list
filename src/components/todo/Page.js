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
        //console.log('full data: ', this.state.data);
    }
    
    onDelete = (item) => {
        this.tem = [...item];
        this.setState({data: this.tem});
    }

    onEdit = (item) => {
        this.tem = [...item];
        this.setState({data: this.tem});
        console.log('data: ' , this.state.data);
    }

    render(){
        return(
            <div>
                <Create onSucess={this.onSucess}/>
                <List data={this.state.data} onDelete={this.onDelete} onEdit={this.onEdit}/>
            </div>
        );
    }
}

export default Page;