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
<style>
  label{
  font-size:30px
  }
</style>
<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <h2>
                Inscription
              </h2>
              <form class="pt-3" action="/util/action_inscription" method="post">
                <div class="form-group">
                  <label>Nom</label>

                  <input type="text" name="nom" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username">
                </div>
                <div class="form-group">
                  <label>Login</label>

                  <input type="email" name="login" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
                </div>
                <div class="form-group">
                  <label>Genre</label>
                  <select class="form-control form-control-lg" id="exampleFormControlSelect2" name="sexe">
                 <option>Masculin</option>
                 <option>Feminin</option>
                  </select>
                </div>
                <div class="form-group">
                  <input type="password" name="mdp"class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                </div>
                
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">S'inscrire</a>
                </div>
                <div class="text-center mt-4 font-weight-light">
                   <a href="/util/login" class="btn btn-primary">Retour</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="/inc/js/vendor.bundle.base.js"></script>
  <script src="/inc/js/off-canvas.js"></script>
  <script src="/inc/js/hoverable-collapse.js"></script>
  <script src="/inc/js/template.js"></script>
  <script src="/inc/js/settings.js"></script>
  <script src="/inc/js/todolist.js"></script>
  <!-- endinject -->
</body>

</html>
