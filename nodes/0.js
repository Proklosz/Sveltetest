

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5f868219.js","_app/immutable/chunks/scheduler.32b2563f.js","_app/immutable/chunks/index.71ef09ac.js"];
export const stylesheets = ["_app/immutable/assets/0.0c2149f2.css","_app/immutable/assets/styles.ff1f2ac8.css"];
export const fonts = [];
