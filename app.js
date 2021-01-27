

$(document).ready(function(){

    //  1. Script Funcionando de jquery
 //  console.log("Funcionando") 



 // 2. Modificar HTML

 // Propiedades HTML modificadas
 // $('h1').html('Etiqueta H1')

 //Clase modificada en HTML
  //$('.box').html('Desde Clase')

  // ID modificado en HTML
 // $('#idh1').html('Desde ID')






//3.Muchas secciones cambiando HTML

// Clase con h2 modificado
 // $('.box h2').html('Cambio de Texto')

// clase con h2 primero modificado
 // $('.box h2:first').html('jaja')

 //clase con h2 último modificado
 // $('.box h2:last').html('Soy el Último')








// 4. Propiedades
// Agregar Clase
  //$('#idh1').addClass('has-text-danger');

 // Eliminar Clase
  //$('#idh1').removeClass('is-size-2');

 //Función Append() Agregar un atributo al Final
  //$('#contenido').append('<h1> Final de Contenido </h1>');
 
 //Función Prepend() Agregar un atributo al Principio
 // $('#contenido').prepend('<h1> Principio de Contenido </h1>');

 // Función CSS() Agregar CSS
  //$('#color-azul').css('color','blue' );

 // Funcion CSS() como si fuera CSS{};
  //$('#color-azul').css({color: "blue", background: "orange", padding:"20px"});

 //Funcion remove() para eliminar atributos
 //$('#color-azul').remove();


 // Función hide() para esconder atributos
  //$('#color-azul').hide();

 //Función attset() para agregar imagenes
  //$('img').attr('src', 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg');

 //Función attset() para la última imagén modificar
 //$('img:last').attr('width', "50");






 // 5. Eventos


 // Variable Guardando id y propiedad HTML
//var parrafo = $('#resultado p')

 // Evento Agregar Clase
 /*$('.has-background-primary').click(function(){

    parrafo.addClass('has-text-centered is-size-2')

 })*/


 // Evento Quitar Clase
 /*$('.has-background-danger').click(function(){

    parrafo.removeClass('has-text-centered is-size-2')
 })*/
 

 // Evento Ambas Clases
/*$('.has-background-warning').click( function() {

parrafo.toggleClass('has-text-centered is-size-2')

})*/


// Evento Click con submit
/*$('#formulario').submit(function(evento){

   evento.preventDefault()
  var nombre =  $('#nombre').val()
   console.log(nombre)

})
})
*/







// 6. Efectos


/* Efectos Hide,Show,Toggle
var resultado = $('#resultado')

$('.has-background-grey').click(function(){

resultado.hide(1000)

})

$('.has-background-info').click(function(){

   resultado.show(1000)
   
   })

   $('.has-background-warning').click(function(){

      resultado.toggle(1000)
      
      })
   
*/



/*  Efecto fade()
var resultado = $('#resultado')

$('.has-background-grey').click(function(){

resultado.fadeOut(3000)

})

$('.has-background-info').click(function(){

   resultado.fadeIn(2000)
   
   })

   $('.has-background-warning').click(function(){

      resultado.fadeToggle(1000)
      
      })

*/



// Función animate

// variable.animate({parametros},velocidad, callback => () {} )
var resultado = $('#resultado')

$('.has-background-grey').click(function(){

   resultado.animate({
      left:'100px',
opacity: '0.4',
width: '+=200px',
height: '+=200px'
}, 5000, function(){

   resultado.animate({
      left:'0px',
      opacity: '1',
      width: '-=200px',
      height: '-=200px'
   },1000)
})

})





})
