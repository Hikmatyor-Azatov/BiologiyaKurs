$(document).ready(function () {
    let bars = $("#top_bars");
    let topNav = $(".topNav");
    let topNavOpen = true;

    bars.click(function () {
        topNav.slideToggle();
        if (topNavOpen) {
            bars.removeClass("fa-window-close");
            bars.addClass("fa-bars");
            topNavOpen = false;
        } else {
            bars.removeClass("fa-bars");
            bars.addClass("fa-window-close");
            topNavOpen = true;
        }
    });
});
