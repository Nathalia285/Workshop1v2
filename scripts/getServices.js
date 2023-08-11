import customFetch from "../utils/axios";

export const getServices = async (URL) =>{
    try{
        const RESPONSE = await customFetch.get(URL);
        console.log(RESPONSE.data);
        return RESPONSE.data;
    }catch(error){
        console.log('Error fetching services: ', error);
        return[];
    }
    
}