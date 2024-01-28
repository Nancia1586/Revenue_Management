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

                <a href='pdfpointvente?nom={{ $selected->nom }}&id={{ $selected->id }}'> <button class="btn btn-danger">Export
                        PDF</button></a>
                <a href='graphepointvente'> <button class="btn btn-dark">Graphe</button></a>

                <form action="/stat/pointvente" method="get">
                    <div class="col-md-6">
                        <label for="inputEmail6" class="form-label">Point de vente</label>
                        <select id="inputState" name='pointventeid' class="form-select">
                            @foreach ($pointvente as $row)
                                <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail6" class="form-label">Mois </label>
                        <select id="inputState" name='mois' class="form-select">
                            @for($i=0;$i<12;$i++)
                                <option value='{{ $i+1}}'>{{ $mois[$i] }}</option>
                            @endfor
                        <select>
                    </div> </div>
                    <div class="col-md-6">
                        <label for="inputEmail6" class="form-label">Annee </label>
                        <select id="inputState" name='annee' class="form-select">
                            @for($i=1960;$i<2023;$i++)
                                <option value='{{ $i}}'>{{ $i }}</option>
                            @endfor
                        </select>
                    </div>
                    <div class="col-md-6">
                    </select><input type="submit" class="btn btn-success" />

                    </div>
                </form>
            </div>
            <div class="table-responsive pt-3">
                <table class="table table-striped" border="1">
                    <tr>
                        <th>MOIS</th>
                        <th>Total</th>
                    </tr>

                    @foreach ($liste as $row)
                        <tr>
                            <td>{{ $row->mois }}</td>
                            <td>{{ Util::format($row->total) . ' ' }}Ar</td>

                        </tr>
                    @endforeach
                </table>


            </div>

        </div>
    </div>
@endsection
