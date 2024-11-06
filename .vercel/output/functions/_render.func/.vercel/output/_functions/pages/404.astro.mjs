import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CuHTeFs0.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - Page Not Found", "description": "Halaman tidak ditemukan", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-screen text-center bg-black" data-astro-cid-zetdm5md> <h1 class="text-9xl font-extrabold relative glitch mb-4" data-text="404" data-astro-cid-zetdm5md>
404
</h1> <p class="text-2xl font-semibold text-white mb-8" data-astro-cid-zetdm5md>ERROR! PAGE NOT FOUND</p> <p class="text-2xl font-semibold text-white mb-8" data-astro-cid-zetdm5md>Halaman Tidak Ditemukan, Kamu Tersesat, Klik Tombol Dibawah Aja Kalo Mau Balik</p> <!-- Tombol kembali ke homepage --> <a href="/" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform" data-astro-cid-zetdm5md>
Go back to Homepage
</a> </div>  ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/404.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
