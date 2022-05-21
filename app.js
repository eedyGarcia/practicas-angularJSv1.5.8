var app = angular.module("myApp",[]);

app.controller("nombresAppController", function(){
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
                localStorage.setItem('apellidos',JSON.stringify(mac.apellidos));
            }
            mac.nuevoApellido='';
        }
    }
})

.controller('gifsAppController', function($scope,$http){
    var gac = this;
        gac.resultados;

    var baseUrl = 'https://api.giphy.com/v1/gifs/search?';
    
    var params = [];
        params.api_key = 'AFWyHuxkaMBGUqkAmauon984HsFrBb8p';
        params.limit = '20';
        
    gac.buscarGifs = ()=>{
        params.q = gac.busqueda;
        
        params = HttpParams(params);
        gac.uri = baseUrl+params;

        $http.get(gac.uri).success(function(resp){
            gac.resultados = resp.data;
        });
    };
});


const HttpParams = (data)=>{
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
};