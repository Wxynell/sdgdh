
$(document).ready(function() 
{
    const register_switch = $("#register_switch");
    const login_switch = $("#login_switch");
    const forms= $(".form");
    $("#email").focus(enlarge);
    $("#email").blur(hide);
    $("#password").focus(enlarge1);
    $("#password").blur(hide1);
    
 
    $("#check").change(function() { 
    if ($(this).is(':checked')) { 
    shadow();
}
   else
    {
        $("#container_form").css({"box-shadow": "none"})
    }
});

    function enlarge()
    {
        $("#circle").css({ "opacity" : "0.9", "background-color" : "black"
        });
   
    }
    function hide()
    {
        $("#circle").css({ "opacity" : "0"
    });
    }

    function enlarge1()
    {
        $("#circle").css({ "opacity" : "0.9", "background-color" : "#3B1C32"
        });
   
    }
    function hide1()
    {
        $("#circle").css({ "opacity" : "0"
    });
    }
    function shadow()
    {
        $("#container_form").css({"box-shadow": "0 0 50px rgba(0, 255, 156, 0.5)"})
    }

    register_switch.click(function(){
        forms.addClass("switch")
    })

    login_switch.click(function(){
        forms.removeClass("switch")
    })
})

