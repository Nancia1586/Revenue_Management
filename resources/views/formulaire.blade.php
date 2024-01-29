@extends('header')
@section('content')
    <div class="card">
<form action="/util/action_formulaire" method="get">
    <input type="text" name="form"/>
    <input type="submit"/>
  </form>
  
  <script>
    var app = <?php echo json_encode($json); ?>;
    app.forEach(elem => {
      console.log(elem.id+"  "+elem.matricule);
    });
</script>

@endsection