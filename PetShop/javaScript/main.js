$(init);
$(window).resize(redefinirMenu);
$(window).resize(controlaScroll);


function init() {
    redefinirMenu();
    ativarBotaoMenu();
    ativarSliderDesktop();
    ativarSliderMobile();
    ativarCarrosseis();
    controlaScroll();
    

}

function ativarBotaoMenu() {
    $(".botaoMobile").click(function () {
        $(this).toggleClass("rotaciona");
        $(".navbarPrincipal").toggle("slow");
    });
}

function redefinirMenu() {
    var larguraTela = $(document).width();


    if (larguraTela > 501) {
        //desktop
        $(".navbarPrincipal").css("display", "inline-block");
        limpaBarraMobile();
        fixaBarraDesktop();

    } else {
        //mobile
        limpaBarraDesktop();
        fixaBarraMobile();
        $(".navbarPrincipal").css("display", "none");
        $(".botaoMobile").removeClass("rotaciona");
    }
}

function ativarSliderDesktop() {
    var count = 1;

    var images = ["images/imagemBackground_1.jpeg", "images/imagemBackground_2.jpg", "images/imagemBackground_3.jpg"];

    $(".bannerBackground").css("background-image", "url(" + images[count] + ")");
    count++;
    setInterval(function () {
        $(".bannerBackground").fadeOut(500, function () {
            $(".bannerBackground").css("background-image", "url(" + images[count++] + ")");
            $(".bannerBackground").fadeIn(500);
        });

        if (count == images.length) {
            count = 0;
        }

    }, 5000);

}

function ativarSliderMobile() {


    var countM = 0;
    var imagesM = ["images/imagemMobileBackground_1.jpg", "images/imagemMobileBackground_2.jpg", "images/imagemMobileBackground_3.jpg"];

    $(".bannerBackgroundMobile").css("background-image", "url(" + imagesM[countM] + ")");
    countM++;
    setInterval(function () {
        $(".bannerBackgroundMobile").fadeOut(500, function () {
            $(".bannerBackgroundMobile").css("background-image", "url(" + imagesM[countM++] + ")")
            $(".bannerBackgroundMobile").fadeIn(500);
        });

        if (countM == imagesM.length) {
            countM = 0;
        }

    }, 5000);

}


function ativarCarrosseis() {
    $("#sliderQuemSou").owlCarousel({
        autoplay: true,
        items: 1,
        autoplayTimeout: 2000,
        loop: true
    });

    $("#sliderClientesMobile").owlCarousel({
        autoplay: true,
        items: 1,
        autoplayTimeout: 2000,
        loop: true
    });

    $("#quadroTestemunhos").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });


}

function fixaBarraDesktop() {
    $(".primeiraBarra").addClass("fixaPrimeiraBarraJS");
    $(".segundaBarra").addClass("fixaSegundaBarraJS");
    $(".headerBuffer").addClass("ativaBufferJS");

}

function limpaBarraDesktop() {
    $(".primeiraBarra").removeClass("fixaPrimeiraBarraJS");
    $(".segundaBarra").removeClass("fixaSegundaBarraJS");
    $(".headerBuffer").removeClass("ativaBufferJS");

}

function fixaBarraMobile() {
    $(".primeiraBarra").addClass("fixaPrimeiraBarraJS");
    $(".bufferMobile").addClass("ativaBufferJS");
}


function  limpaBarraMobile() {
    $(".primeiraBarra").removeClass("fixaPrimeiraBarraJS");
    $(".bufferMobile").removeClass("ativaBufferJS");
}


function ativarScrollDesktop() {
    $("#botaoTestemunhos").click(function () {
        document.querySelector("#testemunhos").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    
     $("#botaoHome").click(function () {
        document.querySelector(".desktopBanner").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    
     $("#botaoQuemSomos").click(function () {
        document.querySelector(".quemSouDesktop").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    
     $("#botaoClientes").click(function () {
        document.querySelector(".clientesDesktop").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
 
}

function ativarScrollMobile() {
    $("#botaoTestemunhos").click(function () {
        document.querySelector("#testemunhos").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    
     $("#botaoHome").click(function () {
        document.querySelector(".mobileBanner").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    
     $("#botaoQuemSomos").click(function () {
        document.querySelector(".quemSouMobile").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
    
     $("#botaoClientes").click(function () {
        document.querySelector(".clientesMobile").scrollIntoView({
            behavior: 'smooth' 
        });
    });
    
}




function controlaScroll() {
    var larguraTela = $(document).width();


    if (larguraTela > 501) {
        //desktop
       ativarScrollDesktop();
    } else {
        //mobile
        ativarScrollMobile();
    }
}

