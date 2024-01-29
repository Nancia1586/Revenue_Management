@extends('header')
@section('content')
    <div class="row">
           
                   
            <h3>Vehicules</h3>
            <form acion="/uti/search" method="get">

                <div class="table-responsive pt-3">
                    <table class="table table-striped" border="1">
                        <tr>
                            <th>
                                MODELE
                            </th>
                            <th>
                                MARQUE
                            </th>
                            <th>
                                matricule
                            </th>
                            <th>
                                ID
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" name="modele" placeholder="modele" />
                            </td>
                            <td>
                                <input type="text" name="marque" placeholder="marque" />
                            </td>
                            <td>
                                <input type="text" name="matricule" placeholder="matricule" />
                            </td>
                            <td>
                                <input type="number" name="id" placeholder="id" />
                            </td>
                            <td>
                                <input type="submit" />
                            </td>
                        </tr>
                    </table>
            </form>
        </div>
                </div></div>
            <div class="col-lg-12 grid-margin stretch-card">
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

                </tr>
                <?php
              }
                ?>


            </table>
        </div>
    </div>
    {{ $vehicule->links() }}
    </div>

    </body>

    </html>
@endsection
