import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, v as validate_component, f as escape } from '../../chunks/index.js';
import { I as Icons, a as Icon } from '../../chunks/Icon.js';
import { p as page } from '../../chunks/stores.js';
import { b as base } from '../../chunks/paths.js';

const NavMenu_svelte_svelte_type_style_lang = '';

/* src/lib/components/NavMenu.svelte generated by Svelte v3.59.1 */

const css$1 = {
	code: ".container.svelte-1yvqyhe{justify-content:center;display:flex;height:100%}.nav-menu.svelte-1yvqyhe{display:flex;justify-content:center;position:sticky;top:0px;z-index:10;padding:0px 10px;border-bottom:1px solid var(--secondary-c);background-color:var(--primary-c)}.nav-menu-item.svelte-1yvqyhe{text-decoration:none;font-weight:400;padding:10px 20px;color:inherit;transition-duration:250ms;display:flex;align-items:center;border-bottom:3px solid transparent}.nav-menu-item-active.svelte-1yvqyhe{border-bottom-color:var(--extra-c)}.nav-menu-item-label.svelte-1yvqyhe{margin-left:10px}@media(max-width: 950px){.nav-menu-item-label.svelte-1yvqyhe{display:none}}.nav-menu-item.svelte-1yvqyhe:hover{background-color:var(--secondary-c)}",
	map: null
};

const NavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, value => $page = value);

	const NavBar = {
		home: "Home",
		publications: "Publications",
		awards: "Awards",
		teaching: "Teaching",
		service: "Service",
		resume: "CV",
		skills: "Skills"
	};

	let currentRoute = "/";

	const items = [
		{
			title: NavBar.home,
			to: "/",
			icon: Icons.Home
		},
		{
			title: NavBar.publications,
			to: "/#publications-anchor",
			icon: Icons.Academic
		},
		{
			title: NavBar.awards,
			to: "/#awards-anchor",
			icon: Icons.Skills
		},
		{
			title: NavBar.teaching,
			to: "/#teaching-anchor",
			icon: Icons.Teaching
		},
		{
			title: NavBar.service,
			to: "/#service-anchor",
			icon: Icons.Service
		}
	]; // { title: NavBar.resume, to: '/warchol_cv.pdf', icon: Icons.Resume }

	$$result.css.add(css$1);

	{
		{
			if ($page) {
				currentRoute = $page.url.pathname;
			}
		}
	}

	$$unsubscribe_page();

	return `<div class="nav-menu svelte-1yvqyhe"><nav class="container svelte-1yvqyhe">${each(items, item => {
		return `<a${add_attribute("href", `${base}${item.to}`, 0)} class="${[
			"nav-menu-item svelte-1yvqyhe",
			currentRoute === item.to ? "nav-menu-item-active" : ""
		].join(' ').trim()}">${validate_component(Icon, "Icon").$$render($$result, { icon: item.icon, size: "18px" }, {}, {})}
		  <span class="nav-menu-item-label svelte-1yvqyhe">${escape(item.title)}</span>
		</a>`;
	})}</nav>
  </div>`;
});

const index = '';

const _layout_svelte_svelte_type_style_lang = '';

/* src/routes/+layout.svelte generated by Svelte v3.59.1 */

const css = {
	code: ".footer.svelte-d1yjay{position:fixed;left:0;bottom:0;width:100%;background-color:rgb(0, 0, 0);color:white;text-align:center}.color-gradient.svelte-d1yjay{background-image:linear-gradient(-225deg, #66c2a5 0%, #fc8d62 29%, #8da0cb 67%, #e78ac3 100%);background-size:200% auto;color:#fff;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:svelte-d1yjay-textclip 5s linear infinite;display:inline-block}@keyframes svelte-d1yjay-textclip{to{background-position:200% center}}.content.svelte-d1yjay{display:flex;flex-direction:column;flex:1;padding:10px 0px}.container.svelte-d1yjay{max-width:1200px;min-width:1200px;margin:0px auto}@media(max-width: 1350px){.container.svelte-d1yjay{max-width:1000px;min-width:1000px}}@media(max-width: 1075px){.container.svelte-d1yjay{max-width:-webkit-fill-available;min-width:-webkit-fill-available;max-width:-moz-available;min-width:-moz-available}}@media(max-width: 950px){.content.svelte-d1yjay{padding-left:15px;padding-right:15px}}@media(max-width: 750px){.content.svelte-d1yjay{padding-left:10px;padding-right:10px}}body{margin:0px;background-color:var(--primary-c);color:var(--primary-text-c);font-family:var(--text-f);display:flex;flex-direction:column;letter-spacing:1px;min-height:100vh}p{margin:0px}h1, h2, h3, h4, h5, h6{margin:5px 0px}",
	map: null
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);

	return `${validate_component(NavMenu, "NavMenu").$$render($$result, {}, {}, {})}

<div class="content container svelte-d1yjay">${slots.default ? slots.default({}) : ``}</div>
<div class="footer svelte-d1yjay"><h3 class="color-gradient svelte-d1yjay">© 2023 Salma Abdel Magid</h3>
</div>`;
});

export { Layout as default };
