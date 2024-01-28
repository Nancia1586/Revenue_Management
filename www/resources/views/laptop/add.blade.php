@extends('header')
@section('content')
    <script>
        function getetat() {
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
                        console.log(retour);
                        if (document.getElementById("ref").value == "") {
                            document.getElementById("message").innerHTML = "";
                        } else {
                            document.getElementById("message").innerHTML = retour.message;
                            document.getElementById("message").style.color = retour.color;
                        }
                    } else {
                        document.dyn = "Error code " + xhr.status;
                    }
                }
            };
            var value = document.getElementById("ref").value;
            console.log("/laptop/unique?ref=" + value);
            xhr.open("GET", "/laptop/unique?ref=" + value, false);
            xhr.send(null);
        }
    </script>
    <div class="row">
        <div class="col-lg-1">
        </div>
        <div class="col-lg-10">
            <div class="card">

                <div class="card-body"><a href='liste'> <button class="btn btn-success">Liste</button></a>
                    <h5 class="card-title">Ajouter nouveau Laptop</h5>


                    <form action="action_add" method="GET"class="row g-3">
                        <h4>Information sur processeur</h4>
                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">coeur</label>
                            <input type="number" placeholder='coeur'name='coeur' class="form-control" id="inputEmail1">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">generation</label>
                            <input type="number" placeholder='generation'name='generation' class="form-control"
                                id="inputEmail2">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">frequence</label>
                            <input type="number" step="0.01" placeholder='frequence'name='frequence'
                                class="form-control" id="inputEmail3">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">coreId</label>
                            <select id="inputState" name='coreid' class="form-select">\n" +
                                @foreach ($core as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail5" class="form-label">fabricantId</label>
                            <select id="inputState" name='fabricantid' class="form-select">\n" +
                                @foreach ($fabricant as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">reference</label>
                            <input id="ref" name='reference'onkeyup="getetat()" placeholder="REFERENCE"
                                class="form-control" required />
                            <div id="message"></div>
                            {{-- @s($message!=null) --}}
                            {{-- <p style="color:red">Reference invalide --}}
                            {{-- </p> --}}
                            {{-- @endif --}}
                            {{-- <input id="message" name='reference'onkeyup="getetat()" placeholder="REFERENCE" class="form-control" required/> --}}

                            {{-- </div> --}}

                            {{-- <td> --}}
                        </div>
                        <h4>Information sur ecran</h4>

                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">pouce</label>
                            <input type="number" placeholder='pouce'name='pouce' class="form-control" id="inputEmail1">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">typeecranId</label>

                            <select id="inputState" name='typeecranid' class="form-select">
                                @foreach ($typeecran as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">typeledId</label>
                            <select id="inputState" name='typeledid' class="form-select">\n" +
                                @foreach ($led as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <h4>Marque</h4>

                        <div class="col-md-6">
                            <label for="inputEmail6" class="form-label">marque</label>
                            <select id="inputState" name='marqueid' class="form-select">
                                @foreach ($marque as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">Prix ACHAT</label>
                            <input type="number"step="0.01" placeholder='PRIX'name='prix' class="form-control"
                                id="inputEmail1">
                        </div> 
                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">Prix VENTE</label>
                            <input type="number"step="0.01" placeholder='PRIX'name='prixvente' class="form-control"
                                id="inputEmail1">
                        </div>
                        <h4>Stockage</h4>

                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">capacite</label>
                            <input type="number" placeholder='capaciteram'name='capaciteram' class="form-control"
                                id="inputEmail1">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">typeramId</label>

                            <select id="inputState" name='typeramid' class="form-select">\n" +
                                @foreach ($type as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach

                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">capacite Disque</label>
                            <input type="number" placeholder='capacitedisque'name='capacitedisque' class="form-control"
                                id="inputEmail1">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">typeDisqueDurId</label>

                            <select id="inputState" name='typedisquedurid' class="form-select">
                                @foreach ($typedisque as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach

                            </select>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-secondary">Reset</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
@endsection
