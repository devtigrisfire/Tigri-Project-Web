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
    content_type: "produkcctv"
    // Sesuaikan dengan content_type produk di Contentful
  });
  const produkcctv = entries.items.map((item) => {
    const { title, slug, image, content, spesifikasi } = item.fields;
    const imageUrl = Array.isArray(image) && image.length > 0 && image[0]?.fields?.file ? image[0].fields.file.url : "/default-product-image.png";
    return {
      title,
      slug,
      imageUrl,
      // Menggunakan URL gambar pertama dari array
      content,
      spesifikasi
    };
  });
  const { pagetitle = "Automatic Tracking and Aiming Jet Fire Extinguishing" } = Astro2.props;
  const titlemeta = "Automatic Tracking and Aiming Jet Fire Extinguishing | Pemadam Kebakaran Otomatis - Tigrisfire";
  const descriptionmeta = "Tigrisfire menghadirkan Automatic Tracking and Aiming Jet Fire Extinguishing untuk proteksi kebakaran canggih dan otomatis. Solusi ideal bagi industri dengan sistem pelacakan api otomatis yang responsif dan aman. Hubungi kami untuk informasi lengkap!";
  const keywordsmeta = "automatic tracking fire extinguisher, aiming jet fire extinguishing, sistem pemadam kebakaran otomatis, pelacakan api otomatis, fire suppression device, pemadam kebakaran canggih, proteksi kebakaran industri, solusi kebakaran otomatis, Tigrisfire Indonesia";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle })} ${maybeRenderHead()}<div class="container mx-auto pt-20 md:py-12 px-4 sm:px-6 lg:px-8"> <!-- Grid Produk --> <div class="flex flex-wrap items-center justify-center"> ${produkcctv.map((produkcctv2) => renderTemplate`<div class="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg"> <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;"> <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"></rect> <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"></rect> </svg> <div class="relative pt-10 px-10 flex items-center justify-center"> <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div> <a${addAttribute(`/cctv/${produkcctv2.slug}`, "href")}> ${" "} <img class="flex w-80 object-cover aspect-square rounded-md"${addAttribute(produkcctv2.imageUrl, "src")}${addAttribute(produkcctv2.title, "alt")}> </a> </div> <div class="relative text-white px-6 pb-6 mt-6"> <span class="block opacity-75 -mb-1">Produk Kami</span> <div class="flex justify-between"> <span class="block font-semibold text-xl"> ${produkcctv2.title} </span> </div> <a${addAttribute(`/cctv/${produkcctv2.slug}`, "href")} class="block mt-4 text-sm bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-100 transition">
Lihat Detail
</a> </div> </div>`)} </div> </div> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/cctv/index.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/cctv/index.astro";
const $$url = "/cctv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
