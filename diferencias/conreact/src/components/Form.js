import React from 'react'
import UserList from './UserList'

class Form extends React.Component {
    state = {
        name : '',
        users : [],
    }
    onChangeInput = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    onSave = (e) => {
        this.state.users.push(this.state.name)
        this.setState({
            users : this.state.users,
            name : ''
        })
    }
    render(){
        return (
            <div>
                <input 
                onChange={this.onChangeInput}
                value={this.state.name}
                placeholder="nombre"
                type="text" />
                <button onClick={this.onSave} type="button" id="btnSave">Guardar</button>
                <UserList users={this.state.users} />
            </div>
        )
    }
}

export default Form;
