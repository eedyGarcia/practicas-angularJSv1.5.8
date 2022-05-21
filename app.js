var app = angular.module("miApp",[]);

app.controller("MiAppController", function(){
    var mac = this;

    if(localStorage.getItem('apellidos')){
        mac.apellidos = JSON.parse(localStorage.getItem('apellidos'));
    }else{
        mac.apellidos = ['López','Reyes', 'Martínez', 'Sánchez', 'García'];
    }
    

    mac.nombre="Eduardo";
    mac.apellido="López";

    mac.cambiarTexto = ()=>{
        mac.apellido="García";
    }

    mac.agregarApellido =()=>{
        if(mac.nuevoApellido.length){
            if(!mac.apellidos.includes(mac.nuevoApellido)){
                mac.apellidos.push(mac.nuevoApellido);
                localStorage.setItem('apellidos') = JSON.stringify(mac.apellidos);
            }
            mac.nuevoApellido='';
        }
    }
});