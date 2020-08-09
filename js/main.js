//table select Box
$(document).ready(function(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				$(this).prev('.txt').text($(this).find("option:selected").text());
			},
			focusin = function() {
				$(this).parents('.inputbox').addClass('selected');
			},
			focusout = function() {
				$(this).parents('.inputbox').removeClass('selected');
			};

		self.css({
			'width' : parentBox.width() + 2 + 'px',
			'height' : parentBox.height() + 'px'
		}).on({
			'change' : change,
			'focusin' : focusin,
			'focusout' : focusout
		});
	}).end().find('.txt').each(function(){
		var self = $(this);
		self.text(self.next('select').find("option:selected").text());
	});
});

//slider
$(function(){
  $('.flexslider1').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	pausePlay:false,
	direction:"hrozinal"
  });
});


$(function(){

	
	$('.depth_01_menu > li > a').on('click',function(){
		$(this).parent().siblings().children('.depth_02_menu').slideUp()
		$(this).parent().siblings().removeClass('on')
		$(this).next('.depth_02_menu').slideToggle(200)
		$(this).next('.depth_02_menu').toggleClass('on')
		$(this).parent().toggleClass('on');
	});
	
	$('.depth_02_menu > li > a').on('click',function(){
		$(this).parent().siblings().children('.depth_03_menu').slideUp()
		$(this).parent().siblings().removeClass('on')
		$(this).next('.depth_03_menu').slideToggle(200)
		$(this).next('.depth_03_menu').toggleClass('on')
		$(this).parent().toggleClass('on');
	});
	
	$('.depth_03_menu li a').on('click',function(){
		$(this).parent().siblings().removeClass('on')
		$(this).parent().toggleClass('on');
	});
	
})

jQuery(function($){
	var tab = $('.Portlet_tab_normal');
	tab.removeClass('js_off');
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.Portlet_tab_normal:first').attr('class', 'Portlet_tab_normal '+myClass);
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});
	

//flexslider
$(document).ready(function(){
	fn_sliderCmn2("flexslider2");
});

//flexslider
$(document).ready(function(){
	fn_sliderCmn("flexslider3");
});


function fn_sliderCmn(classNm){
	$("." + classNm).flexslider({
        animation: "slide",
        slideshowSpeed: 4000,
        pauseOnHover: false,
        pagingCount: false,
		directionNav: false,
		controlNav: false,
        start: function(slider) {
			$("." + classNm).find(".slide_btn_stop").click(function(){
				slider.pause();
				$("." + classNm).find(".slide_btn_play").show();
				$(this).hide();
            });
			$("." + classNm).find(".slide_btn_play").click(function(){
				slider.play(); 
				$("." + classNm).find(".slide_btn_stop").show();
				$(this).hide();
            });
			$("." + classNm).find(".sliderPrev").click(function(){
				$("." + classNm).flexslider('prev');
			});
			$("." + classNm).find(".sliderNext").click(function(){
				$("." + classNm).flexslider('next');
			});

			$("." + classNm).find('.sliderCurrent').text(slider.currentSlide + 1);
			$("." + classNm).find('.sliderTotal').text(slider.count);
        },
		after: function(slider) {
			$("." + classNm).find('.sliderCurrent').text(slider.currentSlide + 1);
		}
    });
}

function fn_sliderCmn2(classNm){
	$("." + classNm).flexslider({
        animation:true,
        slideshow:false,
        pauseOnHover: false,
        pagingCount: false,
		directionNav: false,
		controlNav: false,
        start: function(slider) {
			$("." + classNm).find(".slide_btn_stop").click(function(){
				slider.pause();
				$("." + classNm).find(".slide_btn_play").show();
				$(this).hide();
            });
			$("." + classNm).find(".slide_btn_play").click(function(){
				slider.play(); 
				$("." + classNm).find(".slide_btn_stop").show();
				$(this).hide();
            });
			$("." + classNm).find(".sliderPrev").click(function(){
				$("." + classNm).flexslider('prev');
			});
			$("." + classNm).find(".sliderNext").click(function(){
				$("." + classNm).flexslider('next');
			});

			$("." + classNm).find('.sliderCurrent').text(slider.currentSlide + 1);
			$("." + classNm).find('.sliderTotal').text(slider.count);
        },
		after: function(slider) {
			$("." + classNm).find('.sliderCurrent').text(slider.currentSlide + 1);
		}
    });
}

$(function(){
  $('.flexslider2').flexslider({
	animation:true,
	directionNav: false,
	controlNav: false,
	pausePlay:false,
	slideshow:false
  });
});


$(function(){
  $('.flexslider3').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	pausePlay:false,
	direction:"hrozinal"
  });

	
	
	
  //바로가기 서비스 이미지 hover 시 변경
  $(".iconList li").hover(
	function(){
	  var imgObj = $(this).find("img");	//a태그 하위의 img 태그 선택
	  var imgSrc = imgObj.attr("src"); //img src 속성 가져오기
		
	  if(imgSrc.search("_off.") > 0){ 
		//이미지 src 변경 
		imgObj.attr("src", imgSrc.replace("_off","_on"));
	  }
	},
	function(){
	  var imgObj = $(this).find("img");	//a태그 하위의 img 태그 선택
	  var imgSrc = $(this).find("img").attr("src"); //img src 속성 가져오기
		
	  if(imgSrc.search("_on.") > 0){
		//이미지 src 변경 
		imgObj.attr("src", imgSrc.replace("_on","_off"));
	  }
	}
  );
	
});



/*layerpopup*/
/* layer_system */
function opensystem(){
	$('#index_system').css('display', 'block');	
}

function closesystem(){
	$('#index_system').css('display', 'none');
}


/* layer_service */
function openservice(){
	$('#index_service').css('display', 'block');	
}

function closeservice(){
	$('#index_service').css('display', 'none');
}



//gnb 2depth
$(function(){
	$(".gnb_left .depth02").hide();
	$(".gnb_left > li").hover(function(){
		$(this).children('.depth02').slideDown('fast');
	},
	function(){
		$(this).children('.depth02').slideUp(100); 
	})
});

