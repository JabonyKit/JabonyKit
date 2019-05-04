	var url = "https://ttjd.ddbuild.cn/nsp/project/get_project_count";
		$.get(url, function (data) {
			if (data.success) {
				var num1 = data.result.count;
					$(".realtime>span").text(num1);
			}
		});
