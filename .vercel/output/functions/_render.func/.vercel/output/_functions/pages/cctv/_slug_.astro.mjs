import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CuHTeFs0.mjs';
import { c as contentfulClient } from '../../chunks/contentful_DXaELXkG.mjs';
import { marked } from 'marked';
import { $ as $$Image } from '../../chunks/_astro_assets_CmMpI-dN.mjs';
import { B as Bandara, a as Bioskop, b as BussinesCenterMall, G as GudangLogistik, M as Museum, P as Perusahaan, S as Stasiun, c as Supermarket, T as Terminal } from '../../chunks/Terminal_BpVdy7mV.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const CTAwaterjet = new Proxy({"src":"/_astro/CTA waterjet.tbjotFfS.webp","width":1600,"height":694,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/lokasiumum/CTA waterjet.webp";
							}
							
							return target[name];
						}
					});

const SystemoverviewCCTVFirewater = new Proxy({"src":"/_astro/systemoverview cctvfirerwater.CM9fR5aD.webp","width":2168,"height":1590,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/lokasiumum/systemoverview cctvfirerwater.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://tigrisfire.com/");
async function getStaticPaths() {
  const entries = await contentfulClient.getEntries({
    content_type: "produkcctv"
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
    content_type: "produkcctv",
    "fields.slug": slug,
    include: 2
    // Memastikan assets ikut diambil
  });
  if (!entries.items.length) {
    throw new Error("Produkcctv not found");
  }
  const produkcctv = entries.items[0].fields;
  const galleryImages = Array.isArray(produkcctv.image) ? produkcctv.image : [produkcctv.image];
  const mainImageUrl = galleryImages[0]?.fields?.file?.url || "/favicon.png";
  const imagespekUrl = produkcctv.imagespek && "fields" in produkcctv.imagespek && produkcctv.imagespek.fields.file?.url ? produkcctv.imagespek.fields.file.url : "/default-spec-image.png";
  console.log("Main Image URL:", mainImageUrl);
  console.log("Imagespek URL:", imagespekUrl);
  console.log("Meta Title:", produkcctv.metatitle || produkcctv.title);
  console.log("Meta Description:", produkcctv.metadeskripsi);
  console.log("Meta Keywords:", produkcctv.metakeywords);
  const titlemeta = produkcctv.metatitle || produkcctv.title;
  const descriptionmeta = produkcctv.metadeskripsi;
  const keywordsmeta = produkcctv.metakeywords;
  const contentHtml = marked(produkcctv.spesifikasi.toString());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta, "imagemeta": mainImageUrl, "data-astro-cid-att7piid": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gray-100 py-12" data-astro-cid-att7piid> <div class="container mx-auto px-4 md:px-8" data-astro-cid-att7piid> <div class="grid grid-cols-1 md:grid-cols-2 gap-10" data-astro-cid-att7piid> <!-- Galeri Produk --> <div class="flex flex-col items-center md:p-28 md:pt-7" data-astro-cid-att7piid> <!-- Gambar Utama --> <div class="mb-4 w-full" data-astro-cid-att7piid> <img id="mainImage"${addAttribute(mainImageUrl, "src")}${addAttribute(produkcctv.title, "alt")} class="w-full h-auto rounded-lg shadow-lg" data-astro-cid-att7piid> </div> <!-- Thumbnail Galeri --> <div class="grid grid-cols-4 gap-4" data-astro-cid-att7piid> ${galleryImages.map((image, index) => renderTemplate`<img${addAttribute(image.fields.file.url, "src")}${addAttribute(`Thumbnail ${index + 1}`, "alt")} class="h-20 w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"${addAttribute(image.fields.file.url, "data-image")} data-astro-cid-att7piid>`)} </div> </div> <!-- Detail Produk --> <div class="flex flex-col justify-between md:p-28 md:pt-7" data-astro-cid-att7piid> <div data-astro-cid-att7piid> <h2 class="produkcctv-title text-4xl font-bold mb-4 text-gray-800 md:pt-14" data-astro-cid-att7piid> ${produkcctv.title} </h2> <h3 class="text-lg font-semibold mb-3" data-astro-cid-att7piid>Features</h3> <div class="text-md text-gray-700 mb-6 leading-relaxed" data-astro-cid-att7piid> <div data-astro-cid-att7piid>${unescapeHTML(contentHtml)}</div> </div> <!-- Tombol Beli --> <!-- Tombol Beli --> <a href="https://wa.me/6281382529368?text=" class="whatsapp-button" data-astro-cid-att7piid>Pesan Produk Ini</a>   </div> </div> </div> </div> <!-- Tambahkan gambar dari imagespek --> <div class="mt-20 md:mt-6" data-astro-cid-att7piid> <h3 class="text-md md:text-3xl text-center font-extrabold" data-astro-cid-att7piid>
SPESIFIKASI
</h3> <img class="flex w-full object-contain rounded-lg p-2 md:px-40 mt-5"${addAttribute(imagespekUrl, "src")} alt="Imagespek" data-astro-cid-att7piid> </div> </div>    <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40" data-astro-cid-att7piid> <div class="relative z-10" data-astro-cid-att7piid> <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]" data-astro-cid-att7piid> <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true" data-astro-cid-att7piid> <defs data-astro-cid-att7piid> <pattern id="pattern" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)" data-astro-cid-att7piid> <path d="M.5 200V.5H200" fill="none" data-astro-cid-att7piid></path> </pattern> </defs> <svg x="50%" y="50%" class="overflow-visible fill-blue-50" data-astro-cid-att7piid> <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" data-astro-cid-att7piid></path> </svg> <rect width="100%" height="100%" stroke-width="0" fill="url(#pattern)" data-astro-cid-att7piid></rect> </svg> </div> </div> <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8" data-astro-cid-att7piid> <div class="mx-auto max-w-2xl text-center" data-astro-cid-att7piid> <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" data-astro-cid-att7piid>
AUTOMATIC TRACKING
<span class="text-blue-600" data-astro-cid-att7piid>AND AIMING JET </span>FIRE EXTINGUISHING
          DEVICE
</h1> <h2 class="mt-6 text-lg leading-8 text-gray-600" data-astro-cid-att7piid>
Cutting-edge technology that ensures fast, reliable, and safe fire
          extinguishing in large spaces with the highest precision.
</h2> </div> <div class="relative mx-auto mt-10 max-w-4xl" data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": SystemoverviewCCTVFirewater, "alt": "Systemoverview CCTV Firewater", "class": "w-full rounded-2xl border border-gray-100 shadow", "data-astro-cid-att7piid": true })} </div> <p class="text-lg text-gray-800 font-bold mt-2 text-center" data-astro-cid-att7piid>
image/System Overview
</p> </div> </section>  <section class="relative z-20 mx-auto max-w-7xl px-2 lg:px-8 py-12 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-500" data-astro-cid-att7piid> <div class="mx-auto max-w-3xl p-8 border border-blue-100 rounded-lg bg-gradient-to-br from-white to-blue-50 relative" data-astro-cid-att7piid> <div class="absolute inset-0 pointer-events-none" data-astro-cid-att7piid> <div class="bg-blue-50 opacity-50 rounded-lg inset-0 w-full h-full" data-astro-cid-att7piid></div> </div> <div class="relative z-10" data-astro-cid-att7piid> <h2 class="text-4xl font-semibold text-blue-600 mb-8 border-b-4 border-blue-500 inline-block pb-2" data-astro-cid-att7piid>
System Introduction
</h2> <p class="text-lg leading-8 text-gray-800 font-bold mt-4" data-astro-cid-att7piid>
Background Introduction
</p> <p class="text-base text-gray-600 mt-4 border-l-4 border-blue-500 pl-4" data-astro-cid-att7piid>
With the continuous acceleration of the modernization process and the
          continuous diversification of building types, building fire protection
          construction is facing an arduous task. Dahua devotes itself to
          research and development, always focusing on the field of firefighting
          IoT and security, and constantly pursuing mature and stable
          firefighting products to ensure rapid early warning when a fire occurs
          and provide all-round protection for the safety of people's lives and
          property.
</p> <p class="text-lg leading-8 text-gray-800 font-bold mt-8" data-astro-cid-att7piid>
System Introduction
</p> <p class="text-base text-gray-600 mt-4 border-l-4 border-blue-500 pl-4" data-astro-cid-att7piid>
The automatic tracking and aiming jet fire extinguishing system
          consists of components such as detector, control panel, fire
          extinguishing module, simulated terminal water testing devices, as
          well as pipes, valves, and water supply module. The system is designed
          for large spaces or spaces that easily raise blazes. With large flow
          and high water pressure, our system can quickly aim at the root of the
          fire and break off the kindling from the fire to abort it.
</p> </div> </div> </section>  <section class="md:px-40 text-center mt-20 mb-11" data-astro-cid-att7piid> <p class="text-4xl font-semibold text-blue-600 mb-8 border-b-4 border-blue-500 inline-block pb-2" data-astro-cid-att7piid>
Penggunaan Umum
</p> <p data-astro-cid-att7piid>
Penggunaan di berbagai tempat seperti bandara, stasiun, pusat
      perbelanjaan, bioskop, museum, gudang, dan pusat distribusi untuk
      memastikan keamanan dan manajemen perlindungan kebakaran yang optimal.
</p> <div class="grid grid-cols-3 md:grid-cols-3 gap-4 mt-10 md:px-40 p-1" data-astro-cid-att7piid> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": Bandara, "alt": "Bandara", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": Bioskop, "alt": "Bioskop", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": BussinesCenterMall, "alt": "Business Center Mall", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": GudangLogistik, "alt": "Gudang Logistik", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": Museum, "alt": "Museum", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": Perusahaan, "alt": "Perusahaan", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": Stasiun, "alt": "Stasiun", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": Supermarket, "alt": "Supermarket", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> <div data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": Terminal, "alt": "Terminal", "class": "h-auto max-w-full rounded-lg", "data-astro-cid-att7piid": true })} </div> </div> </section> <section class="bg-gray-50 py-16 mt-" data-astro-cid-att7piid> <div class="container mx-auto px-6 lg:px-8" data-astro-cid-att7piid> <!-- CTA Content --> <div class="text-center" data-astro-cid-att7piid> <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" data-astro-cid-att7piid>
Protect Your Facility with Advanced Fire Extinguishing Technology
</h2> <p class="mt-6 text-lg text-gray-600 leading-8" data-astro-cid-att7piid>
Discover the cutting-edge solution for rapid fire suppression with our
          Automatic Tracking and Aiming Jet Fire Extinguishing Device.
</p> <div class="mt-8" data-astro-cid-att7piid> <a href="https://wa.me/6281382529368?text=" class="whatsapp-Cta inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" data-astro-cid-att7piid>
Pesan Sekarang
</a>  </div> </div> <!-- CTA Image --> <div class="relative mx-auto mt-10 max-w-4xl rounded-2xl overflow-hidden shadow-lg" data-astro-cid-att7piid> ${renderComponent($$result2, "Image", $$Image, { "src": CTAwaterjet, "alt": "systemwaterjet", "class": "w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out", "data-astro-cid-att7piid": true })} </div> </div> </section> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/cctv/[slug].astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/cctv/[slug].astro";
const $$url = "/cctv/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
