<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;

class Admin extends Model
{
    use HasFactory;
    protected $table = 'admin';
    public $timestamps = false;
    public static function dispo()
    {
        return Users::fromQuery("select *from v_usersdispo");
    }
    public static function login($email, $mdp)
    {
        $tab = Admin::fromQuery("select *From admin where login='" . $email . "' and mdp='" . Util::crypt($mdp) . "' limit 1");
        $id = 0;
        if (count($tab) == 0) {
            return -1;
        }
        return $tab[0]->id;

    }
} ?>