<?php
namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Affectation;
use App\Models\Laptop;
use App\Models\PointVente;
use App\Models\PointVenteDispo;
use App\Models\PointVenteUsers;
use App\Models\Ram;
use App\Models\Users;
use Illuminate\Http\Request;
header('Access-Control-Allow-Origin: *');
class AdminController extends Controller
{

    public function login()
    {
        $message = request('message');
        if ($message) {
            return view('admin.login', [
                'message' => $message
            ]);
        }
        return view('admin.login', [
            'message' => ''
        ]);
    }
    public function liste()
    { 
        $l=Laptop::fromQuery("select *from laptop");
        $k=json_encode($l);
        
        return $k;
    }
    public function list(Request $req){
        try{
      $l=Ram::fromQuery("select *from ram order by ".request('col')." ".request('order'));
        return json_encode([
            'message'=>'success',
            'data'=>$l
        ]);
        }
        catch(Exception $ex){
            return json_encode([
                'message'=>'diso'
            ]);
        }
    }
    public function del(Request $req){
        try{
        $l=Ram::find(request('id'));
        $l->delete();
        return json_encode([
            'message'=>'success'
        ]);
        }
        catch(Exception $ex){
            return json_encode([
                'message'=>'diso'
            ]);
        }
    }
    public function save(Request $req){
        try{
        $l=new Ram();
        $l->capacite=request('capacite');
        $l->typeramid=request('typeramid');
        $l->save();
        return json_encode([
            'message'=>'success'
        ]);
        }
        catch(Exception $ex){
            return json_encode([
                'message'=>'diso'
            ]);
        }
    }
    public function home(Request $req)
    {
        if ($req->session()->get('sessionid') == null) {
            return redirect('/admin/login?message=Authentification expirer');
        }
        return redirect('/receptionmagasin/liste');
    }
    public function action_login_(Request $req)
    {
        $login = request('login');
        $mdp = request('mdp');
        $id = Admin::login($login, $mdp);
        if ($id == -1) {
            return redirect('/admin/login?message=Login Erroné');
        }
        $req->session()->put('sessionid', $id);
        return redirect('/admin/home');
    }
    public function logout(Request $req)
    {
        $req->session()->forget('sessionid');
        return redirect('/admin/login');
    }

} ?>