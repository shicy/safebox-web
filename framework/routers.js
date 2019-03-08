// 2019-03-08

var VRender = require(__vrender);

var router = new VRender.router();

///////////////////////////////////////////////////////////
router(null, function (name, params, callback) {
	callback(false, "framework/main/MainFrame");
});