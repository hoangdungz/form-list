import React, {Component} from 'react';
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
            
        }
        handleDelete = (item) => {
            console.log("Lấy được giá trị là: ", item);
            
            const newList = this.state.todolist.filter((value) => value.firstname !== item);
            this.setState({ 
                todolist: newList
            });
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
                             <th>ACTION</th>
                         </tr>
                     </thead>
                     {
                         this.state.todolist.map((val, index)=>{
                             return(
                                 
                                <tbody key={index}>
                                <tr>
                                    <td>{val.firstname}</td>
                                    <td>{val.lastname}</td>
                                    <td><button className="btn btn-info" onClick={()=>this.handleDelete(val.firstname)}>DELETE</button></td>
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
