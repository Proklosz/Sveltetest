

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.66a1c647.js","_app/immutable/chunks/scheduler.32b2563f.js","_app/immutable/chunks/index.71ef09ac.js","_app/immutable/chunks/singletons.669e9de4.js","_app/immutable/chunks/index.4ddb0567.js"];
export const stylesheets = [];
export const fonts = [];
