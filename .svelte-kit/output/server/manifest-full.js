export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","bok.jpg","favicon-16x16.png","favicon-32x32.png","favicon.ico","profile.png","profile.svg","psudo_teaser.jpg","psudo_teaser.png","psudo_website_teaser.jpg","riadh_circle.ico:Zone.Identifier","scope2screen_high_res.png","site.webmanifest","vimo-teaser-02.png","warchol_cv.pdf"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.7dbf0e38.js","app":"_app/immutable/entry/app.bb17c35e.js","imports":["_app/immutable/entry/start.7dbf0e38.js","_app/immutable/chunks/index.474b34d0.js","_app/immutable/chunks/singletons.637728aa.js","_app/immutable/entry/app.bb17c35e.js","_app/immutable/chunks/index.474b34d0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
