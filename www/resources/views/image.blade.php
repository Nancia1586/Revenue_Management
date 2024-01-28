
<?php 
?>
@foreach ($data as $item)
<img style="width:200px;height:270px;margin-left:200px;"src="{{Util::base64($item->photo)}}"/> 
<p>
   {{$item->nom}}  
</p>
@endforeach
     <h6 style="text-align: center;">
          Andoharanofotsy Mifety
     </h6>
     <h1>
         22 Juin - 23 juin
     </h1>

</body>

</html>
