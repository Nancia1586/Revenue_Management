<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Produit;
class ProduitController extends Controller
{
    public function to_create(Request $req)
    {
        return view('produit.create');

    }

    public function create(Request $req)
    {
    $p=new Produit();
    $p->code=request('code');
    $p->nom=request('nom');
    $p->prix=request('prix');
    $p->save();
    return redirect()->back()->with('success','');

    }
    public function list(Request $req)
    {
        $all=Produit::paginate(100);
        return view('produit.list',['list'=>$all]);

    }
    public function check_produit_name(Request $req,$field='nom')
    {
        $nom= request($field)==null?'':request($field);
        $all=Produit::fromQuery("select *from produit where  lower('".$field."')=lower('".$nom."')");
        dump("select *from produit where  lower('".$field."')=lower('".$nom."')");
        $retour=count($all)>0?['message'=>'Le '.$field.' du produit existe deja','code'=>403]:['message'=>'Le '.$field.' n existe pas','code'=>200];
        return json_encode($retour);

    }
    public function check_produit_code(Request $req)
    {
        $nom= request('nom')==null?'':request('nom');
        $all=Produit::fromQuery("select *from produit where  lower(code)=lower('".$nom."')");
        $retour=count($all)>0?['message'=>'Le produit existe deja','code'=>403]:['message'=>'Le produit n existe pas','code'=>200];
        return json_encode($retour);

    }

} ?>
