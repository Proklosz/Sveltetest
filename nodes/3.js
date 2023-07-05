

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reg/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ed5f9cc9.js","_app/immutable/chunks/scheduler.32b2563f.js","_app/immutable/chunks/index.71ef09ac.js","_app/immutable/chunks/index.4ddb0567.js"];
export const stylesheets = ["_app/immutable/assets/3.2af7e650.css","_app/immutable/assets/styles.ff1f2ac8.css"];
export const fonts = [];
