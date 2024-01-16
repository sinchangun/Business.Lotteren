$(".lc_section").mouseover(function () {
    let index = $(this).index();
    $(".lc_section").parent().removeClass("active");
    $(this).parent().addClass("active");
})

$(".lc_section").mouseleave(function () {
    $(".lc_box").removeClass("active");
})

let head_chk = true;
$(".hi_search>a>i").click(function () {

    if (head_chk) {
        $(".head_icon").addClass("active")
        head_chk = false
    } else {
        $(".head_icon").removeClass("active")
        head_chk = true;
    }
    console.log(head_chk)
})

let last_scroll = 0;
let scroll = $(window).scroll(function () {

    let scrollTop = $(window).scrollTop();
    
    /* console.log(scrollTop)
    console.log(last_scroll) */

    if(scrollTop > last_scroll){
        $("body").removeClass("on")
    }else{
        $("body").addClass("on")
    }

    last_scroll = scrollTop
})