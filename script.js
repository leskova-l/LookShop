$(function () {
    $("#search").focus(search).blur(search);
    function search() {
        $("#search").toggleClass("search");
    }

    var temp = 0 ;
    $("#loadMore").on("click", load);
    function load() {
        var goods = $(".goods>div");
            goods.eq(2).removeClass("hidden-xs");
            goods.eq(3).removeClass("hidden-xs");
            $(this).fadeOut()
    }
  
    $("#gallery .indicators-md li, #gallery .indicators-xs li").click(indicators);

    function indicators() {
        $("#gallery .indicators-md li, #gallery .indicators-xs li").removeClass("active");
        var num = $(this).data("slide-to");
        $("#gallery .indicators-xs li:eq(" + num + ")").addClass("active");
        $("#gallery .indicators-md li:eq(" + num + ")").addClass("active");

        $("#gallery .item").removeClass("active");
        $("#gallery .item:eq(" + num + ")").addClass("active");
        sale = $(".item.active .sale");
        $("#gallery a.right").removeClass("active");
        $("#gallery a.left").addClass("active");
    }

    //$("#gallery div.sale").mouseover(function (e) {
    //    $(e.currentTarget).addClass("hover");
    //})
    //$("#gallery div.sale").mouseout(function (e) {
    //    $(e.currentTarget).removeClass("hover");
    //})

    var marginL = 0, width = 250, count = 5.4, sale;
    sale = $(".item.active .sale");

    var screen = $(window).width();
    $(window).resize(function () {
        if (screen >= "768" && screen < "992") {
            count = 3;
            $("#gallery .inner").css("width", "760px");
        }
        else if (screen < "768") {
            count = 2;
            width = 305;

            $("#gallery .inner").css("width", "610px");

        }
    })
    //if (window.screen.width >= "768" && window.screen.width < "992") {
    //    count = 3;
    //    $("#gallery .inner").css("width", "760px");
    //    $("#gallery div.sale").mouseout(function (e) {
    //        $(e.currentTarget).removeClass("hover");
    //    })
    //}
    //else if (window.screen.width < "768") {
    //    count = 2;
    //    width = 305;

    //    $("#gallery .inner").css("width", "610px");

    //}

    $("#gallery a.left").click(function () {
        marginL = Math.min(marginL + count * width, 0);
        $("#gallery .item.active").animate({ marginLeft: "" + marginL + "px" },200);
        $(this).addClass("active");
        $("#gallery a.right").removeClass("active");
    })
    var q = $("#gallery .right");
    $("#gallery a.right").click(function () {
        marginL = Math.max(marginL - count * width, -width * (sale.length - count));
        $("#gallery .item.active").animate({ marginLeft: "" + marginL + "px" },200);
        $(this).addClass("active");
        $("#gallery a.left").removeClass("active");
    })

	//menu
    $(".btn").click(dropdown);

    function dropdown(){
        var id = $(this).data("toggle");
        $(""+id+"").slideToggle();
    }
    
    //gallery

    $(".indicators-xs li:gt(0)").hide();

    $("#one").click(function () {
        $("#gallery .indicators-xs li:gt(0)").slideToggle();
    })
})
