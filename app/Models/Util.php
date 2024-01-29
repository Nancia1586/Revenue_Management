<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Util extends Model
{

    use HasFactory;
    public static function crypt(string $str)
    {

        $tab = DB::select("select md5('" . $str . "') as test");
        // echo $tab;
        return $tab[0]->test;
    }
    public static function base64($path1)
    {
        /// omeo path fotsiny
        $type1= pathinfo($path1, PATHINFO_EXTENSION);
        $data1 = file_get_contents($path1);
        $base641 = 'data:image/' . $type1 . ';base64,' . base64_encode($data1);
        return $base641;
    }
    public static function diff_datetime($debut, $fin)
    {
        $datetime1 = \Carbon\Carbon::parse($fin);
        $datetime2 = \Carbon\Carbon::parse($debut);
        $diff = $datetime1->diff($datetime2); //datetime2 - datetime1
        $array = [];
        $array[0] = $diff->format('%d'); //jours
        $array[1] = $diff->format('%h'); //heures
        $array[2] = $diff->format('%i'); //minutes
        $array[3] = $diff->format('%s'); //secondes
        // dump($array);
        return $array;
    }

    public static function format($num)
    {
        return number_format($num, 2, '.', ' ');
    }
    public static function now()
    {
        return date('Y-m-j', strtotime('today'));
        ;
    }
    public static function getEtat($id)
    {
        $tab = Commande::fromQuery("select *from commande where id=" . $id);
        return $tab[0]->etat;
    }
    public static function date($date)
    {
        return date('j F Y', strtotime($date));
    }
    public static function diff_date($debut, $fin)
    {
        $date1 = \Carbon\Carbon::parse($fin);
        $date2 = \Carbon\Carbon::parse($debut);
        $diff = $date1->diffInDays($date2); //date2 - date1
        echo $diff;
    }

    public static function diff_time($debut, $fin)
    {
        $time1 = \Carbon\Carbon::parse($fin);
        $time2 = \Carbon\Carbon::parse($debut);
        $diff = $time1->diff($time2); //time2 - time1
        $array = [];
        $array[0] = $diff->format('%h'); //heures
        $array[1] = $diff->format('%i'); //minutes
        $array[2] = $diff->format('%s'); //secondes
        // dump($array);
        return $array;
    }

    public static function addToDate($datetime, $jour = 0, $heure = 0, $minute = 0, $seconde = 0)
    {
        $date = \Carbon\Carbon::parse($datetime);
        $time = \Carbon\CarbonInterval::create(0, 0, 0, $jour, $heure, $minute, $seconde); // Créer un intervalle de temps de 1 heure et 30 minutes
        $date->add($time); // Ajouter le temps à la date actuelle
        // echo $date; // Afficher la nouvelle date
        return $date;
    }

    //Recherche simple
    public static function recherche_simple($mot)
    {
        $tab = Util::fromQuery("select * from auteur where upper(nom) like upper('%" . $mot . "%') or upper(email) like upper('%" . $mot . "%')");
        return $tab;
    }

    //Recherche multicritere
    public static function recherche_multicritere($req)
    {
        $tab = Util::fromQuery($req);
        return $tab;
    }
    public static function escape_datetime($req)
    {
        $ind1 = explode('T', $req);
        return $ind1[0] . ' ' . $ind1[1] . ":00";
    }
    public static function login($email, $mdp)
    {
        $tab = Users::fromQuery("select *From users where Email='" . $email . "' and mdp='" . $mdp . "' limit 1");
        $id = 0;
        if (count($tab) == 0) {
            return -1;
        }
        return $tab[0]['id'];

    }
}