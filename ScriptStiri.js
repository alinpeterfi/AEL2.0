var stireNr;
var jqxhr = $.getJSON("http://localhost:3000/news", function (data) {
    $.ajax({
        dataType: 'json' //jquery parse
    });
    //Perform an asynchronous HTTP (Ajax) request.

    var contentDiv = $(".news-content");
    var contentDivSec = $(".stiri-sec-container");
    var dataCont = 0;
    var htmlString;
    var htmlStringSec;
    var shortString;
    //Variabile

    $(window).ready(function () {
        for (dataCnt = 0; dataCnt < 7; dataCnt++) {
            dataCont++;
            shortString = (data[dataCnt].content).substring(0, 200);//se reduce continutul stirii la 200 de caractere
            htmlString = "<h3 class=\"news-content-title\">" + data[dataCnt].stire + " " + data[dataCnt].number + "</h3>" + "<p class=\"news-content-p\">" + shortString + "</p>";//se preiau datele de la server in variabila htmlString
            contentDiv.append('<button data-role="button" data-inline="true" data-mini="true" data-theme="b" class = "btn btn-danger stiri-sec-btn" data-target="StiriSiEvenimenteSec.html">Mai multe...</button>').trigger('create');//se adauga butonul la div-ul cu clasa "newscontent"
            contentDiv.append(htmlString);//se adauga continutul htmlString la div-ul cu clasa "newscontent"
            $("button").click(function () {
                var stireNr = $("button").index(this);
                localStorage.setItem("value", stireNr);
                $(document).ready(function () {
                    contentDivSec.append(localStorage.getItem("value"));
                });
            });
            //Cand se apasa butonul, se afla indexul butonului in cadrul paginii
        }
        $(document).ready(function () {
            $('.stiri-sec-btn').on('click', function (event) {
                event.preventDefault();
                var url = $(this).data('target');
                location.replace(url);
            });
        });
        //Cand se apasa butonul, se redirectioneaza pe pagina StiriSiEvenimenteSec
    });
    //Incarca primele 5 stiri

    $(window).on("scroll", function () {
        var scrollHeight = $(document).height();//page height

        var scrollPos = $(window).height() + $(window).scrollTop();//scroll position
        if (((scrollHeight - 300) >= scrollPos) / scrollHeight == 0) {// fire if the scroll position is 300 pixels above the bottom of the page
            $.ajax({
                dataType: 'json' //jquery parse
            });
            //Perform an asynchronous HTTP (Ajax) request.
            for (dataCnt = 0; dataCnt < 5; dataCnt++) {
                shortString = (data[dataCont].content).substring(0, 200);//se reduce continutul stirii la 200 de caractere
                htmlString = "<h3 class=\"news-content-title\">" + data[dataCont].stire + " " + data[dataCont].number + "</h3>" + "<p class=\"news-content-p\">" + shortString + "</p>";//se preiau datele de la server in variabila htmlString
                contentDiv.append('<button data-role="button" data-inline="true" data-mini="true" data-theme="b" class = "btn btn-danger stiri-sec-btn" data-target="StiriSiEvenimenteSec.html">Mai multe...</button>').trigger('create');//se adauga butonul la div-ul cu clasa "newscontent"
                contentDiv.append(htmlString);//se adauga continutul htmlString la div-ul cu clasa "newscontent"
                dataCont++;
                $("button").click(function () {
                    var stireNr = $("button").index(this);
                    localStorage.setItem("value", stireNr);
                    $(document).ready(function () {
                        contentDivSec.append(localStorage.getItem("value"));
                    });
                });
                //Cand se apasa butonul, se afla indexul butonului in cadrul paginii
            }
        }
        $(document).ready(function () {
            $('.stiri-sec-btn').on('click', function (event) {
                event.preventDefault();
                var url = $(this).data('target');
                location.replace(url);
            });
        });
        //Cand se apasa butonul, se redirectioneaza pe pagina StiriSiEvenimenteSec
    });
    //Infinite scroll

    $.ajax({
        dataType: 'json' //jquery parse
    });
    //Perform an asynchronous HTTP (Ajax) request.
    htmlStringSec = "<h1 class=\"news-content-title-sec\">" + data[localStorage.getItem("value") - 1].stire + " " + data[localStorage.getItem("value") - 1].number + "</h1>" + "<p class=\"news-content-p-sec\">" + data[localStorage.getItem("value") - 1].content + "</p>";//in variabila htmlString se salveaza informatia afisata pe pagina StiriSiEvenimenteSec
    $(document).ready(function () {
        contentDivSec.append(htmlStringSec);
    });
    //Se afiseaza continutul pe pagina StiriSiEvenimenteSec
})