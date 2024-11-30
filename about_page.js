
$(document).ready(function(){
    const body = $("body");
    const sidebar = $(".sidebar");
    const toggle =$(".toggle");
    const modeSwitch = $(".toggle-switch");
    const modeText = $(".mode-text");
    const elements = document.getElementsByClassName("scroll-element");
    const pan = document.getElementsByClassName("pan");


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
  

    window.addEventListener("scroll", function() {
  
      
        for (const element of elements) 
        {
          const position = element.getBoundingClientRect();
          
          if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add("hidden");
          } else {
            element.classList.remove("hidden");
          }
        }

        for (const pans of pan)
        {
          const position = pans.getBoundingClientRect();
      
          if (position.top < window.innerHeight && position.bottom >= 0) 
          {
            pans.classList.add("active-pan");
          } 
          else 
          {
            pans.classList.remove("active-pan");
          }
        }
      
       
            
      });

      $("#logout-go").click(function() {
        window.close();
     
});

});
