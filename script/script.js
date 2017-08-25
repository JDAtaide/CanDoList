$(document).ready(function () {
    var bc = 0;
    var cor = 0;

    $('input').focus();
    $('.botao').click(function () {

        var adicionarItem = $('input').val();




        bc = bc + 1;
        $('.lista').after('<div class="container3" id="c' + bc + '"><span class= "' + bc + '">' + bc + ". " + adicionarItem + '</span><span class="itemAEliminar" id="' + bc + '"> <img src="img/X.png" /> </span></div><br/>');



        switch (n = cor) {
            case 0:
                $('#c'+ bc).css('border-color', '#99ccff');
                cor = 1;
                break;
            case 1:
                $('#c' + bc).css('border-color', '#ffff66');
                cor = 2;
                break;
            case 2:
                $('#c' + bc).css('border-color', '#ff99ff');
                cor = 3;
                break;
            case 3:
                $('#c' + bc).css('border-color', '#ff9933');
                cor = 0;
                break;

        }

        $('input').focus();
        $('input').val('');
    });




    $(document).on('click', '.itemAEliminar', function () {
        var eliminarTexto = $(this).attr('id');

        $(this).remove();
        $('.' + eliminarTexto).remove();
        $('input').focus();
        $('#c' + eliminarTexto).remove();

    });





});