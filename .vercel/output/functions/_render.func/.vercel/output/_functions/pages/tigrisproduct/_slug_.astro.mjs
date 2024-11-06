import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CuHTeFs0.mjs';
import { c as contentfulClient } from '../../chunks/contentful_DXaELXkG.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CmMpI-dN.mjs';
import { marked } from 'marked';
export { renderers } from '../../renderers.mjs';

const energyEfficiencyImg = new Proxy({"src":"/_astro/Energy Efficiency.CnH8SCF7.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/fiturpumptigris/Energy Efficiency.png";
							}
							
							return target[name];
						}
					});

const highPerformanceImg = new Proxy({"src":"/_astro/High Performance and Durability.Bm1wCDG1.png","width":260,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/fiturpumptigris/High Performance and Durability.png";
							}
							
							return target[name];
						}
					});

const corrosionResistantImg = new Proxy({"src":"/_astro/Corrosion-Resistant and Long-Lasting Materials.CbvPjEa-.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/fiturpumptigris/Corrosion-Resistant and Long-Lasting Materials.png";
							}
							
							return target[name];
						}
					});

const easyMaintenanceImg = new Proxy({"src":"/_astro/Easy Maintenance.CGT2kszC.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/fiturpumptigris/Easy Maintenance.png";
							}
							
							return target[name];
						}
					});

const complianceImg = new Proxy({"src":"/_astro/Compliance with International Standards.6m2fM7c8.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/fiturpumptigris/Compliance with International Standards.png";
							}
							
							return target[name];
						}
					});

const guaranteedQualityImg = new Proxy({"src":"/_astro/Guaranteed Quality.DN5kllnl.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/fiturpumptigris/Guaranteed Quality.png";
							}
							
							return target[name];
						}
					});

const seemoreproducttigris = new Proxy({"src":"/_astro/seeproducttigriscta.DDnAOicu.webp","width":1600,"height":694,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/fiturpumptigris/seeproducttigriscta.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://tigrisfire.com/");
async function getStaticPaths() {
  const entries = await contentfulClient.getEntries({
    content_type: "producttigris"
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
    content_type: "producttigris",
    "fields.slug": slug
  });
  if (!entries.items.length) {
    throw new Error("Producttigris not found");
  }
  const producttigris = entries.items[0].fields;
  const galleryImages = Array.isArray(producttigris.image) ? producttigris.image : [producttigris.image];
  const contentHtml = marked(producttigris.spesifikasi.toString());
  const mainImageUrl = galleryImages[0]?.fields?.file?.url || "/favicon.png";
  const titlemeta = producttigris.metatitle || producttigris.title;
  const descriptionmeta = producttigris.metadeskripsi || "Detail produk Tigris.";
  const keywordsmeta = producttigris.metakeywords || "produk tigris, pump, fitur";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta, "imagemeta": mainImageUrl }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gray-100 py-12"> <div class="container mx-auto px-4 md:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-10"> <!-- Galeri Produk --> <div class="flex flex-col items-center md:p-28 md:pt-7"> <!-- Gambar Utama --> <div class="mb-4 w-full"> <img id="mainImage"${addAttribute(mainImageUrl, "src")}${addAttribute(producttigris.title, "alt")} class="w-full h-auto rounded-lg shadow-lg"> </div> <!-- Thumbnail Galeri --> <div class="grid grid-cols-4 gap-4"> ${galleryImages.map((image, index) => renderTemplate`<img${addAttribute(image.fields.file.url, "src")}${addAttribute(`Thumbnail ${index + 1}`, "alt")} class="h-20 w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"${addAttribute(image.fields.file.url, "data-image")}>`)} </div> </div> <!-- Detail Produk --> <div class="flex flex-col justify-between md:p-28 md:pt-7"> <div> <!-- Tambahkan kelas .producttigris-title di sini --> <h2 class="producttigris-title text-4xl font-bold mb-4 text-gray-800 md:pt-14"> ${producttigris.title} </h2> <div class="mb-6"> <h3 class="text-lg font-semibold mb-3">Features</h3> <ul class="space-y-4"> <li class="flex items-center"> <picture> ${renderComponent($$result2, "Image", $$Image, { "src": energyEfficiencyImg, "alt": "Energy Efficiency", "class": "w-6 h-6 mr-2", "loading": "eager" })} </picture> <span>Energy Efficiency</span> </li> <li class="flex items-center"> <picture> ${renderComponent($$result2, "Image", $$Image, { "src": highPerformanceImg, "alt": "High Performance and Durability", "class": "w-6 h-6 mr-2", "loading": "eager" })} </picture> <span>High Performance and Durability</span> </li> <li class="flex items-center"> <picture> ${renderComponent($$result2, "Image", $$Image, { "src": corrosionResistantImg, "alt": "Corrosion-Resistant and Long-Lasting Materials", "class": "w-6 h-6 mr-2", "loading": "eager" })} </picture> <span>Corrosion-Resistant and Long-Lasting Materials</span> </li> <li class="flex items-center"> <picture> ${renderComponent($$result2, "Image", $$Image, { "src": easyMaintenanceImg, "alt": "Easy Maintenance", "class": "w-6 h-6 mr-2", "loading": "eager" })} </picture> <span>Easy Maintenance</span> </li> <li class="flex items-center"> <picture> ${renderComponent($$result2, "Image", $$Image, { "src": complianceImg, "alt": "Compliance with International Standards", "class": "w-6 h-6 mr-2", "loading": "eager" })} </picture> <span>Compliance with International Standards</span> </li> <li class="flex items-center"> <picture> ${renderComponent($$result2, "Image", $$Image, { "src": guaranteedQualityImg, "alt": "Guaranteed Quality", "class": "w-6 h-6 mr-2", "loading": "eager" })} </picture> <span>Guaranteed Quality</span> </li> </ul> </div> <!-- Tombol Beli --> <a href="https://wa.me/6281382529368?text=" class="whatsapp-Cta inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-800 to-blue-600 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
Pesan Produk Ini
</a> </div> </div> </div> </div> <!-- Bagian Spesifikasi --> <div> <div class="prose mx-auto bg-white shadow-md rounded-lg md:p-20 p-3 mt-10"> <!-- Konten yang sudah dikonversi dari Markdown ke HTML --> <div>${unescapeHTML(contentHtml)}</div> </div> </div> </div>   <section class="bg-gray-50 py-16"> <div class="container mx-auto px-6 lg:px-8"> <!-- CTA Content --> <div class="text-center"> <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
Temukan Solusi Terbaik dengan Produk Berkualitas Kami
</h2> <p class="mt-6 text-lg text-gray-600 leading-8">
Dapatkan perlindungan maksimal dengan produk unggulan kami. Dirancang
          khusus untuk menangani kondisi darurat dengan presisi dan keandalan
          tinggi, produk kami hadir untuk memenuhi kebutuhan Anda dengan
          kualitas yang terjamin.
</p> <div class="mt-8"> <a href="https://wa.me/6281382529368?text=" class="whatsapp-Cta inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
Dapatkan Sekarang
</a>  </div> </div> <!-- CTA Image --> <div class="relative mx-auto mt-10 max-w-4xl rounded-2xl overflow-hidden shadow-lg"> <a href="/tigrisproduct"> ${renderComponent($$result2, "Image", $$Image, { "src": seemoreproducttigris, "alt": "Lihat Produk Tigris Lainnya", "class": "w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out", "loading": "eager" })} </a> </div> </div> </section> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/tigrisproduct/[slug].astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/tigrisproduct/[slug].astro";
const $$url = "/tigrisproduct/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
