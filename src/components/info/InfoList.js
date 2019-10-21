import React, {Component} from 'react';
import { Form, Button,Table } from 'react-bootstrap';
import './InfoList.css';


class FormName extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            todolist: [],
            }
        }
    
        handleChange = (evt) =>  {        
            this.setState({[evt.target.name]: evt.target.value});
        }
    

        handleClick = () => {
            var list = this.state.todolist;
            var item = {};
            item.firstname = this.state.firstName;
            item.lastname = this.state.lastName;
            list.push(item);
            this.setState({
                todolist: list
            });
            console.log(item);
            
        }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name="firstName" onChange={this.handleChange} aria-describedby="helpId" placeholder="First name: " />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="lastName" onChange={this.handleChange} aria-describedby="helpId" placeholder="Last name: " />
                    </div>
                    <button type="reset" className="btn btn-info" onClick={this.handleClick}>
                        ADD
                    </button>
                 </form>
                 <table className="table">
                     <thead>
                         <tr>
                             <th>FIRST NAME</th>
                             <th>LAST NAME</th>
                         </tr>
                     </thead>
                     {
                         this.state.todolist.map((val, index)=>{
                             return(
                                <tbody key={index}>
                                <tr>
                                    <td>{val.firstname}</td>
                                    <td>{val.lastname}</td>
                                </tr>
                                </tbody>
                             );

                         })
                     }

                 </table>
          </div>
        );
    }
}

export default FormName;
