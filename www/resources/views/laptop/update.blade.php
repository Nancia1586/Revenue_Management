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
        @php
        // $lapt=$laptop;
        @endphp
        <div class="col-lg-10">
            <div class="card">

                <div class="card-body"><a href='liste'> <button class="btn btn-success">Liste</button></a>
                    <h5 class="card-title">Ajouter nouveau Laptop


                    </h5>

                    <form action="action_update" method="GET"class="row g-3">
                        <h4>Information sur processeur</h4>
                        <div class="col-md-6">
                            <input type="hidden"value="{{$laptop->processeurid}}"name="processeurid" class="form-control" id="inputEmail1">
                            
                            <label for="inputEmail1" class="form-label">coeur</label>
                            <input type="number" placeholder='coeur'name='coeur' value="{{$laptop->processeur()->coeur}}" class="form-control" id="inputEmail1">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">generation</label>
                            <input type="number" placeholder='generation' value="{{$laptop->processeur()->generation}}"name='generation' class="form-control"
                                id="inputEmail2">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">frequence</label>
                            <input type="number"value="{{$laptop->processeur()->frequence}}" step="0.01" placeholder='frequence'name='frequence'
                                class="form-control" id="inputEmail3">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">coreId</label>
                       
                            <input type="text"value="{{$laptop->processeur()->core()->nom}}" step="0.01"   class="form-control" disabled/>

                            <select id="inputState" name='coreid' value="{{$laptop->processeur()->core()->id}}"class="form-select">
                                <option value="{{$laptop->processeur()->core()->id}}" >{{$laptop->processeur()->core()->nom}}" </option>

                                @foreach ($core as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail5" class="form-label">fabricantId</label>
                            <input type="text"value="{{$laptop->processeur()->fabricant()->nom}}" step="0.01"   class="form-control" disabled/>

                            <select id="inputState" name='fabricantid' class="form-select">
                                <option value="{{$laptop->processeur()->fabricant()->id}}" >{{$laptop->processeur()->fabricant()->nom}}" </option>
                                @foreach ($fabricant as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">reference</label>
                            <input id="ref" name='reference' value="{{$laptop->reference}}"placeholder="REFERENCE"
                                class="form-control" required />
                            <div id="message"></div>
                        </div>
                        <h4>Information sur ecran</h4>

                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">pouce</label>
                            <input type="hidden"value="{{$laptop->ecranid}}"name="ecranid" class="form-control" id="inputEmail1">
                            <input type="hidden"value="{{$laptop->id}}"name="laptopid" class="form-control" id="inputEmail1">

                            <input type="number" value="{{$laptop->ecran()->pouce}}"placeholder='pouce'name='pouce' class="form-control" id="inputEmail1">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">typeecranId</label>
                            <input type="text"value="{{$laptop->ecran()->typeecran()->nom}}" step="0.01"   class="form-control" disabled/>
                            <select id="inputState" name='typeecranid' class="form-select">
                                <option value="{{$laptop->ecran()->typeecran()->id}}" >{{$laptop->ecran()->typeecran()->nom}}" </option>
                                @foreach ($typeecran as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">typeledId</label>
                            <input type="text"value="{{$laptop->ecran()->typeled()->nom}}" step="0.01"   class="form-control" disabled/>

                            <select id="inputState" name='typeledid' class="form-select">
                                <option value="{{$laptop->ecran()->typeled()->id}}" >{{$laptop->ecran()->typeled()->nom}}" </option>

                                @foreach ($led as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <h4>Marque</h4>

                        <div class="col-md-6">
                            <label for="inputEmail6" class="form-label">marque</label>
                            <input type="text"value="{{$laptop->marque()->nom}}" step="0.01"   class="form-control" disabled/>

                            <select id="inputState" name='marqueid' class="form-select">
                                <option value="{{$laptop->marque()->id}}" >{{$laptop->marque()->nom}}" </option>

                                @foreach ($marque as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">Prix</label>
                            <input type="number"step="0.01"value="{{$laptop->prix}}"  placeholder='PRIX'name='prix' class="form-control"
                                id="inputEmail1">
                                <div class="col-md-6">
                                  
                            <label for="inputEmail1" class="form-label">Prix VENTE</label>
                            <input type="number"step="0.01" placeholder='PRIX'name='prixvente'value="{{$laptop->prixvente}}" class="form-control"
                                id="inputEmail1">
                        </div>
                        </div>
                        <h4>Stockage</h4>

                        <div class="col-md-6">
                            <input type="hidden"value="{{$laptop->ramid}}"name="ramid" class="form-control" id="inputEmail1">

                            <label for="inputEmail1" class="form-label">capacite</label>
                            <input type="number" value="{{$laptop->ram()->capacite}}"  placeholder='capaciteram'name='capaciteram' class="form-control"
                                id="inputEmail1">
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">typeramId</label>

                            <select id="inputState" name='typeramid' class="form-select">
                                <option value="{{$laptop->ram()->typeram()->id}}" >{{$laptop->ram()->typeram()->nom}}</option>
                                @foreach ($type as $row)
                                    <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                @endforeach

                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail1" class="form-label">capacite Disque</label>
                            <input type="number" value="{{$laptop->disquedur()->capacite}}"  placeholder='capacitedisque'name='capacitedisque' class="form-control"
                                id="inputEmail1">
                            <input type="hidden"value="{{$laptop->disquedurid}}"name="disquedurid" class="form-control" id="inputEmail1">

                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail2" class="form-label">typeDisqueDurId</label>

                            <select id="inputState" name='typedisquedurid' class="form-select">
                                <option value="{{$laptop->disquedur()->type()->id}}" >{{$laptop->disquedur()->type()->nom}} </option>

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
