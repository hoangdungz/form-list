import React, {Component} from 'react';
import './InfoList.css';


class FormName extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            todolist: [],
            sst: true,
            fnEdit: '',
            lnEdit: '',
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
                todolist: list,
            });
            
        }
        handleDelete = (item) => {
            console.log("Lấy được giá trị là: ", item);
            
            const newList = this.state.todolist.filter((value) => value.firstname !== item);
            this.setState({ 
                todolist: newList
            });
        }
        handleEdit = () => {
            const arr = [...this.state.todolist];
            arr.forEach((val)=>{
                val.firstname = this.state.firstName;
                val.lastname = this.state.lastName;
            })
            this.setState({
                sst: !this.state.sst,
                todolist: arr
            });
        }
        displayNote = () => {
            if (this.state.sst === true) {
                return (
                    <button type="reset" className="btn btn-info" onClick={this.handleClick}>
                    ADD
                </button>
                );
            } else {
                return (
                    <button type="reset" className="btn btn-info" onClick={this.handleEdit}>
                    EDIT
                </button>
                );
            }
        }
        handleChangeNode = (val) => {
            console.log(val.firstname);
            this.setState({
                sst: !this.state.sst,
                fnEdit: val.firstname,
                lnEdit: val.lastname,
            });

        }
       
    render() {
        
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" name="firstName" onChange={this.handleChange} aria-describedby="helpId" placeholder="First name: " defaultValue={this.state.fnEdit} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="lastName" onChange={this.handleChange} aria-describedby="helpId" placeholder="Last name: " defaultValue={this.state.lnEdit}/>
                    </div>
                    {this.displayNote()}
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
                                    <td><button className="btn btn-info" onClick={()=>this.handleChangeNode(val)}>EDIT</button></td>
                                    
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
