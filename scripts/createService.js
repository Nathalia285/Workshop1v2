import customFetch from "../utils/axios";

export const createServices = async (URL, service)=>{
    console.log('2:',service)
    try{
        const RESPONSE = await customFetch.post(URL,service);
        console.log('AQUI',RESPONSE)
        return RESPONSE;
    }catch(error){
        console.log('Error crating service: ', error);
        alert('Hubo un error al crear el nuevo servicio, por favor, intentalo de nuevo.');
    }
}
