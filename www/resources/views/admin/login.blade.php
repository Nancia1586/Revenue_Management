<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Skydash Admin</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="/inc/feather/feather.css">
  <link rel="stylesheet" href="/inc/ti-icons/css/themify-icons.css">
  <link rel="stylesheet" href="/inc/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- Plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="/inc/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="images/favicon.png" />
</head>

<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <h2>
                Authentification
              </h2>
              <p>
                Profil Administrateur
              </p>
              <form class="pt-3" action="/admin/action_login_" method="post">
                @csrf
                <div class="form-group">
                  <input type="text"  value="mikolo" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Login" name="login" >
                </div>
                <div class="form-group">
                  <input type="password" value="mikolo" class="form-control form-control-lg" id="exampleInputPassword1"name="mdp" placeholder="Password">
                </div>
                <div class="mt-3">
                  <button class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">Se connecter</button>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <a href="/users/login" class="auth-link text-black">
                  <p style="font-size:14px">Log as Users</p></a>
                </div>
                <div class="mb-2">
                </div>
                 
                <div class="text-center mt-4 font-weight-light">
            <a href="/admin/inscrire" class="btn btn-primary">Inscrire</a>
                </div>
                <div class="text-center">
                  <p style="color:red" style="font-size: 30px">
                    @if ($message!=null)
                    {{
                      dd($message)
                    }}
                    @endif
                   </p>
                </div> 
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
  <!-- plugins:js -->
  <script src="/inc/js/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page -->
  <!-- End plugin js for this page -->
  <!-- inject:js -->
  <script src="/inc/js/off-canvas.js"></script>
  <script src="/inc/js/hoverable-collapse.js"></script>
  <script src="/inc/js/template.js"></script>
  <script src="/inc/js/settings.js"></script>
  <script src="/inc/js/todolist.js"></script>
  <!-- endinject -->
</body>

</html>
