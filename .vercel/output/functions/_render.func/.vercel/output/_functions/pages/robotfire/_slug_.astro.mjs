import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as renderComponent, d as addAttribute } from '../../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CuHTeFs0.mjs';
import { c as contentfulClient } from '../../chunks/contentful_DXaELXkG.mjs';
import 'clsx';
import { $ as $$Image } from '../../chunks/_astro_assets_CmMpI-dN.mjs';
export { renderers } from '../../renderers.mjs';

const $$Buttonprodukrobot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Tombol Beli -->${maybeRenderHead()}<a href="https://wa.me/6281382529368?text=" class="whatsapp-button inline-flex items-center px-8 py-3 text-lg font-semibold text-white  bg-gradient-to-r from-blue-800 to-blue-600 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Pesan Produk Ini</a> `;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/buttonprodukrobot.astro", void 0);

const $$Astro = createAstro("https://tigrisfire.com/");
async function getStaticPaths() {
  const entries = await contentfulClient.getEntries({
    content_type: "product"
  });
  return entries.items.map((item) => ({
    params: { slug: item.fields.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entries = await contentfulClient.getEntries({
    content_type: "product",
    "fields.slug": slug
  });
  if (!entries.items.length) {
    throw new Error("Product not found");
  }
  const product = entries.items[0].fields;
  const galleryImages = Array.isArray(product.image) ? product.image : [product.image];
  const mainImageUrl = galleryImages[0]?.fields?.file?.url || "/favicon.png";
  const titlemeta = product.metatitle || "Robot Firefighting - Tigrisfire";
  const descriptionmeta = product.metadeskripsi || "Masa Depan Alat Pemadam Kebakaran";
  const keywordsmeta = product.metakeywords || "firefighting, robot, keamanan, Tigrisfire";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta, "imagemeta": mainImageUrl }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gray-100 py-12"> <div class="container mx-auto px-4 md:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"> <!-- Galeri Produk --> <div class="flex flex-col items-center md:p-28 md:pt-7"> <!-- Gambar Utama --> <div class="mb-4 w-full"> <img id="mainImage"${addAttribute(mainImageUrl, "src")}${addAttribute(product.title, "alt")} class="w-full h-auto rounded-lg shadow-lg"> </div> <!-- Thumbnail Galeri --> <div class="grid grid-cols-4 gap-4"> ${galleryImages.map((image, index) => renderTemplate`<img${addAttribute(image.fields.file.url, "src")}${addAttribute(`Thumbnail ${index + 1}`, "alt")} class="h-20 w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"${addAttribute(image.fields.file.url, "data-image")}>`)} </div> </div> <!-- Detail Produk --> <div class="flex flex-col justify-between md:p-28 md:pt-7"> <div> <!-- Tambahkan kelas .product-title di sini --> <h2 class="product-title text-4xl font-bold mb-4 text-gray-800 md:pt-14"> ${product.title} </h2> <p class="text-lg text-gray-700 mb-6 leading-relaxed"> ${product.spesifikasi || ""} </p> <div class="mb-6"> <h3 class="text-lg font-semibold mb-3">Features</h3> <ul class="space-y-4"> <li class="flex items-center"> <!-- Gambar icon dengan optimasi menggunakan <picture> --> <picture> <source srcset="https://fileobs.wisualarm.com/english_wisualarm/image/20240613/21.png" type="image/webp"> <img src="/icons/video-surveillance.png" alt="Intelligent video surveillance" class="w-6 h-6 mr-2" loading="eager"> </picture> <span>Intelligent video surveillance</span> </li> <li class="flex items-center"> <picture> <source srcset="https://fileobs.wisualarm.com/english_wisualarm/image/20240603/1717398543_0856e5be-0129-8c95-d.png" type="image/webp"> <img src="https://fileobs.wisualarm.com/english_wisualarm/image/20240603/1717398543_0856e5be-0129-8c95-d.png" alt="Intelligent operation system" class="w-6 h-6 mr-2" loading="eager"> </picture> <span>Intelligent operation system</span> </li> <li class="flex items-center"> <picture> <source srcset="https://fileobs.wisualarm.com/english_wisualarm/image/20231219/iconfont_1.png" type="image/webp"> <img src="https://fileobs.wisualarm.com/english_wisualarm/image/20231219/iconfont_1.png" alt="Intelligent perception" class="w-6 h-6 mr-2" loading="eager"> </picture> <span>Intelligent perception</span> </li> <li class="flex items-center"> <picture> <source srcset="https://fileobs.wisualarm.com/english_wisualarm/image/20240529/fire.png" type="image/webp"> <img src="https://fileobs.wisualarm.com/english_wisualarm/image/20240529/fire.png" alt="Intelligent fire extinguishing" class="w-6 h-6 mr-2" loading="eager"> </picture> <span>Intelligent fire extinguishing</span> </li> <li class="flex items-center"> <picture> <source srcset="https://fileobs.wisualarm.com/english_wisualarm/image/20240604/27.png" type="image/webp"> <img src="https://fileobs.wisualarm.com/english_wisualarm/image/20240604/27.png" alt="Intelligent remote control" class="w-6 h-6 mr-2" loading="eager"> </picture> <span>Intelligent remote control</span> </li> </ul> </div> <!-- Tombol Beli --> ${renderComponent($$result2, "Buttonprodukrobot", $$Buttonprodukrobot, {})} </div> </div> </div> </div> </div>    <div class="flex justify-center items-center md:min-h-screen my-3"> <iframe class="md:w-full w max-w-4xl aspect-video rounded-xl" src="https://fileobs.wisualarm.com/english_wisualarm/soft/20240126/Video_4WD-Firefighting-and-Scouting-Robot-With-Diesel-Engine.mp4" allowfullscreen title="Video Demo Product"></iframe> </div>  <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40"> <div class="relative z-10"> <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"> <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true"> <defs> <pattern id="pattern" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)"> <path d="M.5 200V.5H200" fill="none"></path> </pattern> </defs> <svg x="50%" y="50%" class="overflow-visible fill-blue-50"> <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path> </svg> <rect width="100%" height="100%" stroke-width="0" fill="url(#pattern)"></rect> </svg> </div> </div> <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl text-center"> <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
Firefighting and Scouting Robot
<span class="text-blue-600">With Diesel Engine</span> </h1> <h2 class="mt-6 text-lg leading-8 text-gray-600">
Experience next-generation fire-fighting technology with advanced
          features for extreme conditions.
</h2> </div> <div class="relative mx-auto mt-10 max-w-4xl"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full rounded-2xl border border-gray-100 shadow", "src": "https://fileobs.wisualarm.com/english_wisualarm/image/20231229/1703814583_28fd6ade-3e0e-fef0-6.png", "alt": "Firefighting Robot", "width": 150, "height": 150, "loading": "eager" })} </div> </div> </section>  <section class="relative overflow-hidden pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40"> <div class="relative z-10"> <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"> <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-10" aria-hidden="true"> <defs> <pattern id="pattern" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)"> <path d="M.5 200V.5H200" fill="none"></path> </pattern> </defs> <svg x="50%" y="50%" class="overflow-visible fill-blue-50"> <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path> </svg> <rect width="100%" height="100%" stroke-width="0" fill="url(#pattern)"></rect> </svg> </div> </div> <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8"> <!-- Section 1: Intelligent Image Monitoring --> <div class="flex flex-col-reverse lg:flex-row items-center mb-16 bg-gradient-to-r from-white to-blue-50 py-16 px-4 rounded-xl shadow-lg"> <div class="w-full lg:w-1/2 mt-8 lg:mt-0"> <h2 class="text-3xl font-semibold text-gray-900">
Intelligent Image Monitoring
</h2> <p class="mt-4 text-md leading-7 text-gray-600">
Binocular thermal imaging camera + front fisheye camera + real-time
            storage of footage
</p> </div> <div class="w-full lg:w-1/2"> <img src="https://fileobs.wisualarm.com/english_wisualarm/soft/20240126/696x5202.jpg" class="w-full rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out" alt="Robot Monitoring" loading="eager"> </div> </div> <!-- Section 2: Intelligent Remote Controller --> <div class="flex flex-col lg:flex-row items-center mb-16 bg-gradient-to-r from-blue-50 to-white py-16 px-4 rounded-xl shadow-lg"> <div class="w-full lg:w-1/2"> <img src="https://fileobs.wisualarm.com/english_wisualarm/soft/20231228/caspar-camille-rubin-HUBNTCzE-R8-unsplash.jpg" class="w-full rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out" alt="Remote Controller" loading="eager"> </div> <div class="w-full lg:w-1/2 mt-8 lg:mt-0 md:pl-10"> <h2 class="text-3xl font-semibold text-gray-900">
Intelligent Remote Controller
</h2> <p class="mt-4 text-md leading-7 text-gray-600">
The first in the industry to use a lightweight handheld remote
            control to replace the traditional backpack operation control box
</p> </div> </div> <!-- Section 3: Intelligent Sensing --> <div class="flex flex-col-reverse lg:flex-row items-center mb-16 bg-gradient-to-r from-white to-blue-50 py-16 px-4 rounded-xl shadow-lg"> <div class="w-full lg:w-1/2 mt-8 lg:mt-0"> <h2 class="text-3xl font-semibold text-gray-900">
Intelligent Sensing
</h2> <p class="mt-4 text-md leading-7 text-gray-600">
Ambient gas detection + ultrasonic distance obstacle avoidance +
            ambient temperature sensing + anti-tip sensing
</p> </div> <div class="w-full lg:w-1/2"> <img src="https://fileobs.wisualarm.com/english_wisualarm/soft/20231228/visax-MwLLeyWvwWI-unsplash-(1).jpg" class="w-full rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out" alt="Sensing" loading="eager"> </div> </div> <!-- Section 4: Intelligent Water Cannon --> <div class="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-50 to-white py-16 px-4 rounded-xl shadow-lg"> <div class="w-full lg:w-1/2"> <img src="https://fileobs.wisualarm.com/english_wisualarm/soft/20240126/696x520-1.jpg" class="w-full rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out" alt="Water Cannon" loading="eager"> </div> <div class="w-full lg:w-1/2 mt-8 lg:mt-0 md:pl-10"> <h2 class="text-3xl font-semibold text-gray-900">
Intelligent Water Cannon
</h2> <p class="mt-4 text-md leading-7 text-gray-600">
Supports water mist and column
</p> </div> </div> </div> </section> <section class="bg-gray-50 py-16"> <div class="container mx-auto px-6 lg:px-8"> <!-- CTA Content --> <div class="text-center"> <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
Unleash the Power of Fire Robots
</h2> <p class="mt-6 text-lg text-gray-600 leading-8">
Discover the ultimate solution for fire emergencies with advanced
          firefighting robots designed for extreme conditions.
</p> <div class="mt-8"> <a href="https://wa.me/6281382529368?text=" class="whatsapp-Cta inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
Pesan Sekarang
</a>  </div> </div> <!-- CTA Image --> <div class="relative mx-auto mt-10 max-w-4xl rounded-2xl overflow-hidden shadow-lg"> <img src="https://fileobs.wisualarm.com/english_wisualarm/image/20240201/1200x520.jpg" alt="Dahua Fire Robots" class="w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out" loading="eager"> </div> </div> </section> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/robotfire/[slug].astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/robotfire/[slug].astro";
const $$url = "/robotfire/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
