< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <title>Teste JavaScript 02</title>
                <script>
                    function acendeLampada() {
                        document.getElementById("luz").src = "../projeto-glass-html5/_imagens/lampada-acesa.jpg";
        }

                    function apagaLampada() {
                        document.getElementById("luz").src = "../projeto-glass-html5/_imagens/lampada-apagada.jpg";
        }

                    function quebraLampada() {
                        document.getElementById("luz").src = "../projeto-glass-html5/_imagens/lampada-quebrada.jpg";
        }
                </script>
        </head>
        <body>
            <h1>Acenda a lâmpada</h1>
            <img src="../projeto-glass-html5/_imagens/lampada-apagada.jpg" id="luz" onmousemove="acendeLampada()" onmouseout="apagaLampada()" onclick="quebraLampada()" />
        </body>
    </html>
