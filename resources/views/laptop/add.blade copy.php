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
                        if(document.getElementById("ref").value==""){
                            document.getElementById("message").innerHTML ="";
                        }
                        else{
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
        <div class="col-lg-2">
        </div>
        <div class="col-lg-8">
            <div class="card">

                <div class="card-body"><a href='liste'> <button class="btn btn-success">Liste</button></a>
                    <h5 class="card-title">Ajouter nouveau Laptop</h5>


                    <form action="action_add" method="POST"class="row g-3">
                        @csrf
                        <div class="col-md-6">
                            {{-- disquedur                    --}}
                            <label for="inputEmail1" class="form-label">ram</label>
                            <select id="inputState" name='ramid' class="form-select">
                                @foreach ($ram as $row)
                                    <option value='{{ $row->id }}'>{{ $row->capacite }}go,{{ $row->typeram()->nom }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            {{-- {{ dump($disquedur)}} --}}

                            <label for="inputEmail2" class="form-label">disquedur</label>

                            <select id="inputState" name='disquedurid' class="form-select">
                                @foreach ($disquedur as $row)
                                    <option value='{{ $row->id }}'>{{ $row->capacite }}Go,{{ $row->type()->nom }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">reference</label>
                            <input id="ref" name='reference'onkeyup="getetat()" placeholder="REFERENCE"
                                class="form-control" required />
                            <div id="message"></div>
                            @if($message!=null)
                                <p style="color:red">Reference invalide
                                </p>
                            @endif
                            {{-- <input id="message" name='reference'onkeyup="getetat()" placeholder="REFERENCE" class="form-control" required/> --}}

                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail3" class="form-label">Prix</label>
                            <input id="inputState" type="number" step="0.01" name='prix' placeholder="prix"
                                class="form-control" required />
                        </div>
                        <div class="col-md-6">

                            <label for="inputEmail4" class="form-label">processeur</label>
                            <select id="inputState" name='processeurid' class="form-select">
                                @foreach ($processeur as $row)
                                    <option value='{{ $row->id }}'>{{ $row->fabricant()->nom }},core
                                        {{ $row->core()->nom }},{{ $row->generation }}em Gen
                                        {{ $row->coeur }}CPU~{{ $row->frequence }}ghz</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="inputEmail5" class="form-label">ecran</label>
                            <select id="inputState" name='ecranid' class="form-select">
                                @foreach ($ecran as $row)
                                    <option value='{{ $row->id }}'>{{ $row->pouce }}
                                        pouce,{{ $row->typeled()->nom }},{{ $row->typeecran()->nom }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail6" class="form-label">marque</label>
                            <select id="inputState" name='marqueid' class="form-select">
                                @foreach ($marque as $row)
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
