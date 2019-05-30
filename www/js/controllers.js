angular.module('app.controllers', [])

        .controller('cargaCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {
                // variable general de la URL

                $URL = 'https://insutool.prod.euromedice.net/';
                //$URL = 'http://localhost/18-009_insutool/';


            }])

        /* Login acceso */
        .controller('postController', function ($scope, $http, $state, $ionicLoading, $timeout, $ionicPopup) {

            $scope.rsJSON = [];
            // obtenemos el evento submit del formulario ng-submit="entrar()"
            $scope.entrar = function () {

                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                })
                var req = {
                    method: 'POST',
                    url: $URL + 'rest/login.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {password: $scope.txtPassword, email: $scope.txtEmail},
                    dataType: "jsonp"
                }

                $http(req)
                        .success(function (data) {
                            console.log(data);
                            // si no existe el usuario nos muestre un alerta de error
                            if (typeof (data.email) == "undefined") {
                                $ionicLoading.hide();
                                //alert(data);

                                if (data == 'false') {
                                    data = 'ERROR: No tiene acceso';
                                } else {
                                    data = 'ERROR: Rellene todos los datos';
                                }

                                var alertPopup = $ionicPopup.alert({
                                    title: data,
                                    template: ''
                                });
                            } else {
                                // guarda datos en local
                                window.localStorage['MM_Email'] = data.email;
                                window.localStorage['MM_Password'] = data.password;
                                window.localStorage['MM_id'] = data.id;
                                $timeout(function () {
                                    $ionicLoading.hide();
                                    $state.go("menu.index");
                                }, 2000);
                            }
                        })
                        .error(function (data) {
                            $ionicLoading.hide();
                            //alert('Error: ' + data);
                            var alertPopup = $ionicPopup.alert({
                                title: 'No se ha podido conectar al servidor, inténtelo mas tarde.',
                                template: ''
                            });
                            alertPopup.then(function (res) {
                                console.log('adios');
                            });
                        });
            };

            $scope.recordar = function () {

                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                })

                var req2 = {
                    method: 'POST',
                    url: $URL + 'rest/recuperar.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {email: $scope.txtEmail},
                    dataType: "jsonp"
                }

                $http(req2)
                        .success(function (data) {
                            console.log(data);
                            // si no existe el usuario nos muestre un alerta de error
                            if (typeof (data.email) == "undefined") {

                                $ionicLoading.hide();
                                if (data == '"recuperar_ok"') {
                                    data = 'ENHORABUENA: Le hemos enviar a su cuenta de e-mail los datos de acceso.';
                                }

                                if (data == '"faltan_datos"') {
                                    data = 'Rellene el campo de e-mail';
                                }
                                if (data == '"no_existe"') {
                                    data = 'No hemos encontrado ningún usuario con este e-mail.';
                                }


                                var alertPopup = $ionicPopup.alert({
                                    title: data,
                                    template: ''
                                });
                            }
                        })
                        .error(function (data) {
                            $ionicLoading.hide();
                            //alert('Error: ' + data);
                            var alertPopup = $ionicPopup.alert({
                                title: 'No se ha podido conectar al servidor, inténtelo mas tarde.',
                                template: ''
                            });
                            alertPopup.then(function (res) {
                                console.log('adios');
                            });
                        });
            };



        })


        .controller('registroCtrl', function ($scope, $stateParams, $http, $state, $ionicLoading, $location, $ionicPopup, $timeout) {

            $scope.rsJSON = [];
            // obtenemos el evento submit del formulario ng-submit="entrar()"
            $scope.registro = function () {

                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                })

                var req1 = {
                    method: 'POST',
                    url: $URL + 'rest/registro.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {password: $scope.regPassword, email: $scope.regEmail, nombre: $scope.regNombre, apellidos: $scope.regApellidos, nif: $scope.regNif, provincia: $scope.regProvincia},
                    dataType: "jsonp"
                }

                $http(req1)
                        .success(function (data) {
                            console.log(data);
                            // si no existe el usuario nos muestre un alerta de error
                            if (typeof (data.email) == "undefined") {

                                $ionicLoading.hide();
                                //alert(data);

                                if (data == '"email_unico"') {
                                    data = 'ENHORABUENA: Ya tiene acceso a la aplicación.<br><br>Le hemos enviado un e-mail con las credenciales de acceso.';
                                    window.localStorage['MM_Email'] = $scope.regEmail;
                                    window.localStorage['MM_Password'] = $scope.regPassword;
                                    $timeout(function () {
                                        $ionicLoading.hide();
                                        $state.go("menu.index");
                                    }, 2000);
                                }
                                if (data == '"email_repetido"') {
                                    data = 'Ya existe un usuario con este e-mail en nuestra base de datos';
                                }
                                if (data == '"faltan_datos"') {
                                    data = 'Rellene todos los campos del formulario';
                                }


                                var alertPopup = $ionicPopup.alert({
                                    title: data,
                                    template: ''
                                });
                            }
                        })
                        .error(function (data) {
                            $ionicLoading.hide();
                            //alert('Error: ' + data);
                            var alertPopup = $ionicPopup.alert({
                                title: 'No se ha podido conectar al servidor, inténtelo mas tarde.',
                                template: ''
                            });
                            alertPopup.then(function (res) {
                                console.log('adios');
                            });
                        });
            };
        })


        .controller('registro_movCtrl', function ($scope, $http, $state, $ionicLoading, $timeout, $ionicPopup) {

            // acciones para pasar del formulario de login a registro y viceversa
            $scope.cambiar_a_registro = function () {
                $scope.css_1 = 'login-form1_2';
                $scope.css_2 = 'login-form2_2';
            }
            $scope.cambiar_a_login = function () {
                $scope.css_1 = '';
                $scope.css_2 = '';
            }
        })

        .controller('datosCtrl', function ($scope, $stateParams, $http, $state, $ionicLoading, $location, $ionicPopup, $timeout) {

            $scope.rsJSON = [];

            // datos de usuario leer
            $scope.usuario_leer_Datos = function () {

                $scope.regEmail = window.localStorage['MM_Email'];
                $scope.regPassword = window.localStorage['MM_Password'];

                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                })
                var reqDatos = {
                    method: 'POST',
                    url: $URL + 'rest/login.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {password: $scope.regPassword, email: $scope.regEmail},
                    dataType: "jsonp"
                }

                $http(reqDatos)
                        .success(function (data) {
                            console.log(data);
                            // si no existe el usuario nos muestre un alerta de error
                            if (typeof (data.email) == "undefined") {
                                $ionicLoading.hide();
                                //alert(data);

                                if (data == 'false') {
                                    data = 'ERROR: No tiene acceso';
                                } else {
                                    data = 'ERROR: Rellene todos los datos';
                                }

                                var alertPopup = $ionicPopup.alert({
                                    title: data,
                                    template: ''
                                });
                            } else {
                                // guarda datos en local
                                window.localStorage['MM_Email'] = data.email;
                                window.localStorage['MM_Password'] = data.password;
                                window.localStorage['MM_id'] = data.id;

                                $scope.regId = data.id;
                                $scope.regEmail = data.email;
                                $scope.regPassword = data.password;
                                $scope.regNombre = data.nombre;
                                $scope.regApellidos = data.apellido;
                                $scope.regNif = data.nif;
                                $scope.regProvincia = data.provincia;


                                $timeout(function () {
                                    $ionicLoading.hide();
                                    //$state.go("menu.index");
                                }, 2000);
                            }
                        })
                        .error(function (data) {
                            $ionicLoading.hide();
                            //alert('Error: ' + data);
                            var alertPopup = $ionicPopup.alert({
                                title: 'No se ha podido conectar al servidor, inténtelo mas tarde.',
                                template: ''
                            });
                            alertPopup.then(function (res) {
                                console.log('adios');
                            });
                        });
            };

            // actualizar datos de usuario
            $scope.registro = function () {

                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                })

                var reqDatos2 = {
                    method: 'POST',
                    url: $URL + 'rest/actualizar.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {id: $scope.regId, password: $scope.regPassword, email: $scope.regEmail, nombre: $scope.regNombre, apellidos: $scope.regApellidos, nif: $scope.regNif, provincia: $scope.regProvincia},
                    dataType: "jsonp"
                }

                $http(reqDatos2)
                        .success(function (data) {
                            console.log(data);

                            $ionicLoading.hide();
                            //alert(data);

                            if (data == '"ok"') {

                                data = 'ENHORABUENA: Datos actualizados';
                                window.localStorage['MM_Email'] = $scope.regEmail;
                                window.localStorage['MM_Password'] = $scope.regPassword;
                                $timeout(function () {
                                    $ionicLoading.hide();
                                    //$state.go("menu.index");
                                }, 2000);
                            }

                            if (data == '"faltan_datos"') {
                                data = 'Rellene todos los campos del formulario';
                            }


                            var alertPopup = $ionicPopup.alert({
                                title: data,
                                template: ''
                            });

                        })
                        .error(function (data) {
                            $ionicLoading.hide();
                            //alert('Error: ' + data);
                            var alertPopup = $ionicPopup.alert({
                                title: 'No se ha podido conectar al servidor, inténtelo mas tarde.',
                                template: ''
                            });
                            alertPopup.then(function (res) {
                                console.log('error');
                            });
                        });
            };



        })


        .controller('loginCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {

            }])

        .controller('cerrarCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state', '$ionicSideMenuDelegate',
            function ($scope, $stateParams, $ionicPopup, $state, $ionicSideMenuDelegate) {
                // vaciar datos del usuario al cerrar sesión
                $scope.cerrar = function () {
                    var storage = window.localStorage;
                    var borrar = '';
                    storage.setItem('MM_Email', borrar);
                    storage.setItem('MM_Password', borrar);
                    window.location = "#/login";
                }


            }])

        /* detecta si hay login en la home y redirige al inicio */
        .controller('ProtectedController3', ['$scope', '$stateParams',
            function ($scope, $location, $ionicViewService, $state) {
                var user = window.localStorage['MM_Email'];
                if (typeof user !== 'undefined' && user !== '') {

                    window.location = "#/menu/home";
                    //alert('Con acceso');

                }

            }])
        /* detecta si hay login a la carga de cualquier página */
        .controller('ProtectedController', ['$scope', '$stateParams',
            function ($scope, $location, $ionicViewService, $state) {
                var user = window.localStorage['MM_Email'];
                if (user === "" || user == 'undefined') {
                    //$state.go("login");
                    //alert('Sin acceso');
                    window.location = "#/login";
                }
            }])

        /* detecta el cambio de estado del navegador para ver si está logeado 
         .controller('ProtectedController2', ['$rootScope', function ($rootScope) {
         $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, $state) {
         
         var user = window.localStorage['MM_Email'];
         if (user === "" || user == undefined) {
         //$state.go("login");
         //alert('Sin acceso');
         window.location = "#/login";
         }
         
         });
         
         }
         ])
         */

        .controller('homeCtrl', ['$scope', '$stateParams',
            function ($scope, $stateParams) {



            }])




        .controller('reenvioCtrl', ['$scope', '$stateParams', '$timeout', '$state',
            function ($scope, $stateParams, $timeout, $state) {

                //window.location = "#/menu/home";
                $timeout(function () {
                    $state.go("menu.index");
                }, 1000);
            }])

        // insertar resultados de los algoritmos
        .controller('usoCtrl', function ($scope, $stateParams, $http, $state, $ionicLoading, $location, $ionicPopup, $timeout) {

            $scope.rsJSON = [];
    
            var storage = window.localStorage;
            var id_user = storage.getItem('MM_id');

            // actualizar datos de usuario
            $scope.uso = function (algoritmo, resultado) {

                var reqDatos3 = {
                    method: 'POST',
                    url: $URL + 'rest/uso.php',
                    headers: {
                        'Content-Type': undefined
                    },
                    data: {id: id_user, algoritmo: algoritmo, resultado: resultado},
                    dataType: "jsonp"
                }

                $http(reqDatos3)
                        .success(function (data) {
                            console.log(data);

                            if (data == '"ok"') {
                                
                                console.log('uso_ok');

                            }

                            if (data == '"faltan_datos"') {
                               
                                console.log('KO');
                            }

                        })
                        .error(function (data) {
                            
                                console.log('error');
                           
                        });
            };



        })


// Guardar datos ****************************************/
        .controller('testCtrl', ['$scope', '$stateParams', '$location', '$ionicPopup', '$ionicHistory', '$ionicScrollDelegate',
            function ($scope, $stateParams, $location, $ionicPopup, $ionicHistory, $ionicScrollDelegate, $timeout) {
                var storage = window.localStorage;
                //storage.setItem('setting', true);
                // leer datos de local y enviar a los checkbox

                //01/01.html

                $scope.Metformina = $scope.$eval(storage.getItem('Metformina'));
                $scope.Sulfonilureas = $scope.$eval(storage.getItem('Sulfonilureas'));
                $scope.Repaglinidina = $scope.$eval(storage.getItem('Repaglinidina'));
                $scope.IDPP4 = $scope.$eval(storage.getItem('IDPP4'));
                $scope.aGLP1 = $scope.$eval(storage.getItem('aGLP1'));
                $scope.iSGLT2 = $scope.$eval(storage.getItem('iSGLT2'));
                $scope.Pioglitazona = $scope.$eval(storage.getItem('Pioglitazona'));
                $scope.Acarbosa = $scope.$eval(storage.getItem('Acarbosa'));
                //02/01.html
                //
                // crear RADIO listado insulinas
                $scope.insulinas = storage.getItem('insulinas');
                var val1 = storage.getItem('insulinas');
                var fragilidad_var = storage.getItem('fragilidad');
                var paliativo_var = storage.getItem('paliativo_var');
                if (fragilidad_var !== 'true' || paliativo_var !== 'true') {
                    $scope.InsulinasList = [
                        {text: "GLARGINA U100", value: "GLARGINA_U100"},
                        {text: "DEGLUDEC", value: "DEGLUDEC"},
                        {text: "GLARGINA U300", value: "GLARGINA_U300"},
                        {text: "NPH", value: "NPH"},
                        {text: "DETEMIR", value: "DETEMIR"}

                    ];
                }
                if (fragilidad_var === 'true' || paliativo_var === 'true') {
                    $scope.InsulinasList = [
                        {text: "GLARGINA U100", value: "GLARGINA_U100"},
                        {text: "DEGLUDEC", value: "DEGLUDEC"},
                        {text: "GLARGINA U300", value: "GLARGINA_U300"}
                    ];
                }
                // radio checked inicial
                $scope.data = {
                    InsulinasList_1: val1
                };
                // crear RADIO listado Pinchazos
                $scope.pinchazos = storage.getItem('pinchazos');
                var val2 = storage.getItem('pinchazos');
                $scope.Pinchazos = [
                    {text: "1 dosis", value: "1"},
                    {text: "2 dosis", value: "2"}
                ];
                // radio checked inicial
                $scope.data2 = {
                    Pinchazos_1: val2
                };
                // Range de cantidad de unidades al día

                // comprueba que hay variable en localstorage, si no, añade un cero
                $scope.unidades = storage.getItem('unidades');
                var unidades_db = storage.getItem('unidades');
                if (unidades_db !== null) {
                    $scope.unidades = unidades_db;
                    $scope.data.unidades = unidades_db;
                } else {
                    $scope.unidades = '0';
                    $scope.data.unidades = '0';
                }

                //02/02.html
                $scope.ver_mensaje = function () {

                    $scope.deglutec_ok = 'true';
                }


                // 02/04-ajuste
                // crear RADIO listado ajustes
                $scope.ajuste_basal = storage.getItem('ajuste_basal');
                var val2 = storage.getItem('ajuste_basal');
                $scope.ajusteList = [
                    {text: "GLUCEMIA < 80 mg/dl", value: "ajuste_1"},
                    {text: "GLUCEMIA entre 80-130 mg/dl", value: "ajuste_2"},
                    {text: "GLUCEMIA entre 130-180 mg/dl", value: "ajuste_3"},
                    {text: "GLUCEMIA > 180 mg/dl", value: "ajuste_4"}
                ];
                // radio checked inicial
                $scope.data3 = {
                    ajusteList_1: val2
                };
                // resultado final de unidades
                if (val2 === "ajuste_1") {
                    var ajuste = '-2';
                    var unidades_final_texto = 'Disminuir 2 UI si presenta glucemia basal < 80 mg/dl';
                }
                if (val2 === "ajuste_2") {
                    var ajuste = '0';
                    var unidades_final_texto = 'No modificar la dosis';
                }
                if (val2 === "ajuste_3") {
                    var ajuste = '2';
                    var unidades_final_texto = 'Aumentar la dosis de insulina en 4 U si en 3 días consecutivos glucemia basal > 180 mg/dl';
                }
                if (val2 === "ajuste_4") {
                    var ajuste = '4';
                    var unidades_final_texto = 'Aumentar la dosis de insulina en 4 U si en 3 días consecutivos glucemia basal > 180 mg/dl';
                }

                $scope.unidades_final = parseFloat(ajuste) + parseFloat(unidades_db);
                $scope.info_unidades_final = function () {

                    var alertPopup = $ionicPopup.alert({
                        title: unidades_final_texto,
                        template: ''
                    });
                }


                // 02/04-cambio
                // crear RADIO listado cambio insulina
                $scope.flexibilidad = function (data) {
                    $scope.flexibilidad = data;
                    storage.setItem('flexibilidad', data);
                };
                $scope.cambio_basal = storage.getItem('cambio_basal');
                var val3 = storage.getItem('cambio_basal');
                var val3_1 = storage.getItem('flexibilidad');
                // si ya se ha seleccionado GLARGINA U300 solo mostrar una opción
                if (val1 === 'GLARGINA_U300' || val3_1 === 'true') {
                    $scope.cambioList = [
                        {text: "DEGLUDEC", value: "cambio_DEGLUDEC"}
                    ];
                } else {
                    $scope.cambioList = [
                        {text: "DEGLUDEC", value: "cambio_DEGLUDEC"},
                        {text: "GLARGINA U300", value: "cambio_GLARGINA_U300"}
                    ];
                }

                // radio checked inicial
                $scope.data4 = {
                    cambioList_1: val3
                };
                // 02/05-cambio
                // recoger datos iniciales
                var inicio_insulinas = storage.getItem('insulinas');
                var inicio_pinchazos = storage.getItem('pinchazos');
                var inicio_unidades = storage.getItem('unidades');
                var inicio_cambio_basal = storage.getItem('cambio_basal');
                // hacer comparaciones según tabla 
                if (inicio_cambio_basal === 'cambio_DEGLUDEC') {
                    $scope.nueva_insulina = 'DEGLUDEC';
                    // 1 pinchazo
                    if (inicio_insulinas === 'GLARGINA_U100' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'NPH' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DETEMIR' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'GLARGINA_U300' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DEGLUDEC' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    // 2 pinchazos
                    if (inicio_insulinas === 'GLARGINA_U100' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'NPH' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DETEMIR' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'GLARGINA_U300' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DEGLUDEC' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }

                }
                if (inicio_cambio_basal === 'cambio_GLARGINA_U300') {
                    $scope.nueva_insulina = 'GLARGINA U300';
                    // 1 pinchazo
                    if (inicio_insulinas === 'GLARGINA_U100' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'NPH' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DETEMIR' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'GLARGINA_U300' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DEGLUDEC' && inicio_pinchazos == '1') {
                        $scope.nueva_unidades = inicio_unidades;
                        $scope.nueva_unidades_texto = 'Misma dosificación';
                        $scope.nueva_pinchazos = '1';
                    }
                    // 2 pinchazos
                    if (inicio_insulinas === 'GLARGINA_U100' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'NPH' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DETEMIR' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'GLARGINA_U300' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }
                    if (inicio_insulinas === 'DEGLUDEC' && inicio_pinchazos == '2') {
                        $scope.nueva_unidades = parseFloat(inicio_unidades) - ((parseFloat(inicio_unidades) * 20) / 100);
                        $scope.nueva_unidades_texto = 'Reducido un 20 %';
                        $scope.nueva_pinchazos = '1';
                    }

                }
                // FIN 02/05-cambio

                // 03/06.html

                $scope.enfermedad_cv = $scope.$eval(storage.getItem('enfermedad_cv'));
                $scope.enfermedad_renal_cronica = $scope.$eval(storage.getItem('enfermedad_renal_cronica'));
                $scope.fragilidad = $scope.$eval(storage.getItem('fragilidad'));
                $scope.paliativo = $scope.$eval(storage.getItem('paliativo'));
                $scope.obesidad = $scope.$eval(storage.getItem('obesidad'));
                $scope.hiperglucemia_cortoidea = $scope.$eval(storage.getItem('hiperglucemia_cortoidea'));
                //03/07-imc 
                $scope.altura = storage.getItem('altura');
                var altura = storage.getItem('altura');
                if (altura !== null) {
                    $scope.altura1 = altura.toString().replace(/\./g, ',');
                }else {
                    $scope.altura1 = 0;
                }
                

                $scope.peso = storage.getItem('peso');
                var peso = storage.getItem('peso');
                if (peso !== null){
                    $scope.peso1 = peso.toString().replace(/\./g, ',');
                } else {
                    $scope.peso1 = 0;
                }
                

                $scope.imc_manual = storage.getItem('imc_manual');
                // cálculo IMC
                var altura = storage.getItem('altura');
                var peso = storage.getItem('peso');
                var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
                $scope.imc = imc.toFixed(2);
                var imc = imc.toFixed(2);
                if (imc !== null){
                    $scope.imc1 = imc.toString().replace(/\./g, ',');
                } else {
                    $scope.imc1 = 0;
                }
                
                //03/08-imc.html
                //
                // crear RADIO listado opciones < 25 imc
                $scope.opcion_imc_1 = storage.getItem('opcion_imc_1');
                var val1 = $scope.$eval(storage.getItem('IDPP4'));
                var val3 = storage.getItem('opcion_imc_1');
                // si ya se ha seleccionado IDPP4 solo mostrar una opción
                if (val1 === true) {
                    $scope.opcion_1_List = [
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}
                    ];
                } else {
                    $scope.opcion_1_List = [
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"},
                        {text: "Añadir iDPP4", value: "Anadir_iDPP4"}
                    ];
                }

                $scope.data5 = {
                    opcion_1_List_1: val3
                };
                // crear RADIO listado opciones 25,1-30 imc
                $scope.opcion_imc_2 = storage.getItem('opcion_imc_2');
                var val1 = $scope.$eval(storage.getItem('IDPP4'));
                var val2 = $scope.$eval(storage.getItem('iSGLT2'));
                var val3 = storage.getItem('opcion_imc_2');
                // si ya se ha seleccionado IDPP4 solo mostrar una opción
                if (val1 === true) {
                    $scope.opcion_2_List = [
                        {text: "Añadir iSGLT2", value: "Anadir_iSGLT2"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}
                    ];
                }
                if (val2 === true) {
                    $scope.opcion_2_List = [
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"},
                        {text: "Añadir iDPP4", value: "Anadir_iDPP4"}
                    ];
                }
                if (val1 === true && val2 === true) {
                    $scope.opcion_2_List = [
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}
                    ];
                }
                if (val1 != true && val2 != true) {
                    $scope.opcion_2_List = [
                        {text: "Añadir iSGLT2", value: "Anadir_iSGLT2"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"},
                        {text: "Añadir iDPP4", value: "Anadir_iDPP4"}
                    ];
                }

                $scope.data6 = {
                    opcion_2_List_1: val3
                };
                // crear RADIO listado opciones 30,1-35 imc
                $scope.opcion_imc_3 = storage.getItem('opcion_imc_3');
                var val2 = $scope.$eval(storage.getItem('iSGLT2'));
                var val4 = $scope.$eval(storage.getItem('aGLP1'));
                var val3 = storage.getItem('opcion_imc_2');
                // si ya se ha seleccionado IDPP4 solo mostrar una opción
                if (val4 === true) {
                    $scope.opcion_3_List = [
                        {text: "Añadir iSGLT2", value: "Anadir_iSGLT2"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}
                    ];
                }
                if (val2 === true) {
                    $scope.opcion_3_List = [
                        {text: "Añadir aGLP1", value: "Anadir_aGLP1"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}

                    ];
                }
                if (val2 === true && val4 == true) {
                    $scope.opcion_3_List = [
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}

                    ];
                }
                if (val2 != true && val4 != true) {
                    $scope.opcion_3_List = [
                        {text: "Añadir iSGLT2", value: "Anadir_iSGLT2"},
                        {text: "Añadir aGLP1", value: "Anadir_aGLP1"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}

                    ];
                }

                $scope.data7 = {
                    opcion_3_List_1: val3
                };
                // crear RADIO listado opciones >35,1 imc
                $scope.opcion_imc_4 = storage.getItem('opcion_imc_4');
                var val2 = $scope.$eval(storage.getItem('iSGLT2'));
                var val4 = $scope.$eval(storage.getItem('aGLP1'));
                var val3 = storage.getItem('opcion_imc_2');
                // si ya se ha seleccionado IDPP4 solo mostrar una opción
                if (val4 === true) {
                    $scope.opcion_4_List = [
                        {text: "Añadir iSGLT2", value: "Anadir_iSGLT2"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}
                    ];
                }
                if (val2 === true) {
                    $scope.opcion_4_List = [
                        {text: "Añadir aGLP1", value: "Anadir_aGLP1"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}

                    ];
                }
                if (val2 === true && val4 == true) {
                    $scope.opcion_4_List = [
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}

                    ];
                }
                if (val2 != true && val4 != true) {
                    $scope.opcion_4_List = [
                        {text: "Añadir aGLP1", value: "Anadir_aGLP1"},
                        {text: "Añadir iSGLT2", value: "Anadir_iSGLT2"},
                        {text: "Añadir insulinización rápida", value: "Insulinizacion_rapida"}

                    ];
                }

                $scope.data8 = {
                    opcion_4_List_1: val3
                };
                // algoritmo 5
                // INICIAR
                // crear RADIO listado PEOR CONTROL
                $scope.peor_control = storage.getItem('peor_control');
                var val_peor = storage.getItem('peor_control');
                $scope.peorList = [
                    {text: "Desayuno", value: "Desayuno"},
                    {text: "Comida", value: "Comida"},
                    {text: "Cena", value: "Cena"}
                ];
                // radio checked inicial
                $scope.data9 = {
                    peorList_1: val_peor
                };
                $scope.borrar_peor_control = function () {
                    var storage = window.localStorage;
                    var borrar = 'null';
                    storage.setItem('peor_control', borrar);
                }
                var peor_control = storage.getItem('peor_control');
                if (peor_control === 'Desayuno') {
                    $scope.peor_control2 = 'desayuno';
                }
                if (peor_control === 'Comida') {
                    $scope.peor_control2 = 'comida';
                }
                if (peor_control === 'Cena') {
                    $scope.peor_control2 = 'cena';
                }

                // 05-02-anadir.html
                $scope.pautas_no_complejas = $scope.$eval(storage.getItem('pautas_no_complejas'));
                $scope.horarios_fijos = $scope.$eval(storage.getItem('horarios_fijos'));
                $scope.comidas_principales = $scope.$eval(storage.getItem('comidas_principales'));
                // 06 - Inicio 01-inicio.html
                // 
                // listado de tipo de insulinas premezcladas
                $scope.premezcla_inicio = storage.getItem('premezcla_inicio');
                var premezcla_inicio = storage.getItem('premezcla_inicio');
                $scope.premezcla_inicioList = [
                    {text: "Insulina basal", value: "insulina_basal"},
                    {text: "Insulina prandial", value: "insulina_prandial"}
                ];
                // radio checked inicial
                $scope.data10 = {
                    premezcla_inicioList_1: premezcla_inicio
                };
                // listado de tipo de premezcla
                $scope.premezcla_tipo = storage.getItem('premezcla_tipo');
                var premezcla_tipo = storage.getItem('premezcla_tipo');
                $scope.premezcla_tipoList = [
                    {text: "Premezcla 30/70", value: "premezcla_30-70"},
                    {text: "Premezcla 25/75", value: "premezcla_25-75"}
                ];
                // radio checked inicial
                $scope.data11 = {
                    premezcla_tipoList_1: premezcla_tipo
                };
                // unidades premezcla
                $scope.unidades_premezcla = storage.getItem('unidades_premezcla');
                // resultados premezcla inicial
                var premezcla_inicio = storage.getItem('premezcla_inicio');
                var premezcla_tipo = storage.getItem('premezcla_tipo');
                if (premezcla_inicio === 'insulina_basal') {
                    $scope.premezcla_inicio_final = 'Insulina basal';
                }
                if (premezcla_inicio === 'insulina_prandial') {
                    $scope.premezcla_inicio_final = 'Insulina prandial';
                }

                if (premezcla_tipo === 'premezcla_25-75') {
                    $scope.premezcla_tipo_final = 'Premezcla 25-75';
                }
                if (premezcla_tipo === 'premezcla_30-70') {
                    $scope.premezcla_tipo_final = 'Premezcla 30-70';
                }

                // resultado
                var unidades_premezcla = storage.getItem('unidades_premezcla');
                $scope.resultado_60 = parseFloat(unidades_premezcla) * 60 / 100;
                $scope.resultado_40 = parseFloat(unidades_premezcla) * 40 / 100;
                // 06/ajustar/03-ajustar.html
                // 
                // listado Momento
                $scope.glucemia_premezcla = storage.getItem('glucemia_premezcla');
                var glucemia_premezcla = storage.getItem('glucemia_premezcla');
                $scope.glucemia_premezclaList = [
                    {text: "Preprandial", value: "Preprandial"},
                    {text: "Posprandial", value: "Posprandial"}
                ];
                // radio checked inicial
                $scope.data12 = {
                    glucemia_premezclaList_1: glucemia_premezcla
                };
                $scope.glucemia_1 = storage.getItem('glucemia_1');
                $scope.glucemia_2 = storage.getItem('glucemia_2');
                //06/ajustar/03-ajustar.html cálculo
                $scope.glucemia_premezcla_final = function () {

                    // desayuno
                    var glucemia_premezcla = storage.getItem('glucemia_premezcla');
                    $scope.glucemia_1 = storage.getItem('glucemia_1');
                    var glucemia_1 = storage.getItem('glucemia_1');
                    var glucemia_1_numero = parseFloat(glucemia_1);
                    if (glucemia_premezcla === 'Preprandial') {
                        if (glucemia_1_numero < '90') {
                            $scope.ajuste_dosis_premezcla = 'Quitar 2 UI';
                        }
                        if (glucemia_1_numero >= '90' && glucemia_1_numero <= '129') {
                            $scope.ajuste_dosis_premezcla = 'Misma dosis';
                        }
                        if (glucemia_1_numero >= '130' && glucemia_1_numero <= '139') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 1 UI';
                        }
                        if (glucemia_1_numero >= '140' && glucemia_1_numero <= '159') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 2 UI';
                        }
                        if (glucemia_1_numero >= '160' && glucemia_1_numero <= '179') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 3 UI';
                        }
                        if (glucemia_1_numero >= '180' && glucemia_1_numero <= '250') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 4 UI';
                        }
                    }

                    if (glucemia_premezcla === 'Posprandial') {
                        if (glucemia_1_numero < '100') {
                            $scope.ajuste_dosis_premezcla = 'Quitar 2 UI';
                        }
                        if (glucemia_1_numero >= '100' && glucemia_1_numero <= '179') {
                            $scope.ajuste_dosis_premezcla = 'Misma dosis';
                        }
                        if (glucemia_1_numero >= '180' && glucemia_1_numero <= '219') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 2 UI';
                        }
                        if (glucemia_1_numero >= '220' && glucemia_1_numero <= '259') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 3 UI';
                        }
                        if (glucemia_1_numero >= '260' && glucemia_1_numero <= '299') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 4 UI';
                        }
                        if (glucemia_1_numero >= '300') {
                            $scope.ajuste_dosis_premezcla = 'Añadir 7 UI';
                        }
                    }

                    // cena
                    var glucemia_premezcla = storage.getItem('glucemia_premezcla');
                    $scope.glucemia_2 = storage.getItem('glucemia_2');
                    var glucemia_2 = storage.getItem('glucemia_2');
                    var glucemia_1_numero = parseFloat(glucemia_2);
                    if (glucemia_premezcla === 'Preprandial') {
                        if (glucemia_1_numero < '90') {
                            $scope.ajuste_dosis_premezcla_2 = 'Quitar 2 UI';
                        }
                        if (glucemia_1_numero >= '90' && glucemia_1_numero <= '129') {
                            $scope.ajuste_dosis_premezcla_2 = 'Misma dosis';
                        }
                        if (glucemia_1_numero >= '130' && glucemia_1_numero <= '139') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 1 UI';
                        }
                        if (glucemia_1_numero >= '140' && glucemia_1_numero <= '159') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 2 UI';
                        }
                        if (glucemia_1_numero >= '160' && glucemia_1_numero <= '179') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 3 UI';
                        }
                        if (glucemia_1_numero >= '180' && glucemia_1_numero <= '250') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 4 UI';
                        }
                    }

                    if (glucemia_premezcla === 'Posprandial') {
                        if (glucemia_1_numero < '100') {
                            $scope.ajuste_dosis_premezcla_2 = 'Quitar 2 UI';
                        }
                        if (glucemia_1_numero >= '100' && glucemia_1_numero <= '179') {
                            $scope.ajuste_dosis_premezcla_2 = 'Misma dosis';
                        }
                        if (glucemia_1_numero >= '180' && glucemia_1_numero <= '219') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 2 UI';
                        }
                        if (glucemia_1_numero >= '220' && glucemia_1_numero <= '259') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 3 UI';
                        }
                        if (glucemia_1_numero >= '260' && glucemia_1_numero <= '299') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 4 UI';
                        }
                        if (glucemia_1_numero >= '300') {
                            $scope.ajuste_dosis_premezcla_2 = 'Añadir 7 UI';
                        }
                    }

                };
                // 06/cambiar/01-cambiar.html *************************/
                // listado cambio de insulina
                $scope.cambio_inicio = storage.getItem('cambio_inicio');
                var cambio_inicio = storage.getItem('cambio_inicio');
                $scope.cambio_inicioList = [
                    {text: "Insulina basal", value: "insulina_basal"},
                    {text: "Insulina basal plus", value: "insulina_basal_plus"},
                    {text: "Insulina bolo basal", value: "insulina_bolo_basal"}
                ];
                // radio checked inicial
                $scope.data13 = {
                    cambio_inicioList_1: cambio_inicio
                };
                // crear RADIO listado Pinchazos
                $scope.pinchazos_2 = storage.getItem('pinchazos_2');
                var val14 = storage.getItem('pinchazos_2');
                $scope.Pinchazos_2 = [
                    {text: "1 dosis", value: "1"},
                    {text: "2 dosis", value: "2"}
                ];
                // radio checked inicial
                $scope.data14 = {
                    Pinchazos_1_2: val14
                };
                
                
                $scope.unidades_cambio = storage.getItem('unidades_cambio');
                $scope.unidades_cambio_25_75 = storage.getItem('unidades_cambio_25_75');
                $scope.unidades_cambio_30_70 = storage.getItem('unidades_cambio_30_70');
                $scope.unidades_cambio_50_50 = storage.getItem('unidades_cambio_50_50');
                // listado de tipo de premezcla en cambio
                $scope.premezcla_30_70 = $scope.$eval(storage.getItem('premezcla_30_70'));
                $scope.premezcla_25_75 = $scope.$eval(storage.getItem('premezcla_25_75'));
                $scope.premezcla_50_50 = $scope.$eval(storage.getItem('premezcla_50_50'));
                
                $scope.premezcla_tipo_2 = storage.getItem('premezcla_tipo_2');
                var premezcla_tipo_2 = storage.getItem('premezcla_tipo_2');
                $scope.premezcla_tipo_2List = [
                    {text: "Premezcla 30/70", value: "premezcla_30-70"},
                    {text: "Premezcla 25/75", value: "premezcla_25-75"},
                    {text: "Premezcla 50/50", value: "premezcla_50-50"}
                ];
                // radio checked inicial
                $scope.data15 = {
                    premezcla_tipo_2List_1: premezcla_tipo_2
                };
                // resultados premezcla cambio
                
                var cambio_inicio = storage.getItem('cambio_inicio');
                
                var premezcla_tipo_2 = storage.getItem('premezcla_tipo_2');
                if (cambio_inicio === 'insulina_basal') {
                    $scope.premezcla_cambio_final = 'Insulina basal';
                }
                if (cambio_inicio === 'insulina_basal_plus') {
                    $scope.premezcla_cambio_final = 'Pauta basal plus';
                }
                if (cambio_inicio === 'insulina_bolo_basal') {
                    $scope.premezcla_cambio_final = 'Pauta bolo basal';
                }

                if (premezcla_tipo_2 === 'premezcla_25-75') {
                    $scope.premezcla_tipo_final_2 = 'Premezcla 25-75';
                }
                if (premezcla_tipo_2 === 'premezcla_30-70') {
                    $scope.premezcla_tipo_final_2 = 'Premezcla 30-70';
                }
                if (premezcla_tipo_2 === 'premezcla_50-50') {
                    $scope.premezcla_tipo_final_2 = 'Premezcla 50-50';
                }
                

                // 06/cambiar/02-cambiar.html
                // crear RADIO listado insulinas
                $scope.insulina_basal = storage.getItem('insulina_basal');
                var val16 = storage.getItem('insulina_basal');
                $scope.Insulina_basalList = [
                    {text: "DEGLUDEC", value: "DEGLUDEC"},
                    {text: "GLARGINA U300", value: "GLARGINA_U300"},
                    {text: "GLARGINA U100", value: "GLARGINA_U100"}

                ];
                // radio checked inicial
                $scope.data16 = {
                    Insulina_basalList_1: val16
                };
                var premezcla_tipo_final_2 = storage.getItem('unidades_cambio');
                var premezcla_tipo_final_25_75 = storage.getItem('unidades_cambio_25_75');
                var premezcla_tipo_final_30_70 = storage.getItem('unidades_cambio_30_70');
                var premezcla_tipo_final_50_50 = storage.getItem('unidades_cambio_50_50');
                
                $scope.premezcla_resultado_total = parseFloat(premezcla_tipo_final_30_70) + parseFloat(premezcla_tipo_final_25_75) + parseFloat(premezcla_tipo_final_50_50);
                
                
                $scope.resultado_basal_30_70 = parseFloat(premezcla_tipo_final_30_70) * 70 / 100;
                $scope.resultado_prandial_30_70 = parseFloat(premezcla_tipo_final_30_70) * 30 / 100;
                $scope.resultado_basal_25_75 = parseFloat(premezcla_tipo_final_25_75) * 75 / 100;
                $scope.resultado_prandial_25_75 = parseFloat(premezcla_tipo_final_25_75) * 25 / 100;
                $scope.resultado_basal_50_50 = parseFloat(premezcla_tipo_final_50_50) * 50 / 100;
                $scope.resultado_prandial_50_50 = parseFloat(premezcla_tipo_final_50_50) * 50 / 100;
                // crear RADIO listado insulinas prandial
                $scope.insulina_prandial = storage.getItem('insulina_prandial');
                var val17 = storage.getItem('insulina_prandial');
                $scope.Insulina_prandialList = [
                    {text: "Insulina aspart de acción rápida (FIASP®)", value: "prandial_1"},
                    {text: "Aspart, lispro, glulisina", value: "prandial_2"}

                ];
                // radio checked inicial
                $scope.data17 = {
                    Insulina_prandialList_1: val17
                };
                // 06/ajustar/01-ajustar.html
                $scope.unidades_desayuno = storage.getItem('unidades_desayuno');
                $scope.unidades_cena = storage.getItem('unidades_cena');
                // 04/01.html
                //04/001-paliativo/01.html
                $scope.paliativo_hiperglucemia = $scope.$eval(storage.getItem('paliativo_hiperglucemia'));
                $scope.paliativo_cetosis = $scope.$eval(storage.getItem('paliativo_cetosis'));
                $scope.Sintomas_cardinales = $scope.$eval(storage.getItem('Sintomas_cardinales'));

                // 04/03-ecv/iSGLT2
                // crear RADIO listado iSGLT2
                $scope.especial_iSGLT2 = storage.getItem('especial_iSGLT2');
                var val18 = storage.getItem('especial_iSGLT2');

                $scope.iSGLT2List = [
                    {text: "Iniciar insulinización basal", value: "Iniciar insulinización basal"},
                    {text: "Intensificación insulinización basal", value: "Intensificación insulinización basal"}
                ];

                // radio checked inicial
                $scope.data18 = {
                    iSGLT2List_1: val18
                };

                $scope.estado_algoritmo_func = function (id) {

                    storage.setItem('estado_algoritmo', id);
                    $scope.estado_algoritmo = id;
                    //alert(id);
                }
                $scope.estado_algoritmo = storage.getItem('estado_algoritmo');
                // crear RADIO listado arGLP1
                $scope.especial_arGLP1 = storage.getItem('especial_arGLP1');
                var val19 = storage.getItem('especial_arGLP1');
                var var_iSGLT2 = storage.getItem('iSGLT2');
                if (var_iSGLT2 !== true) {
                    $scope.arGLP1List = [
                        {text: "iSGLT2", value: "iSGLT2"},
                        {text: "Insulina", value: "Insulina"}

                    ];
                }
                if (var_iSGLT2 === 'true') {
                    $scope.arGLP1List = [
                        {text: "Insulina", value: "Insulina"}

                    ];
                }
                // radio checked inicial
                $scope.data19 = {
                    arGLP1List_1: val19
                };
                $scope.estado_fg30 = function (id) {

                    storage.setItem('estad_fg30', id);
                    $scope.estad_fg30 = id;
                    if (id == 'true') {
                        storage.setItem('iSGLT2', '');
                    }
                }
                $scope.estad_fg30 = storage.getItem('estad_fg30');
                // sobrepeso / obesidad
                $scope.imc_sobrepeso = storage.getItem('imc_sobrepeso');
                var val20 = storage.getItem('imc_sobrepeso');
                $scope.imc_sobrepesoList = [
                    {text: "25-29,9", value: "imc_1"},
                    {text: "30-34,9", value: "imc_2"},
                    {text: "> 35", value: "imc_3"}

                ];
                // radio checked inicial
                $scope.data20 = {
                    imc_sobrepesoList_1: val20
                };
                $scope.paliativo_func = function (id) {

                    storage.setItem('paliativo_var', id);
                    $scope.paliativo_var = id;
                }
                $scope.paliativo_var = storage.getItem('paliativo_var');



                // 07 Hiperglucemia corticoidea ******************************************/
                // 
                //07/01.html
                $scope.corti_peso = $scope.$eval(storage.getItem('corti_peso'));
                // acción corta
                $scope.Cortisona = $scope.$eval(storage.getItem('Cortisona'));
                $scope.Hidrocortisona = $scope.$eval(storage.getItem('Hidrocortisona'));
                // acción intermedia
                $scope.Prednisona = $scope.$eval(storage.getItem('Prednisona'));
                $scope.Prednisolona = $scope.$eval(storage.getItem('Prednisolona'));
                $scope.Metilprednisolona = $scope.$eval(storage.getItem('Metilprednisolona'));
                $scope.Deflazacort = $scope.$eval(storage.getItem('Deflazacort'));
                $scope.Fludocortisona = $scope.$eval(storage.getItem('Fludocortisona'));
                $scope.Triamcinolona = $scope.$eval(storage.getItem('Triamcinolona'));
                // acción prolongada
                $scope.Betametasona = $scope.$eval(storage.getItem('Betametasona'));
                $scope.Dexametasona = $scope.$eval(storage.getItem('Dexametasona'));
                // administración intraarticular
                $scope.Triamcinolona_acetonico = $scope.$eval(storage.getItem('Triamcinolona_acetonico'));
                $scope.Metilprednisolona_acetato = $scope.$eval(storage.getItem('Metilprednisolona_acetato'));
                $scope.Parametasona = $scope.$eval(storage.getItem('Parametasona'));



                $scope.dosis_gluco = $scope.$eval(storage.getItem('dosis_gluco'));
                // Cuántas veces al día
                $scope.al_dia_gluco = storage.getItem('al_dia_gluco');
                var val21 = storage.getItem('al_dia_gluco');

                $scope.al_dia_glucoList = [
                    {text: "1 dosis", value: "1"},
                    {text: "2 dosis", value: "2"}

                ];
                // radio checked inicial
                $scope.data21 = {
                    al_dia_glucoList_1: val21
                };

                // 07/01/01.html
                $scope.glucemia_140 = $scope.$eval(storage.getItem('glucemia_140'));
                $scope.glucemia_200 = $scope.$eval(storage.getItem('glucemia_200'));

                // 07/01/03.html
                // acción corta
                if ($scope.Cortisona === true || $scope.Hidrocortisona === true) {
                    $scope.gluco_seleccionado = '1';
                }
                // acción intermedia
                if ($scope.Prednisona === true || $scope.Prednisolona === true || $scope.Metilprednisolona === true || $scope.Deflazacort === true || $scope.Fludocortisona === true || $scope.Triancinolona === true) {
                    $scope.gluco_seleccionado = '2';
                }
                // acción prolongada
                if ($scope.Betametasona === true || $scope.Dexametasona === true) {
                    $scope.gluco_seleccionado = '3';
                }
                // administración intraarticular
                if ($scope.Triamcinolona_acetonico === true || $scope.Metilprednisolona_acetato === true || $scope.Parametasona === true) {
                    $scope.gluco_seleccionado = '4';
                }

                // 07/01/04-intermedia.html
                // fármacos
                $scope.intermedia_farmacos = storage.getItem('intermedia_farmacos');
                var val22 = storage.getItem('intermedia_farmacos');

                if (($scope.Repaglinidina !== true) && ($scope.IDPP4 !== true)) {
                    $scope.intermedia_farmacosList = [
                        {text: "Repaglinidina", value: "Repaglinidina"},
                        {text: "iDPP4", value: "IDPP4"}

                    ];
                }
                if ($scope.Repaglinidina === true) {
                    $scope.intermedia_farmacosList = [
                        {text: "iDPP4", value: "IDPP4"}

                    ];
                }
                if ($scope.IDPP4 === true) {
                    $scope.intermedia_farmacosList = [
                        {text: "Repaglinidina", value: "Repaglinidina"}

                    ];
                }
                // radio checked inicial
                $scope.data22 = {
                    intermedia_farmacosList_1: val22
                };
                // 07/01/04-prolongado.html
                // fármacos
                $scope.prolongado_farmacos = storage.getItem('prolongado_farmacos');
                var val23 = storage.getItem('prolongado_farmacos');

                $scope.prolongado_farmacosList = [];

                if ($scope.IDPP4 !== true) {
                    $scope.prolongado_farmacosList.push({text: "iDPP4", value: "IDPP4"});
                }
                if ($scope.Repaglinidina !== true) {
                    $scope.prolongado_farmacosList.push({text: "Repaglinidina", value: "Repaglinidina"});
                }
                if ($scope.Sulfonilureas !== true) {
                    $scope.prolongado_farmacosList.push({text: "Glicazida (sulfonilureas)", value: "gliclazida"});
                }



                // radio checked inicial
                $scope.data23 = {
                    prolongado_farmacosList_1: val23
                };


                // 07/03_insulinizar/01.html

                if ($scope.Cortisona === true || $scope.Hidrocortisona === true) {
                    $scope.tipo_accion = 'acción corta';
                }
                if ($scope.Prednisona === true || $scope.Prednisolona === true || $scope.Metilprednisolona === true || $scope.Deflazacort === true || $scope.Fludocortisona === true || $scope.Triancinolona === true) {
                    $scope.tipo_accion = 'acción intermedia';
                }
                if ($scope.Betametasona === true || $scope.Dexametasona === true) {
                    $scope.tipo_accion = 'acción prolongada';
                }
                if ($scope.Triamcinolona_acetonico === true || $scope.Metilprednisolona_acetato === true || $scope.Parametasona === true || $scope.Parametasona === true) {
                    $scope.tipo_accion = 'administración intraarticular';
                }



                $scope.ConvertirCort = function () {


                    if ($scope.Cortisona === true) {
                        var corticoide_inicial = 'Cortisona';
                    }
                    if ($scope.Hidrocortisona === true) {
                        var corticoide_inicial = 'Hidrocortisona';
                    }
                    if ($scope.Prednisona === true) {
                        var corticoide_inicial = 'Prednisona';
                    }
                    if ($scope.Prednisolona === true) {
                        var corticoide_inicial = 'Prednisolona';
                    }
                    if ($scope.Metilprednisolona === true) {
                        var corticoide_inicial = 'Metilprednisolona';
                    }
                    if ($scope.Deflazacort === true) {
                        var corticoide_inicial = 'Deflazacort';
                    }
                    if ($scope.Fludocortisona === true) {
                        var corticoide_inicial = 'Fludocortisona';
                    }
                    if ($scope.Triamcinolona === true) {
                        var corticoide_inicial = 'Triamcinolona';
                    }
                    if ($scope.Betametasona === true) {
                        var corticoide_inicial = 'Betametasona';
                    }
                    if ($scope.Dexametasona === true) {
                        var corticoide_inicial = 'Dexametasona';
                    }
                    if ($scope.Triamcinolona_acetonico === true) {
                        var corticoide_inicial = 'Triamcinolona_acetonico';
                    }
                    if ($scope.Metilprednisolona_acetato === true) {
                        var corticoide_inicial = 'Metilprednisolona_acetato';
                    }
                    if ($scope.Parametasona === true) {
                        var corticoide_inicial = 'Parametasona';
                    }


                    var cant = '0';
                    var cort = $scope.dosis_gluco;

                    var uni1 = corticoide_inicial;

                    switch (uni1) {
                        // Acción corta
                        case "Cortisona" :
                            cant = cort * 5 / 25;
                            break;
                        case "Hidrocortisona" :
                            cant = cort * 5 / 20;
                            break;
                            // Acción intermedia
                        case "Prednisona" :
                            cant = cort * 5 / 5;
                            break;
                        case "Prednisolona" :
                            cant = cort * 5 / 5;
                            break;
                        case "Metilprednisolona" :
                            cant = cort * 5 / 4;
                            break;
                        case "Deflazacort" :
                            cant = cort * 5 / 7.5;
                            break;
                        case "Fludocortisona" :
                            cant = cort * 5 / 2;
                            break;
                        case "Triamcinolona" :
                            cant = cort * 5 / 4;
                            break;
                            // Acción prolongada
                        case "Betametasona" :
                            cant = cort * 0.75 / 0.75;
                            break;
                        case "Dexametasona" :
                            cant = cort * 0.75 / 0.75;
                            break;
                            // Administración intraarticular
                        case "Triamcinolona_acetonico" :
                            cant = cort * 0.75 / 4;
                            break;
                        case "Metilprednisolona_acetato" :
                            cant = cort * 0.75 / 4;
                            break;
                        case "Parametasona" :
                            cant = cort * 0.75 / 2;
                            break;
                    }

                    $scope.total_prednisona = cant.toFixed(0);

                    if ($scope.tipo_accion === 'acción intermedia') {

                        if ($scope.total_prednisona > 40) {
                            $scope.total_NPH = 0.4;
                            $scope.total_NPH_coma = '0,4';
                        } else {
                            $scope.total_NPH = $scope.total_prednisona / 100;
                            var total_NPH_coma_1 = $scope.total_prednisona / 100;
                            var total_NPH_coma = total_NPH_coma_1.toFixed(2);
                            $scope.total_NPH_coma = total_NPH_coma.toString().replace(/\./g, ',');
                        }

                    }
                    if ($scope.tipo_accion === 'acción prolongada' || $scope.tipo_accion === 'administración intraarticular') {

                        if ($scope.total_prednisona > 8) {
                            $scope.total_NPH = 0.4;
                            $scope.total_NPH_coma = '0,4';
                        } else {
                            $scope.total_NPH = $scope.total_prednisona / 20;
                            var total_NPH_coma_1 = $scope.total_prednisona / 20;
                            var total_NPH_coma = total_NPH_coma_1.toFixed(2);
                            $scope.total_NPH_coma = total_NPH_coma.toString().replace(/\./g, ',');
                        }

                    }

                    var total_NPH_final = $scope.total_NPH * $scope.corti_peso;
                    $scope.total_NPH_final = total_NPH_final.toFixed(0);

                }

                //07/02_insulinizado listado NPH y otros
                $scope.insulinizado_insu = storage.getItem('insulinizado_insu');
                var val24 = storage.getItem('insulinizado_insu');
                $scope.insulinizado_insuList = [
                    {text: "NPH", value: "NPH"},
                    {text: "Otras insulinas", value: "otras"}

                ];
                // radio checked inicial
                $scope.data24 = {
                    insulinizado_insuList_1: val24
                };

                //07/02_insulinizado pinchazos al día
                $scope.insulinizado_pinchazos = storage.getItem('insulinizado_pinchazos');
                var val25 = storage.getItem('insulinizado_pinchazos');
                $scope.insulinizado_pinchazosList = [
                    {text: "1 vez", value: "1"},
                    {text: "2 veces", value: "2"}

                ];
                // radio checked inicial
                $scope.data25 = {
                    insulinizado_pinchazosList_1: val25
                };

                $scope.insulinizado_unidades = storage.getItem('insulinizado_unidades');
                $scope.insulinizado_unidades_desayuno = storage.getItem('insulinizado_unidades_desayuno');
                $scope.insulinizado_unidades_cena = storage.getItem('insulinizado_unidades_cena');

                $scope.bolo_unidades_desayuno = storage.getItem('bolo_unidades_desayuno');
                $scope.bolo_unidades_comida = storage.getItem('bolo_unidades_comida');
                $scope.bolo_unidades_cena = storage.getItem('bolo_unidades_cena');

                $scope.basal_unidades_desayuno = storage.getItem('basal_unidades_desayuno');




                $scope.updateStorage = function () {

                    $scope.estado_algoritmo = storage.getItem('estado_algoritmo');
                    //01/01.html
                    storage.setItem('Sulfonilureas', $scope.Sulfonilureas);
                    storage.setItem('Metformina', $scope.Metformina);
                    storage.setItem('Repaglinidina', $scope.Repaglinidina);
                    storage.setItem('IDPP4', $scope.IDPP4);
                    storage.setItem('aGLP1', $scope.aGLP1);
                    storage.setItem('iSGLT2', $scope.iSGLT2);
                    storage.setItem('Pioglitazona', $scope.Pioglitazona);
                    storage.setItem('Acarbosa', $scope.Acarbosa);
                    //02/01.html
                    storage.setItem('insulinas', $scope.data.InsulinasList_1);
                    storage.setItem('pinchazos', $scope.data2.Pinchazos_1);
                    storage.setItem('unidades', $scope.data.unidades);
                    $scope.insulinas = storage.getItem('insulinas');
                    var insulinas = storage.getItem('insulinas');
                    if (insulinas === 'GLARGINA_U300' || insulinas === 'DEGLUDEC') {
                        storage.setItem('pinchazos', '1');
                        $scope.pinchazos = storage.getItem('pinchazos');
                    }

                    //02/04-ajuste.html
                    storage.setItem('ajuste_basal', $scope.data3.ajusteList_1);
                    //02/04-cambio.html
                    storage.setItem('cambio_basal', $scope.data4.cambioList_1);
                    //03/06.html
                    storage.setItem('enfermedad_cv', $scope.enfermedad_cv);
                    storage.setItem('enfermedad_renal_cronica', $scope.enfermedad_renal_cronica);
                    storage.setItem('fragilidad', $scope.fragilidad);
                    storage.setItem('paliativo', $scope.paliativo);
                    storage.setItem('obesidad', $scope.obesidad);
                    storage.setItem('hiperglucemia_cortoidea', $scope.hiperglucemia_cortoidea);
                  
                    //03/07-imc.html
                    storage.setItem('altura', $scope.altura);
                    storage.setItem('peso', $scope.peso);
                    storage.setItem('imc_manual', $scope.imc_manual);
                    //03/08-imc.html
                    storage.setItem('opcion_imc_1', $scope.data5.opcion_1_List_1);
                    storage.setItem('opcion_imc_2', $scope.data6.opcion_2_List_1);
                    storage.setItem('opcion_imc_3', $scope.data7.opcion_3_List_1);
                    storage.setItem('opcion_imc_4', $scope.data8.opcion_4_List_1);
                    //05/01-inicio.html
                    storage.setItem('peor_control', $scope.data9.peorList_1);
                    $scope.peor_control = storage.getItem('peor_control');
                    var peor_control = storage.getItem('peor_control');
                    if (peor_control === 'Desayuno') {
                        $scope.peor_control2 = 'desayuno';
                    }
                    if (peor_control === 'Comida') {
                        $scope.peor_control2 = 'comida';
                    }
                    if (peor_control === 'Cena') {
                        $scope.peor_control2 = 'cena';
                    }



                    // 05/05-anadir.html
                    storage.setItem('pautas_no_complejas', $scope.pautas_no_complejas);
                    storage.setItem('horarios_fijos', $scope.horarios_fijos);
                    storage.setItem('comidas_principales', $scope.comidas_principales);
                    // 06/inicio/01-inicio.html
                    storage.setItem('premezcla_inicio', $scope.data10.premezcla_inicioList_1);
                    storage.setItem('premezcla_tipo', $scope.data11.premezcla_tipoList_1);
                    storage.setItem('unidades_premezcla', $scope.unidades_premezcla);
                    // 06/ajustar/01-ajustar-html
                    storage.setItem('unidades_desayuno', $scope.unidades_desayuno);
                    storage.setItem('unidades_cena', $scope.unidades_cena);
                    // 06/ajustar/03-ajustar-html
                    storage.setItem('glucemia_premezcla', $scope.data12.glucemia_premezclaList_1);
                    storage.setItem('glucemia_1', $scope.glucemia_1);
                    storage.setItem('glucemia_2', $scope.glucemia_2);
                    $scope.glucemia_premezcla = storage.getItem('glucemia_premezcla');
                    $scope.glucemia_1 = storage.getItem('glucemia_1');
                    $scope.glucemia_2 = storage.getItem('glucemia_2');
                    //06/cambiar/01-cambiar.html
                    storage.setItem('cambio_inicio', $scope.data13.cambio_inicioList_1);
                    storage.setItem('pinchazos_2', $scope.data14.Pinchazos_1_2);
                    storage.setItem('unidades_cambio', $scope.unidades_cambio);
                    storage.setItem('unidades_cambio_25_75', $scope.unidades_cambio_25_75);
                    storage.setItem('unidades_cambio_30_70', $scope.unidades_cambio_30_70);
                    storage.setItem('unidades_cambio_50_50', $scope.unidades_cambio_50_50);

                    storage.setItem('premezcla_tipo_2', $scope.data15.premezcla_tipo_2List_1);
                    storage.setItem('premezcla_25_75', $scope.premezcla_25_75);
                    storage.setItem('premezcla_30_70', $scope.premezcla_30_70);
                    storage.setItem('premezcla_50_50', $scope.premezcla_50_50);
                    if ($scope.premezcla_25_75 !== true) {
                        storage.setItem('unidades_cambio_25_75', '0');
                        $scope.unidades_cambio_25_75 = 0;
                    }
                    if ($scope.premezcla_30_70 !== true) {
                        storage.setItem('unidades_cambio_30_70', '0');
                        $scope.unidades_cambio_30_70 = 0;
                    }
                    if ($scope.premezcla_50_50 !== true) {
                        storage.setItem('unidades_cambio_50_50', '0');
                        $scope.unidades_cambio_50_50 = 0;
                    }
                    //06/cambiar/02-cambiar.html
                    storage.setItem('insulina_basal', $scope.data16.Insulina_basalList_1);
                    storage.setItem('insulina_prandial', $scope.data17.Insulina_prandialList_1);
                    //04/01-paliativo/01.html
                    storage.setItem('paliativo_hiperglucemia', $scope.paliativo_hiperglucemia);
                    storage.setItem('paliativo_cetosis', $scope.paliativo_cetosis);
                    storage.setItem('Sintomas_cardinales', $scope.Sintomas_cardinales);
                    storage.setItem('especial_iSGLT2', $scope.data18.iSGLT2List_1);
                    $scope.especial_iSGLT2 = storage.getItem('especial_iSGLT2');
                    storage.setItem('especial_arGLP1', $scope.data19.arGLP1List_1);
                    $scope.especial_arGLP1 = storage.getItem('especial_arGLP1');
                    storage.setItem('imc_sobrepeso', $scope.data20.imc_sobrepesoList_1);
                    $scope.imc_sobrepeso = storage.getItem('imc_sobrepeso');
                    $scope.IDPP4 = $scope.$eval(storage.getItem('IDPP4'));
                    $scope.aGLP1 = $scope.$eval(storage.getItem('aGLP1'));
                    $scope.iSGLT2 = $scope.$eval(storage.getItem('iSGLT2'));
                    //07/01.html
                    storage.setItem('corti_peso', $scope.corti_peso);

                    storage.setItem('dosis_gluco', $scope.dosis_gluco);
                    storage.setItem('al_dia_gluco', $scope.data21.al_dia_glucoList_1);
                    // 07/01/01.html
                    storage.setItem('glucemia_140', $scope.glucemia_140);
                    storage.setItem('glucemia_200', $scope.glucemia_200);
                    storage.setItem('intermedia_farmacos', $scope.data22.intermedia_farmacosList_1);
                    $scope.intermedia_farmacos = storage.getItem('intermedia_farmacos');

                    storage.setItem('prolongado_farmacos', $scope.data23.prolongado_farmacosList_1);
                    $scope.prolongado_farmacos = storage.getItem('prolongado_farmacos');

                    storage.setItem('insulinizado_insu', $scope.data24.insulinizado_insuList_1);


                    storage.setItem('insulinizado_pinchazos', $scope.data25.insulinizado_pinchazosList_1);
                    $scope.insulinizado_pinchazos = storage.getItem('insulinizado_pinchazos');

                    storage.setItem('insulinizado_unidades', $scope.insulinizado_unidades);
                    storage.setItem('insulinizado_unidades_desayuno', $scope.insulinizado_unidades_desayuno);
                    storage.setItem('insulinizado_unidades_cena', $scope.insulinizado_unidades_cena);

                    $scope.insulinizado_insu = storage.getItem('insulinizado_insu');
                    if ($scope.insulinizado_insu === 'otras') {

                        storage.setItem('insulinizado_pinchazos', '1');
                        $scope.insulinizado_pinchazos = '1';
                    }

                    storage.setItem('bolo_unidades_desayuno', $scope.bolo_unidades_desayuno);
                    storage.setItem('bolo_unidades_comida', $scope.bolo_unidades_comida);
                    storage.setItem('bolo_unidades_cena', $scope.bolo_unidades_cena);

                    storage.setItem('basal_unidades_desayuno', $scope.basal_unidades_desayuno);



                }


                // función desactivas el resto listado de corticoides 07/01.html
                $scope.desactivar_cortis = function (id) {

                    var corticoide = id;
                    var borrar = false;

                    storage.setItem('Prednisona', borrar);
                    storage.setItem('Prednisolona', borrar);
                    storage.setItem('Metilprednisolona', borrar);
                    storage.setItem('Deflazacort', borrar);
                    storage.setItem('Fludocortisona', borrar);
                    storage.setItem('Triamcinolona', borrar);
                    storage.setItem('Betametasona', borrar);
                    storage.setItem('Dexametasona', borrar);
                    storage.setItem('Triamcinolona_acetonico', borrar);
                    storage.setItem('Metilprednisolona_acetato', borrar);
                    storage.setItem('Parametasona', borrar);

                    // vuelve a crear los valores de acceso.
                    storage.setItem(corticoide, true);

                    // Devolver datos
                    // acción intermedia
                    $scope.Prednisona = $scope.$eval(storage.getItem('Prednisona'));
                    $scope.Prednisolona = $scope.$eval(storage.getItem('Prednisolona'));
                    $scope.Metilprednisolona = $scope.$eval(storage.getItem('Metilprednisolona'));
                    $scope.Deflazacort = $scope.$eval(storage.getItem('Deflazacort'));
                    $scope.Fludocortisona = $scope.$eval(storage.getItem('Fludocortisona'));
                    $scope.Triamcinolona = $scope.$eval(storage.getItem('Triamcinolona'));
                    // acción prolongada
                    $scope.Betametasona = $scope.$eval(storage.getItem('Betametasona'));
                    $scope.Dexametasona = $scope.$eval(storage.getItem('Dexametasona'));
                    // administración intraarticular
                    $scope.Triamcinolona_acetonico = $scope.$eval(storage.getItem('Triamcinolona_acetonico'));
                    $scope.Metilprednisolona_acetato = $scope.$eval(storage.getItem('Metilprednisolona_acetato'));
                    $scope.Parametasona = $scope.$eval(storage.getItem('Parametasona'));

                    // acción intermedia
                    if ($scope.Prednisona === true || $scope.Prednisolona === true || $scope.Metilprednisolona === true || $scope.Deflazacort === true || $scope.Fludocortisona === true || $scope.Triancinolona === true) {
                        $scope.gluco_seleccionado = '2';
                        $scope.al_dia_gluco = '1';
                        storage.setItem('al_dia_gluco', '1');
                    }
                    // acción prolongada
                    if ($scope.Betametasona === true || $scope.Dexametasona === true) {
                        $scope.gluco_seleccionado = '3';
                        $scope.al_dia_gluco = '1';
                        storage.setItem('al_dia_gluco', '1');
                    }
                    // administración intraarticular
                    if ($scope.Triamcinolona_acetonico === true || $scope.Metilprednisolona_acetato === true || $scope.Parametasona === true) {
                        $scope.gluco_seleccionado = '4';
                        $scope.al_dia_gluco = '1';
                        storage.setItem('al_dia_gluco', '1');
                    }

                }


                // A confirm dialog para continuar después de IRNA
                $scope.showConfirm = function () {
                    var sacubit1 = $scope.$eval(storage.getItem('sacubitrilo1'));
                    var sacubit2 = $scope.$eval(storage.getItem('sacubitrilo2'));
                    if (sacubit1 === true || sacubit2 === true) {
                        window.location = "#/menu/calculadoras/IC_cronica/ICFEr/Ivabradinal";
                    } else {
                        var confirmPopup = $ionicPopup.confirm({
                            title: 'Tratamiento con Sacubritilo/Valsartán',
                            template: '¿Desea NO realizar este tratamiento?',
                            cancelText: 'NO',
                            okText: 'SÍ'
                        });
                        confirmPopup.then(function (res) {
                            if (res) {
                                //alert('Pasar');
                                window.location = "#/menu/calculadoras/IC_cronica/ICFEr/Ivabradinal";
                            } else {
                                //alert('No pasar');
                            }
                        });
                    }

                }


                $scope.scrollTop = function () {
                    $ionicScrollDelegate.scrollTop();
                };
                $scope.recalcular = function () {
                    $ionicScrollDelegate.resize();
                };
                $scope.myGoBack = function (id) {
                    $ionicHistory.goBack(id);
                }
                ;
            }])


        .controller('resetTodo', ['$scope', '$stateParams', '$ionicPopup', '$state', '$ionicSideMenuDelegate',
            function ($scope, $stateParams, $ionicPopup, $state, $ionicSideMenuDelegate) {

                // A confirm dialog para continuar después de IRNA
                $scope.showReset = function () {

                    var confirmPopup = $ionicPopup.confirm({
                        title: 'Al pulsar en Borrar datos se eliminarán los datos de la aplicación para comenzar de nuevo. ¿Desea borrar los datos?',
                        template: '',
                        cancelText: 'Cancelar',
                        okText: 'Borrar datos'
                    });
                    confirmPopup.then(function (res) {
                        if (res) {
                            //alert('Borrar');
                            $scope.todoslosDatos();
                            $state.go("menu.index");
                            $ionicSideMenuDelegate.toggleLeft();
                        } else {
                            //alert('No pasar');
                        }
                    });
                }

                $scope.todoslosDatos = function () {

                    var storage = window.localStorage;
                    // recuperar los valores de acceso
                    var MM_Email = storage.getItem('MM_Email');
                    var MM_Password = storage.getItem('MM_Password');
                    var MM_id = storage.getItem('MM_id');
                    // borrar todos los localStorage
                    storage.clear();
                    // vuelve a crear los valores de acceso.
                    storage.setItem('MM_Email', MM_Email);
                    storage.setItem('MM_Password', MM_Password);
                    storage.setItem('MM_id', MM_id);
                }


            }])
        .controller('resetIMC', ['$scope', '$stateParams', '$ionicPopup', '$state', '$ionicSideMenuDelegate',
            function ($scope, $stateParams, $ionicPopup, $state, $ionicSideMenuDelegate) {

                var storage = window.localStorage;
                var borrar = '';
                storage.setItem('opcion_imc_1', borrar);
                storage.setItem('opcion_imc_2', borrar);
                storage.setItem('opcion_imc_3', borrar);
                storage.setItem('opcion_imc_4', borrar);
            }])

        /********************************************* ayudas ***********************************************************/
        .controller('modalesVentanas', function ($scope, $ionicModal, $stateParams) {

            $ionicModal.fromTemplateUrl('templates/plantilla_tablas.html', {
                scope: $scope,
                animation: 'slide-in-up'
                        //imageSrc: 'img/tabla-1-1-6.png'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function ($stateParams) {
                $scope.var1 = $stateParams;
                if ($scope.var1 == "tabla-1-2") {
                    $scope.titulo = "Objetivos individualizados según edad, duración de la diabetes y presencia de complicaciones o comorbilidades";
                    $scope.imagen = "01-02.png";
                }

                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })
        /********************************************* FIN ayudas ***********************************************************/

        .controller('01-01', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/01/01_situaciones_esp.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
                var storage = window.localStorage;
                var Metformina = $scope.$eval(storage.getItem('Metformina'));
                var Sulfonilureas = $scope.$eval(storage.getItem('Sulfonilureas'));
                var Repaglinidina = $scope.$eval(storage.getItem('Repaglinidina'));
                var IDPP4 = $scope.$eval(storage.getItem('IDPP4'));
                var aGLP1 = $scope.$eval(storage.getItem('aGLP1'));
                var iSGLT2 = $scope.$eval(storage.getItem('iSGLT2'));
                if (Metformina == true) {
                    var Metformina = '1';
                } else {
                    var Metformina = '0';
                }
                if (Sulfonilureas == true) {
                    var Sulfonilureas = '1';
                } else {
                    var Sulfonilureas = '0';
                }
                if (Repaglinidina == true) {
                    var Repaglinidina = '1';
                } else {
                    var Repaglinidina = '0';
                }
                if (IDPP4 == true) {
                    var IDPP4 = '1';
                } else {
                    var IDPP4 = '0';
                }
                if (aGLP1 == true) {
                    var aGLP1 = '1';
                } else {
                    var aGLP1 = '0';
                }
                if (iSGLT2 == true) {
                    var iSGLT2 = '1';
                } else {
                    var iSGLT2 = '0';
                }
                $scope.resultado = parseFloat(Metformina) + parseFloat(Sulfonilureas) + parseFloat(Repaglinidina) + parseFloat(IDPP4) + parseFloat(aGLP1) + parseFloat(iSGLT2);
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })

        .controller('05-01', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/05/01_insulinas_rapidas.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })

        .controller('06-01', function ($scope, $ionicModal) {

            $ionicModal.fromTemplateUrl('templates/06/info_premezclas.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function () {
                $scope.modal.show();
            };
            $scope.closeModal = function () {
                $scope.modal.hide();
            };
        })

        .controller('01-final', ['$scope', '$stateParams',
            function ($scope, $stateParams) {

                var storage = window.localStorage;
                //var sacu1 = $scope.$eval(storage.getItem('sacubitrilo1'));
                $scope.Sulfonilureas = $scope.$eval(storage.getItem('Sulfonilureas'));
                $scope.Repaglinidina = $scope.$eval(storage.getItem('Repaglinidina'));
            }])


        .controller('vademecumCtrl', ['$scope', '$http', '$stateParams', '$ionicLoading', function ($scope, $http, $stateParams, $ionicLoading) {

                $scope.GotoLink = function (url) {
                    window.open(url, '_system');
                };

            }])


        /* control de unidades en 02/01.html ****/
        .controller('unidades', function ($scope, $timeout) {

            $scope.data = {'unidades': '0'};
            var timeoutId = null;
            $scope.$watch('data.unidades', function () {
                if (timeoutId !== null) {
                    return;
                }
                timeoutId = $timeout(function () {

                    $timeout.cancel(timeoutId);
                    timeoutId = null;
                    // Now load data from server 
                }, 1000);
            });


        });

