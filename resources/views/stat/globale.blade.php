@extends('header')
@section('content')
    <div class="card">

        <div class="card-body">
            <div class="card-title">
                <h3>
                    Total des ventes par mois
                </h3>
                <a href='globale_pdf?annee={{$annee}}'> <button class="btn btn-danger">Export PDF</button></a>
                <a href='pointvente'> <button class="btn btn-warning">
                        Total par point de vente
                    </button></a>
                <a href='globale_graphe?annee={{ $annee }}'> <button class="btn btn-dark">Graphe</button></a>
                <form action="/stat/globale" method="get">

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
                </select><input type="submit" class="btn btn-success" />
            </div>
            </form>
        </div>

        <div class="card">

            <div class="card-body">
                <div class="card-title">
                    <h2> Total vente globale</h2>
                    <h2> Annee :{{ $annee }}</h2>

                </div>

                <div class="table-responsive pt-3">
                    <table class="table table-striped table-bordered" border="1" style="font-size:20px">
                        <tr>
                            <th>MOIS</th>
                            <th>Total</th>

                        </tr>
                        @foreach ($liste as $row)
                            <tr>
                                <td>{{ $row->nommoisvente }}</td>
                              
                                <td style="background-color: {{ \App\Models\Vente::color($row->totalvente) }}">
                                <a href="/stat/voir_detail?mois={{$row->moisvente}}&&annee={{$row->anneevente}}">
                                    {{ Util::format($row->totalvente) . ' ' }}Ar
                                </a></td>
                                {{-- <td>{{ \App\Models\Vente::color($row->totalvente) }}</td> --}}
                                {{-- <td> --}}
                                    

                            </tr>
                        @endforeach
                        <tr style="background-color:rgb(230, 177, 184)">
                            <td>Total</td>
                            <td>{{ Util::format($liste->sum('totalvente')) . ' ' }}Ar</td>
                            <td>Ar</td>
                        </tr>
                    </table>


                </div>

            </div>
        </div>
    @endsection
