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
                <span class="d-none d-lg-block" style="color:white">Utilisateur</span>
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
                <a class="nav-link collapsed" style="background-color:aquamarine;height:70px;font-family:Verdana, Geneva, Tahoma, serif; font-size:20px" >
                    <span> @yield('users')
                    </span>
                </a>
            </li>
        
            <li class="nav-item">
                <a class="nav-link collapsed" href="/receptionpointvente/liste">
                    <i class="bi bi-grid"></i>
                    <span>Reception</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/renvoie/add">
                    <i class="bi bi-grid"></i>
                    <span>Renvoie Laptop</span>
                </a>
            </li><li class="nav-item">
                <a class="nav-link collapsed" href="/detailvente/all">
                    <i class="bi bi-grid"></i>
                    <span>Historique des ventes</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="/vente/liste">
                    <i class="bi bi-grid"></i>
                    <span>Vente</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link " href="/users/logout">
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
    <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/vendor/chart.js/chart.min.js"></script>
    <script src="/assets/vendor/echarts/echarts.min.js"></script>
    <script src="/assets/vendor/quill/quill.min.js"></script>
    <script src="/assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="/assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="/assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="/assets/js/main.js"></script>

</body>

</html>
