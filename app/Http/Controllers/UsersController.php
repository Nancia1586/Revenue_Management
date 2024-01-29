<?php
namespace App\Http\Controllers;

use App\Models\Affectation;
use App\Models\PointVente;
use App\Models\PointVenteDispo;
use App\Models\PointVenteUsers;
use App\Models\Users;
use App\Models\Util;
use Illuminate\Http\Request;

class UsersController extends Controller
{



    public function liste()
    {

        $all = Users::paginate(6);

        return view('users.liste', ['liste' => $all]);
    }
    public function affecter($id)
    {
        $affecter = PointVenteDispo::all();
        return view('users.affecter', ['id' => $id, 'affecter' => $affecter]);
    }

    public function login()
    {
        $message = request('message');
        if ($message) {
            return view('users.login', [
                'message' => $message
            ]);
        }
        return view('users.login', [
            'message' => ''
        ]);
    }
    public function home(Request $req)
    {
        if ($req->session()->get('session_user') == null) {
            return redirect('/users/login?message=Authentification expirer');
        }
        return redirect('/receptionpointvente/liste');
    }
    public function action_login_(Request $req)
    {
        $login = request('login');
        $mdp = request('mdp');
        $id = Users::login($login, $mdp);
        if ($id == -1) {
            return redirect('/users/login?message=Login Erroné');
        } if ($id == -2) {
            return redirect('/users/login?message=Pas access ');
        }
        $req->session()->put('session_user', $id);
        return redirect('/users/home');
    }
    public function logout(Request $req)
    {
        $req->session()->forget('session_user');
        return redirect('/users/login');
    }


    public function action_affecter()
    {
        
        $affecter = new PointVenteUsers();
        $affecter->usersid = request('id');
        $affecter->pointventeid = request('pointventeid');
        $pointvente = PointVenteDispo::find(request('pointventeid'));


        $history=new Affectation();
         $history->usersid= request('id');
        $history->pointventeid= request('pointventeid');//request('id');
        $history->save();

        $pt=PointVente::find(request('pointventeid'));
        $pt->usersid=request('id');
        $pt->save();


        // $affecter = new PointVenteUsers();
        // $affecter->usersid = request('id');
        // $affecter->pointventeid = request('pointventeid');
        // $pointvente = PointVenteDispo::find(request('pointventeid'));

        // $history=new Affectation();
        //  $history->usersid= request('id');
        // $history->pointventeid= request('pointventeid');//request('id');
        // $history->save();

        // $pt=PointVente::find(request('pointventeid'));
        // $pt->usersid=request('id');
        // $pt->save();

        
        // return view('users.add');
    
    
    }






    public function add()
    {


        return view('users.add');
    }



    public function action_add()
    {

        $users = new Users();
        $users->nom = request('nom');
        $users->contact = request('contact');
        $users->login = request('login');
        $users->mdp = Util::crypt(request('mdp'));
        $users->save();

        return redirect('/users/liste');
    }
} ?>