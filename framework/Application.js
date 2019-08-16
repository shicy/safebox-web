// 2019-03-08

var VRender = require(__vrender);
var Routers = require("./routers");

VRender.use(require("v-render-ui"));

var Application = exports;

var configs = {
	cwd: __basedir,
	server: {
		port: 9100
	},
	router: {
		adapter: "./framework/RouterAdapter"
	}
};

Application.run = function (port) {
	if (port) {
		configs.server.port = port;
	}
	new VRender(configs);
};
