$(window).on('DOMContentLoaded',()=> console.log("Let's get ready to party with jQuery!"))

$('article img').addClass('image-center');

const pList = $('p')
pList[pList.length-1].remove();

$('#title').css('font-size', `${Math.round(Math.random()*100)}px`);

$('<li>Cheese</li>').appendTo('ol')

$('aside').html('').append("<p>I'm so sorry</p>");

$('.form-control').on('input',()=>{
    $('body').css('background-color', `rgb(${$('.form-control').val()},${$('.form-control').eq(1).val()},${$('.form-control').eq(2).val()})`)
})

$('article img').on('click', function(){$(this).remove()})