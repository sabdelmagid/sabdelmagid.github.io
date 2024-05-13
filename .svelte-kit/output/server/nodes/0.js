import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.9b87a838.js","_app/immutable/chunks/index.474b34d0.js","_app/immutable/chunks/Icon.89d7540f.js","_app/immutable/chunks/stores.d641e151.js","_app/immutable/chunks/singletons.637728aa.js"];
export const stylesheets = ["_app/immutable/assets/0.cddb674f.css","_app/immutable/assets/Icon.49f27fa9.css"];
export const fonts = [];
