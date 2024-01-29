@extends('header')
@section('content')
    <div class="card">

        <div class="card-body"><a href='add'> <button class="btn btn-success">Ajouter nouveau</button></a>
            <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal"
                data-bs-target="#basicModal">RECHERCHE</button>
            <div class="modal fade right" id="basicModal">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Filtrage</h5>
                        </div>
                        <div class="modal-body">
                            <form action="/laptop/liste" method="GET"class="row g-3">
                                <div class="col-md-4">
                                    {{-- disquedur                    --}}
                                    <label for="inputEmail1" class="form-label">ram</label>
                                    <select id="inputState" name='typeram' class="form-select">
                                        <option value="">...</option>
                                        @foreach ($typeram as $row)
                                            <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                        @endforeach
                                    </select>

                                    <label for="inputEmail2" class="form-label">Disquedur</label>
                                    <select id="inputState" name='typedisque' class="form-select">
                                        <option value="">...</option>

                                        @foreach ($typedisque as $row)
                                            <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                        @endforeach
                                    </select>
                                    <label for="inputEmail3" class="form-label">Pouces</label>
                                    <input id="inputState" type="number" step="0.01" name='pouce' placeholder="prix"
                                        class="form-control" />
                                    <label for="inputEmail3" class="form-label">Generation</label>
                                    <input id="inputState" type="number" step="0" name='generation'
                                        placeholder="Generation" class="form-control" />
                                </div>
                                <div class="col-md-4">
                                    {{-- {{ dump($disquedur)}} --}}
                                    <label for="inputEmail3" class="form-label">Ram Min</label>
                                    <input id="inputState" type="number" step="0.01" name='rammin' placeholder="prix"
                                        class="form-control" />
                                    <label for="inputEmail3" class="form-label">Stockage Min</label>
                                    <input id="inputState" type="number" step="0.01" name='disquemin'
                                        placeholder="disquemin" class="form-control" />

                                    <label for="inputEmail5" class="form-label">Type Ecran</label>
                                    <select id="inputState" name='ecranid' class="form-select">
                                        <option value="">...</option>

                                        @foreach ($typeecran as $row)
                                            <option value='{{ $row->id }}'>{{ $row->nom }}
                                            </option>
                                        @endforeach
                                    </select>
                                    <label for="inputEmail3" class="form-label">Frequence min</label>
                                    <input id="inputState" type="number" step="0" name='frequencemin'
                                        placeholder="frequencemin" class="form-control" />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputEmail3" class="form-label">Ram Max</label>
                                    <input id="inputState" type="number" step="0.01" name='rammax'
                                        placeholder="RAM Max" class="form-control" />
                                    <label for="inputEmail3" class="form-label">Stockage Max</label>
                                    <input id="inputState" type="number" step="0.01" name='disquemax'
                                        placeholder="disque" class="form-control" />
                                    <label for="inputEmail5" class="form-label">Coeur</label>
                                    <select id="inputState" name='coreid' class="form-select">
                                        <option value="">...</option>

                                        @foreach ($core as $row)
                                            <option value='{{ $row->id }}'>{{ $row->nom }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label for="inputEmail5" class="form-label">Fabricant</label>
                                    <select id="inputState" name=fabricantid' class="form-select">
                                        <option value="">...</option>

                                        @foreach ($frabricant as $row)
                                            <option value='{{ $row->id }}'>
                                                {{ $row->nom }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail6" class="form-label">marque</label>
                                    <select id="inputState" name='marqueid' class="form-select">
                                        <option value="">...</option>

                                        @foreach ($marque as $row)
                                            <option value='{{ $row->id }}'>{{ $row->nom }}</option>
                                        @endforeach
                                    </select>
                                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>

            <h3>Liste Laptop</h3>
            <div class="table-responsive pt-3">
                <table class="table table-striped" border="1">
                    <tr>
                        <th>ram</th>
                        <th>disquedur</th>
                        <th>reference</th>
                        <th>processeur</th>
                        <th>ecran</th>
                        <th>marque</th>
                        <th>
                            PRIX
                        </th>
                        <th>
                            PRIXvente
                        </th>

                    </tr>



                    @foreach ($liste as $row)
                        <tr>
                            <td>{{ $row->ram()->capacite }}Go{{ $row->ram()->typeram()->nom }}</td>
                            <td>{{ $row->disquedur()->capacite }}Go</td>
                            <td>{{ $row->reference }}</td>
                            <td>{{ $row->processeur()->fabricant()->nom }},core
                                {{ $row->processeur()->core()->nom }},{{ $row->processeur()->generation }}em Gen
                                {{ $row->processeur()->coeur }}CPU~{{ $row->processeur()->frequence }}ghz</td>
                            <td>{{ $row->ecran()->pouce }}pouce</td>
                            <td>{{ $row->marque()->nom }}</td>
                            <td>
                                {{ Util::format($row->prix) }}Ar
                            </td>
                            <td>
                                {{ Util::format($row->prixvente) }}Ar
                            </td>
                            <td>
                                <a href="/laptop/update?laptopid={{ $row->id }}">
                                    <button type="button" class="btn btn-success mb-2"
                                        data-bs-toggle="modal">Modifier</button>
                                </a>

                            </td>
                            </td>

                        </tr>
                    @endforeach
                </table>

                {{ $liste->links() }}

            </div>

        </div>
    </div>
@endsection
