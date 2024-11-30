const body = $("body");
const sidebar = $(".sidebar");
const toggle =$(".toggle");
const modeSwitch = $(".toggle-switch");
const modeText = $(".mode-text");
const magnify = $(".magnify");
const searchBar = $(".input-search");

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

