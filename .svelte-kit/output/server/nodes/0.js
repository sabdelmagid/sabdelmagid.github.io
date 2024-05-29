import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.e1b79017.js","_app/immutable/chunks/index.474b34d0.js","_app/immutable/chunks/Icon.89d7540f.js","_app/immutable/chunks/stores.45718ed8.js","_app/immutable/chunks/singletons.c28e837b.js"];
export const stylesheets = ["_app/immutable/assets/0.f518232b.css","_app/immutable/assets/Icon.49f27fa9.css"];
export const fonts = [];
