import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css                   */const pico_min = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
