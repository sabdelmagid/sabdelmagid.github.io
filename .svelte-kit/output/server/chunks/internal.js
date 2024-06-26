import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from './index.js';
import './paths.js';

/** @type {Record<string, string>} */

/** @type {Record<string, string>} */
let public_env = {};

/** @type {(environment: Record<string, string>) => void} */
function set_private_env(environment) {
}

/** @type {(environment: Record<string, string>) => void} */
function set_public_env(environment) {
	public_env = environment;
}

function afterUpdate() { }

function set_building() {
}

/* .svelte-kit/generated/root.svelte generated by Svelte v3.59.1 */

const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { page } = $$props;
	let { constructors } = $$props;
	let { components = [] } = $$props;
	let { form } = $$props;
	let { data_0 = null } = $$props;
	let { data_1 = null } = $$props;

	{
		setContext('__svelte__', stores);
	}

	afterUpdate(stores.page.notify);

	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
	if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
	if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
	if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
	if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
	if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		{
			stores.page.set(page);
		}

		$$rendered = `


${constructors[1]
		? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
				$$result,
				{ data: data_0, this: components[0] },
				{
					this: $$value => {
						components[0] = $$value;
						$$settled = false;
					}
				},
				{
					default: () => {
						return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
							$$result,
							{ data: data_1, form, this: components[1] },
							{
								this: $$value => {
									components[1] = $$value;
									$$settled = false;
								}
							},
							{}
						)}`;
					}
				}
			)}`
		: `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
				$$result,
				{ data: data_0, form, this: components[0] },
				{
					this: $$value => {
						components[0] = $$value;
						$$settled = false;
					}
				},
				{}
			)}`}

${``}`;
	} while (!$$settled);

	return $$rendered;
});

const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root: Root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"description\" content=\"PhD Candiate in Computer Science at Harvard University. Advised by Hanspeter Pfister\">\n    <meta name=\"author\" content=\"Salma Abdel Magid\">\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\" />\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\" />\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\" />\n    <link rel=\"manifest\" href=\"/site.webmanifest\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap\"\n      rel=\"stylesheet\"\n    />\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1lc9ud1"
};

function get_hooks() {
	return {};
}

export { set_building as a, set_private_env as b, get_hooks as g, options as o, public_env as p, set_public_env as s };
