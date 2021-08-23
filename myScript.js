$(document).ready(function () {
  $('.acasa-btn, .stiri-btn, .educatie-btn, .cercetare-btn, .personal-btn, .materiale-didactice-btn, .contact-btn, .cercetare-sec-btn, .educatie-sec-btn, .materiale-didactice-sec-btn, .stiri-btn, .stiri-sec-btn').on('click', function (event) {
    //event.preventDefault();
    var url = $(this).data('target');
    location.replace(url);
  });
});

//Event listener pentru intoarcere pe pagina Materiale didactice


$(document).ready(function () {
  $("#toggle-div-titlu-1").hide();
  $("#toggle-div-content-1").hide();
  $("#anul1").click(function () {
    $("#toggle-div-titlu-1").toggle();
    $("#toggle-div-content-1").toggle();
  });
});
//Hide si toggle continut in momentul apasarii h1 = "Anul I" pe pagina Educatie si EducatieSecMaster

$(document).ready(function () {
  $("#toggle-div-titlu-2").hide();
  $("#toggle-div-content-2").hide();
  $("#anul2").click(function () {
    $("#toggle-div-titlu-2").toggle();
    $("#toggle-div-content-2").toggle();
  });
});
//Hide si toggle continut in momentul apasarii h1 = "Anul II" pe pagina Educatie si EducatieSecMaster

$(document).ready(function () {
  $("#toggle-div-titlu-3").hide();
  $("#toggle-div-content-3").hide();
  $("#anul3").click(function () {
    $("#toggle-div-titlu-3").toggle();
    $("#toggle-div-content-3").toggle();
  });
});
//Hide si toggle continut in momentul apasarii h1 = "Anul III" pe pagina Educatie

$(document).ready(function () {
  $("#toggle-div-titlu-4").hide();
  $("#toggle-div-content-4").hide();
  $("#anul4").click(function () {
    $("#toggle-div-titlu-4").toggle();
    $("#toggle-div-content-4").toggle();
  });
});
//Hide si toggle continut in momentul apasarii h1 = "Anul IV" pe pagina Educatie

