"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function ($) {
  var MENU_WIDTH = 260;
  var SN_BREAKPOINT = 993;
  var MENU_WIDTH_HALF = 2;
  var MENU_LEFT_MIN_BORDER = 0.3;
  var MENU_LEFT_MAX_BORDER = -0.5;
  var MENU_RIGHT_MIN_BORDER = -0.3;
  var MENU_RIGHT_MAX_BORDER = 0.5;
  var MENU_VELOCITY_OFFSET = 10;

  var SideNav =
  /*#__PURE__*/
  function () {
    function SideNav(element, options) {
      _classCallCheck(this, SideNav);

      this.defaults = {
        MENU_WIDTH: MENU_WIDTH,
        edge: 'left',
        closeOnClick: false
      };
      this.$element = element;
      this.options = this.assignOptions(options);
      this.menuOut = false;
      this.lastTouchVelocity = {
        x: {
          startPosition: 0,
          startTime: 0,
          endPosition: 0,
          endTime: 0
        }
      };
      this.$body = $('body');
      this.$menu = $("#".concat(this.$element.attr('data-activates')));
      this.$sidenavOverlay = $('#sidenav-overlay');
      this.$dragTarget = $('<div class="drag-target"></div>');
      this.$body.append(this.$dragTarget);
      this.init();
    }

    _createClass(SideNav, [{
      key: "init",
      value: function init() {
        this.setMenuWidth();
        this.setMenuTranslation();
        this.closeOnClick();
        this.openOnClick();
        this.bindTouchEvents();
      }
    }, {
      key: "bindTouchEvents",
      value: function bindTouchEvents() {
        var _this = this;

        this.$dragTarget.on('click', function () {
          _this.removeMenu();
        });
        this.$dragTarget.on('touchstart', function (e) {
          _this.lastTouchVelocity.x.startPosition = e.touches[0].clientX;
          _this.lastTouchVelocity.x.startTime = Date.now();
        });
        this.$dragTarget.on('touchmove', this.touchmoveEventHandler.bind(this));
        this.$dragTarget.on('touchend', this.touchendEventHandler.bind(this));
      }
    }, {
      key: "touchmoveEventHandler",
      value: function touchmoveEventHandler(e) {
        if (e.type !== 'touchmove') {
          return;
        }

        var touch = e.touches[0];
        var touchX = touch.clientX; // calculate velocity every 20ms

        if (Date.now() - this.lastTouchVelocity.x.startTime > 20) {
          this.lastTouchVelocity.x.startPosition = touch.clientX;
          this.lastTouchVelocity.x.startTime = Date.now();
        }

        this.disableScrolling();
        var overlayExists = this.$sidenavOverlay.length !== 0;

        if (!overlayExists) {
          this.buildSidenavOverlay();
        } // Keep within boundaries


        if (this.options.edge === 'left') {
          if (touchX > this.options.MENU_WIDTH) {
            touchX = this.options.MENU_WIDTH;
          } else if (touchX < 0) {
            touchX = 0;
          }
        }

        this.translateSidenavX(touchX);
        this.updateOverlayOpacity(touchX);
      }
    }, {
      key: "panEventHandler",
      value: function panEventHandler(e) {
        if (e.gesture.pointerType !== 'touch') {
          return;
        }

        var touchX = e.gesture.center.x;
        this.disableScrolling();
        var overlayExists = this.$sidenavOverlay.length !== 0;

        if (!overlayExists) {
          this.buildSidenavOverlay();
        } // Keep within boundaries


        if (this.options.edge === 'left') {
          if (touchX > this.options.MENU_WIDTH) {
            touchX = this.options.MENU_WIDTH;
          } else if (touchX < 0) {
            touchX = 0;
          }
        }

        this.translateSidenavX(touchX);
        this.updateOverlayOpacity(touchX);
      }
    }, {
      key: "translateSidenavX",
      value: function translateSidenavX(touchX) {
        if (this.options.edge === 'left') {
          var isRightDirection = touchX >= this.options.MENU_WIDTH / MENU_WIDTH_HALF;
          this.menuOut = isRightDirection;
          this.$menu.css('transform', "translateX(".concat(touchX - this.options.MENU_WIDTH, "px)"));
        } else {
          var isLeftDirection = touchX < window.innerWidth - this.options.MENU_WIDTH / MENU_WIDTH_HALF;
          this.menuOut = isLeftDirection;
          var rightPos = touchX - this.options.MENU_WIDTH / MENU_WIDTH_HALF;

          if (rightPos < 0) {
            rightPos = 0;
          }

          this.$menu.css('transform', "translateX(".concat(rightPos, "px)"));
        }
      }
    }, {
      key: "updateOverlayOpacity",
      value: function updateOverlayOpacity(touchX) {
        var overlayPercentage;

        if (this.options.edge === 'left') {
          overlayPercentage = touchX / this.options.MENU_WIDTH;
        } else {
          overlayPercentage = Math.abs((touchX - window.innerWidth) / this.options.MENU_WIDTH);
        }

        this.$sidenavOverlay.velocity({
          opacity: overlayPercentage
        }, {
          duration: 10,
          queue: false,
          easing: 'easeOutQuad'
        });
      }
    }, {
      key: "buildSidenavOverlay",
      value: function buildSidenavOverlay() {
        var _this2 = this;

        this.$sidenavOverlay = $('<div id="sidenav-overlay"></div>');
        this.$sidenavOverlay.css('opacity', 0).on('click', function () {
          _this2.removeMenu();
        });
        this.$body.append(this.$sidenavOverlay);
      }
    }, {
      key: "disableScrolling",
      value: function disableScrolling() {
        var oldWidth = this.$body.innerWidth();
        this.$body.css('overflow', 'hidden');
        this.$body.width(oldWidth);
      }
    }, {
      key: "touchendEventHandler",
      value: function touchendEventHandler(e) {
        if (e.type !== 'touchend') {
          return;
        }

        var touch = e.changedTouches[0];
        this.lastTouchVelocity.x.endTime = Date.now();
        this.lastTouchVelocity.x.endPosition = touch.clientX;
        var velocityX = this.calculateTouchVelocityX();
        var touchX = touch.clientX;
        var leftPos = touchX - this.options.MENU_WIDTH;
        var rightPos = touchX - this.options.MENU_WIDTH / MENU_WIDTH_HALF;

        if (leftPos > 0) {
          leftPos = 0;
        }

        if (rightPos < 0) {
          rightPos = 0;
        }

        if (this.options.edge === 'left') {
          // If velocityX <= 0.3 then the user is flinging the menu closed so ignore this.menuOut
          if (this.menuOut && velocityX <= MENU_LEFT_MIN_BORDER || velocityX < MENU_LEFT_MAX_BORDER) {
            if (leftPos !== 0) {
              this.translateMenuX([0, leftPos], '300');
            }

            this.showSidenavOverlay();
          } else if (!this.menuOut || velocityX > MENU_LEFT_MIN_BORDER) {
            this.enableScrolling();
            this.translateMenuX([-1 * this.options.MENU_WIDTH - MENU_VELOCITY_OFFSET, leftPos], '200');
            this.hideSidenavOverlay();
          }

          this.$dragTarget.css({
            width: '10px',
            right: '',
            left: 0
          });
        } else if (this.menuOut && velocityX >= MENU_RIGHT_MIN_BORDER || velocityX > MENU_RIGHT_MAX_BORDER) {
          this.translateMenuX([0, rightPos], '300');
          this.showSidenavOverlay();
          this.$dragTarget.css({
            width: '10px',
            left: '',
            right: 0
          });
        } else if (!this.menuOut || velocityX < MENU_RIGHT_MIN_BORDER) {
          this.enableScrolling();
          this.translateMenuX([this.options.MENU_WIDTH + MENU_VELOCITY_OFFSET, rightPos], '200');
          this.hideSidenavOverlay();
          this.$dragTarget.css({
            width: '10px',
            left: 0,
            right: ''
          });
        }
      }
    }, {
      key: "calculateTouchVelocityX",
      value: function calculateTouchVelocityX() {
        var distance = Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition);
        var time = Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime);
        return distance / time;
      }
    }, {
      key: "panendEventHandler",
      value: function panendEventHandler(e) {
        if (e.gesture.pointerType !== 'touch') {
          return;
        }

        var velocityX = e.gesture.velocityX;
        var touchX = e.gesture.center.x;
        var leftPos = touchX - this.options.MENU_WIDTH;
        var rightPos = touchX - this.options.MENU_WIDTH / MENU_WIDTH_HALF;

        if (leftPos > 0) {
          leftPos = 0;
        }

        if (rightPos < 0) {
          rightPos = 0;
        }

        if (this.options.edge === 'left') {
          // If velocityX <= 0.3 then the user is flinging the menu closed so ignore this.menuOut
          if (this.menuOut && velocityX <= MENU_LEFT_MIN_BORDER || velocityX < MENU_LEFT_MAX_BORDER) {
            if (leftPos !== 0) {
              this.translateMenuX([0, leftPos], '300');
            }

            this.showSidenavOverlay();
          } else if (!this.menuOut || velocityX > MENU_LEFT_MIN_BORDER) {
            this.enableScrolling();
            this.translateMenuX([-1 * this.options.MENU_WIDTH - MENU_VELOCITY_OFFSET, leftPos], '200');
            this.hideSidenavOverlay();
          }

          this.$dragTarget.css({
            width: '10px',
            right: '',
            left: 0
          });
        } else if (this.menuOut && velocityX >= MENU_RIGHT_MIN_BORDER || velocityX > MENU_RIGHT_MAX_BORDER) {
          this.translateMenuX([0, rightPos], '300');
          this.showSidenavOverlay();
          this.$dragTarget.css({
            width: '50%',
            right: '',
            left: 0
          });
        } else if (!this.menuOut || velocityX < MENU_RIGHT_MIN_BORDER) {
          this.enableScrolling();
          this.translateMenuX([this.options.MENU_WIDTH + MENU_VELOCITY_OFFSET, rightPos], '200');
          this.hideSidenavOverlay();
          this.$dragTarget.css({
            width: '10px',
            right: 0,
            left: ''
          });
        }
      }
    }, {
      key: "translateMenuX",
      value: function translateMenuX(fromTo, duration) {
        this.$menu.velocity({
          translateX: fromTo
        }, {
          duration: typeof duration === 'string' ? Number(duration) : duration,
          queue: false,
          easing: 'easeOutQuad'
        });
      }
    }, {
      key: "hideSidenavOverlay",
      value: function hideSidenavOverlay() {
        this.$sidenavOverlay.velocity({
          opacity: 0
        }, {
          duration: 200,
          queue: false,
          easing: 'easeOutQuad',
          complete: function complete() {
            $(this).remove();
          }
        });
        this.$sidenavOverlay = $();
      }
    }, {
      key: "showSidenavOverlay",
      value: function showSidenavOverlay() {
        this.$sidenavOverlay.velocity({
          opacity: 1
        }, {
          duration: 50,
          queue: false,
          easing: 'easeOutQuad'
        });
      }
    }, {
      key: "enableScrolling",
      value: function enableScrolling() {
        this.$body.css({
          overflow: '',
          width: ''
        });
      }
    }, {
      key: "openOnClick",
      value: function openOnClick() {
        var _this3 = this;

        this.$element.on('click', function (e) {
          e.preventDefault();

          if (_this3.menuOut === true) {
            _this3.menuOut = false;

            _this3.removeMenu();
          } else {
            _this3.$sidenavOverlay = $('<div id="sidenav-overlay"></div>');

            _this3.$body.append(_this3.$sidenavOverlay);

            var translateX = [];

            if (_this3.options.edge === 'left') {
              translateX = [0, -1 * _this3.options.MENU_WIDTH];
            } else {
              translateX = [0, _this3.options.MENU_WIDTH];
            }

            _this3.$menu.velocity({
              translateX: translateX
            }, {
              duration: 300,
              queue: false,
              easing: 'easeOutQuad'
            });

            _this3.$sidenavOverlay.on('click', function () {
              _this3.removeMenu();
            });
          }
        });
      }
    }, {
      key: "closeOnClick",
      value: function closeOnClick() {
        var _this4 = this;

        if (this.options.closeOnClick === true) {
          this.$menu.on('click', 'a:not(.collapsible-header)', function () {
            _this4.removeMenu();
          });
        }
      }
    }, {
      key: "setMenuTranslation",
      value: function setMenuTranslation() {
        var _this5 = this;

        if (this.options.edge === 'left') {
          this.$menu.css('transform', 'translateX(-100%)');
          this.$dragTarget.css({
            left: 0
          });
        } else {
          this.$menu.addClass('right-aligned').css('transform', 'translateX(100%)');
          this.$dragTarget.css({
            right: 0
          });
        }

        if (this.$menu.hasClass('fixed')) {
          if (window.innerWidth > SN_BREAKPOINT) {
            this.$menu.css('transform', 'translateX(0)');
          }

          $(window).resize(function(){
            if ($(window).width() >= 600){	
              // do something here
          $(window).resize(function () {
            if (window.innerWidth > SN_BREAKPOINT) {
              if (_this5.$sidenavOverlay.length) {
                _this5.removeMenu(true);
              } else {
                _this5.$menu.css('transform', 'translateX(0%)');
              }
            } else if (_this5.menuOut === false) {
              var xValue = _this5.options.edge === 'left' ? '-100' : '100';

              _this5.$menu.css('transform', "translateX(".concat(xValue, "%)"));
            }
          });
        }	
      });


        }
      }
    }, {
      key: "setMenuWidth",
      value: function setMenuWidth() {
        var $sidenavBg = $("#".concat(this.$menu.attr('id'))).find('> .sidenav-bg');

        if (this.options.MENU_WIDTH !== MENU_WIDTH) {
          this.$menu.css('width', this.options.MENU_WIDTH);
          $sidenavBg.css('width', this.options.MENU_WIDTH);
        }
      }
    }, {
      key: "assignOptions",
      value: function assignOptions(newOptions) {
        return $.extend({}, this.defaults, newOptions);
      }
    }, {
      key: "removeMenu",
      value: function removeMenu(restoreMenu) {
        var _this6 = this;

        this.$body.css({
          overflow: '',
          width: ''
        });
        this.$menu.velocity({
          translateX: this.options.edge === 'left' ? '-100%' : '100%'
        }, {
          duration: 200,
          queue: false,
          easing: 'easeOutCubic',
          complete: function complete() {
            if (restoreMenu === true) {
              _this6.$menu.removeAttr('style');

              _this6.$menu.css('width', _this6.options.MENU_WIDTH);
            }
          }
        });
        this.hideSidenavOverlay();
      }
    }, {
      key: "show",
      value: function show() {
        this.trigger('click');
      }
    }, {
      key: "hide",
      value: function hide() {
        this.$sidenavOverlay.trigger('click');
      }
    }]);

    return SideNav;
  }();

  $.fn.sideNav = function (options) {
    return this.each(function () {
      new SideNav($(this), options);
    });
  };
})(jQuery);
// SideNav Initialization
$('.button-collapseRtl').sideNav({
	edge: 'right', // Choose the horizontal origin
	closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// SideNav Initialization
$('.button-collapse').sideNav({
	closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
});


$(function () {
	$('.btn-view').click(function () {
		$('.newClass').toggleClass('anotherNewClass');
	});
});



$(function () {
	$('.btn-conta').click(function () {
		$('.sharing').toggleClass('open');
		$(this).toggleClass('open');
	});
});


$(function () {
	$('.btn-setting').click(function () {
		$('.setting-option').toggleClass('open');
		$(this).toggleClass('open');
	});
});







// $('.btn-setting').on('click', (event) => {
// 	$(event.target).siblings('.setting-option')
// 	  .toggleClass('open');
//   });
//   $(document).click(function(e) {
// 	$('.setting-box')
// 	  .not($('.setting-box').has($(e.target)))
// 	  .children('.setting-option')
// 	  .removeClass('open');
//   });


//   $(document).ready( function(){
// 	$('.btn-conta').click( function(event){
// 		event.stopPropagation();
// 		$('.sharing').toggleClass('open');
// 	});

// 	$('.btn-setting').click( function(event){
// 		event.stopPropagation();
// 		$('.setting-option').toggleClass('open');
// 	});
	
// 	$(document).click( function(){
// 		$('.setting-option, .sharing')
// 		.removeClass('open');
// 	});
// });
  



// Data Picker Initialization
$('.datepicker').pickadate();

// Time Picker Initialization
$('#input_starttime').pickatime({});

// Material Select Initialization
$(document).ready(function() {
	$('.mdb-select2').materialSelect();
 });

// stepper
 $(document).ready(function () {
	$('.stepper').mdbStepper();
 })
function someFunction21() {
	setTimeout(function () {
	$('#horizontal-stepper').nextStep();
	}, 2000);
	}

	function validationFunction() {
		setTimeout(function () {
		$('#custom-validation').nextStep();
		}, 1600);
		}
		function someTrueFunction() {
		return true;
		}
		
	


//mdb-preloader
 $(window).on("load", function () {
	$('#mdb-preloader').fadeOut('slow');
});

//Animation
let wow = new WOW({
	boxClass: 'wow', // default
	animateClass: 'animated', // default
	offset: 0, // default
	mobile: true, // default
	live: true // default
})
wow.init();


// $( ".collapsible a" ).mouseover(function() { $(this).trigger('click'); });

  // $(window).resize(function () {

	// window.location.reload();
  
  // });

//   $(window).resize(function(){
// 	if ($(window).width() <= 600){	
// 		// do something here
// 		window.location.reload();
// 	}	
// });




$().ready(function() {
  let $sidebar = $('.sidebar');

  let $sidebar_img_container = $sidebar.find('.sidebar-background');

  $('.setting-option .active-color span').click(function() {

      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      var new_color = $(this).data('color');

      if ($sidebar.length != 0) {
          $sidebar.attr('data-color', new_color);
      }
  });

  $('.setting-option .background-color .badge').click(function() {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      var new_color = $(this).data('background-color');

      if ($sidebar.length != 0) {
          $sidebar.attr('data-background-color', new_color);
      }
  });

  $('.setting-option .img-holder').click(function() {
    let $full_page_background = $('.full-page-background');

      $(this).parent('li').siblings().removeClass('active');
      $(this).parent('li').addClass('active');


      var new_image = $(this).find("img").attr('src');

      if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
          $sidebar_img_container.fadeOut('fast', function() {
              $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
              $sidebar_img_container.fadeIn('fast');
          });
      }

      if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
          var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

          $full_page_background.fadeOut('fast', function() {
              $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
              $full_page_background.fadeIn('fast');
          });
      }

      if ($('.switch-sidebar-image input:checked').length == 0) {
          var new_image = $('.setting-option li.active .img-holder').find("img").attr('src');
          var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

          $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
          $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
      }


      // change logo depending on theme
      $('.green-button').on({
          'click': function() {
              $('#change-image').attr('src', root_path +'img/najiz-white.svg');
          }
      });

      $('.white-button').on({
          'click': function() {
              $('#change-image').attr('src', root_path +'img/najiz-dark.svg');
          }
      });

      $('.yellow-button').on({
          'click': function() {
              $('#change-image').attr('src', root_path +'img/najiz-white.svg');
          }
      });

  });

  // extend the main content
  $('a.resize-sidebar').on('click', function() {
      $('div#slide-out').attr('data-toggle', $('div#slide-out').attr('data-toggle') == 'close-slide-toggle' ? 'slide-toggle' : 'close-slide-toggle')
      $('div#slide-out').toggleClass('small-menu')
      $('nav.navbar').attr('data-toggle', $('nav.navbar').attr('data-toggle') == 'toggle-no' ? 'toggle-open' : 'toggle-no')
      $('main').attr('data-toggle', $('main').attr('data-toggle') == 'toggle-no' ? 'toggle-open' : 'toggle-no')
      $('footer').attr('data-toggle', $('footer').attr('data-toggle') == 'toggle-no' ? 'toggle-open' : 'toggle-no')
  });



  // change logo with type of image
  $(document).ready(function() {
      var flag = 0;
      $(".resize-sidebar").click(function() {
          if (flag == 0) {
              $("#change-image").attr("src", root_path +"img/najiz-n.svg").css({
                  "width": "100px"
              });
              flag = 1;
          } else if (flag == 1) {
              $("#change-image").attr("src", root_path +"img/najiz-dark.svg").css({
                  "width": "110px"
              });
              flag = 0;
          }
      });
  });

  //change logo src on hover
  $(document).ready(function() {
      $("body").on('mouseenter', '.small-menu', function() {
          $("#change-image").attr("src", root_path +"img/najiz-dark.svg").css({
              "width": "110px"
          });
      });
      $("body").on('mouseleave', '.small-menu', function() {
          $("#change-image").attr("src", root_path +"img/najiz-n.svg").css({
              "width": "100px"
          });
      });
  });



});