<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;

class Laptop extends Model
{
    use HasFactory;
    protected $table = 'laptop';
    public $timestamps = false;
    public function ram()
    {

        return Ram::find($this->ramid);
    }
    public static function laptop($id){
        return Laptop::find($id);
    }  public static function laptopByRef($id){
        return Laptop::whereRaw('reference =? ',[$id])->get();
    }
    public static function uniquereference($ref)
    {
        $table = \DB::select("select *from laptop where lower(reference)='" . strtolower($ref)."'");
        if (count($table) == 0) {
            return 'true';
        }
        return 'false';
    }
    public static function uniquereferenceU($ref,$id)
    {
        $table = \DB::select("select *from laptop where lower(reference)='" . strtolower($ref)."' and id!=".$id);
        if (count($table) == 0) {
            return 'true';
        }
        return 'false';
    }
    public static function etatstock($id)
    {
        $sql = "select sum(entree)-sum(sortie) as sum from stockmagasin where laptopid=" . $id;
        $all = StockMagasin::fromQuery($sql);
        ;
        if ($all[0]->sum == null) {
            return 0;
        }
        return $all[0]->sum;
    }
    public static function etatstockpointvente($id)
    {
        $sql = "select sum(entree)-sum(sortie) as sum from stockpointvente where laptopid=" . $id;
        $all = StockPointVente::fromQuery($sql);
        ;
        if ($all[0]->sum == null) {
            return 0;
        }
        return $all[0]->sum;
    }
    public static function etatstockpointvente_($id,$pointvente)
    {
        $sql = "select sum(entree)-sum(sortie) as sum from stockpointvente where laptopid=" . $id." and pointventeid=".$pointvente;
        $all = StockPointVente::fromQuery($sql);
        ;
        if ($all[0]->sum == null) {
            return 0;
        }
        return $all[0]->sum;
    }
    public function nom()
    {
        return $this->marque()->nom . " " .
            $this->processeur()->fabricant()->nom .$this->reference
        ;
    }public function print()
    {
        return $this->marque()->nom . " " .
            $this->processeur()->fabricant()->nom . "core"
            . $this->processeur()->core()->nom . " " . $this->processeur()->generation . "em Gen" . "   "
            . $this->processeur()->coeur . "CPU~" . $this->processeur()->frequence . "ghz"
        ;
    }
    public function marque()
    {
        try {
            return Marque::find($this->marqueid);
        } catch (\Throwable $th) {
            return "";
        }
    }


    public function ecran()
    {
        try {
            return Ecran::find($this->ecranid);
        } catch (\Throwable $th) {
            return "";
        }
    }
    public function processeur()
    {
        try {
            return Processeur::find($this->processeurid);

        } catch (\Throwable $th) {
            return "";
        }
    }
    public function disquedur()
    {
        try {
            return Disquedur::find($this->disquedurid);

        } catch (\Throwable $th) {
            return "";
        }
    }
} ?>