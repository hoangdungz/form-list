import React, {Component} from 'react';
import './InfoList.css';


class FormName extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            list: [{firstName:'',lastName:''}]
        }
    }
    
        handleChange = (evt) =>  {     
            this.setState({[evt.target.name]: evt.target.value});
            console.log('evt: ', evt.target.name, evt.target.value);
        }
    
        handleSubmit = (evt) => {
            evt.preventDefault();
        }

        handleClick = () => {
            //console.log(this.state);
            const list = this.state.list;
            this.setState({list})
            console.log(list);
        }

    render() {
        const arrItems = this.state.list.map(item => <div>hello</div>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                 <table class="table">
                     <thead>
                         <tr>                           
                             <th>First name</th>
                             <th>Last name</th>
                         </tr>
                     </thead>
                     <tbody>
                         {arrItems}
                     </tbody>
                 </table>
          </div>
        );
    }
}

export default FormName;
