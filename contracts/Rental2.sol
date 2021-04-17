pragma solidity >=0.4.21 <0.7.0;

contract Rental2{
    
    uint256 public idContratoInm=0;
    mapping (uint => ContratoInm) public Contratos;
    address owner;
    
    event pagoRealizado(address inquilino, uint indexed idContratoInm , uint numeroDePago, bool isValids);
    event GeneracionDeContrato(address inquilino,address payable propietario, uint indexed idContratoInm , uint numeroDePago, uint duracion, uint idProp );

    
    modifier onlyOwner(){
        require(msg.sender ==owner);
        _;
    }
    
    
    constructor() public{
        owner=msg.sender;
    }
    
     struct ContratoInm {
        uint _idContratoInm;
        address _inquilino;
        address payable _propietario; 
        uint _idPropiedad;
        uint _montoDePago;
        uint _fechaInicio;
        uint _fechaFin;
        uint _diasPago;
        uint _cantidadPagos;
        uint _pagosEfectivos;
        bool _isValid;
    }
    
    //recibe ID de la prop, monto 
    //Falta validar que ese ID prop no exista en el mapping
     function GenerateAlquiler (address payable propietario, uint idpropiedad, uint montoDePago, uint duracion, uint diaspago, uint cantidadPagos) payable public {
        incrementCount();
        Contratos[idContratoInm] = ContratoInm(idContratoInm,msg.sender,propietario,idpropiedad, montoDePago, now, now+duracion,diaspago, cantidadPagos,1, true);
        sendViaCall(propietario);
        emit GeneracionDeContrato(msg.sender, propietario, idContratoInm, 1, duracion,  idpropiedad);

    }
    
      //recibe ID del contratoInm para buscarlo en el mapping, monto
     function Pagoregular (address inquilino,address payable propietario, uint idContratoInmo, uint montoDePago) payable public {
         
        require(Contratos[idContratoInmo]._inquilino ==inquilino &&
        Contratos[idContratoInmo]._propietario == propietario && 
        Contratos[idContratoInmo]._montoDePago==montoDePago&&
        Contratos[idContratoInmo]._isValid ==true);
        
        Contratos[idContratoInmo]._pagosEfectivos+=1;
        
        sendViaCall(propietario);
        
        emit pagoRealizado(inquilino,1,1,Contratos[idContratoInmo]._isValid);    
    }
    
    
    //Chequear overflow de porcentajes. Envia un porcenje como fee al owner del contrato y el resto al propietario
    function sendViaCall(address payable propietario) public payable {
        (bool sent, bytes memory data) = propietario.call{value : (msg.value*99 /100) } ("");
        (bool sentO, bytes memory dataO) = owner.call{value: msg.value*1 /100}("");
        require(sent, "Failed to send Ether");
        require(sentO, "Failed to send Ether");

    }
    
     function incrementCount() internal{
        idContratoInm+=1;
    }
    
    function decreseCount() internal{
        idContratoInm-=1;
    }
    
}