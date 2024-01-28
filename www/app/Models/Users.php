<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;

class Users extends Model
{
    use HasFactory;
    protected $table = 'users';
    public $timestamps = false;
    public static function dispo()
    {
        return Users::fromQuery("select *from v_usersdispo");
    }
    public static function pointvente($id)
    {
        $pointvente = PointVente::fromQuery("select *from pointventeusers where usersid=" . $id);
        return $pointvente[0]->pointventeid;///$pointvente[0]->id;
    }
    public static function login($email, $mdp)
    {
        $tab = Users::fromQuery("select *From users where login='" . $email . "' and  mdp='" . Util::crypt($mdp) . "' limit 1");
        $id = 0;
        if (count($tab) == 0) {
            return -1;
        }
        $pointvente = PointVente::fromQuery("select *from  pointventeusers where usersid=" . $tab[0]['id']);
        if (count($pointvente) == 0) {
            return -2;

        }
        return $tab[0]->id;

    }
} ?>