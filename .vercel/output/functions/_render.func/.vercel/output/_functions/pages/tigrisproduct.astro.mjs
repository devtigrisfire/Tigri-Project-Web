import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CuHTeFs0.mjs';
import { c as contentfulClient } from '../chunks/contentful_DXaELXkG.mjs';
import { $ as $$Heropagetitle } from '../chunks/heropagetitle_DN9q-62X.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tigrisfire.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const entries = await contentfulClient.getEntries({
    content_type: "producttigris"
    // Sesuaikan dengan content_type produk di Contentful
  });
  const producttigris = entries.items.map((item) => {
    const { title, slug, price, image, content, spesifikasi } = item.fields;
    const imageUrl = Array.isArray(image) && image.length > 0 && image[0]?.fields?.file ? image[0].fields.file.url : "/default-producttigris-image.png";
    return {
      title,
      slug,
      price,
      imageUrl,
      // Menggunakan URL gambar pertama dari array
      content,
      spesifikasi
    };
  });
  const titlemeta = "Produk Proteksi Kebakaran Terbaik | Alat Pemadam & Fire Suppression - Tigrisfire";
  const descriptionmeta = "Temukan produk proteksi kebakaran terbaik di Tigrisfire, mulai dari alat pemadam, fire suppression system, hingga peralatan deteksi kebakaran. Pilih solusi keamanan yang sesuai untuk bisnis Anda!";
  const keywordsmeta = "produk proteksi kebakaran, alat pemadam api, fire suppression system, detektor kebakaran, fire sprinkler, Tigrisfire Indonesia, perlengkapan pemadam kebakaran, produk keselamatan kebakaran";
  const { pagetitle = "TIGRIS PRODUCT" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle })} ${maybeRenderHead()}<div class="container mx-auto pt-20 md:py-12 px-4 sm:px-6 lg:px-8"> <!-- Grid Produk --> <div class="flex flex-wrap items-center justify-center"> ${producttigris.map((producttigris2) => renderTemplate`<div class="flex-shrink-0 m-6 relative overflow-hidden bg-gray-50 rounded-lg max-w-xs shadow-lg"> <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;"> <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="gray"></rect> <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="gray"></rect> </svg> <div class="relative pt-10 px-10 flex items-center justify-center"> <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(circle, rgba(0, 0, 0, 0.5), transparent 70%);
transform: translate(-50%, -50%) scale(2);
opacity: 0.4;
position: absolute;
top: 50%;
left: 50%;
"></div> <a${addAttribute(`/tigrisproduct/${producttigris2.slug}`, "href")}> ${" "} <img class="flex w-80 object-cover aspect-square"${addAttribute(producttigris2.imageUrl, "src")}${addAttribute(producttigris2.title, "alt")}> </a> </div> <div class="relative text-black px-6 pb-6 mt-6"> <span class="block opacity-75 -mb-1">Produk Kami</span> <div class="flex justify-between"> <span class="block font-semibold text-xl"> ${producttigris2.title} </span> </div> <a${addAttribute(`/tigrisproduct/${producttigris2.slug}`, "href")} class="block mt-4 text-sm bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-400 transition">
Lihat Detail
</a> </div> </div>`)} </div> </div> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/tigrisproduct/index.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/tigrisproduct/index.astro";
const $$url = "/tigrisproduct";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
