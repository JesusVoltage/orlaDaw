$(document).ready(function () {

    $.ajax({
        url: 'profes.json',
        dataType: 'json',
        success: function (datos) {
            profes = datos;
            $(document).ready(function () {

                for (i = 0; i < 8; i++) {

                    if (i == 0) {
                        $('#profes').append(' \
                        <div class="col-sm-1 offset-sm-2"> \
                            <img class="img-fluid" src="'+ profes[i].url + '"> \
                            <p class="my-2">'+ profes[i].nombre + '</p> \
                        </div>');
                    } else {
                        $('#profes').append(' \
                        <div class="col-sm-1"> \
                            <img class="img-fluid" src="'+ profes[i].url + '"> \
                            <p class="my-2">'+ profes[i].nombre + '</p> \
                        </div>');
                    }

                }
            });
        }
    });
});
$(document).ready(function(){

    $.ajax({
        url: 'alumnos.json',
        dataType: 'json',
        success: function (datos) {
            alumnos = datos;
            $(document).ready(function () {
                $('#alumnos').append(' <div id="fila1" class="row text-center" >\
                <div class="col-sm-1 offset-sm-2"> \
                            <img class="img-fluid" src="'+ alumnos[0].url + '"> \
                            <p class="my-2">'+ alumnos[0].nombre + '</p> \
                        </div>');
                for (i = 1; i < 8; i++) {
                    $('#fila1').append('\
                        <div class="col-sm-1"> \
                            <img class="img-fluid" src="'+ alumnos[i].url + '"> \
                            <p class="my-2">'+ alumnos[i].nombre + '</p> \
                        </div>');
                }
                $('#alumnos').append('</div>');
                $('#alumnos').append(' <div id="fila2" class="row text-center" >\
                        <div class="col-sm-1 offset-sm-4"> \
                            <img class="img-fluid" src="'+ alumnos[8].url + '"> \
                            <p class="my-2">'+ alumnos[8].nombre + '</p> \
                        </div>');
                for (i = 9; i < alumnos.length; i++) {
                    $('#fila2').append('\
                        <div class="col-sm-1"> \
                            <img class="img-fluid" src="'+ alumnos[i].url + '"> \
                            <p class="my-2">'+ alumnos[i].nombre + '</p> \
                        </div>');
                }
                $('#alumnos').append('</div>');
            });
        }
    });
});