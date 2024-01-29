@extends('side')
@section('content')
    <div class="row">
        <div class="col-md-12">
            <h3>Vehicules</h3>
            <table class="table" >
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
                        <a class="btn btn-success" href="/pdf?id={{$key->id}}">Detail PDF</a>
                        <a class="btn btn-danger"  href="/vehicules/add_maintenance?id={{$key->id}}">Add maintenance</a>
                    </td>

                </tr>
                <?php
              }
                ?>
              

            </table>
        </div>
    </div>

    </body>

</html>
@endsection