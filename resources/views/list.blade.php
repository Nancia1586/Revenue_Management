@extends('header')
@section('content')
    @include('modal')
    @include('util.form2')
    <div class="card">
        
        <div class="card-body">

            <h3>Vehicules</h3>

            <div class="table-responsive pt-3">
                <table class="table table-striped" border="1">
                    <tr>
                        <td>Vehicules </td>
                        <td>Marque</td>
                        <td>Model</td>
                    </tr>
                    <?php
              foreach ($vehicule  as $key) {
              ?>
                    <tr>
                        <td><?php echo $key->matricule; ?></td>
                        <td><?php echo $key->marque; ?></td>
                        <td><?php echo $key->modele; ?></td>
                        <td>
                            <a class="btn btn-success" href="/pdf?id={{ $key->id }}">Detail PDF</a>
                            <a class="btn btn-danger" href="/vehicules/add_maintenance?id={{ $key->id }}">Add
                                maintenance</a>
                            <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal"
                                data-bs-target="#basicModal">Basic modal</button>
                            <div class="modal fade" id="basicModal">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                            </button>
                                        </div>
                                        <div class="modal-body">Modal body text goes here.</div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger light"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>

                    </tr>
                    <?php
              }
                ?>


                </table>
                {{ $vehicule->links() }}

            </div>

        </div>
    </div>
    @include('util.searchform')
    </body>

    </html>
@endsection
