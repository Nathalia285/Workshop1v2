import { getServices} from "./getServices.js";
import { showServices } from "./showServices.js";
import { deleteService } from "./deleteService.js";
import { createServices } from "./createService.js";

const ELEMENT =document.querySelector('.contenedor');
const URL= 'services/';

const CREATELINKINPUT = document.getElementById('linkImg');
const CREATETITULOINPUT = document.getElementById('titulo');
const CREATEDESCRIPTIONINPUT = document.getElementById('descripcion');

const BTNEDITARSERVICE = document.getElementById('btnEditar');
const BTNGUARDARSERVICE= document.getElementById('guardarService');
const BTNEDITARTARGET = document.getElementById('btnEditarTarget');

document.addEventListener('DOMContentLoaded', ()=>{
    const SERVICES = getServices(URL);
    console.log(SERVICES);
    showServices(SERVICES, ELEMENT);
});

window.deleteServiceL = async function deleteServiceL(idService)
{
    deleteService(URL, idService);
}
const BTNCREATESERVICE= document.getElementById('guardarService');
/*
BTNCREATESERVICE.addEventListener('click',()=>{
    createServiceL();
})*/

window.createServiceL = async function createServiceL(){
    window.open(`/formulario.html `);
}
/*
BTNEDITARTARGET.addEventListener('click',()=>{
    BTNGUARDARSERVICE.style.display='none';
    BTNEDITARSERVICE.style.display='block';
})*/

window.editService = async function editService (serviceId)
{
    window.open(`/formulario.html?id=${serviceId}`,'_self')
}


window.goToService = function goToService() {
    console.log("entró")
    window.open('/formulario.html','_self')
}