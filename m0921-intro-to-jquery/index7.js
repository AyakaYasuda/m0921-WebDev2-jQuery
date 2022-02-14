function updateOutput() {
  $("iframe").contents().find("html").html(`
        <html>
            <head>
                <style type="text/css">
                    ${$("#cssPanel").val()}
                </style>
            </head>

            <body>
                ${$("#htmlPanel").val()}
            </body>
        </html>
    `);
}

updateOutput();

$(document).ready(function () {
  $("#html").click(function () {
    $(this).toggleClass("active");
    $("#htmlPanel").toggleClass("hidden");
  });

  $("#css").click(function () {
    $(this).toggleClass("active");
    $("#cssPanel").toggleClass("hidden");
  });

  $("#javascript").click(function () {
    $(this).toggleClass("active");
    $("#javascriptPanel").toggleClass("hidden");
  });
});

$("textarea").on("change", function () {
  updateOutput();
});
$("textarea").on("keyup", function () {
  updateOutput();
});
$("textarea").on("paste", function () {
  updateOutput();
});
