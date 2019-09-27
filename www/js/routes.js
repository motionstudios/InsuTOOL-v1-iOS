angular.module('app.routes', [])

        .config(function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                    .state('menu', {
                        cache: false,
                        url: '/menu',
                        templateUrl: 'templates/menu.html'

                    })

                    .state('login', {
                        cache: false,
                        url: '/login',
                        templateUrl: 'templates/login.html',
                        controller: 'loginCtrl'
                    })
                    .state('cerrar', {
                        url: '/login',
                        templateUrl: 'templates/login.html',
                        controller: 'cerrarCtrl'
                    })
                    // página Home logos
                    .state('menu.index', {
                        url: '/home',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/index.html',
                            }
                        }
                    })

                    .state('reenvio', {
                        cache: false,
                        url: '/reenvio',
                        templateUrl: 'templates/reenvio.html'
                    })
                    
                    .state('menu.presentacion', {
                        url: '/presentacion',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/presentacion.html'
                                //controller: 'presentacionCtrl'
                            }
                        }
                    })
                    .state('menu.prologo', {
                        url: '/prologo',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/prologo.html'
                                //controller: 'presentacionCtrl'
                            }
                        }
                    })
                    .state('menu.disclaimer', {
                        url: '/disclaimer',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/disclaimer.html'
                                //controller: 'presentacionCtrl'
                            }
                        }
                    })
                    .state('menu.informacion', {
                        url: '/informacion',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/informacion.html'
                                //controller: 'presentacionCtrl'
                            }
                        }
                    })
                    .state('menu.bibliografia', {
                        url: '/bibliografia',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/acerca/bibliografia.html'
                                //controller: 'presentacionCtrl'
                            }
                        }
                    })
                    .state('menu.usuario', {
                        cache: false,
                        url: '/usuario',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/usuario.html'
                                //controller: 'presentacionCtrl'
                            }
                        }
                    })


                    /* ALGORITMOS ***********************/
                    
                    /* 1 - Inicio insulinización *****/
                    
                    .state('menu.01', {
                        cache: false,
                        url: '/01/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/01/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-02', {
                        cache: false,
                        url: '/01/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/01/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-03', {
                        cache: false,
                        url: '/01/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/01/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-04', {
                        cache: false,
                        url: '/01/04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/01/04.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-05', {
                        cache: false,
                        url: '/01/05',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/01/05.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.01-final_insulina', {
                        cache: false,
                        url: '/01/99',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/01/99_final_insulina.html',
                                controller: '01-final'
                            }
                        }
                    })
                    .state('menu.01-final_insulina_1', {
                        cache: false,
                        url: '/01/99',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/01/100_final_insulina.html',
                                controller: '01-final'
                            }
                        }
                    })
                    
                    /* 2 - ajuste glicemia basal ********/
                     .state('menu.02', {
                        cache: false,
                        url: '/02/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-02', {
                        cache: false,
                        url: '/02/02-02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-02-01', {
                        cache: false,
                        url: '/02/02-02-01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/02-01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-02-02', {
                        cache: false,
                        url: '/02/02-02-02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/02-02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-03', {
                        cache: false,
                        url: '/02/02-03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-04-ajuste', {
                        cache: false,
                        url: '/02/02-04-ajuste',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/04-ajuste.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-05-ajuste', {
                        cache: false,
                        url: '/02/02-05-ajuste',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/05-ajuste.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-04-cambio', {
                        cache: false,
                        url: '/02/02-04-cambio',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/04-cambio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-04-cambio-1', {
                        cache: false,
                        url: '/02/02-04-cambio-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/04-cambio-1.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.02-05-cambio', {
                        cache: false,
                        url: '/02/02-05-cambio',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/02/05-cambio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* 3 - Intensificación insulinización basal *****/
                    
                    .state('menu.03', {
                        cache: false,
                        url: '/03/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-02', {
                        cache: false,
                        url: '/03/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-03', {
                        cache: false,
                        url: '/03/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-03-final', {
                        cache: false,
                        url: '/03/03-final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/03-final.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-04', {
                        cache: false,
                        url: '/03/04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/04.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-05', {
                        cache: false,
                        url: '/03/05',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/05.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-06', {
                        cache: false,
                        url: '/03/06',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/06.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.03-07-imc', {
                        cache: false,
                        url: '/03/07-imc',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/07-imc.html'
                                
                            }
                        }
                    })
                    .state('menu.03-08-imc', {
                        cache: false,
                        url: '/03/08-imc',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/08-imc.html',
                                controller: 'resetIMC'
                            }
                        }
                    })
                    .state('menu.03-08-imc-1', {
                        cache: false,
                        url: '/03/08-imc-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/08-imc-1.html',
                                controller: 'resetIMC'
                            }
                        }
                    })
                    .state('menu.03-09-imc', {
                        cache: false,
                        url: '/03/09-imc',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/03/09-imc.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
          
          
                    /* 4 - Situaciones especiales *****/
                    
                    .state('menu.04', {
                        cache: false,
                        url: '/04/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    
                    /* paliativo *************/
                    .state('menu.04-paliativo-01', {
                        cache: false,
                        url: '/04/01-paliativo-01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/01-paliativo/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-paliativo-02-final', {
                        cache: false,
                        url: '/04/01-paliativo-02-final',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/01-paliativo/02-final.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-paliativo-02', {
                        cache: false,
                        url: '/04/01-paliativo-02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/01-paliativo/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-paliativo-03-no', {
                        cache: false,
                        url: '/04/01-paliativo-02-no',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/01-paliativo/03-no.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-paliativo-03-si', {
                        cache: false,
                        url: '/04/01-paliativo-02-si',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/01-paliativo/03-si.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* frágil *************/
                    .state('menu.04-fragil', {
                        cache: false,
                        url: '/04/02-fragil',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/02-fragilidad/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* enfermedad cardiovascular *************/
                    .state('menu.04-ecv', {
                        cache: false,
                        url: '/04/03-ecv',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-01-si', {
                        cache: false,
                        url: '/04/03-ecv-01-si',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/02-si.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-01-no', {
                        cache: false,
                        url: '/04/03-ecv-01-no',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/02-no.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-03', {
                        cache: false,
                        url: '/04/03-ecv-03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-03-02', {
                        cache: false,
                        url: '/04/03-ecv-03-02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/03-02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-final_mantener', {
                        cache: false,
                        url: '/04/03-ecv-final_mantener',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/final_mantener.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-iSGLT2', {
                        cache: false,
                        url: '/04/03-ecv-iSGLT2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/iSGLT2.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-arGLP1', {
                        cache: false,
                        url: '/04/03-ecv-arGLP1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/arGLP1.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-04', {
                        cache: false,
                        url: '/04/03-ecv-04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/04.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-05', {
                        cache: false,
                        url: '/04/03-ecv-05',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/05.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-ecv-06', {
                        cache: false,
                        url: '/04/03-ecv-06',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/03-ecv/06.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* enfermedad renal crónica *************/
                    .state('menu.04-erc', {
                        cache: false,
                        url: '/04/04-erc',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-02-si', {
                        cache: false,
                        url: '/04/04-erc-02-si',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/02-si.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-03', {
                        cache: false,
                        url: '/04/04-erc-03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-04', {
                        cache: false,
                        url: '/04/04-erc-04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/04.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-05', {
                        cache: false,
                        url: '/04/04-erc-05',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/05.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-06', {
                        cache: false,
                        url: '/04/04-erc-06',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/06.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-fin', {
                        cache: false,
                        url: '/04/04-erc-fin',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/fin.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-fin2', {
                        cache: false,
                        url: '/04/04-erc-fin2',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/fin2.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-erc-fin3', {
                        cache: false,
                        url: '/04/04-erc-fin3',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/04-erc/fin3.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    // obesidad ******/
                    .state('menu.04-obesidad', {
                        cache: false,
                        url: '/04/05-obesidad',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/05-obesidad/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-obesidad-02', {
                        cache: false,
                        url: '/04/05-obesidad-02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/05-obesidad/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.04-obesidad-03', {
                        cache: false,
                        url: '/04/05-obesidad-03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/04/05-obesidad/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    
                    
                     /* 5 - Pautas con insulina prandial *****/
                    
                    .state('menu.05', {
                        cache: false,
                        url: '/05/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-01-inicio', {
                        cache: false,
                        url: '/05/01-inicio',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/01-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-02-inicio', {
                        cache: false,
                        url: '/05/02-inicio',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/02-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-02-inicio-1', {
                        cache: false,
                        url: '/05/02-inicio-1',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/02-inicio-1.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-03-inicio', {
                        cache: false,
                        url: '/05/03-inicio',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/03-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-04-inicio', {
                        cache: false,
                        url: '/05/04-inicio',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/04-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-05-anadir', {
                        cache: false,
                        url: '/05/05-anadir',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/05-anadir.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-06-anadir', {
                        cache: false,
                        url: '/05/06-anadir',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/06-anadir.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.05-07-anadir', {
                        cache: false,
                        url: '/05/07-anadir',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/05/07-anadir.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    
                     /* 6 - Pautas con premezclas *****/
                    
                    .state('menu.06', {
                        cache: false,
                        url: '/06/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* 06 pautas premezcla - inicio */
                    .state('menu.06-01-inicio', {
                        cache: false,
                        url: '/06/inicio/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/inicio/01-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-02-inicio', {
                        cache: false,
                        url: '/06/inicio/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/inicio/02-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-03-inicio', {
                        cache: false,
                        url: '/06/inicio/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/inicio/03-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-04-inicio', {
                        cache: false,
                        url: '/06/inicio/04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/inicio/04-inicio.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* 06 pautas premezcla - AJUSTAR */
                    .state('menu.06-01-ajustar', {
                        cache: false,
                        url: '/06/ajustar/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/ajustar/01-ajustar.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-02-ajustar', {
                        cache: false,
                        url: '/06/ajustar/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/ajustar/02-ajustar.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-03-ajustar', {
                        cache: false,
                        url: '/06/ajustar/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/ajustar/03-ajustar.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-04-ajustar', {
                        cache: false,
                        url: '/06/ajustar/04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/ajustar/04-ajustar.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    /* 06 pautas premezcla - AJUSTAR */
                    .state('menu.06-01-cambiar', {
                        cache: false,
                        url: '/06/cambiar/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/cambiar/01-cambiar.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-02-cambiar', {
                        cache: false,
                        url: '/06/cambiar/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/cambiar/02-cambiar.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.06-03-cambiar', {
                        cache: false,
                        url: '/06/cambiar/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/06/cambiar/03-cambiar.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                   
                    
                    // 07/01.html
                    .state('menu.07', {
                        cache: false,
                        url: '/07/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-02', {
                        cache: false,
                        url: '/07/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-03', {
                        cache: false,
                        url: '/07/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-01-01', {
                        cache: false,
                        url: '/07/01/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-01-02', {
                        cache: false,
                        url: '/07/01/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-01-03', {
                        cache: false,
                        url: '/07/01/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-01-04-intermedia', {
                        cache: false,
                        url: '/07/01/04-intermedia',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01/04-intermedia.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-01-04-prolongado', {
                        cache: false,
                        url: '/07/01/04-prolongado',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01/04-prolongado.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-01-05', {
                        cache: false,
                        url: '/07/01/05',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01/05.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-01-06', {
                        cache: false,
                        url: '/07/01/06',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/01/06.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    // insulinizar
                    .state('menu.07-03-01', {
                        cache: false,
                        url: '/07/03/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/03_insunilizar/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    // Paciente insulinizado
                    .state('menu.07-02-01', {
                        cache: false,
                        url: '/07/02/01',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/02_insulinizado/01.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    // Paciente insulinizado
                    .state('menu.07-02-02', {
                        cache: false,
                        url: '/07/02/02',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/02_insulinizado/02.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-02-03', {
                        cache: false,
                        url: '/07/02/03',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/02_insulinizado/03.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-02-04', {
                        cache: false,
                        url: '/07/02/04',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/02_insulinizado/04.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    .state('menu.07-02-05', {
                        cache: false,
                        url: '/07/02/05',
                        views: {
                            'side-menu21': {
                                templateUrl: 'templates/07/02_insulinizado/05.html'
                                //controller: 'resetTodo'
                            }
                        }
                    })
                    
                    
                    




            // página de inicio por defecto (Login) IMPORTATE ¡¡¡¡¡ DEJAR ESTA LÍNEA AL FINAL
            $urlRouterProvider.otherwise('/login');


        });