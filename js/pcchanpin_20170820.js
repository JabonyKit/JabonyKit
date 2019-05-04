
// product.html			*********		>>>>>>

// 小导航
$('#pcnavsmallbtn01').click(function () {
	$(this).css({'padding':'10px 0','width': '178px','border': 'solid 1px #00b0f0'});
	$(this).siblings().css({'padding':'11px 0','width': '180px','border': 'solid 0px #00b0f0'});
	$('#pcboxcontent01').siblings().fadeOut(200);
	$('#pcboxcontent01').fadeIn(500);
})
$('#pcnavsmallbtn02').click(function () {
	$(this).css({'padding':'10px 0','width': '178px','border': 'solid 1px #00b0f0'});
	$(this).siblings().css({'padding':'11px 0','width': '180px','border': 'solid 0px #00b0f0'});
	$('#pcboxcontent02').siblings().fadeOut(200);
	$('#pcboxcontent02').fadeIn(500);
})
$('#pcnavsmallbtn03').click(function () {
	$(this).css({'padding':'10px 0','width': '178px','border': 'solid 1px #00b0f0'});
	$(this).siblings().css({'padding':'11px 0','width': '180px','border': 'solid 0px #00b0f0'});
	$('#pcboxcontent03').siblings().fadeOut(200);
	$('#pcboxcontent03').fadeIn(500);
})
$('#pcnavsmallbtn04').click(function () {
	$(this).css({'padding':'10px 0','width': '178px','border': 'solid 1px #00b0f0'});
	$(this).siblings().css({'padding':'11px 0','width': '180px','border': 'solid 0px #00b0f0'});
	$('#pcboxcontent04').siblings().fadeOut(200);
	$('#pcboxcontent04').fadeIn(500);
})



// service.html			*********		>>>>>>

// 内容
$('.pcbox28').hover(function () {
	$(this).css({'background':'#fff','color':'#00b0f0','border':'solid 1px #00b0f0'});
	$(this).siblings().css({'background':'#fafafa','color':'#999','border':'solid 1px #eee'});
	$(this).children('.pcimg17').css('display','none');
	$(this).children('.pcimg18').css('display','block');
	$(this).siblings().children('.pcimg17').css({'display':'block'});
	$(this).siblings().children('.pcimg18').css({'display':'none'});
})
$('.pcbox27').mouseleave(function () {
	$(this).children('.pcbox28').css({'background':'#fafafa','color':'#999','border':'solid 1px #eee'});
	$(this).children('.pcbox28').children('.pcimg17').css('display','block');
	$(this).children('.pcbox28').children('.pcimg18').css('display','none');
})
//


// download.html			*********		>>>>>>
// 内容
$('.pctext57').click(function () {
	$(this).children('.pctext58').slideToggle(500);
})