import { a as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, s as spreadAttributes, u as unescapeHTML, b as renderComponent, m as maybeRenderHead, f as renderSlot, g as renderHead } from './astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { $ as $$Image } from './_astro_assets_CmMpI-dN.mjs';

const $$Astro$9 = createAstro("https://tigrisfire.com/");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://tigrisfire.com/");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://tigrisfire.com/");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://tigrisfire.com/");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://tigrisfire.com/");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://tigrisfire.com/");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://tigrisfire.com/");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://tigrisfire.com/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo/src/SEO.astro", void 0);

const favicon = new Proxy({"src":"/_astro/favicon.RkR0_lTO.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/favicon.png";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white border-gray-20 z-50"> <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> ${renderComponent($$result, "Image", $$Image, { "src": favicon, "alt": "Tigris Logo", "width": 90, "height": 90, "class": "h-20 w-20", "loading": "lazy" })} </a> <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse"> <a href="https://wa.me/6281382529368?text=Hallo%20Tigrisfire,%20Saya%20Mau%20Konsultasinya" class="text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-offset-2">
Buat Penawaran
</a> <!-- Hamburger Menu Button for Mobile --> <button id="menu-toggle" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mega-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <!-- Main Menu --> <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"> <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse"> <li> <a href="/" class="block text-black py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Beranda</a> </li> <li> <a href="/sertifikasi" class="block text-black py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Sertifikasi</a> </li> <li class="relative group"> <div id="dropdownTentangKamiButton" class="dropdown-trigger flex items-center justify-between w-full py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
Tentang
<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg> </div> <!-- Dropdown menu --> <div id="dropdownTentangKami" class="dropdown-menu z-50 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"> <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownTentangKamiButton"> <li><a href="/tentangkami" class="block px-4 py-2 hover:bg-gray-100">Tentang Kami</a></li> <li><a href="/posts" class="block px-4 py-2 hover:bg-gray-100">Blog</a></li> </ul> </div> </li> <!-- Layanan Dropdown --> <li class="relative group"> <div id="dropdownLayananButton" class="dropdown-trigger flex items-center justify-between w-full py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
Layanan
<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg> </div> <!-- Dropdown menu --> <div id="dropdownLayanan" class="dropdown-menu z-50 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"> <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLayananButton"> <li><a href="/layanankami" class="block px-4 py-2 hover:bg-gray-100">Layanan Kami</a></li> <li><a href="/maintenance" class="block px-4 py-2 hover:bg-gray-100">Maintenance</a></li> <li><a href="/inspeksiapargratis" class="block px-4 py-2 hover:bg-gray-100">Inspeksi APAR Gratis</a></li> <li><a href="/refil" class="block px-4 py-2 hover:bg-gray-100">On-site Refill</a></li> <li><a href="/firetraining" class="block px-4 py-2 hover:bg-gray-100">Fire Training</a></li> </ul> </div> </li> <!-- Produk Dropdown --> <li class="relative group"> <div id="dropdownProdukButton" class="dropdown-trigger flex items-center justify-between w-full py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
Produk
<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg> </div> <!-- Dropdown menu --> <div id="dropdownProduk" class="dropdown-menu z-50 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"> <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownProdukButton"> <li><a href="/produkkami" class="block px-4 py-2 hover:bg-gray-100">Produk Kami</a></li> <li class="relative"> <a href="/robotfire" class="block px-4 py-2 hover:bg-gray-100">Robot Firefighting</a> <span class="absolute top-0 right-0 mt-1 mr-2 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span> </li> <li class="relative"> <a href="/cctv" class="block px-4 py-2 hover:bg-gray-100">Camera Fire Detection AI</a> <span class="absolute top-0 right-0 mt-1 mr-2 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span> </li> <li><a href="/produk/firealarm" class="block px-4 py-2 hover:bg-gray-100">Fire Alarm</a></li> <li><a href="/produk/firepump" class="block px-4 py-2 hover:bg-gray-100">Fire Pump</a></li> <li><a href="/produk/apar" class="block px-4 py-2 hover:bg-gray-100">Alat Pemadam Api</a></li> <li><a href="/produk/firesystems" class="block px-4 py-2 hover:bg-gray-100">Fire Systems</a></li> <li><a href="/produk/firesprinkler" class="block px-4 py-2 hover:bg-gray-100">Fire Sprinkler</a></li> </ul> </div> </li> <li><a href="/portofolio" class="block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 text-black">Portofolio</a></li> <li><a href="/kontak" class="block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 text-black">Hubungi Kami</a></li> </ul> </div> </div>  </nav>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32"> <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"> <div class="grid row-gap-10 mb-8 lg:grid-cols-3"> <div class="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-4"> <div> <p class="font-medium tracking-wide text-white">Kantor Pusat</p> <ul class="mt-2 space-y-2 mr-5"> <li> <p class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">PT. Tigris Berkat Sejati<br>
Jl. Tigris No 7.8.9 Kp Pintu, Babelan Kota, Kec. Babelan, Kabupaten Bekasi, Jawa Barat, Indonesia</p> </li> </ul> </div> <div> <p class="font-medium tracking-wide text-white">Workshop</p> <ul class="mt-2 space-y-2 mr-5"> <li> <p class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200"><br>
Jl. Perjuangan No.KM 07, Kebalen, Kec. Babelan, Bekasi Utara, Jawa Barat 17610</p> </li> </ul> </div> <div> <p class="font-medium tracking-wide text-white">Layanan</p> <ul class="mt-2 space-y-2"> <li> <a href="/maintenance" class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">Maintenance</a> </li> <li> <a href="/inspeksiapargratis" class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">Inspeksi APAR Gratis</a> </li> <li> <a href="/refil" class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">On-site Refill</a> </li> <li> <a href="/firetraining" class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">Fire Training</a> </li> </ul> </div> <div> <p class="font-medium tracking-wide text-white">Perusahaan</p> <ul class="mt-2 space-y-2 mb-5"> <li> <a href="/posts" class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">Blog</a> </li> <li> <a href="/portofolio" class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">Portofolio</a> </li> <li> <a href="/produkkami" class="text-gray-50 transition-colors duration-300 hover:text-deep-purple-accent-200">Produk</a> </li> </ul> </div> </div> </div> <div class="flex flex-col justify-between pt-5 pb-10 border-t border-gray-200 sm:flex-row"> <p class="text-sm text-gray-50">
© Copyright 2024 Tigrisfire. All rights reserved.
</p> <div class="flex items-center mt-4 space-x-4 sm:mt-0"> <!-- IG --> <a href="https://www.instagram.com/tigrisfire" class="text-gray-50 transition-colors duration-300 hover:text-teal-accent-400" aria-label="Instagram"> <svg viewBox="0 0 30 30" fill="currentColor" class="h-6"> <circle cx="15" cy="15" r="4"></circle> <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path> </svg> </a> <!-- FB --> <a href="https://web.facebook.com/" class="text-gray-50 transition-colors duration-300 hover:text-teal-accent-400" aria-label="Facebook"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-5"> <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path> </svg> </a> <!-- YouTube --> <a href="https://www.youtube.com/c/AlatPemadamInovatif?app=desktop" target="_blank" class="text-gray-50 transition-colors duration-300 hover:text-teal-accent-400" aria-label="YouTube"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-6"> <path d="M23.498 6.186a2.993 2.993 0 0 0-2.11-2.115C19.678 3.426 12 3.426 12 3.426s-7.678 0-9.389.645A2.993 2.993 0 0 0 .501 6.186 31.357 31.357 0 0 0 0 11.993c-.003 1.959.178 3.912.501 5.807a2.993 2.993 0 0 0 2.11 2.115c1.711.644 9.389.644 9.389.644s7.678 0 9.389-.644a2.993 2.993 0 0 0 2.11-2.115c.323-1.895.504-3.848.501-5.807a31.357 31.357 0 0 0-.501-5.807zM9.751 15.568V8.42l6.208 3.574-6.208 3.574z"></path> </svg> </a> <!-- LinkedIn --> <a href="https://www.linkedin.com/" target="_blank" class="text-gray-50 transition-colors duration-300 hover:text-teal-accent-400" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-6"> <path d="M19.625 3H4.373A1.373 1.373 0 0 0 3 4.375v15.25A1.373 1.373 0 0 0 4.375 21h15.25A1.373 1.373 0 0 0 21 19.625V4.375A1.373 1.373 0 0 0 19.625 3zm-11.25 16.25h-2.5v-8.75h2.5v8.75zm-1.25-10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm12.5 10h-2.5v-4.375c0-1.032-.018-2.355-1.437-2.355-1.438 0-1.656 1.125-1.656 2.281v4.448h-2.5v-8.75h2.406v1.188h.033a2.64 2.64 0 0 1 2.375-1.312c2.531 0 3 1.665 3 3.833v5.042z"></path> </svg> </a> <!-- Twitter (X) --> <a href="https://twitter.com/" target="_blank" class="text-gray-50 transition-colors duration-300 hover:text-teal-accent-400" aria-label="Twitter"> <svg viewBox="0 0 24 24" fill="currentColor" class="h-6"> <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.959-2.178-1.558-3.594-1.558-2.72 0-4.926 2.206-4.926 4.924 0 .39.045.765.127 1.125-4.094-.205-7.725-2.165-10.152-5.144-.425.723-.666 1.562-.666 2.457 0 1.696.863 3.195 2.177 4.075-.802-.026-1.56-.246-2.22-.615v.061c0 2.367 1.684 4.342 3.918 4.791-.41.111-.844.171-1.292.171-.315 0-.623-.03-.924-.086.624 1.956 2.434 3.379 4.576 3.419-1.68 1.316-3.809 2.101-6.102 2.101-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.213 7.548 2.213 9.054 0 14.009-7.5 14.009-14.006 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z"></path> </svg> </a> </div> </div> </div> </div> </footer>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/Footer.astro", void 0);

const waImage = new Proxy({"src":"/_astro/wa.tmGeznPk.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/wa.webp";
							}
							
							return target[name];
						}
					});

const $$Wangambang = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://wa.me/6281382529368?text=Hallo%20Tigrisfire,%20Saya%20Mau%20Konsultasinya" target="_blank" class="floating-whatsapp" aria-label="WhatsApp Chat" data-astro-cid-zcpozoqa> ${renderComponent($$result, "Image", $$Image, { "src": waImage, "alt": "Chat WhatsApp", "width": 90, "height": 90, "class": "whatsapp-icon", "loading": "lazy", "data-astro-cid-zcpozoqa": true })} </a> `;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/wangambang.astro", void 0);

function JsonLd(item, space) {
  return JSON.stringify(item, safeJsonLdReplacer, space);
}
const ESCAPE_ENTITIES = Object.freeze({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
});
const ESCAPE_REGEX = new RegExp(
  `[${Object.keys(ESCAPE_ENTITIES).join("")}]`,
  "g"
);
const ESCAPE_REPLACER = (t) => ESCAPE_ENTITIES[t];
const safeJsonLdReplacer = /* @__PURE__ */ (() => {
  return (_, value) => {
    switch (typeof value) {
      case "object":
        if (value === null) {
          return void 0;
        }
        return value;
      case "number":
      case "boolean":
      case "bigint":
        return value;
      case "string":
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
      default: {
        return void 0;
      }
    }
  };
})();

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://tigrisfire.com/");
const $$Schema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Schema;
  const { item, space } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JsonLd(item, space)));
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-seo-schema/dist/Schema.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tigrisfire.com/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    titlemeta = "Layanan Proteksi Kebakaran Terpercaya | Alat Pemadam & Konsultasi Tigrisfire",
    descriptionmeta = "Tigrisfire menyediakan layanan proteksi kebakaran lengkap: refill APAR, konsultasi ahli, dan perlindungan bisnis Anda. Cegah risiko kebakaran, hubungi kami hari ini!",
    imagemeta = "/favicon.png",
    // Set default image jika tidak ada gambar
    keywordsmeta = "alat pemadam,tigris,isi ulang apar,maintenance apar,kebakaran,sistem kebakaran,alat pemadam kebakaran, robot pemadam, air jet pemadam"
    // Default keywords jika tidak ada keywords dinamis
  } = Astro2.props;
  const siteURL = new URL("https://tigrisfire.com/");
  const imageURL = imagemeta.startsWith("http") ? imagemeta : new URL(imagemeta, siteURL);
  const twitterHandle = "@tigrisfire";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:image"', '><meta name="twitter:image"', ">", "<!-- SEO optimization menggunakan astro-seo -->", '<link rel="icon" href="/favicon.ico" type="image/x-icon"><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"><link rel="icon" href="/favicon.png" type="image/png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;600;700&display=swap" rel="stylesheet"><!--Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-1FSWMWKMP9"><\/script><script type="text/partytown">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-1FSWMWKMP9");\n    <\/script>', '</head> <body class="font-nunito"> <!-- Navigasi --> ', ' <!-- Slot konten utama --> <main class="mx-auto scroll-smooth"> ', ' </main> <!-- Bagian CTA --> <div class="relative bg-gray-100 mt-52"> <div class="absolute w-full left-0 right-0 transform -translate-y-1/2 z-30 p-2"> <div class="bg-white shadow-lg rounded-lg p-4 py-5 md:p-10 flex flex-col md:flex-row justify-between items-center mx-auto md:max-w-7xl space-y-4 md:space-y-0 hover:shadow-2xl transition-shadow duration-500 ease-in-out"> <div class="text-center md:text-left"> <h2 class="text-xl md:text-2xl font-bold text-gray-800 leading-snug hover:text-blue-600 transition-colors duration-500 ease-in-out">\nBisnis Aman, Hidup Tenang!\n</h2> <p class="text-gray-500 mt-2 text-sm md:text-base">\nKebakaran bisa terjadi kapan saja \u2013 jangan ambil risiko! <br>\nDengan Tigrisfire, perlindungan bisnis Anda ada di tangan para ahli.\n</p> </div> <a href="https://wa.me/6281382529368?text=Hallo%20Tigrisfire,%20Saya%20Mau%20Konsultasinya" class="relative text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-offset-2">\nKonsultasi Sekarang\n</a> </div> </div> </div> <!-- Footer --> ', " ", " </body></html>"])), addAttribute(imageURL.href, "content"), addAttribute(imageURL.href, "content"), renderComponent($$result, "Schema", $$Schema, { "item": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tigrisfire - Penyedia Segala Alat Pemadam Kebakaran",
    description: "Layanan proteksi kebakaran yang andal dan berpengalaman di bidang alat pemadam. Tigrisfire menyediakan konsultasi dan solusi untuk perlindungan bisnis dari risiko kebakaran.",
    url: "https://tigrisfire.com",
    telephone: "+62-813-8252-9368",
    image: "https://tigrisfire.com/favicon.png",
    logo: "https://tigrisfire.com/favicon.png",
    priceRange: "IDR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Tigris No 7.8.9 Kp Pintu, Babelan Kota",
      addressLocality: "Bekasi",
      addressRegion: "Jawa Barat",
      postalCode: "17510",
      addressCountry: "ID"
    },
    sameAs: [
      "https://www.facebook.com/groups/tigrisfire/",
      "https://www.instagram.com/tigrisfire"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-813-8252-9368",
      contactType: "Customer Service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"]
    }
  } }), renderComponent($$result, "SEO", $$SEO, { "title": titlemeta, "description": descriptionmeta, "canonical": siteURL.href, "openGraph": {
    basic: {
      title: titlemeta,
      type: "website",
      image: imageURL.href,
      // Gunakan URL gambar yang telah diproses
      url: siteURL.href
    },
    image: {
      url: imageURL.href,
      // URL gambar default atau custom
      alt: "Tigrisfire OpenGraph Image",
      // Alt text gambar
      width: 1200,
      // Lebar gambar OG
      height: 630
      // Tinggi gambar OG
    }
  }, "twitter": {
    card: "summary_large_image",
    // Menggunakan gambar besar untuk Twitter Card
    creator: twitterHandle,
    image: imageURL.href
    // URL gambar default atau custom
  }, "extend": {
    // Menambahkan favicon
    link: [{ rel: "icon", href: "/favicon.png", type: "image/png" }],
    // Menambahkan meta tambahan
    meta: [
      { name: "author", content: "Tigrisfire" },
      { name: "keywords", content: keywordsmeta },
      // Menggunakan keywords dinamis
      { name: "robots", content: "index, follow" },
      // Memberikan izin mesin pencari untuk mengindeks halaman
      { name: "twitter:site", content: twitterHandle },
      { name: "twitter:image", content: new URL(imageURL, siteURL).href }
      // Menggunakan URL objek yang valid untuk Twitter
    ]
  } }), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Wangambang", $$Wangambang, {}));
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
