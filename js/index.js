$(document).ready(function(){
    $(".hero-block,.my-skills .block").hover(function(){
        $(this).animate({ 'zoom': 1.05 }, 300);
    },function(){
        $(this).animate({ 'zoom': 1 }, 10);
    })
})
