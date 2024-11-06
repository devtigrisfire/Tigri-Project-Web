import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CuHTeFs0.mjs';
import { $ as $$Heropagetitle } from '../chunks/heropagetitle_DN9q-62X.mjs';
import { f as fetchContentfulData } from '../chunks/contentful_5aJ_IuiX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tigrisfire.com/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const entries = await fetchContentfulData();
  const posts = entries.items.map((item) => {
    const { title, slug, description, date, image } = item.fields;
    return {
      title,
      slug,
      description,
      date: new Date(date).toLocaleDateString(),
      imageUrl: image ? image.fields.file.url : null
    };
  });
  const {
    pagetitle = "Blog"
  } = Astro2.props;
  const titlemeta = "Blog Tigrisfire | Informasi & Tips Proteksi Kebakaran Terbaru";
  const descriptionmeta = "Temukan informasi terbaru seputar proteksi kebakaran di Blog Tigrisfire. Dapatkan tips, panduan, dan update tentang perangkat pemadam otomatis, fire sprinkler, dan sistem keselamatan kebakaran untuk bisnis Anda.";
  const keywordsmeta = "blog proteksi kebakaran, tips keamanan kebakaran, Tigrisfire, sistem pemadam kebakaran, fire sprinkler, fire extinguisher otomatis, keselamatan kebakaran industri, update kebakaran terbaru, solusi kebakaran";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta, "data-astro-cid-fjqfnjxi": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle, "data-astro-cid-fjqfnjxi": true })} ${maybeRenderHead()}<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" data-astro-cid-fjqfnjxi> <div class="grid gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full" data-astro-cid-fjqfnjxi> ${posts.map((post) => renderTemplate`<div class="overflow-hidden transition-shadow duration-500 bg-white rounded-3xl shadow-lg hover:shadow-gradient transform hover:-translate-y-2 hover:scale-105 p-5 group" data-astro-cid-fjqfnjxi> <a${addAttribute(`/posts/${post.slug}/`, "href")} aria-label="Article" data-astro-cid-fjqfnjxi> <img${addAttribute(post.imageUrl, "src")} class="object-cover w-full aspect-video rounded-t-lg transition-opacity duration-300 group-hover:opacity-90"${addAttribute(post.title, "alt")} data-astro-cid-fjqfnjxi> </a> <div class="py-5" data-astro-cid-fjqfnjxi> <p class="mb-2 text-xs font-semibold text-gray-600 uppercase" data-astro-cid-fjqfnjxi> ${post.date} </p> <a${addAttribute(`/posts/${post.slug}/`, "href")} aria-label="Article" class="inline-block mb-3 text-black transition-colors duration-300 hover:text-blue-800" data-astro-cid-fjqfnjxi> <p class="text-2xl font-bold leading-5" data-astro-cid-fjqfnjxi>${post.title}</p> </a> <p class="mb-4 text-gray-700 line-clamp-3" data-astro-cid-fjqfnjxi>${post.description}</p> </div> </div>`)} </div> </div>  ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/posts/index.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
