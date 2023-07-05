export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f6825b7d.js","app":"_app/immutable/entry/app.4e546773.js","imports":["_app/immutable/entry/start.f6825b7d.js","_app/immutable/chunks/scheduler.32b2563f.js","_app/immutable/chunks/singletons.669e9de4.js","_app/immutable/chunks/index.4ddb0567.js","_app/immutable/entry/app.4e546773.js","_app/immutable/chunks/scheduler.32b2563f.js","_app/immutable/chunks/index.71ef09ac.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/reg",
				pattern: /^\/reg\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
