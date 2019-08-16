// 2019-03-08

var VRender = require(__vrender);


var $ = VRender.$;

var MainFrame = VRender.PageView.extend(module, {
	pageTitle: "不能说",
	pageLogo: "/images/logo.png",

	renderBody: function (body) {
		MainFrame.__super__.renderBody.call(this, body);
		var mainBody = $("#main-body").appendTo(body);
		mainBody.append($("#singlepage-container.main-container"));
	}
});

// MainFrame.use(VRender.plugins.SinglePage);
