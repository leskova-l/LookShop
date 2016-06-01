// JavaScript source code
$(function () {
    $("#search").focus(search).blur(search);
    function search() {
        $("#search").toggleClass("search");
    }

    var temp = 1;
    $("#loadMore").on("click", load);
    function load() {
        if (temp == 1) {
            $("#bagAdd_1").slideDown(1000);
            temp = 0;
        }
        else if (temp == 0) {
            $("#bagAdd_2").slideDown(1000);
            $(this).fadeOut();
        }
    }

    $("#gallery .indicators li").click(indicators);

    function indicators() {
        $("#gallery .indicators li").removeClass("active");
        var num = $(this).addClass("active").data("slide-to");
        $("#gallery .item").removeClass("active");
        $("#gallery .item:eq(" + num + ")").addClass("active");
        sale = $(".item.active .sale");
        $("#gallery a.right").removeClass("active");
        $("#gallery a.left").addClass("active");
    }

    $("#gallery div.sale").mouseover(function (e) {
        $(e.currentTarget).addClass("hover");
    })
    $("#gallery div.sale").mouseout(function (e) {
        $(e.currentTarget).removeClass("hover");
    })

    var marginL = 0, width = 250, count = 5.4, sale;
    sale = $(".item.active .sale");
   

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
	
    $(".btn").click(dropdown);

    function dropdown(){
        var id = $(this).data("toggle");
        $(""+id+"").show();
    }

     
})
