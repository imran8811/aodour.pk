          /*  Start Click Functions */ 

           var mq = window.matchMedia( "(min-width: 992px)" );
            if (mq.matches) {
            $(document).ready(function(){
             
             $(window).scroll(function(){
			  var sticky = $('#header-sticky'),
			      scroll = $(window).scrollTop();

			  if (scroll >= 52) sticky.addClass('fixed');
			  else sticky.removeClass('fixed');
			});

              });
            }
            else{
                $(".menu-interface a").removeAttr("href");
                $(document).ready(function(){   
                    $('#filter-click').click(function() {
                        setTimeout(function(){ 
                          $('.brand-section-left').addClass('filter-from-right');
                        }, 50);   
                    });
                    $('#filter-click').click(function() {
                        $('.outer-section-brand').addClass('filter-right-overlay');
                        $('.brand-section-left').show(400);
                        $('.brand-section-left').attr('aria-expanded','true');
                    });
                    $('#filter-click').click(function() {
                        $('.divspare').addClass('side-filter-back');
                    });
                    $('.divspare').click(function() {
                        $('.container .outer-section-brand').removeClass('filter-right-overlay');
                        $('.divspare').removeClass('side-filter-back');
                        $('.brand-section-left').removeClass('in');
                        $('.divsparek').hide(400);
                        $('.brand-section-left').hide(400);
                        $('.brand-section-left').attr('aria-expanded','false');
                    });

                    //main menu mobile
                    $('#divToHide').click(function() {
                        $(this).hide();
                        $('.slide-in').hide();
                        $('.slide-in').removeClass('show');
                        $('.moveleft-product').hide();
                        $('.moveleft-brand').hide();
                        $('.responsive-header').hide();
                        $('.main-menu-new-mobile .dropdown').hide();
                        // $('.main-menu-new-mobile .sub-dropdown').hide();
                        $('.main-menu-new-mobile .main-menu-first-items').show();
                        $('.main-menu-new-mobile ul > li .first-level-item').show();
                        $('.main-menu-new-mobile .dropdown > ul > li > .left-cat').show();
                        $('.main-menu-new-mobile .dropdown > ul > li .sub-dropdown .inner-wrap a').removeClass('active');
                         $('.main-menu-new-mobile .dropdown > ul > li .sub-dropdown .inner-wrap ul').removeClass('active');
                    });
                    $('.toggle-section button').click(function() {
                        $("#divToHide").show();
                        setTimeout(function(){ 
                            $('.slide-in').addClass('show');
                            $('.slide-in').show();
                        }, 100);
                    });
                    $('.main-menu-new-mobile .main-menu-first-items > li:first-child').on('click', function() {
                        $('.responsive-header').show();
                        $('.moveleft-product').show();
                        $('.moveleft-brand').hide();
                        $('.moveleft-product .btn-left1').hide(); 
                        $('.moveleft-product .btn-left2').show();
                        $('.main-menu-new-mobile .product-dropdown').show();
                        $('.main-menu-new-mobile .brand-dropdown').hide();
                        $('.main-menu-new-mobile .main-menu-first-items').hide();
                        $('.main-menu-new-mobile .product-dropdown .sub-dropdown').hide();
                        $('.main-menu-new-mobile .dropdown').show();
                     });
                     $('.main-menu-new-mobile .product-dropdown .dropdown > ul > li .left-cat').on('click', function() {
                        $(this).siblings().show();
                        $('.main-menu-new-mobile .product-dropdown .dropdown > ul > li .left-cat').hide();
                        $('.moveleft-product .btn-left1').hide(); 
                        $('.moveleft-product .btn-left2').show();
                    });
                    $('.main-menu-new-mobile .product-dropdown .dropdown .sub-dropdown > .inner-wrap a').on('click', function() {
                        $(this).toggleClass('active');
                        $(this).siblings().toggleClass('active');
                    });

                    $('.main-menu-new-mobile .main-menu-first-items > li:nth-child(2)').on('click', function() {
                        $(".responsive-header").show();
                        $('.moveleft-brand').show();
                        $('.moveleft-product').hide();
                        $('.moveleft-brand .btn-left1').show();
                        $('.main-menu-new-mobile .main-menu-first-items').hide();
                        $('.main-menu-new-mobile .product-dropdown').hide();
                        $('.main-menu-new-mobile .brand-dropdown').show();
                        $('.main-menu-new-mobile .dropdown').show();
                    });
                     $('.main-menu-new-mobile .brand-dropdown .dropdown > ul > li .left-cat').on('click', function() {
                        $(this).toggleClass('active');
                        $(this).siblings().toggleClass('active');

                    });


                    $('.moveleft-brand .btn-left1').on('click', function() {
                        $('.main-menu-new-mobile .dropdown').hide();
                        $('.responsive-header').hide();
                        $('.main-menu-new-mobile .main-menu-first-items').show();
                        $('.main-menu-new-mobile .brand-dropdown .dropdown > ul > li .left-cat').removeClass('active');
                         $('.main-menu-new-mobile .dropdown > ul > li .sub-dropdown').removeClass('active');
                    });
                    $('.moveleft-product .btn-left1').on('click', function() {
                        $('.main-menu-new-mobile .dropdown').hide();
                        $('.responsive-header').hide();
                        $('.main-menu-new-mobile .main-menu-first-items').show();
                    });
                    $('.moveleft-product .btn-left2').on('click', function() {
                        $('.main-menu-new-mobile .dropdown > ul > li > .left-cat').show();
                        $('.main-menu-new-mobile .product-dropdown .sub-dropdown').hide();
                        $(this).hide();
                        $('.moveleft-product .btn-left1').show();
                        $('.main-menu-new-mobile .dropdown > ul > li .sub-dropdown .inner-wrap a').removeClass('active');
                         $('.main-menu-new-mobile .dropdown > ul > li .sub-dropdown .inner-wrap ul').removeClass('active');
                    });
                /*  End Click Functions */ 
                });
            }
            $(".search-bar").click(function(){
                $(".top-searchbar-section").toggle(500);
            });
            /*  Start Footer Menu */ 
            $('.footer-mobile-dropdown').on('click', function() {
                $(this).siblings().toggle(500); 
                $(this).toggleClass('active');
            });
              /*  End Footer Menu */ 
            /*  Start Mobile Alphabet Tabs Active */
            var header = document.getElementById("myNavbar");
            var btns = header.getElementsByClassName("aplha");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function() {
              var current = document.getElementsByClassName("active");
              if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "");
              }
              this.className += " active";
              });
            }
            /*  Start Mobile Alphabet Tabs Active */
            /*  Start Mobile Alphabet Tabs */ 

