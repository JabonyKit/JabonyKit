$('.loginbtn').eq(0).click(function () {
	$(this).css({'background':'rgba(255,255,255,.7)','box-shadow':'2px -1px 1px #ddd','color':'#00b0f0'});
	$(this).siblings().css({'background':'rgba(255,255,255,.3)','box-shadow':'none','color':'#fff'});
	$(this).parent().siblings('.logincontion').first().css('display','block');
	$(this).parent().siblings('.logincontion').last().css('display','none');
})
$('.loginbtn').eq(1).click(function () {
	$(this).css({'background':'rgba(255,255,255,.7)','box-shadow':'2px -1px 1px #ddd','color':'#00b0f0'});
	$(this).siblings().css({'background':'rgba(255,255,255,.3)','box-shadow':'none','color':'#fff'});
	$(this).parent().siblings('.logincontion').last().css('display','block');
	$(this).parent().siblings('.logincontion').first().css('display','none');
})
