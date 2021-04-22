import React from 'react';
import RactDom from 'react-dom';

const url = "https://localhost:44339/api"

class UserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usuarios:[]
        };
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'})
        .then((res)=>res.json())
        .then((post)=>{
            this.setState({usuarios:post})
            console.log(post)
        })
    }
    

    render(){
        return(<div>
            <h2>Detalle de usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Personal ID</th>
                        <th>Email</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Wallet address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.usuarios.map(user=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.personalID}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.walletAdress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
    }
}
export default UserComponent;