$(initialize);

var animationSpeed = 500;

function initialize() {
    $('#intro').load('templates/main.intro.html');
    $('#coding').load('templates/main.coding.html');
    $('#design').load('templates/main.design.html');
    $('#about').load('templates/main.about.html');
    $('#contact').load('templates/main.contact.html');

    $('.logo').click(function(e) {
        e.preventDefault();
        if ($('#intro').hasClass('pt-moveToRightFade'))
        {
            $('#intro').addClass('pt-moveFromRightFade');

            $('#coding, #design, #about, #contact').addClass('pt-moveToLeftFade');

            $('.coding, .design, .about, .contact').removeClass('active');

            setTimeout(function () {
                $('#intro').removeClass();
            }, animationSpeed);
        }
    });

    $('.coding').click(function(e) {
        e.preventDefault();
        visitPage('#coding', '.coding');
    });

    $('.design').click(function(e) {
        e.preventDefault();
        visitPage('#design', '.design');
    });

    $('.about').click(function(e) {
        e.preventDefault();
        visitPage('#about', '.about');
    });

    $('.contact').click(function(e) {
        e.preventDefault();
        visitPage('#contact', '.contact');
    });
}

function visitPage(page, link) {
    if ($(page).hasClass('pt-moveToLeftFade'))
    {
        $(page).addClass('pt-moveFromLeftFade');

        $('#intro').addClass('pt-moveToRightFade');
        $('#coding, #design, #about, #contact').not(page).addClass('pt-moveToLeftFade');

        $(link).addClass('active');
        $('.coding, .design, .about, .contact').not(link).removeClass('active');

        setTimeout(function () {
            $(page).removeClass();
        }, animationSpeed);
    }
}
