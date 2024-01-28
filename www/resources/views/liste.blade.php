@extends('header')
@section('content')
    <div class="card">

        <div class="card-body"><a href='add'> <button class="btn btn-success">Ajouter nouveau</button></a>
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h2>Recherche avanc&eacute;e</h2>
                            <form acion="/receptionmagasin/liste" method="get">
                                <div class="table-responsive pt-3">
                                    <table class="table table-striped" border="1">
                                        <tr>
                                            <th>
                                                Date debut
                                            </th>
                                            <th>
                                                Date Fin

                                            </th>
                                            <th>
                                                Prix min
                                            </th>
                                            <th>
                                                Prix max

                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="date" class="form-control" name="date1"
                                                    placeholder="date1" />
                                            </td>
                                            <td>
                                                <input type="date" class="form-control" name="date2"
                                                    placeholder="date2" />
                                            </td>
                                            <td>
                                                <input type="number" class="form-control" name="prixunitaire1"
                                                    placeholder="prixunitaire1" />
                                            </td>
                                            <td>
                                                <input type="number" class="form-control" name="prixunitaire1"
                                                    placeholder="prixunitaire2" />
                                            </td>
                                            <td>
                                                <input type="submit" />
                                            </td>
                                        </tr>
                                    </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Liste ReceptionMagasin</h3>

            <div class="table-responsive pt-3">
                <table class="table table-striped" border="1">
                    <tr>
                        <th>laptopId</th>
                        <th>quantite</th>
                        <th>prixunitaire</th>

                    </tr>



                    @foreach ($liste as $row)
                        <tr>
                            <td>{{ $row->laptop()->nom() }}</td>
                            <td>{{ $row->quantite }}</td>
                            <td>{{ Util::format($row->prixunitaire) }}Ar</td>

                        </tr>
                    @endforeach
                </table>

                {{ $liste->links() }}

            </div>

        </div>
    </div>
@endsection
