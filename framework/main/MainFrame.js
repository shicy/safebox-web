// 2019-03-08

var VRender = require(__vrender);


var MainFrame = VRender.PageView.extend(module, {
	renderBody: function (body) {
		MainFrame.__super__.renderBody.call(this, body);
		body.append("MainFrame");
	}
});