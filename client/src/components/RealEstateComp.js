import React from 'react';
import RactDom from 'react-dom';

const url = "https://localhost:44339/api/RealEstate"



class RealEstateComp extends React.Component{


    constructor(props){
        super(props);
        this.state={
            realestates:[]
        };
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'})
        .then((res)=>res.json())
        .then((post)=>{
            this.setState({realestates:post})
            console.log(post);
        })
    }

    
    

    render(){
        return(<div>
            <h2>Propiedades</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>dirección</th>
                        <th>Alquiler</th>
                        <th>Duración</th>
                        <th>periodo de pago</th>
                        <th>Metros cuadrados</th>
                        <th>Descripción</th>
                        <th>Ambientes</th>
                        <th>Cuartos</th>
                        <th>Baños</th>
                        <th>Posee garage</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.realestates.map(realestate=>(
                        <tr key={realestate.id}>
                            <td>{realestate.id}</td>
                            <td>{realestate.address}</td>
                            <td>{realestate.rentFee}</td>
                            <td>{realestate.rentDurationDays}</td>
                            <td>{realestate.rentPaymentSchedule}</td>
                            <td>{realestate.sqMtrs}</td>
                            <td>{realestate.description}</td>
                            <td>{realestate.rooms}</td>
                            <td>{realestate.bedRoomQty}</td>
                            <td>{realestate.bathRoomQty}</td>
                            <td>{String(realestate.garage)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
    }
}
export default RealEstateComp;

