@extends('header')
@section('content')
    <div class="card">
    @php
    $mois=['Jan','Fev','Mars','Avril','Mai','Juin','Juillet','Aout','Sept','Oct','Nov','Dec'];
    @endphp
        <div class="card-body">
            <div class="card-title">
                <h5>
                    Total des ventes par mois
                </h5>
                <h2>
                    Point de vente:{{ $selected->nom }}
                </h2>
                <h2>
                    Annee:{{$annee}}
                </h2>
            </div>

                <a href='pointvente_pdf?pointventeid={{ $selected->id }}&&annee={{$annee}}'> <button class="btn btn-danger">Export
                        PDF</button></a>
                <a href='pointvente_graphe?pointventeid={{ $selected->id }}&&annee={{$annee}}'> <button class="btn btn-dark">Graphe</button></a>

                <form action="/stat/pointvente?nom={{ $selected->nom }}&id={{ $selected->id }}&&annee=" method="get">
                    <div class="col-md-6">
                        <label for="inputEmail6" class="form-label">Point de vente</label>
                        <select id="inputState" name='pointventeid' class="form-select">
                            @foreach ($pointvente as $row)
                                <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                            @endforeach
                        </select>
                    </div>
                 {{-- </div> --}}
                    <div class="col-md-6">
                        <label for="inputEmail6" class="form-label">Annee </label>
                        <select id="inputState" name='annee' class="form-select">
                            @for($i=2023;$i>=2000;$i--)
                                <option value='{{ $i}}'>{{ $i }}</option>
                            @endfor
                        </select>
                    </div>
                    <div class="col-md-6">
                    </select><input type="submit" class="btn btn-success" />

                    </div>
                </form>
        <div class="card-body">

            <div class="table-responsive pt-3">
                <table class="table table-striped table-bordered" border="1" style="font-size:20px">
                    <tr>
                        <th>MOIS</th>
                        <th>Total des ventes</th>


                    @foreach ($liste as $row)
                        <tr>
                            <td>{{ $row->nommoisvente }}</td>
                            <td>{{ Util::format($row->totalvente) . ' ' }}Ar</td>

                        </tr>
                    @endforeach
                    <tr style="background-color:rgb(230, 177, 184)">
                        <td>Total</td>
                        <td>{{ Util::format($liste->sum('totalvente')) . ' ' }}Ar</td>
                    </tr>
                </table>


            </div>

        </div>
    </div>
@endsection
