var spiderSearch = /\baraña blanca|\barañas blancas|\bwhite spider|\barañas albinas|\baraña albina|\balbino spider|\balbino spiders/gi
var snakeSearch = /\bserpiente Las Vegas|\bserpientes nevada|\bserpiente casino|\bserpiente carta|\bserpiente cartas|\bserpiente baraja cartas/gi
                

        $(document).ready(function(){
            var str = $("#inputBusqueda")
            str.val("");

            $("#botonBusqueda").click(function(){
                var str = $("#inputBusqueda").val();

                if(str.match(spiderSearch)){
                    alert("ARAÑAS");
                    window.location.href = "spiderSearch.html";
                }else if(str.match(snakeSearch)){
                    alert("SERPIENTES");
                    window.location.href = "serpientesSearch.html";
                }
            });

            $(document).on('keypress',function(e){
                var str = $("#inputBusqueda").val();

                if(e.which == 13) {
                    if(str.match(spiderSearch)){
                        alert("ARAÑAS");
                        window.location.href = "spiderSearch.html";
                    }else if(str.match(snakeSearch)){
                        alert("SERPIENTES");
                        window.location.href = "serpientesSearch.html";
                    }
                }
            });
        });