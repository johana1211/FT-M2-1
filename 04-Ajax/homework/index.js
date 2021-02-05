$("img").hide();

const URL = "http://localhost:5000";

function get() {
  $("img").show();
  $.get(`${URL}/amigos`, (amigos) => {
    $("#lista").empty();
    for (const amigo of amigos) {
      $("#lista").append(`<li>${amigo.name}</li>`);
    }
    $("img").hide();
  });
}

$("#boton").click(get);
$("#search").click(() => {
  $.get(`${URL}/amigos/${$("#input").val()}`, ({ name }) => {
    $("#amigo").text(name);
    $("#input").val("");
  });
});
$("#delete").click(() => {
  $.ajax({
    url: `${URL}/amigos/${$("#inputDelete").val()}`,
    type: "DELETE",
    success: () => {
      $("#sucess").text("Tu amigo fue borrado con éxito");
      $("#inputDelete").val("");
      get();
    },
  });
});
