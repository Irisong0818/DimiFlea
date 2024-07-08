$(function(){
    $(".type-list").click(function(){
        $(".selected").removeClass("selected")
        $(this).addClass("selected")
    })    

    $("#category-items>p").click(function(){
        $(".category-selected").removeClass("category-selected")
        $(this).addClass("category-selected")
    })

})



//html


//function add(a, b){
//    return a + b
//}
//const add = (a,b) => a + b
