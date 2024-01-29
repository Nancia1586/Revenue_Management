<html>

<head>
    <script type="text/javascript">
        function getRegion() {
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
                        var retour = JSON.parse(xhr.responseText);
                        var val="";
                        for (let index = 0; index < retour.length; index++) {
                            const element = retour[index];
                           val+="<option value='"+element.id+"'>"+element.region+"</option>";
                           console.log(element.id);
                        }
                        document.getElementById("region").innerHTML=val;

                    } else {
                        document.dyn = "Error code " + xhr.status;
                    }
                }
            };
            var value = document.getElementById("province").value;
            document.getElementById("district").innerHTML="";

            console.log(value);
            xhr.open("GET", "/util/region/"+value, false);
            xhr.send(null);
        }
        
        function getDistrict() {
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
                        var retour = JSON.parse(xhr.responseText);
                        var val="";
                        for (let index = 0; index < retour.length; index++) {
                            const element = retour[index];
                           val+="<option value='"+element.id+"'>"+element.district+"</option>";
                           console.log(element.id);
                        }
                        document.getElementById("district").innerHTML=val;

                    } else {
                        document.dyn = "Error code " + xhr.status;
                    }
                }
            };
            var value = document.getElementById("region").value;
            console.log("/util/district/"+value);
            xhr.open("GET", "/util/district/"+value, false);
            xhr.send(null);
        }

        function testSynchrone() {
            var resultat = document.getElementById("resultat");
            resultat.innerHTML = "synchrone";
        }
    </script>
</head>

<body>
    <select name="province" onchange="getRegion()" id="province">
        @foreach ($province as $row)
            <option value="{{ $row->id }}">{{ $row->province }}</option>
        @endforeach
    </select>
    <select name="region" onchange="getDistrict()"id="region">

    </select>
     <select name="district" id="district">
        
    </select>
   
</body>

</html>
