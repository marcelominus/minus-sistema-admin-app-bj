//Importamos REACT
import React, {useReducer} from 'react';
//Importamos los context
import loginContext from './loginContext';
import loginReducer from './loginReducer';
//Importamos la direcciones
import {direccion_login_consulta} from '../../resource/js/direction';
//Importamos los TYPES

//Importamos el CLIENTE AXIOS
import clientAxios from '../../config/clientAxios';

//-------------------------------------------------------------
const LoginState = (props) => {
    const initialState = {
        prueba : 'LENNY LAURA VALENCIA ARUQUI[A'
    }
    const [state, dispatch] = useReducer(loginReducer, initialState);

    //
    const funcionPeticionLogin = async(valor) => {
        const { user, pass} = valor;
        const urlPeticion = direccion_login_consulta;

        const peticionLogin = await clientAxios.post(urlPeticion,{
            user : user,
            pass : pass
        });
        const respuestaPeticionLogin = peticionLogin.data;
        console.log(respuestaPeticionLogin);
        

    }
    return ( 
        <loginContext.Provider
            value={{
                prueba : state.prueba,
                funcionPeticionLogin,
            }}
        >
            {props.children}
        </loginContext.Provider>
     );
}
 
export default LoginState;