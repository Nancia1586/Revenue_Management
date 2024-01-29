<?php

namespace App\Http\Controllers;

use App\Models\Commission;
use App\Models\Laptop;
use App\Models\PointVente;
use App\Models\Util;
use App\Models\Vehicule;
use App\Models\Vente;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
// use Barryvdh\DomPDF;
use League\Csv\Reader;
use League\Csv\Statement;
use League\Csv\Writer;
// use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Dompdf\Dompdf;

class UtilController extends Controller
{

    // Route::get('matieres/achat',[MouvementMatiereController::class,'achat_matiere']);///->name('valider');
// Route::get('matieres/saisie',[MouvementMatiereController::class,'saisie_matiere']);///->name('valider');
// Route::get('matieres/etat',[MouvementMatiereController::class,'etat_matiere']);///->name('valider');


    public function pdf(Request $req)
    {
        $tab = Vehicule::fromQuery("select *From vehicule where id=" . request('id'));
        $tabs = Trajet::fromQuery("select *From v_trajet where vehiculeid=" . request('id'));
        // $liste = MouvementMatiere::fromQuery('select matiereid,sum(entrer)as entrer,sum(sortis) as sortis,sum(entrer)-sum(sortis) as etat from mouvementmatiere group by matiereid');
        return view('pdf', [
            'liste' => $tab,
            'trajet' => $tabs
        ]);
    }
    public function test()
    {
        $lis = Vehicule::all();
        return view('list', [
            'vehicule' => $lis
        ]);
    }

    public function grapheCourbe()
    {
        $lis = Vente::all();
        return view('graphe.courbe', [
            'vehicule' => $lis
        ]);

    }
    public function formulaire(Request $request)
    {

        return view('formulaire', [
            'json' => Vehicule::all()
        ]);
    }

    public function chart(Request $request)
    {
        header("Content-Type: application/json");
        header('Access-Control-Allow-Origin: *');


        $series = [101, 121, 145, 135, 164];
        $categories = ['Dina', 'Dina', '2017', '2018', '2019'];

        echo json_encode([

            'categories' => $categories,
            'series' => $series

        ]);
    }
    public function action_formulaire(Request $request)
    {
        $val = $request->validate([
            'form' => 'required'
        ]);
        dump($val);
        //   return redirect()->action([UtilController::class,'list']);
    }
    public function search(Request $request)
    {
        // Récupérer les données du formulaire de recherche
        $modele = request('modele');
        $marque = request('marque');
        $matricule = request('matricule');
        $id = request('id');

        // Construire la requête de recherche avec Eloquent
        $query = Vehicule::from("vehicule");

        if ($modele) {
            $query->whereRaw('lower(modele) like ?', ["%" . strtolower($modele) . "%"]);

        }
        if ($marque) {
            $query->whereRaw('lower(marque) like ?', ["%" . strtolower($marque) . "%"]);

        }
        if ($matricule) {
            $query->whereRaw('lower(matricule) like ?', ["%" . strtolower($matricule) . "%"]);

        }
        if ($id) {
            $query->where('id', '>', $id);
        }

        $query->orderBy('id', 'desc');

        $perPage = 5;

        $vehicule = $query->paginate($perPage);
        $vehicule->appends(request()->query());
        return view('search.list', ['vehicule' => $vehicule]);
    }
    public function date(Type $var = null)
    {
        $date1 = '2023-01-01 12:12:12';
        $date2 = '2023-01-08 12:12:19';
        $date = $date1;
        for ($i = 0; $i < 6; $i++) {
            echo '<p>';
            $date = Util::addToDate($date, 0, 2, 54);
            echo '</p>';
        }
        echo $date;
    }
    public function chart_js(){
        return view('chart');
    }
public function util($montat){
    echo Commission::getMontantApresCommission($montat,12,2020);
}

    public function transaction()
    {
        try {
            \DB::beginTransaction();

            // Effectuer des opérations de base de données avec Eloquent
            $user = new Vehicule(); //::find(1);
            $user->marque = 'Dina';
            $user->matricule = 'VAR';
            $user->modele = 'LK';
            $user->typevehiculeid = 1;
            $user->etat = 1;
            $user->save();
            // marque  | matricule | modele  | typevehiculeid | etat

            $user = new Vehicule(); //::find(1);
            $user->marque = '-1';
            $user->matricule = '-John';
            $user->modele = 'John';
            $user->typevehiculeid = -10;
            $user->etat = 1;
            $user->save();

            \DB::commit();
        } catch (\Throwable $e) {
            \DB::rollback();
            dd('OHHHHHH');
            // throw $e;
        }

    }
    public function unite()
    {
        $mois = 6;
        $annee = 2023;
        $montant = 5000000;
        $commission = Commission::getcommission($mois, $annee);
        $m = $montant;
        $res = 0;
        foreach ($commission as $key) {

            if ($m - $key->totalmax > 0) {
                $res = $res + (($key->totalmax * $key->taux) / 100);
                $m = $m - $key->totalmax;
                continue;
            } else {
                $res = $res + (($m * $key->taux) / 100);
                break;
            }
        }
        echo $res;
        // return $res;
    }

    public function grapheBaton()
    {
        $lis = Vente::all();
        return view('graphe.baton', [
            'vehicule' => $lis
        ]);

    }
    public function grapheLine()
    {
        $lis = Vehicule::all();
        return view('graphe.line', [
            'vehicule' => $lis
        ]);

    }
    public function csv()
    {
        $csv = Reader::createFromPath('E:\csv.csv', 'r');
        $csv->setHeaderOffset(0);
        $csv->setDelimiter(';');
        $header = $csv->getHeader();
        $records = $csv->getRecords();
        $to = 0;
        foreach ($records as $record) {
            $to += $record['AGE'];
        }
        echo $to;
    }
    public function import()
    {
        $csv = Reader::createFromPath('E:\csv.csv', 'r');
        $csv->setHeaderOffset(0);
        $csv->setDelimiter(';');
        $header = $csv->getHeader(); //returns the CSV header record
        $records = $csv->getRecords(); //returns all the CSV records as an Iterator object
        $to = 0;
        foreach ($records as $record) {
            try {
                $ve = new Vehicule();
                if ($record['marque'] != null) {
                    $ve->marque = $record['marque'];
                    $ve->matricule = $record['matricule'];
                    $ve->modele = $record['modele'];
                    $ve->typevehiculeid = $record['type'];
                    $ve->etat = $record['etat'];
                    $ve->save();
                }
            } catch (\Exception $ec) {
                dd('Importation fail');
                throw $ec;
            }
        }
        $response = new Response();
        $response->header('Content-Type', 'text/html');
        $response->header('Status', 200);

        dd('Importation effecteuer');
    }
    public function test_(Type $var = null)
    {
        include('simple_html_dom.php');

        $table = '<tr style="font-weight: bold">
                <td>ID</td>
                <td>Navn</td>
                <td>Adresse</td>
                <td>By</td>
                <td>Post nr</td>
                <td>E-mail</td>
                <td>Telefon</td>
                <td>Status og dato</td>
                <td>Dropdown info</td>
                <td>Produkt info</td>
                <td>Buydate</td>
                <td>Ref nr. (3 første cifre)</td>
            </tr>
                    <tr>
                <td>40563</td>
                <td>Firstname Lastname</td>

                <td>Address</td>
                <td>Copen</td>
                <td>2100</td>
                <td>ff@hotmail.com</td>
                <td>123123</td>
                <td>Ikke indløst</td>
                <td>EEE-BBB</td>
</tr>
';
        $html = str_get_html($table);

        header('Content-type: application/ms-excel');
        header('Content-Disposition: attachment; filename=sample.csv');

        $fp = fopen("php://output", "w");

        foreach ($html->find('tr') as $element) {
            $td = array();
            foreach ($element->find('td') as $row) {
                $td[] = $row->plaintext;
            }
            fputcsv($fp, $td);
        }
        # code...
    }
    public function exportcsv()
    {
        $data = Laptop::from("w_beneficeavecperte");//->get(); 
        $data=$data->whereRaw('anneebenefice = ? ',[2022]);
        $data=$data->get();;
        //\DB::select("SELECT * FROM laptop");
        $entete = $data[0];
        ////////////// Tsy maintsy atao anzao ny premiere ligne [0]
        $entete->commission = Commission::getTotal($data[0]->moisbenefice, $data[0]->anneebenefice);
        $entete->beneficeaveccommission = $data[0]->totalbeneficeavecperte-Commission::getTotal($data[0]->moisbenefice, $data[0]->anneebenefice);

        /////////////Headers

        $headers = array_keys($entete->getAttributes());
        // dump($headers)/;
        $csv = Writer::createFromString('', 'w+');
        $csv->setDelimiter(';');
        $csv->setNewline("\n");
        $csv->insertOne($headers);
        // $i = 0;
        $t_commission = 0;
        $t_beneficecommission = 0;
        foreach ($data as $row) {
            ///Settena maina be otrzao le attribut commission satria tsy avy anaty base            
            $row->commisson = Commission::getTotal($row->moisbenefice, $row->anneebenefice);
            $row->beneficeaveccommission =  $row->totalbeneficeavecperte-Commission::getTotal($row->moisbenefice, $row->anneebenefice);
            ///// Sommena le commission atao any am farany sy benefice avec commssion
            $t_beneficecommission +=  $row->totalbeneficeavecperte- Commission::getTotal($row->moisbenefice, $row->anneebenefice);
            $t_commission += Commission::getTotal($row->moisbenefice, $row->anneebenefice);
            $csv->insertOne($row->toArray());

        }

        /////////Reto le total efa sum() par colonne atao any farany
        $somme = Laptop::from("w_beneficeavecperte");
        // $data = Laptop::from("w_beneficeavecperte");//->get(); 
        $somme=$somme->whereRaw('anneebenefice = ? ',[2022]);
        $somme=$somme->get();

        $totalbeneficeavecperte = $somme->sum("totalbeneficeavecperte");
        $totalperte = $somme->sum("totalperte");
        $total = [
            'totalbeneficeavecperte' => $somme->sum("totalbeneficeavecperte"),
            'totalbeneficesansperte' => $somme->sum("totalbeneficesansperte"),
            'totalvente' => $somme->sum("totalvente"),
            'totalachat' => $somme->sum("totalachat"),
            'moisbenifice' => '',
            'nommoisbenefice' => '',
            'anneeebenefice' => '',
            'totalperte' => $somme->sum("totalperte"),
            'commission' => $t_commission,
            'beneficeaveccommission' => $t_beneficecommission

        ];

        $csv->insertOne($total);
        //    ->sum("totalperte");
        // echo $totalperte;
        $response = new \Illuminate\Http\Response($csv->__toString());
        $response->header('Content-Type', 'text/html');
        $response->header('Content-Disposition', 'attachment; filename="dinadina.csv"');

        return $response;
    }
    public function showpdf()
    {
        try {
            $pdf = new DomPDF();
            // $pdf->loadHtml($content->html);
            $lis = Vehicule::all();
            $pdf->loadHtml(view('pdf', [
                'vehicule' => $lis
            ]));
            $pdf->render();
            $output = $pdf->output();
            return response($output, 200)->header('Content-Type', 'application/pdf');
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }
    public function tpdf()
    {
        // $pdf->loadHtml($content->html);
        // $lis = Vehicule::all();
        return view('pdf', [
            // 'vehicule' => $lis
        ]);

    }
    public function list(Request $req)
    {
        $req->session()->get('sessionid');
        $lis = Vehicule::paginate(10);
        return view('list', [
            'vehicule' => $lis
        ]);
    }
    public function ckeditor()
    {
        return view('ckeditor.ckeditor');
    }
    public function action_upload(Request $request)
    {
        try {
            $file = $request->file('image');
            $photo = $file->getClientOriginalName();
            $destinationPath = '/uploads';
            $file->move($destinationPath, $file->getClientOriginalName());
            dd("Importation fini");
        } catch (Exception $exp) {
            dd("Erreur d'importation" . $exp->getMessage());
        }

    }
    public function upload(Request $request)
    {
        return view('util.upload');

    }
    public function ajax(Request $request)
    {
        $province = \DB::select("select *from province");
        return view('ajax/select', [
            'province' => $province
        ]);
    }
    public function stat(){
        return view('stat');
        }
    public function img(Request $request)
    {
        try {
            $pdf = new Dompdf();
            $all=PointVente::all();
            $pdf->loadHtml(view('image',[
                'data'=>$all
            ]));
            $pdf->render();
            $output = $pdf->output();
            return response($output, 200)->header('Content-Type', 'application/pdf');
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }
    public function imgs(Request $request)
    {
        $all=PointVente::all();
    
        return view('image',[
            'data'=>$all
        ]);
        // try {
        //     // $pdf = new Dompdf();
        //     $pdf->loadHtml(view('image'));
        //     // $pdf->render();
        //     $output = $pdf->output();
        //     return response($output, 200)->header('Content-Type', 'application/pdf');
        // } catch (\Exception $e) {
        //     echo $e->getMessage();
        // }
    }
    public function inputajax(Request $request)
    {
        return view('ajax/input');
    }
    public function textajax(Request $request)
    {
        echo '<p>' . request('text') . '</p>';
        // return view('ajax/in');
    }
    public function html(Request $request)
    {
        return view('ajax/html');
    }
    public function region($id)
    {
        $region = \DB::select("select *from region where provinceid=" . $id);
        echo json_encode(
            $region
        );
    }
    public function district($id)
    {
        $district = \DB::select("select *from district where regionid=" . $id);
        echo json_encode(
            $district
        );
    }
    public function login()
    {
        $message = request('message');
        if ($message) {
            return view('auth.login', [
                'message' => $message
            ]);
        }
        return view('auth.login', [
            'message' => ''
        ]);
    }
    public function logout(Request $req)
    {
        $req->session()->forget('sessionid');
        return redirect('util/login');
    }
    public function home(Request $req)
    {
        if ($req->session()->get('sessionid') == null) {
            return redirect('/util/login?message=Authentification expirer');
        }
        return redirect('/util/list');
    }
    public function action_login(Request $req)
    {
        $login = request('login');
        $mdp = request('mdp');
        // Fonction
        $id = 1; //Util::login($login,$mdp);
        $req->session()->put('sessionid', $id);
        return redirect('/util/home');
    }
    public function forget()
    {

        return view('auth.forget');
    }

    public function action_forget(Request $req)
    {
        $login = request('login');
        $mdp = request('mdp');
        echo $mdp;
        echo $login;
        // \DB::update("update table set mdp".$mdp." where login=".$login);
        return redirect('/util/login?message=Mot de passe reinitialiser');
    }
    public function inscrire()
    {
        return view('auth.inscription');
    }
    public function action_inscription(Request $req)
    {
        $login = request('login');
        $mdp = request('mdp');
        $nom = request('nom');
        $date = request('date');
        $genre = request('genre');

        $id = 1; //Util::login($login,$mdp);
        $req->session()->put('sessionid', $id);

        /// 
        return redirect('/util/home');
    }
    public static function index(Request $request)
    {
        $users = Users::get();

        $data = [
            'title' => 'How To Create PDF File Using DomPDF In Laravel 9 - Techsolutionstuff',
            'date' => date('d/m/Y'),
            'users' => $users
        ];
        $pdf = Pdf::loadView('pdf', $data);
        return $pdf->download('users_pdf_example.pdf');
        // return view('index',compact('users'));
    }
    //
}