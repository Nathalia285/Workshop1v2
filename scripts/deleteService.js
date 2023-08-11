import customFetch from "../utils/axios";

export const deleteService = async (URL, serviceID)=>{
    try{
        await customFetch.delete(`${URL}${serviceID}`);
        return true;
    }catch(e){
        console.log('Error, deleting service: ',e);
        alert('Hubo un error al eliminar el servicio, intentalo de nuevo.');
    }
}