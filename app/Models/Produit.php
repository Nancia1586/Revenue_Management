<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;

class Produit extends Model
{
    use HasFactory;
    protected $table = 'produit';
    public $timestamps = false;
    public function prix_formater(){
        return \Util::format($this->prix);
    }

}
?>
