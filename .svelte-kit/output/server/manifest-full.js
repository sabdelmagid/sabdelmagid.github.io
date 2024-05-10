export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","312580106_479303720899479_6756649316614595704_n.jpg","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","bok.jpg","favicon-16x16.png","favicon-32x32.png","favicon.ico","fx1_lrg.jpg","interfaceteaserfinalthumbnail.jpg","motif-teaser-04.png","profile-filled.png","profile.ai","profile.pdf","profile.png","profile.svg","profile_bw.ai","profile_bw.svg","profile_colorf.ai","psudo_teaser.jpg","psudo_teaser.png","psudo_website_teaser.jpg","riadh_circle.ico:Zone.Identifier","scope2screen_high_res.png","site.webmanifest","vimo-teaser-02.png","warchol_cv.pdf"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon",".ai":"application/postscript",".pdf":"application/pdf",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.d3c5e53e.js","app":"_app/immutable/entry/app.8c234399.js","imports":["_app/immutable/entry/start.d3c5e53e.js","_app/immutable/chunks/index.474b34d0.js","_app/immutable/chunks/singletons.3e8cd185.js","_app/immutable/entry/app.8c234399.js","_app/immutable/chunks/index.474b34d0.js"],"stylesheets":[],"fonts":[]},
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
