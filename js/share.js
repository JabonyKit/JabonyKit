// $(document).ready(function () {

// 朋友圈分享

code_url=encodeURIComponent(location.href.split('#')[0]);
url='http://ttjd.ddbuild.cn/wechat/sign?urlstr='+code_url;

$.getJSON(url,{},function success(data,status,xhr){

	if (data.success){
		wx.config({
			debug: false,
			appId: 'wxcd9fd77225e7ae03',
			timestamp: data.result.timestamp,
			nonceStr: data.result.nonceStr,
			signature: data.result.signature,
			jsApiList: [
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'onMenuShareQZone',
				'hideMenuItems',
				'showMenuItems',
				'hideAllNonBaseMenuItem',
				'showAllNonBaseMenuItem',
				'translateVoice',
				'startRecord',
				'stopRecord',
				'onVoiceRecordEnd',
				'playVoice',
				'onVoicePlayEnd',
				'pauseVoice',
				'stopVoice',
				'uploadVoice',
				'downloadVoice',
				'chooseImage',
				'previewImage',
				'uploadImage',
				'downloadImage',
				'getNetworkType',
				'openLocation',
				'getLocation',
				'hideOptionMenu',
				'showOptionMenu',
				'closeWindow',
				'scanQRCode',
				'chooseWXPay',
				'openProductSpecificView',
				'addCard',
				'chooseCard',
				'openCard'
			]
		});

		var imgUrl ='http://www.51ttjd.com/logo/new_logo.png';
		var lineLink = 'http://www.51ttjd.com/index.html?2=44';
		var descContent = "赋能项目管理，让工程建设更美好，建设更美好的世界";
		var shareTitle = '天天建道-工程项目管理协作工具创导者'
		var appid = 'wxcd9fd77225e7ae03';

		wx.ready(function(){
			// 2. 分享接口
			// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口

			wx.onMenuShareAppMessage({
				title: shareTitle,
				desc: descContent,
				link: lineLink,
				imgUrl: imgUrl,
				dataUrl:"",
				trigger: function (res) {
					// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回

				},
				success: function (res) {

				},
				cancel: function (res) {

				},
				fail: function (res) {

				}
			});

			// 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
			wx.onMenuShareTimeline({
				title: shareTitle,
				link: lineLink,
				imgUrl: imgUrl,
				trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回

				},
				success: function (res) {

				},
				cancel: function (res) {

				},
				fail: function (res) {

				}
			});

			// 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
			wx.onMenuShareQQ({
				title: shareTitle,
				desc: descContent,
				link: lineLink,
				imgUrl: imgUrl,
				trigger: function (res) {

				},
				complete: function (res) {

				},
				success: function (res) {

				},
				cancel: function (res) {

				},
				fail: function (res) {

				}
			});

			// 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
			wx.onMenuShareWeibo({
				title: shareTitle,
				desc:descContent,
				link: lineLink,
				imgUrl: imgUrl,
				trigger: function (res) {

				},
				complete: function (res) {

				},
				success: function (res) {

				},
				cancel: function (res) {

				},
				fail: function (res) {

				}
			});

			// 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
			wx.onMenuShareQZone({
				title: shareTitle,
				desc: descContent,
				link: lineLink,
				imgUrl: imgUrl,
				trigger: function (res) {

				},
				complete: function (res) {

				},
				success: function (res) {

				},
				cancel: function (res) {

				},
				fail: function (res) {

				}
			});
		});

		wx.error(function(res){

			// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
		});
	}
});
// })
