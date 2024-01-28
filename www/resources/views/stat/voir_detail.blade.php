@extends('header')
@section('content')
    <div class="card">

        <div class="card-body"><a href='add'> <button class="btn btn-success">Ajouter nouveau</button></a>

            <h3>Liste DetailVente</h3>
            <div class="table-responsive pt-3">
                <table class="table table-striped" border="1">
                    <tr>
                        <th>Date</th>
                        <th>laptop</th>
                        <th>Point vente</th>
                        <th>prixunitaire</th>
                        <th>quantite</th>
                        <th>total</th>
                    </tr>

                    @php
                     $total=0;
                    @endphp
                    @foreach ($liste as $row)
                        <tr>
                            @php
                               $total+=$row->quantite * $row->prixunitaire; 
                               $pointvente=App\Models\Vente::find($row->venteid)->pointventeid;
                               $po=App\Models\PointVente::find($pointvente);
                            @endphp
                            <td>{{ \App\Models\Vente::find($row->venteid)->date }}</td>
                            <td>{{ \App\Models\Laptop::find($row->laptopid)->reference }}</td>
                            <td>{{ $po->nom }}</td>
                            <td>{{ $row->prixunitaire }}</td>
                            <td>{{ $row->quantite }}</td>
                            <td>{{ $row->quantite * $row->prixunitaire }}</td>
                        </tr>
                    @endforeach
                    <tr style="background-color: rgb(235, 225, 225)">
                        <th>Total</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{{Util::format($total)}}Ar</th>

                    </tr>
                </table>


            </div>

        </div>
    </div>
@endsection
