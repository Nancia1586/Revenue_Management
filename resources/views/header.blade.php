<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="/assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="/assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="/assets/vendor/simple-datatables/style.css" rel="stylesheet">
    <link href="/assets/css/style.css" rel="stylesheet">
</head>

<body>
    <header id="header" class="header fixed-top d-flex align-items-center"
        style="background-color:#232227;color:white">

        <div class="d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt="">
                <span class="d-none d-lg-block" style="color:white">Administrateur</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword">
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div>

        <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

                <li class="nav-item d-block d-lg-none">
                    <a class="nav-link nav-icon search-bar-toggle " href="#">
                        <i class="bi bi-search"></i>
                    </a>
                </li>

                <!-- End Search Icon-->



            </ul>
        </nav><!-- End Icons Navigation -->

    </header><!-- End Header -->

    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar" style="background-color:#24292d; ">

        <ul class="sidebar-nav" id="sidebar-nav">


            <li class="nav-item">
                <a class="nav-link collapsed" href="/receptionmagasin/liste">
                    <i class="bi bi-grid"></i>
                    <span>Faire un achat</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/laptop/add">
                    <i class="bi bi-grid"></i>
                    <span>Ajouter  Laptop</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/commission/add">
                    <i class="bi bi-grid"></i>
                    <span>Commisssion</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/stat/voir_commission">
                    <i class="bi bi-grid"></i>
                    <span>Voir comission</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">
                    <i class="bi bi-menu-button-wide"></i><span>Statistique</span><i
                        class="bi bi-chevron-down ms-auto"></i>
                </a>
              
            <li>
                   
                    <a href="/stat/globale"class="nav-link">
                        <i class="bi bi-circle"></i><span>Total vente</span>
                    </a>
            </li>
            <li>
                <a href="/stat/benefice"class="nav-link">
                    <i class="bi bi-circle"></i><span>Benefice</span>
                </a>
            </li>
            <li>
                <a href="/stat/pointvente"class="nav-link">
                    <i class="bi bi-circle"></i><span>Point de vente</span>
                </a>
            </li>
            
        </li>
        <li class="nav-item">
            <a class="nav-link " data-bs-target="#components-navref" data-bs-toggle="collapse" href="#">
                <i class="bi bi-menu-button-wide"></i><span>Reference</span><i
                    class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul  id="components-navref" class="nav-content collapse"
                data-bs-parent="#sidebar-nav">
        <li>
            <a class="nav-link collapsed" href="/marque/liste">
                <i class="bi bi-grid"></i>
                <span>Marque</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="/processeur/liste">
                <i class="bi bi-grid"></i>
                <span>Processeur</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="/ram/liste">
                <i class="bi bi-grid"></i>
                <span>Ram</span>
            </a>
        </li>
       
        <li class="nav-item">
            <a class="nav-link collapsed" href="/ecran/liste">
                <i class="bi bi-grid"></i>
                <span>Ecran</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="/disquedur/liste">
                <i class="bi bi-grid"></i>
                <span>Disquedur</span>
            </a>
        </li>
            </ul>
        <li class="nav-item">
            <a class="nav-link collapsed" href="/pointvente/liste">
                <i class="bi bi-grid"></i>
                <span>Point de vente</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="/transfert/liste">
                <i class="bi bi-grid"></i>
                <span>Transfert</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="/receptionrenvoie/liste">
                <i class="bi bi-menu-button-wide"></i><span>Renvoie</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>

        </li>
        <li class="nav-item">
            <a class="nav-link " href="/users/liste">
                <i class="bi bi-menu-button-wide"></i><span>Utilisateurs</span><i
                    class="bi bi-chevron-down ms-auto"></i>
            </a>

        </li><!-- End Components Nav -->

        <li class="nav-item">
            <a class="nav-link " href="/admin/logout">
                <i class="bi bi-menu-button-wide"></i><span>Deconnexion</span><i
                    class="bi bi-chevron-down ms-auto"></i>
            </a>

        </li><!-- End Components Nav -->



        </ul>

    </aside><!-- End Sidebar-->
    <main id="main" class="main">

        <section class="section">
            @yield('content')
        </section>
    </main>


    <script src="/assets/vendor/apexcharts/apexcharts.min.js"></script>
    {{-- <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> --}}
    {{-- <script src="/assets/vendor/chart.js/chart.min.js"></script> --}}
    {{-- <script src="/assets/vendor/echarts/echarts.min.js"></script> --}}
    <script src="/assets/vendor/quill/quill.min.js"></script>
    <script src="/assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="/assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="/assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="/assets/js/main.js"></script>

</body>

</html>
