import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as renderComponent } from '../../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CuHTeFs0.mjs';
import { $ as $$Heropagetitle } from '../../chunks/heropagetitle_DN9q-62X.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CmMpI-dN.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Kategoriapar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Classes of Fire Section -->${maybeRenderHead()}<section class="bg-gray-50 py-16"> <div class="container mx-auto text-center mb-12"> <!-- Headline Section --> <h2 class="text-5xl font-extrabold text-gray-900 mb-6">
Kategori Alat Pemadam Api
</h2> <p class="text-lg text-gray-600 mb-8 md:px-36 px-4">
Pilih alat pemadam api yang dirancang khusus untuk mengatasi berbagai
        jenis kebakaran. Setiap kategori dilengkapi dengan media pemadam
        terbaik, disesuaikan untuk kebutuhan perlindungan Anda.
</p> </div> <div class="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:px-16 px-8"> <!-- Class A - Wood Fires --> <div class="group relative flex flex-col items-center bg-orange-500 border border-transparent rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"> <img class="object-square w-full rounded-t-lg group-hover:opacity-90 transition-opacity duration-300" src="/abcdbakar/tipeA.webp" alt="Tipe A" loading="lazy"> <div class="flex flex-col justify-between p-4 leading-normal text-center"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
Kelas A
</h5> <p class="mb-3 font-normal text-white">
Kebakaran benda padat seperti kayu, kain, kertas, atau sampah
            kering.
</p> </div> </div> <!-- Class B - Flammable Liquids --> <div class="group relative flex flex-col items-center bg-red-500 border border-transparent rounded-lg shadow-lg hover:shadow-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-105"> <img class="object-square w-full rounded-t-lg group-hover:opacity-90 transition-opacity duration-300" src="/abcdbakar/tipeB.webp" alt="Tipe B" loading="lazy"> <div class="flex flex-col justify-between p-4 leading-normal text-center"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
Kelas B
</h5> <p class="mb-3 font-normal text-white">
Kebakaran yang disebabkan oleh bahan bakar seperti bensin, minyak,
            dan LPG.
</p> </div> </div> <!-- Class C - Electrical Fires --> <div class="group relative flex flex-col items-center bg-yellow-500 border border-transparent rounded-lg shadow-lg hover:shadow-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"> <img class="object-square w-full rounded-t-lg group-hover:opacity-90 transition-opacity duration-300" src="/abcdbakar/tipeC.webp" alt="Tipe C" loading="lazy"> <div class="flex flex-col justify-between p-4 leading-normal text-center"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
Kelas C
</h5> <p class="mb-3 font-normal text-white">
Kebakaran yang disebabkan oleh alat listrik atau instalasi listrik.
</p> </div> </div> </div> </section>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/kategoriapar.astro", void 0);

const foamApar = new Proxy({"src":"/_astro/foam-apar.Bv734pOa.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/foam-apar.webp";
							}
							
							return target[name];
						}
					});

const powderApar = new Proxy({"src":"/_astro/powder-apar.BcIlEdM6.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/powder-apar.webp";
							}
							
							return target[name];
						}
					});

const co2Apar = new Proxy({"src":"/_astro/co2-apar.CPt7b2U2.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/co2-apar.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://tigrisfire.com/");
const $$Apar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Apar;
  const {
    imagemeta = "/favicon.png",
    // Set default image jika tidak ada gambar
    pagetitle = "APAR-Alat Pemadam Api Ringan"
  } = Astro2.props;
  const titlemeta = "APAR Terbaik untuk Proteksi Kebakaran | Refill & Perawatan - Tigrisfire";
  const descriptionmeta = "Tigrisfire menyediakan APAR berkualitas untuk proteksi kebakaran. Layanan lengkap mulai dari refill, perawatan, hingga pemasangan alat pemadam. Hubungi kami untuk keamanan properti Anda!";
  const keywordsmeta = "APAR, alat pemadam kebakaran ringan, refill APAR, perawatan APAR, pemasangan APAR, Tigrisfire Indonesia, proteksi kebakaran, alat pemadam api berkualitas, fire extinguisher";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle })} ${renderComponent($$result2, "Kategoriapar", $$Kategoriapar, {})}  ${maybeRenderHead()}<div class="text-center shadow-md pb-12 pt-12 bg-blue-200"> <h3 class="text-3xl font-bold text-gray-900">
Semua Jenis dan Merek APAR Tersedia di Kami
</h3> <p class="mt-4 text-gray-600">
Tersedia berbagai jenis APAR, mulai dari APAR Powder hingga CO2 dan Foam.
      Garansi kualitas terbaik untuk setiap layanan kami.
</p> <a href="https://wa.me/6281382529368?text=Hallo%20Tigrisfire%20Saya%20Mau%20Beli%20APAR
" class="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105">Pesan Disini</a> </div>  <section class="container mx-auto mt-10 p-6"> <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">
Pilihan Produk APAR
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Foam APAR Product Card --> <div class="bg-blue-500 shadow-md rounded-lg p-6"> ${renderComponent($$result2, "Image", $$Image, { "src": foamApar, "alt": "Foam APAR", "class": "w-full object-square rounded-lg" })} <h3 class="text-xl font-bold text-gray-50 mt-4">Foam APAR</h3> <p class="text-white mt-2">
APAR Foam digunakan untuk kebakaran kelas A dan B, terutama untuk
          kebakaran minyak dan cairan.
</p> </div> <!-- Powder APAR Product Card --> <div class="bg-blue-500 shadow-md rounded-lg p-6"> ${renderComponent($$result2, "Image", $$Image, { "src": powderApar, "alt": "Powder APAR", "class": "w-full object-square rounded-lg" })} <h3 class="text-xl font-bold text-gray-50 mt-4">Powder APAR</h3> <p class="text-white mt-2">
APAR Powder cocok untuk semua kelas kebakaran, terutama untuk
          kebakaran jenis padat, cair, dan gas.
</p> </div> <!-- CO2 APAR Product Card --> <div class="bg-blue-500 shadow-md rounded-lg p-6"> ${renderComponent($$result2, "Image", $$Image, { "src": co2Apar, "alt": "CO2 APAR", "class": "w-full object-square rounded-xl" })} <h3 class="text-xl font-bold text-gray-50 mt-4">CO2 APAR</h3> <p class="text-white mt-2">
APAR CO2 ideal untuk kebakaran elektrik, bekerja cepat memadamkan api
          tanpa meninggalkan residu.
</p> </div> </div> </section> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/produk/apar.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/produk/apar.astro";
const $$url = "/produk/apar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Apar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
