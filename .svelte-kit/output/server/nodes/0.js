import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
<<<<<<< HEAD
export const imports = ["_app/immutable/nodes/0.77feb8b6.js","_app/immutable/chunks/index.474b34d0.js","_app/immutable/chunks/Icon.89d7540f.js","_app/immutable/chunks/stores.c0892cab.js","_app/immutable/chunks/singletons.cda15f71.js"];
export const stylesheets = ["_app/immutable/assets/0.cddb674f.css","_app/immutable/assets/Icon.49f27fa9.css"];
=======
export const imports = ["_app/immutable/nodes/0.74d6a2b8.js","_app/immutable/chunks/index.474b34d0.js","_app/immutable/chunks/Icon.89d7540f.js","_app/immutable/chunks/stores.37ef57bd.js","_app/immutable/chunks/singletons.d92992c8.js"];
export const stylesheets = ["_app/immutable/assets/0.ad134529.css","_app/immutable/assets/Icon.49f27fa9.css"];
>>>>>>> eb2c03b6ca69683262a23d531a0007c960870e26
export const fonts = [];
