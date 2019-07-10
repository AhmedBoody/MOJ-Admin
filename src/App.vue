<template>
  <div id="app">
      
    <div id="slide-out" class="side-nav sidebar fixed sn-bg-4" data-toggle="close-slide-toggle" data-color="green" data-background-color="white">
        <!-- Logo -->
        <div class="logo-sn waves-effect mx-2 my-0 border-bottom border-light">
            <a href="https://najiz.moj.gov.sa" class="logo-m text-center">
                <img alt="najez" id="change-image" src="/Content/najiz-master/dist/img/najiz-dark.svg">
            </a>
        </div>
        <!--/. Logo -->
           <ul class="custom-scrollbar list-unstyled scrollbar-dusty-grass thin">
                <!--Search Form-->
                <li class="d-block d-md-none">
                    <form class="search-form" role="search">
                        <div class="md-form my-0 waves-light">
                            <input type="text" class="form-control py-2" placeholder=" بحث ..">
                        </div>
                    </form>
                </li>
                <!--/.Search Form-->
                <!-- Side navigation links -->
                <li>
                    <ul class="collapsible collapsible-accordion pills-secondary">
                        <li class="nav-item menuList0">
                            <a class="collapsible-header waves-effect arrow-r nav-link" href="home.aspx"><i class="fa-2x fa fa-home"></i>الرئيسية</a>
                        </li>

                        <li class="nav-item menuList1">
                            <a class="collapsible-header waves-effect arrow-r nav-link "><i class="fa-2x fa fa-tasks "></i>مهامي<i class="fa fa-caret-down rotate-icon"></i></a>
                            <div class="collapsible-body">
                                <ul>
                                    <li><a href="taskNew.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>مهام جديدة</a></li>
                                    <li><a href="taskInProgress.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>مهام  تحت الاجراء</a></li>
                                    <li><a href="taskDone.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>مهام المنجزة</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item menuList2">

                            <a href="notaryAffairs.aspx" class="collapsible-header waves-effect arrow-r nav-link"><i class="fa-2x fa fa-refresh"></i>شؤون الموثقين</a>

                        </li>
                        <li class="nav-item menuList3">

                            <a class="collapsible-header waves-effect arrow-r nav-link" href="#"><i class="fa-2x fa fa-info-circle"></i>الاستعلامات</a>

                        </li>
                        <li class="nav-item menuList4">

                            <a class="collapsible-header waves-effect arrow-r nav-link" href="report.aspx"><i class="fa-2x fa fa-bar-chart"></i>التقارير والمؤشرات</a>

                        </li>
                        <li class="nav-item menuList5">

                            <a class="collapsible-header waves-effect arrow-r nav-link ">
                                <i class="fa-2x fa fa-cog"></i>إدارة النظام<i class="fa fa-caret-down rotate-icon"></i>
                            </a>
                            <div class="collapsible-body">
                                <ul>
                                    <li><a href="committees.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>لجان المقابلات الشخصية</a></li>
                                    <li><a href="notification.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>الإشعارات والتنبيهات</a></li>
                                    <li><a href="support.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>الدعم والإرشاد</a></li>
                                </ul>
                            </div>

                        </li>
                        <li class="nav-item menuList6">

                            <a class="collapsible-header waves-effect arrow-r nav-link" href="#"><i class="fa-2x fa fa-sliders"></i>إعدادات النظام
                                <i class="fa fa-caret-down rotate-icon"></i>
                            </a>
                            <div class="collapsible-body">
                                <ul>
                                    <li> <router-link to="/Definitions" class="waves-effect"> <i class="fa-sm fa fa-circle"></i>تعريفات النظام </router-link> </li>
                                    <li><a href="users.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>إدارة المجموعات والمستخدمين</a></li>
                                    <li><a href="workflow.aspx" class="waves-effect"><i class="fa-sm fa fa-circle"></i>إدارة سير العمل</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <!--/. Side navigation links -->
            </ul>
        <!-- Mask -->
        <div class="mask-strong sidebar-background mask-strong" style="background-image: url(/Content/najiz-master/dist/img/bg-sidebar.jpg);"></div>


    </div>
  <header class="sidebar" data-color="green">
        <!--Main Navigation-->
        <!--Navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark double-nav fixed-top scrolling-navbar" data-toggle="toggle-no">
            <!-- SideNav slide-out button -->
            <div><a href="#" data-activates="slide-out" class="button-collapseRtl"><i class="fa fa-bars"></i></a></div>
            <!-- Breadcrumb-->
            <div class="breadcrumb-dn ml-auto">
                <ul class="nav navbar-nav nav-flex-icons text-right lh-2">
                    <li class="nav-item clearfix d-none d-lg-inline-block">
                        <a class="nav-link resize-sidebar"><i class="fa fa-exchange"></i></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle font-weight-bold" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img alt="user photo" src="/Content/najiz-master/dist/img/avatar-user.svg" width="40" class="img-fluid z-depth-1 rounded-circle ml-2">
                            <span class="clearfix d-none d-sm-inline-block">وليد الرشود</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right lh-1" aria-labelledby="navbarDropdownMenuLink">

                            <a class="dropdown-item" href="#">تسجيل الخروج</a>
                        </div>
                    </li>
                   
                </ul>
            </div>
            <!-- Links -->
            <ul class="nav navbar-nav nav-flex-icons mr-auto ml-3 lh-2 p-0">
                <li class="nav-item clearfix d-none d-sm-inline-block">
                    <div class="nav-link pb-2 pb-sm-0 mb-0 pl-sm-2 pl-0">
                        <div class="clearfix d-none d-md-inline-block">
                            <!-- Search form -->
                            <form class="form-inline md-form form-sm mt-0 mb-0 pb-0">
                                <i class="fa fa-search" aria-hidden="true"></i>
                                <input class="form-control form-control-sm mr-3 w-75 white-text white-text mb-0 pb-0" type="text" placeholder="بحث" aria-label="Search">
                            </form>
                        </div>
                    </div>
                    <!--Menu-->
                </li>
                <!-- <li class="nav-item"> <a class="nav-link btn-view"> <i class="fa fa fa-exchange align-middle"></i> </a> </li> -->
                <li class="nav-item dropdown">
                    <a class="nav-link overflowinherit position-relative" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bell align-middle"></i><span class="counter position-absolute">22</span></a>
                    <div class="dropdown-menu dropdown-menu-left lh-1" aria-labelledby="navbarDropdownMenuLink3"><a class="dropdown-item" href="#">التنبيهات </a><a class="dropdown-item" href="#">التنبيهات </a><a class="dropdown-item" href="#">التنبيهات </a></div>
                </li>
              
                <li class="nav-item clearfix d-none d-sm-inline-block">
                    <a class="nav-link">
                        <img class="vision_logo" alt="vision" src="/Content/najiz-master/dist/img/vision.svg">
                    </a>
                </li>
            </ul>
        </nav>
        <!--/.Navbar-->
    </header>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/licencerequest">Licence Request</router-link>
    </div>
    <main style="min-height: 900px;" data-toggle="toggle-no">
        <div class="container-fluid">
          <router-view />
        </div>
    </main>
        <footer class="page-footer mt-4 z-depth-1" data-toggle="toggle-no">
        <!--Copyright-->
        <div class="footer-copyright text-center py-3 white">
            <div class="container-fluid text-secondary">
                <a href="https://www.moj.gov.sa/ar/Pages/default.aspx" class="text-secondary">
                    <img alt="logo" src="/Content/najiz-master/dist/img/moj-logo.svg" class="ml-2" width="80">
                </a>
                <strong class="font-weight-bold">
                    <small>
                        |   تم تطوير الأنظمة التقنية تحت إشراف الإدارة العامة لتقنية المعلومات 1440/2019
                    </small>
                </strong>
            </div>
        </div>
        <!--/.Copyright-->
    </footer>
    <!--/.Footer-->
    <div class="sharing"></div>
    <a class="btn-conta z-depth-1">
        <div>
            <i class="fa fa-3x fa-comments-o"></i>
            <!--<br>-->
            <!-- <p> الدعم الفني </p>-->
        </div>
    </a>
    <div class="setting-box">
        <a class="px-1 py-2 z-depth-1 btn-setting">
            <i class="fa fa-cog fa-spin fa-fw fa-lg p-0 m-0"></i>
        </a>
        <ul class="setting-option z-depth-1">
            <li class="header-title">فلتر اللون الرئيسي</li>
            <li class="adjustments-line">
                <a href="javascript:void(0)" class="switch-trigger active-color">
                    <div class="badge-colors ml-auto mr-auto">
                        <span class="badge filter badge-primary" data-color="purple"></span>
                        <span class="badge filter badge-info" data-color="azure"></span>
                        <span class="badge filter badge-default active" data-color="green"></span>
                        <span class="badge filter badge-warning" data-color="orange"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
            </li>
            <li class="header-title">تغير لون الخلفية</li>
            <li class="adjustments-line">
                <a href="javascript:void(0)" class="switch-trigger background-color">
                    <div class="ml-auto mr-auto">
                        <span class="badge filter badge-primary green-button" data-background-color="black"></span>
                        <span class="badge filter badge-white white-button active" data-background-color="white"></span>
                        <span class="badge filter badge-default yellow-button" data-background-color="red"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
            </li>
            <li class="header-title">تغير الخلفية</li>
            <li style="float: left; margin-right: 10px">
                <a class="img-holder switch-trigger" href="javascript:void(0)">
                    <img src="/Content/najiz-master/dist/img/bg-sidebar.jpg" alt="" width="40" height="106" class="z-depth-1" style="border-radius: 9px;">
                </a>
            </li>
            <li class="active" style="float: left; margin-right: 10px">
                <a class="img-holder switch-trigger" href="javascript:void(0)">
                    <img src="/Content/najiz-master/dist/img/bg-sidebar2.jpg" alt="" width="40" height="106" class="z-depth-1" style="border-radius: 9px">
                </a>
            </li>
            <li style="float: left; margin-right: 10px">
                <a class="img-holder switch-trigger" href="javascript:void(0)">
                    <img src="/Content/najiz-master/dist/img/bg-sidebar3.jpg" alt="" width="40" height="106" class="z-depth-1" style="border-radius: 9px">
                </a>
            </li>
            <li>
                <a class="img-holder switch-trigger" href="javascript:void(0)">
                    <img src="/Content/najiz-master/dist/img/bg-sidebar4.jpg" alt="" width="40" height="106" class="z-depth-1" style="border-radius: 9px">
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

