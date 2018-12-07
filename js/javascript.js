
// MENU BOTÃO

$(document).ready(function(){
	$('#menu-hamburger').click(function(){
		$(this).toggleClass('open');
	});
});


// MENU

!function(t){"use strict";t("#menu-hamburger").click(function(e)
{e.preventDefault(),t("body").toggleClass("sidebar-toggled"),
t(".sidebar,.bg.d").toggleClass("toggled")}),
t("body.fixed-nav .sidebar, .bg.d").on("mousewheel DOMMouseScroll wheel",
function(e){if(768<$window.width())
{var o=e.originalEvent,t=o.wheelDelta||-o.detail;this.scrollTop+=30*(t<0?1:-1),e.preventDefault()}}),
t(document).scroll(function(){
100<t(this).scrollTop()?t(".scroll-to-top").fadeIn():t(".scroll-to-top").fadeOut()}),
t(document).on("click","a.scroll-to-top",
function(e){var o=t(this);t("html, body").stop().animate({scrollTop:t(o.attr("href")).offset().top},
1e3,"easeInOutExpo"),e.preventDefault()})}(jQuery);


// PRÓXIMA PÁGINA

$("#nextPage").on('click', function() {
  if (pagina2.style.display === "none") {
    pagina1.style.display = "inline-block";
    
  
}
else {
    pagina1.style.display = "none";
    pagina2.style.display = "inline-block";
} 
  });


//   CHECKBOX CONTA-CORRENTE|CONTA-POUPANÇA
$(function () {
    $('.btn-radio').click(function(e) {
        $('.btn-radio').not(this).removeClass('active')
    		.siblings('input').prop('checked',false)
            .siblings('.img-radio').css('opacity','0.5');
    	$(this).addClass('active')
            .siblings('input').prop('checked',true)
    		.siblings('.img-radio').css('opacity','1');
    });
});



// EXPORTAR COMPROVANTE


var doc = new jsPDF('portrait', 'pt', 'a4'),
data = new Date();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    } };


$('#exportarComprovante').click(function () {
    doc.fromHTML($('#export').html(), 15, 15, {
        'width': 670,
        'top': 40,
        'bottom': 60,
        'left': 40,
        'elementHandlers': specialElementHandlers });


    doc.save("Transferencia-"+data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear()+".pdf");
});


// var pdf = new jsPDF('p', 'pt', 'a4');

// pdf.addHTML($("#content"), function() {
//   var output = pdf.output("datauristring");
//   alert(output);
//   //pdf.output("datauri"); //This will output the PDF in a new window
// }




// TELA EXTRATOS FILTRO (DEBITO,CREDITO,TODOS)

$("#filtro").on('click', function() {
    if (pagina2.style.display === "none") {
      pagina1.style.display = "inline-block";
      
    
  }
  else {
      pagina1.style.display = "none";
      pagina2.style.display = "inline-block";
  } 
    });
  