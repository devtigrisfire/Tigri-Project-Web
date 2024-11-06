import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-">Saya</div>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/test.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Test,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
