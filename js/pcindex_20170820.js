// 滑动导航显示隐藏
$(function () {
	$(window).scroll(function () {
		var topss = $(document).scrollTop();
			if (topss > 72){
				$('.opa2').fadeOut(300);
				$('.opa1').fadeIn(300);
			} else{
				$('.opa1').fadeOut(300);
				$('.opa2').fadeIn(300);
			}
	})

})



