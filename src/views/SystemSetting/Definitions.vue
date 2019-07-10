<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <!--div: Modals-->
        <h4 class="text-right mt-sm-4 mb-sm-3 mainColor" style="font-weight: 600">تعريفات النظام</h4>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <nav aria-label="breadcrumb" class="mt-sm-4 mb-sm-3">
          <ol class="breadcrumb px-0 float-sm-left" style="background: transparent">
            <li class="breadcrumb-item font-weight-normal">
              <a href="home.aspx">
                <strong>
                  <i class="fa fa-home"></i>
                </strong>
              </a>
            </li>
            <li class="breadcrumb-item font-weight-normal active">
              <strong>إعدادات النظام</strong>
            </li>
            <li class="breadcrumb-item font-weight-normal active">
              <strong>تعريفات النظام</strong>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4 mt-3 fadeIn wow"
        style="visibility: visible; animation-name: fadeIn;"
      >
        <ul class="nav nav-tabs nav-justified md-tabs definition" id="myTabMD" role="tablist">
          <li class="nav-item waves-effect waves-light">
            <a
              class="nav-link show active"
              id="Writings-of-Justice-md"
              data-toggle="tab"
              href="#Writings-of-Justice"
              role="tab"
              aria-controls="Writings-of-Justice-md"
              aria-selected="true"
            >
              <i class="fa fa-file pl-2"></i>
              كتابات العدل
            </a>
          </li>
          <li class="nav-item waves-effect waves-light">
            <a
              class="nav-link show"
              id="cities-tab-md"
              data-toggle="tab"
              href="#cities-md"
              role="tab"
              aria-controls="cities-md"
              aria-selected="false"
            >
              <i class="fa fa-map pl-2"></i>
              الدول والمناطق والمدن
            </a>
          </li>
          <li class="nav-item waves-effect waves-light">
            <a
              class="nav-link show"
              id="cases-tab-md"
              data-toggle="tab"
              href="#cases-md"
              role="tab"
              aria-controls="cases-md"
              aria-selected="false"
            >
              <i class="fa fa-envelope pl-2"></i>
              الحالات
            </a>
          </li>
          <li class="nav-item waves-effect waves-light">
            <a
              class="nav-link show"
              id="hospitals-tab-md"
              data-toggle="tab"
              href="#hospitals-md"
              role="tab"
              aria-controls="hospitals-md"
              aria-selected="false"
            >
              <i class="fa fa-building pl-2"></i>
              المستشفيات والمستوصفات الطبية المعتمدة
            </a>
          </li>
          <li class="nav-item waves-effect waves-light">
            <a
              class="nav-link show"
              id="other-tab-md"
              data-toggle="tab"
              href="#other-md"
              role="tab"
              aria-controls="other-md"
              aria-selected="false"
            >
              <i class="fa fa-files-o pl-2"></i>
              تعريفات اخرى
            </a>
          </li>
        </ul>
        <div class="tab-content card card-cascade pt-5" id="myTabContentMD">
          <div
            class="tab-pane fade active show"
            id="Writings-of-Justice"
            role="tabpanel"
            aria-labelledby="Writings-of-Justice-tab-md">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div class="form-row">
                  <div class="col-md-3 mb-3 md-form">
                    <label class="active">المنطقة</label>
                    <select class="mdb-select2">
                      <option value disabled selected>إختر ...</option>
                      <option value="1">الإختيار الأول</option>
                      <option value="2">الإختيار الثاني</option>
                      <option value="3">الإختيار الثالث</option>
                    </select>
                  </div>
                  <div class="col-md-3 mb-3 md-form">
                    <label class="active">اسم كتابة العدل</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="col-md-2 mb-3 mt-4 pt-2 text-center">
                    <input class="form-check-input" type="checkbox" id="checkbox4">
                    <label for="checkbox4" class="label-table form-check-label">فعال؟</label>
                  </div>
                  <div class="col-md-3 md-form">
                    <a
                      id="addBtn4"
                      href="#"
                      class="waves-effect waves-dark btn btn-sm btn-primary"
                    >إضافة</a>
                  </div>
                </div>
                <div class="table-responsive text-nowrap mt-3">
                  <table class="table table-striped" cellspacing="0" width="100">
                    <thead>
                      <tr>
                        <th class="w1p">م</th>
                        <th>اسم كتابة العدل</th>
                        <th>المنطقة</th>
                        <th data-breakpoints="xs sm" class="table-controls">فعال؟</th>
                        <th data-breakpoints="xs sm " class="table-controls"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>نص تجريبي</td>
                        <td>نص تجريبي</td>
                        <td class="text-center">
                          <input class="form-check-input filled-in" type="checkbox" id="checkbox13">
                          <label class="form-check-label label-table" for="checkbox13"></label>
                        </td>
                        <td>
                          <a
                            href="#"
                            class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="تعديل"
                          >
                            <i class="fa fa-pencil"></i>
                          </a>
                          <span data-toggle="tooltip" data-placement="top" title="حذف">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#deleteConfirm"
                              class="waves-effect waves-dark btn btn-sm btn-secondary"
                            >
                              <i class="fa fa-remove mt-0"></i>
                            </a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="cities-md" role="tabpanel" aria-labelledby="cities-tab-md">
            <div class="tab-pane fade in show active" id="panel555" role="tabpanel">
              <!-- Nav tabs -->
              <div class="row">
                <div class="col-md-3">
                  <ul class="nav md-pills mainColor flex-column" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link show active"
                        data-toggle="tab"
                        href="#panel21"
                        role="tab"
                        aria-selected="true"
                      >الدول</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link show"
                        data-toggle="tab"
                        href="#panel22"
                        role="tab"
                        aria-selected="false"
                      >المناطق</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link show"
                        data-toggle="tab"
                        href="#panel23"
                        role="tab"
                        aria-selected="false"
                      >المدن</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-9">
                  <div class="tab-content vertical">
                    <div class="tab-pane fade in active show" id="panel21" role="tabpanel">
                      <h5 class="my-2 h5">الدول</h5>
                      <div class="form-row">
                        <div class="col-md-5 mb-3 md-form">
                          <label class="active">الدولة</label>
                          <input type="text" class="form-control " v-model="arabicName"/>
                          <span id="ArabicName" class="danger validation" style="display:none ; color:red" v-if="arabicName == ''">.</span>
                          <span id="existanceItem" class="danger validation" style="display:none ; color:red"></span>
                        </div>
                        <div class="col-md-4 md-form">
                            <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary" v-on:click="addCountry()" v-if="!isEditMode">
                                إضافة
                            </a>
                            <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary" v-on:click="PostEditCountry()" v-if="isEditMode">
                                تعديل
                            </a>
                        </div>
                      </div>
                      <div class="table-responsive text-nowrap mt-3">
                        <table class="table table-striped" cellspacing="0">
                          <thead>
                            <tr>
                              <th class="w1p">م</th>
                              <th>الدولة</th>
                              <th data-breakpoints="xs sm " class="table-controls"></th>
                            </tr>
                          </thead>
                          <tbody>
                           <tr v-for="country in Countries" :key="country.id" style="cursor:pointer">
                                <td>
                                    {{country.id}}
                                </td>
                                <td>{{ country.arabicName }}</td>
                                <td>
                                    <a href="#"
                                        class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="تعديل"
                                        v-on:click="EditCountry(country)">
                                        <i class="fa fa-pencil"></i>
                                    </a>

                                    <span data-toggle="tooltip" data-placement="top" title="حذف">
                                        <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary " v-on:click="SetDeletedId(country.id)">
                                            <i class="fa fa-remove mt-0  "></i>
                                        </a>
                                    </span>
                                </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="panel22" role="tabpanel">
                      <h5 class="my-2 h5">المناطق</h5>
                      <div class="form-row">
                        <div class="col-md-4 mb-3 md-form">
                          <label class="active">الدولة</label>
                          <select class="mdb-select2">
                            <option value disabled selected>إختر ...</option>
                            <option value="1">الإختيار الأول</option>
                            <option value="2">الإختيار الثاني</option>
                            <option value="3">الإختيار الثالث</option>
                          </select>
                        </div>
                        <div class="col-md-4 mb-3 md-form">
                          <label class="active">المنطقة</label>
                          <input type="text" class="form-control">
                        </div>
                        <div class="col-md-4 md-form">
                          <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary">إضافة</a>
                        </div>
                      </div>
                      <div class="table-responsive text-nowrap mt-3">
                        <table class="table table-striped" cellspacing="0">
                          <thead>
                            <tr>
                              <th class="w1p">م</th>
                              <th>الدولة</th>
                              <th data-breakpoints="xs sm " class="table-controls"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>4</td>
                              <td>نص تجريبي لإسم الدولة</td>
                              <td>
                                <a
                                  href="#"
                                  class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="تعديل"
                                >
                                  <i class="fa fa-pencil"></i>
                                </a>
                                <span data-toggle="tooltip" data-placement="top" title="حذف">
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#deleteConfirm"
                                    class="waves-effect waves-dark btn btn-sm btn-secondary"
                                  >
                                    <i class="fa fa-remove mt-0"></i>
                                  </a>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="panel23" role="tabpanel">
                      <h5 class="my-2 h5">المدن</h5>
                      <div class="form-row">
                        <div class="col-md-3 mb-3 md-form">
                          <label class="active">الدولة</label>
                          <select class="mdb-select2">
                            <option value disabled selected>إختر ...</option>
                            <option value="1">الإختيار الأول</option>
                            <option value="2">الإختيار الثاني</option>
                            <option value="3">الإختيار الثالث</option>
                          </select>
                        </div>
                        <div class="col-md-3 mb-3 md-form">
                          <label class="active">المنطقة</label>
                          <select class="mdb-select2">
                            <option value disabled selected>إختر ...</option>
                            <option value="1">الإختيار الأول</option>
                            <option value="2">الإختيار الثاني</option>
                            <option value="3">الإختيار الثالث</option>
                          </select>
                        </div>
                        <div class="col-md-3 mb-3 md-form">
                          <label class="active">المدينة</label>
                          <input type="text" class="form-control">
                        </div>
                        <div class="col-md-3 md-form">
                          <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary">إضافة</a>
                        </div>
                      </div>
                      <div class="table-responsive text-nowrap mt-3">
                        <table class="table table-striped" cellspacing="0">
                          <thead>
                            <tr>
                              <th class="w1p">م</th>
                              <th>الدولة</th>
                              <th data-breakpoints="xs sm " class="table-controls"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>4</td>
                              <td>نص تجريبي لإسم الدولة</td>
                              <td>
                                <a
                                  href="#"
                                  class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="تعديل"
                                >
                                  <i class="fa fa-pencil"></i>
                                </a>
                                <span data-toggle="tooltip" data-placement="top" title="حذف">
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#deleteConfirm"
                                    class="waves-effect waves-dark btn btn-sm btn-secondary"
                                  >
                                    <i class="fa fa-remove mt-0"></i>
                                  </a>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Nav tabs -->
            </div>
          </div>
          <div class="tab-pane fade" id="cases-md" role="tabpanel" aria-labelledby="cases-tab-md">
                <div class="row">
                        <div class="col-md-3">
                            <ul class="nav md-pills mainColor flex-column" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link show  active" data-toggle="tab" href="#notary" role="tab" aria-selected="true">
                                        حالات الموثق
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link show" data-toggle="tab" href="#request" role="tab" aria-selected="false">
                                        حالات طلب الرخصة
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-9">
                            <div class="tab-content vertical">
                                <div class="tab-pane fade active show" id="notary" role="tabpanel">
                                    <h5 class="my-2 h5">حالات الموثق</h5>
                                    <div class="form-row ">

                                        <div class="col-md-4 mb-3 md-form">
                                            <label class="active">الحالة </label>
                                            <input type="text" class="form-control ">
                                        </div>
                                        <div class="col-md-4 md-form">
                                            <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary">
                                                إضافة
                                            </a>
                                        </div>
                                    </div>
                                    <div class="table-responsive text-nowrap mt-3">
                                        <table class="table table-striped" cellspacing="0">

                                            <thead>
                                                <tr>
                                                    <th class="w1p">
                                                        م
                                                    </th>
                                                    <th>الحالة</th>
                                                    <th data-breakpoints="xs sm " class="table-controls"></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        موثق فعال
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        2
                                                    </td>
                                                    <td>
                                                        موثق مرخص وغير فعال
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        3
                                                    </td>
                                                    <td>
                                                        موثق موقوف مؤقت
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        4
                                                    </td>
                                                    <td>
                                                        رخصة منتهية
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        4
                                                    </td>
                                                    <td>
                                                        رخصة مشطوبة
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="request" role="tabpanel">
                                    <h5 class="my-2 h5">حالات طلب الرخصة</h5>
                                    <div class="form-row ">
                                        <div class="col-md-4 mb-3 md-form">
                                            <label class="active">حالة طلب الرخصة </label>
                                            <input type="text" class="form-control ">
                                        </div>
                                        <div class="col-md-4 md-form">
                                            <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary">
                                                إضافة
                                            </a>
                                        </div>

                                    </div>
                                     <div class="table-responsive text-nowrap mt-3">
                                        <table class="table table-striped" cellspacing="0">

                                            <thead>
                                                <tr>
                                                    <th class="w1p">
                                                        م
                                                    </th>
                                                    <th>الحالة</th>
                                                    <th data-breakpoints="xs sm " class="table-controls"></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        موثق فعال
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        2
                                                    </td>
                                                    <td>
                                                        موثق مرخص وغير فعال
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        3
                                                    </td>
                                                    <td>
                                                        موثق موقوف مؤقت
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        4
                                                    </td>
                                                    <td>
                                                        رخصة منتهية
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        4
                                                    </td>
                                                    <td>
                                                        رخصة مشطوبة
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
          </div>
            <div class="tab-pane fade" id="hospitals-md" role="tabpanel" aria-labelledby="hospitals-tab-md">
                <div class="form-row ">
                    <div class="col-md-3 mb-3 md-form">
                        <label class="active">المدينة </label>
                        <select class="mdb-select2">
                            <option value="" disabled selected>إختر ...</option>
                            <option value="1">
                                الإختيار الأول
                            </option>
                            <option value="2">الإختيار الثاني </option>
                            <option value="3">الإختيار الثالث </option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-3 md-form">
                        <label class="active">المستشفى/ المستوصف الطبي </label>
                        <input type="text" class="form-control ">
                    </div>
                    <div class="col-md-3 md-form">
                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary">
                            إضافة
                        </a>
                    </div>

                </div>
                <div class="table-responsive text-nowrap mt-3">
                    <table class="table table-striped" cellspacing="0">
                        <thead>
                            <tr>
                                <th class="w1p">
                                    م
                                </th>
                                <th>المدينة</th>
                                <th>المستشفى/ المستوصف الطبي</th>
                                <th data-breakpoints="xs sm " class="table-controls"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>
                                    <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                        data-toggle="tooltip" data-placement="top" title="تعديل">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                    <span data-toggle="tooltip" data-placement="top" title="حذف">
                                        <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                            <i class="fa fa-remove mt-0  "></i>
                                        </a>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>
                                    <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                        data-toggle="tooltip" data-placement="top" title="تعديل">
                                        <i class="fa fa-pencil"></i>
                                    </a>

                                    <span data-toggle="tooltip" data-placement="top" title="حذف">
                                        <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                            <i class="fa fa-remove mt-0  "></i>
                                        </a>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>

                                    <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                        data-toggle="tooltip" data-placement="top" title="تعديل">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                    <span data-toggle="tooltip" data-placement="top" title="حذف">
                                        <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                            <i class="fa fa-remove mt-0  "></i>
                                        </a>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>
                                    نص تجريبي
                                </td>
                                <td>

                                    <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                        data-toggle="tooltip" data-placement="top" title="تعديل">
                                        <i class="fa fa-pencil"></i>
                                    </a>

                                    <span data-toggle="tooltip" data-placement="top" title="حذف">
                                        <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                            <i class="fa fa-remove mt-0  "></i>
                                        </a>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="tab-pane fade" id="other-md" role="tabpanel" aria-labelledby="cases-tab-md">
                    <div class="row">
                        <div class="col-md-3">
                            <ul class="nav md-pills mainColor flex-column" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link show  active" data-toggle="tab" href="#tabNum1" role="tab" aria-selected="true">
                                        جهات شبه حكومية
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link show" data-toggle="tab" href="#tabNum2" role="tab" aria-selected="false">
                                        الإقرار والتعهد
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-9">
                            <div class="tab-content vertical">
                                <div class="tab-pane fade active show" id="tabNum1" role="tabpanel">
                                    <h5 class="my-2 h5">جهات شبه حكومية</h5>
                                    <div class="form-row ">

                                        <div class="col-md-4 mb-3 md-form">
                                            <label class="active">الجهة </label>
                                            <input type="text" class="form-control ">
                                        </div>
                                        <div class="col-md-4 md-form">
                                            <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary">
                                                إضافة
                                            </a>
                                        </div>
                                    </div>
                                    <div class="table-responsive text-nowrap mt-3">
                                        <table class="table table-striped" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th class="w1p">
                                                        م
                                                    </th>
                                                    <th>الجهات شبه الحكومية</th>
                                                    <th data-breakpoints="xs sm " class="table-controls"></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        اسم الجهة
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        2
                                                    </td>
                                                    <td>
                                                        اسم الجهة
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        3
                                                    </td>
                                                    <td>
                                                        اسم الجهة
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        4
                                                    </td>
                                                    <td>
                                                        اسم الجهة
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        4
                                                    </td>
                                                    <td>
                                                        اسم الجهة
                                                    </td>
                                                    <td>
                                                        <a href="#" class="waves-effect waves-dark btn btn-sm btn-primary mr-0"
                                                           data-toggle="tooltip" data-placement="top" title="تعديل">
                                                            <i class="fa fa-pencil"></i>
                                                        </a>
                                                        <span data-toggle="tooltip" data-placement="top" title="حذف">
                                                            <a href="#" data-toggle="modal" data-target="#deleteConfirm" class="waves-effect waves-dark  btn btn-sm btn-secondary ">
                                                                <i class="fa fa-remove mt-0  "></i>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tabNum2" role="tabpanel">
                                    <div class="form-row">
                                        <div class="col-md-12 mb-3  ">
                                            <label class="">إقرار وتعهد</label>
                                            <textarea class="form-control">نص الإقرار والتعهد</textarea>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <a href="#" class="btn btn-primary btn-sm waves-effect waves-light">حفظ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import jQuery from "jquery";
import {Domain} from '../../main.js';
import { debuglog } from 'util';
export default {
  name: "definitions",
   data() {
    return {
        Domain:Domain,
        Countries: [],
        selected: '',
        targetId : '' ,
        arabicName: '',
        englishName: '',
        deletetitle: 'Are You Sure',
        title : '' ,
        DeletedId: '' ,
        errormsg : '' ,
        isEditMode: false
    };
  },
    methods: {
         refreshData: function () {
            var self = this;
            var Url = this.Domain + 'api/LookupData/getall/';
            axios.post(Url, { type: 1 })
                .then(response => {
                    this.Countries = response.data;
                    //Test
                 })
                .catch(function (error) {
                    alert("ERROR: " + (error.message | error));
                });
        },
         EditCountry: function (country) {
            debugger;
            this.targetId = country.id;
            this.arabicName = country.arabicName;
            this.englishName = country.englishName;
            this.isEditMode = true;
        },
         PostEditCountry: function () {
             var Url = this.Domain + '/api/LookupData/EditLookupData/';
            axios.post(
                Url,
                {
                    Id: this.targetId,
                    arabicName: this.arabicName,
                    englishName: this.englishName
                }
            ).then(resp => {
                    this.arabicName = '';
                    this.englishName = '';
                    this.errormsg = '';
                    this.refreshData();
                    this.isEditMode = false;
                })
                .catch(resp => {
                    this.arabicName = '';
                    this.englishName = '';
                    this.errormsg = '';
                    this.refreshData();
                    document.getElementById('editgroup').style.display = 'none'
                });
        },
         SetDeletedId(id)
         {
             this.targetId = id
        },
         DeleteCountry: function ()
         {
             var Url = this.Domain + '/api/LookupData/DeleteLookupData/';

             axios.post(
                 Url,
                 {
                     Id: this.targetId
                 }
             ).then(response => {
                 this.targetId = '';
                     this.refreshData();
                 })
                 .catch(function (error) {
                     this.refreshData();
                 });
         },
         addCountry: function () {
             var Url = this.Domain + '/api/LookupData/AddLookupData/';
            axios.post(
                Url,
                {
                    arabicName: this.arabicName,
                    englishName: this.englishName,
                    type: 1
                }
            )
                .then(resp => {
                    this.arabicName = '';
                    this.englishName = '';
                    this.errormsg = '';
                    this.refreshData();
                })
                .catch(error => {
                    if (error.response.status == 400) {
                        this.arabicName = '';
                        this.englishName = '';
                        for (var i = 0; i < error.response.data.length; i++) {
                            $('#' + error.response.data[i].key).css('display', 'block');
                            $('#' + error.response.data[i].key).text(error.response.data[i].value);
                            toastr.error(error.response.data[i].value);
                        }
                    }
                });
         }
    },
  components: {},
  created: function () {
        this.refreshData();
    },
  mounted() {
    // jQuery(".about").hide();
       jQuery(".mdb-select2").css({ color: "red" });
  }
};
</script>
