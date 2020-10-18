AOS.init();

window.menuUrl = window.location.hash;
window.menuArray = ["#welcome", "#greeting", "#introduction", "#complication", "#resolution", "#message", "#thank", "#gift", "#closing"]

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $("aside").addClass("active");
});

function nextPage() {
    var indexNext = window.menuArray.indexOf(window.menuUrl) + 1;
    $('html, body').stop().animate({
        'scrollTop': $(window.menuArray[indexNext]).offset().top
    }, 500, 'swing', function () {
        window.menuUrl = window.menuArray[indexNext];
        $(document).on("scroll", onScroll);
    });
}

function backPage() {
    var indexNext = window.menuArray.indexOf(window.menuUrl) - 1;
    $('html, body').stop().animate({
        'scrollTop': $(window.menuArray[indexNext]).offset().top
    }, 500, 'swing', function () {
        window.menuUrl = window.menuArray[indexNext];
        $(document).on("scroll", onScroll);
    });
}

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('aside.navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('aside.navigation ul li').removeClass("active");
            currLink.parent().addClass("active");
            window.menuUrl = currLink.attr("href");
        } else {
            currLink.removeClass("active");
        }
    });
}