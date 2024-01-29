<form action="/util/action_upload" enctype="multipart/form-data" method="POST">
    @csrf

    <div class="form-group">

        <input type="file" name="image" class="form-control" id="exampleInputName1" placeholder="resume">

    </div>
    
    <div class="form-group">

        <input type="submit" value="uploader" class="form-control" id="exampleInputName1" placeholder="resume">

    </div>
</form>
