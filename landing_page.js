
const body = $("body");
const sidebar = $(".sidebar");
const toggle =$(".toggle");
const modeSwitch = $(".toggle-switch");
const modeText = $(".mode-text");
const magnify = $(".magnify");
const searchBar = $(".input-search")
//slidebar functions
toggle.click(function() {
    sidebar.toggleClass("close");
});

modeSwitch.click(function() {
    body.toggleClass("dark");
    if(body.hasClass("dark"))
    {
        modeText.text("Light Mood");
    }
    else
    {
        modeText.text("Dark Mood");
    }
});
//slidebarfunctions end

$("#C-sharp").on(
    {mouseenter: function() 
    {
        console.log("cs hovered!");
        $("#C-sharp").addClass("product-enlarge");
        $("#Java").addClass("product-shrink");
        $("#C-sharp").css('box-shadow', '0px 0px 40px rgba(0, 255, 156, 0.9)');
    }, 
    mouseout: function() 
    {
        $("#C-sharp").css('box-shadow', 'none');
        $("#C-sharp").removeClass("product-enlarge");
        $("#Java").removeClass("product-shrink");
    }
});

$("#Java").on(
    {mouseenter: function() {
        console.log("java hovered!");
        $("#Java").addClass("product-enlarge");
        $("#C-sharp").addClass("product-shrink");
        $("#Java").css('box-shadow', '0px 0px 40px rgba(0, 255, 156, 0.9)');
    }, mouseleave: function() {
        $("#Java").css('box-shadow', 'none');
        $("#Java").removeClass("product-enlarge");
        $("#C-sharp").removeClass("product-shrink");
    }
});
$("#logout-btn").click(function() {
    window.close();
});
