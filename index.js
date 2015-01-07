
var util = require('util');

var list = (function() {
	var app = function() {
		if (arguments[0] != undefined) {
			if (app.defaultPad) {
				app[app.defaultPad](arguments[0]);
			} else {
				app.add('console');
				app.setDefault('console');
				app.console(arguments[0]);
			}
		}
		return app;
	}

	app.add = app.add || function(arg) {
		if (util.isArray(arg)) {
			for (var i in arg) {
				var name = arg[i];
				if (!app[name]) {
					app[name] = require('debug')(name);
				}
			}
		} else if (typeof arg === 'string') {
			if (!app[arg]) {
				app[arg] = require('debug')(arg);
			}
			return app[arg];
		}
	}

	app.setDefault = app.setDefault || function(name) {
		if (app.defaultPad != name) {
			app.defaultPad = name;
		}
		return app.defaultPad;
	}

	app.list = app.list || function() {
		return Object.keys(app);
	}

	return app;
})();

exports = module.exports = list;