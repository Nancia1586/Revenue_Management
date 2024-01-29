<html>

<head>
    <script type="text/javascript">
        function getText(value) {
            var xhr;
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
                try {
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                } catch (e2) {
                    try {
                        xhr = new XMLHttpRequest();
                    } catch (e3) {
                        xhr = false;
                    }
                }
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var retour = xhr.responseText;
                        document.getElementById("text").innerHTML = retour;

                    } else {
                        document.dyn = "Error code " + xhr.status;
                    }
                }
            };
            console.log(value);
            xhr.open("GET", "/util/textajax?text=" + value, false);
            xhr.send(null);
        }

        function close(value) {
            var xhr;
            try {
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
                try {
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                } catch (e2) {
                    try {
                        xhr = new XMLHttpRequest();
                    } catch (e3) {
                        xhr = false;
                    }
                }
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var retour = xhr.responseText;
                        document.getElementById("html").innerHTML = retour;

                    } else {
                        document.dyn = "Error code " + xhr.status;
                    }
                }
            };
            document.getElementById("html").innerHTML = "";
 
            // xhr.open("GET", "/util/html", false);
            xhr.send(null);
        }

        console.log( document.getElementById("html").innerHTML);

    </script>
</head>

<body>
    <input type="text" onkeyup="getText(this.value) " />
    <span id="text"></span>

    <button onclick="show()">
        CLIQUER
    </button>

    <button onclick="show()">
        close
    </button>
    <span id="html">
    </span>
</body>

</html>
