@extends('header')
@section('content')
    <div class="card">
        @php
            
        @endphp
        <div class="card-body">
            <div class="card-title">
                <h3>
                    Benefice mensuel
                </h3>
                <h3>
                    Annee:{{ $annee }}
                </h3>
                <button onclick="exportTableToCSV()">Exporter vers CSV</button>

                <a href='benefice_pdf?annee={{ $annee }}'> <button class="btn btn-danger">Export PDF</button></a>
                <a href='benefice_graphe?annee={{ $annee }}'> <button class="btn btn-warning">Graphe</button></a>
                <form action="/stat/benefice" method="get">

            </div>
            <div class="col-md-6">
                <label for="inputEmail6" class="form-label">Annee </label>
                <select id="inputState" name='annee' class="form-select">
                    @for ($i = 2023; $i >= 2000; $i--)
                        <option value='{{ $i }}'>{{ $i }}</option>
                    @endfor
                </select>

            </div>
            <div class="col-md-6">
                <input type="submit" class="btn btn-success" />

            </div>
            </form>
            <div class="table-responsive pt-3">
                <table class="table table-striped table-bordered" style="font-size:17px" id="myTable" border="1">
                   <tr>
                        <th>MOIS</th>
                        <th>Total Vente</th>
                        <th> Total Achat</th>
                        <th>Benefice brute</th>
                        <th>Total Perte</th>
                        <th>Benefice apres Perte</th>
                        <th>Commission</th>
                        <th>Benifice apres Commission</th>
                    </tr>
                    {{-- totalbeneficeavecperte | totalbeneficesansperte | totalvente | totalachat | moisbenefice | nommoisbenefice | anneebenefice | totalperte --}}
                    @foreach ($liste as $row)
                        <tr>
                        @php
                            $row->commission=Commission::getTotal($row->moisbenefice, $row->anneebenefice);
                            $row->beneficecommission= $row->totalbeneficeavecperte-$row->commission;
                        @endphp
                            <td>{{ $row->nommoisbenefice }}</td>
                            <td>{{ Util::format($row->totalvente) . ' ' }}Ar</td>
                            <td>{{ Util::format($row->totalachat) . ' ' }}Ar</td>
                            <td>{{ Util::format($row->totalbeneficesansperte) . ' ' }}Ar</td>
                            <td>{{ Util::format($row->totalperte) . ' ' }}Ar</td>
                            <td>{{ Util::format($row->totalbeneficeavecperte) . ' ' }}Ar</td>
                            <td>{{ Util::format($row->commission) . ' ' }}Ar</td>
                            <td>{{ Util::format($row->beneficecommission) . ' ' }}Ar</td>
                    @endforeach
                    <tr style="background-color: rgb(233, 180, 184)">
                        <td>Total</td>
                        
                        <td>{{ Util::format($liste->sum('totalvente')) . ' ' }}Ar</td>
                        <td>{{ Util::format($liste->sum('totalachat')) . ' ' }}Ar</td>
                        <td>{{ Util::format($liste->sum('totalbeneficesansperte')) . ' ' }}Ar</td>
                        <td>{{ Util::format($liste->sum('totalperte')) . ' ' }}Ar</td>

                        <td>{{ Util::format($liste->sum('totalbeneficeavecperte')) . ' ' }}Ar</td>
                        <td>{{ Util::format($liste->sum('commission')) . ' ' }}Ar</td>
                        <td>{{ Util::format($liste->sum('beneficecommission')) . ' ' }}Ar</td>
                        <td>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
@endsection
