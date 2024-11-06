import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CuHTeFs0.mjs';
import { $ as $$Klikporto } from '../../chunks/klikporto_DZDu2lcV.mjs';
import { $ as $$Heropagetitle } from '../../chunks/heropagetitle_DN9q-62X.mjs';
export { renderers } from '../../renderers.mjs';

const $$Firepump = createComponent(($$result, $$props, $$slots) => {
  const pagetitle = "Our Fire Pump";
  const titlemeta = "Fire Pump System Terbaik di Indonesia | Pompa Kebakaran Efisien - Tigrisfire";
  const descriptionmeta = "Tigrisfire menyediakan fire pump system berkualitas tinggi untuk proteksi kebakaran optimal. Pompa kebakaran efisien dan andal untuk memastikan keselamatan properti Anda. Hubungi kami untuk solusi lengkap!";
  const keywordsmeta = "fire pump system, pompa kebakaran, Tigrisfire Indonesia, fire pump berkualitas, sistem proteksi kebakaran, pemasangan fire pump, pompa pemadam kebakaran, keamanan kebakaran, solusi fire pump";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle })}  ${maybeRenderHead()}<main class="py-16" id="products"> <div class="container mx-auto"> <section class="grid grid-cols-1 md:grid-cols-1 gap-10 md:px-20 px-2"> <!-- Electric Fire Pump --> <div class="bg-white rounded-lg shadow-lg p-6 flex items-center"> <img src="/pelatihan training/TIGRIS-ENGINE-PRODUK.jpg" alt="Electric Fire Pump" class="w-28 md:w-60 h-auto rounded-lg mr-6"> <div> <h3 class="text-3xl font-bold text-blue-600 mb-3">
Electric Fire Pump
</h3> <p class="text-gray-700 mb-4">
The primary pump in a fire hydrant installation, poweblue by
              electricity to ensure quick response during emergencies.
</p> <a href="/tigrisproduct/tigris-engine" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition">View Product</a> </div> </div> <!-- Diesel Fire Pump --> <div class="bg-white rounded-lg shadow-lg p-6 flex items-center"> <img src="/pelatihan training/TEFSC-SERIES-TIGRIS-1.jpg" alt="Diesel Fire Pump" class="w-28 md:w-60 h-auto rounded-lg mr-6"> <div> <h3 class="text-3xl font-bold text-blue-600 mb-3">
Diesel Fire Pump
</h3> <p class="text-gray-700 mb-4">
Poweblue by diesel, this pump serves as a backup for the electric
              pump, ensuring fire safety even during power outages.
</p> <a href="/tigrisproduct/tefsc-series-2" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition">View Product</a> </div> </div> <!-- Jockey Fire Pump --> <div class="bg-white rounded-lg shadow-lg p-6 flex items-center"> <img src="/pelatihan training/TEFJP-SERIES-tigris.webp" alt="Jockey Fire Pump" class="w-28 md:w-60 h-auto rounded-lg mr-6"> <div> <h3 class="text-3xl font-bold text-blue-600 mb-3">
Jockey Fire Pump
</h3> <p class="text-gray-700 mb-4">
A pump designed to maintain water pressure in the fire hydrant
              system to avoid water hammer.
</p> <a href="/tigrisproduct/pompa-jockey" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition">View Product</a> </div> </div> </section> </div> </main> ${renderComponent($$result2, "Klikporto", $$Klikporto, {})} ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/produk/firepump.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/produk/firepump.astro";
const $$url = "/produk/firepump";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Firepump,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
