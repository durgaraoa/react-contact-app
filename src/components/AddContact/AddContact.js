import React from 'react';

class AddContact extends React.Component{

    state = {
        id:"",
        name: ""
    }

    add = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addContactHandler(this.state)
        this.setState({id:"",name:""});
    }

    render(){
        return (
            <form type="submit" onSubmit={this.add}>
                <h4>Add Contact</h4>
                <hr/>
                <label>Contact Name</label> &nbsp;
                <input type="text" placeholder="Contact Name" id="cName" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})}/>
                <br/>
                <button type="submit" >Add</button>
                <br/>
            </form>
        );
    }
}

export default AddContact;