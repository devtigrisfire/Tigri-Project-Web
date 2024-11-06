import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CuHTeFs0.mjs';
import { c as contentfulClient } from '../chunks/contentful_DXaELXkG.mjs';
import { $ as $$Heropagetitle } from '../chunks/heropagetitle_DN9q-62X.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const entries = await contentfulClient.getEntries({
    content_type: "proyekkami"
  });
  const projects = entries.items.map((item) => {
    const { title, image } = item.fields;
    return {
      title,
      imageUrl: image ? image["fields"]["file"]["url"] : null
    };
  });
  const colors = ["bg-blue-600", "bg-purple-600", "bg-green-600", "bg-red-600", "bg-yellow-600", "bg-indigo-600", "bg-teal-600", "bg-orange-600"];
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  const titlemeta = "Portofolio Proyek Proteksi Kebakaran | Keberhasilan Tigrisfire";
  const descriptionmeta = "Lihat portofolio proyek proteksi kebakaran Tigrisfire. Dari pemasangan APAR hingga sistem pemadam kebakaran lengkap, kami hadirkan keamanan terbaik untuk klien kami. Jelajahi proyek kami di sini!";
  const keywordsmeta = "perusahaan alat pemadam, refill APAR, jasa isi ulang alat pemadam, maintenance APAR profesional, alat pemadam kebakaran otomatis, sistem proteksi kebakaran, robot pemadam api, perawatan alat pemadam kebakaran, pemadam kebakaran air jet, instalasi proteksi kebakaran, layanan pemadam api berpengalaman, Tigrisfire Indonesia";
  const pagetitle = "Portofolio";
  return renderTemplate`<!-- Pastikan titlemeta dan descriptionmeta dikirim ke BaseLayout -->${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle })} ${maybeRenderHead()}<div class="container mx-auto py-16 px-0 md:px-20"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 p-5"> <!-- Looping Card --> ${projects.map((project) => renderTemplate`<div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300 h-full flex flex-col hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"> <!-- Gambar --> <img class="w-full object-cover transition-opacity duration-300 hover:opacity-75"${addAttribute(project.imageUrl, "src")}${addAttribute(project.title, "alt")}> <!-- Konten --> <div${addAttribute(`pt-6 px-6 pb-12 text-white flex-grow flex flex-col justify-end ${getRandomColor()}`, "class")}> <h3 class="text-lg font-semibold mb-2">${project.title}</h3> </div> </div>`)} </div> </div> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/portofolio/index.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/portofolio/index.astro";
const $$url = "/portofolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
