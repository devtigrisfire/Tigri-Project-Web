import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CuHTeFs0.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CmMpI-dN.mjs';
import { l as lebihdari100klient } from '../chunks/lebihdari100klient_YxrKBuMc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Logopartner = createComponent(($$result, $$props, $$slots) => {
  const mitraImages = [
    { src: "/mitra rumahapi/1.pertamina.webp", alt: "Pertamina" },
    { src: "/mitra rumahapi/2.bi.webp", alt: "BI" },
    { src: "/mitra rumahapi/3.kemenker.webp", alt: "Kemenker" },
    { src: "/mitra rumahapi/4.telkom.webp", alt: "Telkom" },
    { src: "/mitra rumahapi/5.pustekom.webp", alt: "Pustekom" },
    { src: "/mitra rumahapi/6.lp.webp", alt: "LP" },
    { src: "/mitra rumahapi/7.esar.webp", alt: "Esar" },
    { src: "/mitra rumahapi/8.pt delta djakarta.webp", alt: "PT Delta Djakarta" },
    { src: "/mitra rumahapi/9.mikie.webp", alt: "Mikie" },
    { src: "/mitra rumahapi/10.oalkwood.webp", alt: "Oalkwood" },
    { src: "/mitra rumahapi/11.indokomas.webp", alt: "Indokomas" },
    { src: "/mitra rumahapi/12.deut bank.webp", alt: "Deut Bank" },
    { src: "/mitra rumahapi/13.kominfo.webp", alt: "Kominfo" },
    { src: "/mitra rumahapi/14.bank jateng.webp", alt: "Bank Jateng" },
    { src: "/mitra rumahapi/15.lg.webp", alt: "LG" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center p-2"> ${mitraImages.map((image) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image.src, "alt": image.alt, "width": 250, "height": 250, "loading": "lazy", "class": "mx-auto" })}`)} </div>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/logopartner.astro", void 0);

const klienImage = new Proxy({"src":"/_astro/klien.DcrXkqGd.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/logoberandastatistik/klien.webp";
							}
							
							return target[name];
						}
					});

const proyekImage = new Proxy({"src":"/_astro/proyek.DcY9ZENn.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/logoberandastatistik/proyek.webp";
							}
							
							return target[name];
						}
					});

const timImage = new Proxy({"src":"/_astro/tim.BUBYahY2.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/logoberandastatistik/tim.webp";
							}
							
							return target[name];
						}
					});

const areaImage = new Proxy({"src":"/_astro/area.DAJKdCUB.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/logoberandastatistik/area.webp";
							}
							
							return target[name];
						}
					});

const $$Keunggulan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-gray-900 bg-white py-16"> <div class="container mx-auto"> <!-- Section Header --> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-800">Keunggulan Tigris Fire</h2> <p class="mt-4 text-gray-600">
Memberikan solusi proteksi kebakaran yang terpercaya, efektif, dan
        efisien untuk melindungi bisnis Anda.
</p> </div> <!-- Statistics Cards --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 py-10"> <!-- Card 1: Klien Terpercaya --> <div class="relative bg-white shadow-xl rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl group"> <div class="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors group-hover:from-blue-600 group-hover:to-blue-600"> ${renderComponent($$result, "Image", $$Image, { "src": klienImage, "alt": "klien logo", "class": "p-2", "width": 96, "height": 96, "format": "webp", "quality": 85 })} </div> <h2 class="title-font font-bold text-3xl text-gray-900">500+</h2> <p class="leading-relaxed text-gray-600">Klien Terpercaya</p> </div> <!-- Card 2: Proyek Selesai --> <div class="relative bg-white shadow-xl rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl group"> <div class="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors group-hover:from-blue-600 group-hover:to-blue-500"> ${renderComponent($$result, "Image", $$Image, { "src": proyekImage, "alt": "proyek icon", "class": "p-2", "width": 96, "height": 96, "format": "webp", "quality": 85 })} </div> <h2 class="title-font font-bold text-3xl text-gray-900">700+</h2> <p class="leading-relaxed text-gray-600">Proyek Selesai</p> </div> <!-- Card 3: Tim Profesional --> <div class="relative bg-white shadow-xl rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl group"> <div class="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors group-hover:from-blue-600 group-hover:to-blue-700"> ${renderComponent($$result, "Image", $$Image, { "src": timImage, "alt": "tim logo", "class": "p-2", "width": 96, "height": 96, "format": "webp", "quality": 85 })} </div> <h2 class="title-font font-bold text-3xl text-gray-900">150+</h2> <p class="leading-relaxed text-gray-600">Tim Profesional</p> </div> <!-- Card 4: Area Layanan --> <div class="relative bg-white shadow-xl rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl group"> <div class="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors group-hover:from-blue-800 group-hover:to-blue-600"> ${renderComponent($$result, "Image", $$Image, { "src": areaImage, "alt": "area icon", "class": "p-2", "width": 96, "height": 96, "format": "webp", "quality": 85 })} </div> <h2 class="title-font font-bold text-3xl text-gray-900">30+</h2> <p class="leading-relaxed text-gray-600">Area Layanan</p> </div> </div> </div> </section>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/keunggulan.astro", void 0);

const product2jet = new Proxy({"src":"/_astro/cctvrobot.DiXXIq9r.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/cctvrobot.webp";
							}
							
							return target[name];
						}
					});

const product1robot = new Proxy({"src":"/_astro/robotfire.BcjaAF_5.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/robotfire.webp";
							}
							
							return target[name];
						}
					});

const certificationImageUrl = new Proxy({"src":"/_astro/Standard-1-2048x712.Ct7o8dpq.webp","width":2048,"height":712,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/Standard-1-2048x712.webp";
							}
							
							return target[name];
						}
					});

const herotigris = new Proxy({"src":"/_astro/herotigris.C3QLCwcr.webp","width":600,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/herotigris.webp";
							}
							
							return target[name];
						}
					});

const sertifikat = new Proxy({"src":"/_astro/sertifikat.DaN_c464.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/sertifikat.webp";
							}
							
							return target[name];
						}
					});

const sertifikat2 = new Proxy({"src":"/_astro/sertifikat 2.Db0IBcpS.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/sertifikat 2.webp";
							}
							
							return target[name];
						}
					});

const sertifikat3 = new Proxy({"src":"/_astro/sertifikat 3.h3NibWcC.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/sertifikat 3.webp";
							}
							
							return target[name];
						}
					});

const aparImage = new Proxy({"src":"/_astro/1.apar (1).QTYNJH8u.webp","width":800,"height":550,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/hmarketproduct/1.apar (1).webp";
							}
							
							return target[name];
						}
					});

const fireAlarmImage = new Proxy({"src":"/_astro/2.firealarm (1).6Dj_EdQR.webp","width":800,"height":550,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/hmarketproduct/2.firealarm (1).webp";
							}
							
							return target[name];
						}
					});

const fireSprinklerImage = new Proxy({"src":"/_astro/3.firesprinkler.aTfPLVK2.webp","width":800,"height":550,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/hmarketproduct/3.firesprinkler.webp";
							}
							
							return target[name];
						}
					});

const firepump = new Proxy({"src":"/_astro/4.fire pump (1).DDjcERLk.webp","width":800,"height":550,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/assets/hmarketproduct/4.fire pump (1).webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const titlemeta = "Proteksi Kebakaran Terlengkap di Indonesia | Tigrisfire - Alat Pemadam & Sistem Keamanan";
  const descriptionmeta = "Tigrisfire menyediakan solusi proteksi kebakaran terlengkap di Indonesia. Dari alat pemadam berkualitas hingga sistem fire suppression dan inspeksi APAR gratis. Lindungi aset Anda dengan layanan kami!";
  const keywordsmeta = "proteksi kebakaran, fire suppression system, alat pemadam kebakaran, inspeksi APAR gratis, Tigrisfire Indonesia, layanan pemadam kebakaran, fire sprinkler, peralatan proteksi kebakaran, konsultasi keamanan kebakaran";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative bg-gradient-to-r from-blue-600 to-blue-900 text-white py-16 lg:py-24 lg:px-24" data-astro-cid-j7pv25f6> <div class="container mx-auto flex md:px-10 py-8 md:flex-row flex-col items-center" data-astro-cid-j7pv25f6> <div class="lg:flex-grow md:w-1/2 lg:pr-24 px-5 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-astro-cid-j7pv25f6> <h1 class="title-font sm:text-5xl text-4xl mb-6 font-extrabold leading-tight animate-fade-in-up" data-astro-cid-j7pv25f6>
Perlindungan Terbaik Untuk Masa Depan <br class="hidden lg:inline-block" data-astro-cid-j7pv25f6>Aset Berharga Anda
</h1> <p class="mb-8 leading-relaxed max-w-lg animate-fade-in-up-delay" data-astro-cid-j7pv25f6>
Tigrisfire hadir dengan solusi proteksi kebakaran yang andal dan
          canggih, menjaga keamanan aset Anda dari risiko tak terduga. Jadikan
          bisnis dan rumah Anda lebih aman bersama kami.
</p> <div class="flex justify-center animate-fade-in-up-delay-long" data-astro-cid-j7pv25f6> <a href="https://wa.me/6281382529368?text=Hallo%20Tigrisfire,%20Saya%20Mau%20Konsultasinya" target="_blank" class="ml-4 inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out focus:outline-none" data-astro-cid-j7pv25f6>
Konsultasi Sekarang
</a> </div> </div> <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 moving-image" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": herotigris, "alt": "Tigris Banner Person", "class": "w-full", "width": 600, "height": 600, "format": "webp", "quality": 85, "loading": "lazy", "sizes": "(max-width: 600px) 500px", "data-astro-cid-j7pv25f6": true })} </div> </div> <!-- Flame-like floating animation (background effect) --> <div class="absolute inset-0 z-10 overflow-hidden opacity-20 pointer-events-none" data-astro-cid-j7pv25f6> <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-300 opacity-50 rounded-full animate-pulse-slow" data-astro-cid-j7pv25f6></div> <div class="absolute top-20 right-20 w-96 h-96 bg-blue-500 opacity-50 rounded-full animate-pulse-slow" data-astro-cid-j7pv25f6></div> </div> </section>    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-extrabold text-center text- mb-12" data-astro-cid-j7pv25f6>
Layanan Kami
</h2> <div class="grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" data-astro-cid-j7pv25f6> <!-- Service 1 --> <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-500 ease-in-out hover:scale-105" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-xl font-semibold text-gray-800 text-center" data-astro-cid-j7pv25f6>Konsultan</p> <p class="text-sm text-gray-900 text-center mt-3" data-astro-cid-j7pv25f6>
Dengan keunggulan perencanaan yang sistematis dan mengedepankan
          efisiensi.
</p> </div> <!-- Training --> <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-500 ease-in-out hover:scale-105" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-xl font-semibold text-gray-800 text-center" data-astro-cid-j7pv25f6>Training</p> <p class="text-sm text-gray-600 text-center mt-3" data-astro-cid-j7pv25f6>
Pembekalan dasar pemadam kebakaran oleh trainer berpengalaman.
</p> </div> <!-- Audit Kemanan --> <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-500 ease-in-out hover:scale-105" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-xl font-semibold text-gray-800 text-center" data-astro-cid-j7pv25f6>
Audit Keamanan
</p> <p class="text-sm text-gray-600 text-center mt-3" data-astro-cid-j7pv25f6>
Audit untuk memastikan bahwa sistem keamanan Anda berjalan sesuai
          standar.
</p> </div> <!-- Sertifikasi --> <div class="p-8 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-500 ease-in-out hover:scale-105" data-astro-cid-j7pv25f6> <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-xl font-semibold text-gray-800 text-center" data-astro-cid-j7pv25f6>
Sertifikasi
</p> <p class="text-sm text-gray-600 text-center mt-3" data-astro-cid-j7pv25f6>
Memberikan sertifikasi yang diakui oleh badan resmi untuk setiap
          pelatihan dan audit.
</p> </div> </div> </div> <section class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 body-font" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-extrabold text-center text-white pt-28 px-1" data-astro-cid-j7pv25f6>
Kebutuhan Anda Semua Tersedia Disini
</h2> <div class="container px-5 py-24 mx-auto flex flex-wrap" data-astro-cid-j7pv25f6> <!-- Item 1: Alat Pemadam Api --> <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto" data-astro-cid-j7pv25f6> <div class="h-full w-6 absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="h-full w-1 bg-red-300 pointer-events-none" data-astro-cid-j7pv25f6></div> </div> <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-600 text-white relative z-10 title-font font-medium text-sm" data-astro-cid-j7pv25f6></div> <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-astro-cid-j7pv25f6> <div class="flex-shrink-0 w-24 h-24 bg-red-100 text-red-600 rounded-full inline-flex items-center justify-center transition duration-300 transform hover:scale-110 hover:bg-red-700 hover:text-white" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path d="M10.5,7H11.75L12,5H10.25L6,7.5V9H4V6.5L10,3H12V2H14V3H16L17,2.5V5.5L16,5H14L14.25,7H15.5A1.5,1.5 0 0,1 17,8.5V22H9V8.5A1.5,1.5 0 0,1 10.5,7Z" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" data-astro-cid-j7pv25f6> <div class="font-medium title-font text-white mb-1 text-xl" data-astro-cid-j7pv25f6>
Alat Pemadam Api
</div> <p class="leading-relaxed" data-astro-cid-j7pv25f6>
APAR, APAB, dan Fire Blanket untuk perlindungan kebakaran cepat
              dan efektif.
</p> </div> </div> </div> <!-- Item 2: Fire Alarm --> <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto" data-astro-cid-j7pv25f6> <div class="h-full w-6 absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="h-full w-1 bg-yellow-300 pointer-events-none" data-astro-cid-j7pv25f6></div> </div> <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-600 text-white relative z-10 title-font font-medium text-sm" data-astro-cid-j7pv25f6></div> <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-astro-cid-j7pv25f6> <div class="flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full inline-flex items-center justify-center transition duration-300 transform hover:scale-110 hover:bg-yellow-700 hover:text-white" data-astro-cid-j7pv25f6> <!-- Fire Alarm SVG Icon --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12" data-astro-cid-j7pv25f6> <path fill="currentColor" d="M15,18.66V22H5V18.66C8.09,20.45 11.91,20.45 15,18.66M22,4A2,2 0 0,0 20,2C19.69,2 19.39,2.07 19.12,2.21C18.82,2.36 18.56,2.58 18.36,2.85C17.72,3.75 17.94,5 18.85,5.64C19.18,5.87 19.59,6 20,6C20.08,6 20.16,6 20.24,6C21.97,10.43 20.66,15.46 17,18.5C16.68,18.75 16.35,19 16,19.22V21H17V19.74C20.14,17.5 22,13.86 22,10C22,8.5 21.72,7 21.17,5.62C21.69,5.24 22,4.64 22,4M18,10A8,8 0 0,1 10,18A8,8 0 0,1 2,10A8,8 0 0,1 10,2A8,8 0 0,1 18,10Z" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" data-astro-cid-j7pv25f6> <div class="font-medium title-font text-white mb-1 text-xl" data-astro-cid-j7pv25f6>
Fire Alarm
</div> <p class="leading-relaxed" data-astro-cid-j7pv25f6>
Fire Alarm Addressable dan Konvensional untuk deteksi dini
              kebakaran.
</p> </div> </div> </div> <!-- Item 3: Fire Hydrant --> <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto" data-astro-cid-j7pv25f6> <div class="h-full w-6 absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="h-full w-1 bg-blue-300 pointer-events-none" data-astro-cid-j7pv25f6></div> </div> <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-600 text-white relative z-10 title-font font-medium text-sm" data-astro-cid-j7pv25f6></div> <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-astro-cid-j7pv25f6> <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-600 rounded-full inline-flex items-center justify-center transition duration-300 transform hover:scale-110 hover:bg-blue-700 hover:text-white" data-astro-cid-j7pv25f6> <!-- Fire Hydrant SVG Icon --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12" data-astro-cid-j7pv25f6> <path fill="currentColor" d="M5 15V14H4V12H5V11H7V15H5M19 12V11H17V15H19V14H20V12H19M18 6H15.86C15.5 4.6 14.4 3.5 13 3.14V2H11V3.14C9.6 3.5 8.5 4.6 8.14 6H6V8H18V6M18 22H6C6 20.9 6.9 20 8 20V9H16V20C17.11 20 18 20.9 18 22M10 13C10 14.11 10.9 15 12 15S14 14.11 14 13 13.11 11 12 11 10 11.9 10 13Z" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" data-astro-cid-j7pv25f6> <div class="font-medium title-font text-white mb-1 text-xl" data-astro-cid-j7pv25f6>
Fire Hydrant
</div> <p class="leading-relaxed" data-astro-cid-j7pv25f6>
Perlengkapan Fire Hydrant dan Sprinkler untuk proteksi maksimal.
</p> </div> </div> </div> <!-- Item 4: Fire System --> <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto" data-astro-cid-j7pv25f6> <div class="h-full w-6 absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="h-full w-1 bg-green-300 pointer-events-none" data-astro-cid-j7pv25f6></div> </div> <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-600 text-white relative z-10 title-font font-medium text-sm" data-astro-cid-j7pv25f6></div> <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-astro-cid-j7pv25f6> <div class="flex-shrink-0 w-24 h-24 bg-green-100 text-green-600 rounded-full inline-flex items-center justify-center transition duration-300 transform hover:scale-110 hover:bg-green-700 hover:text-white" data-astro-cid-j7pv25f6> <!-- Fire System SVG Icon --> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12" data-astro-cid-j7pv25f6> <path fill="currentColor" d="M14.66 14.18C14.69 14.29 14.7 14.4 14.7 14.5C14.73 15.15 14.44 15.85 13.97 16.28C13.75 16.47 13.39 16.67 13.11 16.75C12.23 17.06 11.35 16.62 10.83 16.11C11.77 15.89 12.32 15.21 12.5 14.5C12.62 13.89 12.37 13.38 12.27 12.78C12.17 12.2 12.19 11.71 12.4 11.18C12.55 11.47 12.71 11.77 12.9 12C13.5 12.78 14.45 13.12 14.66 14.18M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12 6.5 2 12 2 22 6.5 22 12M17.16 12.56L17.06 12.36C16.9 12 16.45 11.38 16.45 11.38C16.27 11.15 16.05 10.94 15.85 10.74C15.32 10.27 14.73 9.94 14.22 9.45C13.05 8.31 12.79 6.44 13.54 5C12.79 5.18 12.14 5.58 11.58 6.03C9.55 7.65 8.75 10.5 9.71 12.95C9.74 13.03 9.77 13.11 9.77 13.21C9.77 13.38 9.65 13.53 9.5 13.6C9.31 13.67 9.13 13.63 9 13.5C8.93 13.46 8.9 13.42 8.87 13.37C8 12.26 7.84 10.66 8.43 9.39C7.12 10.45 6.41 12.24 6.5 13.92C6.56 14.31 6.6 14.7 6.74 15.09C6.85 15.56 7.06 16 7.3 16.44C8.14 17.78 9.61 18.75 11.19 18.94C12.87 19.15 14.67 18.85 15.96 17.7C17.4 16.4 17.9 14.33 17.16 12.56Z" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" data-astro-cid-j7pv25f6> <div class="font-medium title-font text-white mb-1 text-xl" data-astro-cid-j7pv25f6>
Fire System
</div> <p class="leading-relaxed" data-astro-cid-j7pv25f6>
Sistem proteksi kebakaran komprehensif dengan Foam dan Water Mist.
</p> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "Keunggulan", $$Keunggulan, { "data-astro-cid-j7pv25f6": true })}  <section class="text-gray-900 body-font py-10 bg-gradient-to-r from-blue-500 to-blue-800 animate-gradient-x" data-astro-cid-j7pv25f6> <div class="text-center text-white mt-10 mb-12 text-opacity-75 mx-auto" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-bold text-shadow-md" data-astro-cid-j7pv25f6>
Produk Dengan Inovasi Terbaru Kami
</h2> </div> <div class="flex flex-wrap justify-center gap-8 my-8 px-3" data-astro-cid-j7pv25f6> <!-- First Card --> <div class="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-2xl w-96 hover:scale-105 transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="relative p-5 h-96 overflow-hidden rounded-xl bg-clip-border" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": product1robot, "alt": "product-robot", "class": "h-full w-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110", "format": "webp", "width": 400, "height": 400, "data-astro-cid-j7pv25f6": true })} </div> <div class="p-5 flex flex-col justify-between flex-grow" data-astro-cid-j7pv25f6> <div class="mb-4" data-astro-cid-j7pv25f6> <p class="text-slate-800 text-xl font-semibold" data-astro-cid-j7pv25f6>
SMART FIREFIGHTING ROBOT SERIES
</p> </div> <a href="/robotfire" class="rounded-full w-full bg-blue-600 py-3 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-blue-700 focus:bg-blue-700 focus:shadow-none active:bg-blue-700 active:shadow-none hover:scale-105" role="button" data-astro-cid-j7pv25f6>
Lihat Detail
</a> </div> </div> <!-- Second Card --> <div class="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-2xl w-96 hover:scale-105 transition-transform duration-300" data-astro-cid-j7pv25f6> <div class="relative p-3 h-96 overflow-hidden rounded-xl bg-clip-border" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": product2jet, "alt": "product-jetwater", "class": "h-full w-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110", "format": "webp", "width": 400, "height": 400, "data-astro-cid-j7pv25f6": true })} </div> <div class="p-5 flex flex-col justify-between flex-grow" data-astro-cid-j7pv25f6> <div class="mb-4" data-astro-cid-j7pv25f6> <p class="text-slate-800 text-xl font-semibold" data-astro-cid-j7pv25f6>
AUTOMATIC TRACKING AND AIMING JET FIRE EXTINGUISHING DEVICE
</p> </div> <a href="/cctv" class="rounded-full w-full bg-blue-600 py-3 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-blue-700 focus:bg-blue-700 focus:shadow-none active:bg-blue-700 active:shadow-none hover:scale-105" role="button" data-astro-cid-j7pv25f6>
Lihat Detail
</a> </div> </div> </div> <div class="container mx-auto" data-astro-cid-j7pv25f6> <div class="text-center text-white mt-36 mb-12 text-opacity-75 mx-auto" data-astro-cid-j7pv25f6> <h2 class="text-4xl font-bold inline-block text-shadow-sm" data-astro-cid-j7pv25f6>
Produk Kami Lainnya
</h2> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 py-10 lg:px-36" data-astro-cid-j7pv25f6> <!-- Card 1: APAR --> <div class="relative bg-white shadow-xl overflow-hidden group rounded-lg" data-astro-cid-j7pv25f6> <figure class="h-56 w-full rounded-lg overflow-hidden" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": aparImage, "alt": "APAR", "width": 800, "height": 550, "format": "webp", "quality": 85, "class": "w-full h-full object-cover", "data-astro-cid-j7pv25f6": true })} </figure> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg p-4" data-astro-cid-j7pv25f6> <div class="text-white text-2xl mb-4 text-center font-bold" data-astro-cid-j7pv25f6>
APAR
</div> <p class="text-white mb-4 text-center" data-astro-cid-j7pv25f6>
Alat Pemadam Api Ringan untuk proteksi kebakaran cepat dan
              efektif.
</p> <a href="/produk/apar" class="px-6 py-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300" data-astro-cid-j7pv25f6>
Selengkapnya
</a> </div> </div> <!-- Card 2: Fire Alarm --> <div class="relative bg-white shadow-xl overflow-hidden group rounded-lg" data-astro-cid-j7pv25f6> <figure class="h-56 w-full rounded-lg overflow-hidden" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": fireAlarmImage, "alt": "Fire Alarm", "width": 800, "height": 550, "format": "webp", "quality": 85, "class": "w-full h-full object-cover", "data-astro-cid-j7pv25f6": true })} </figure> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg p-4" data-astro-cid-j7pv25f6> <div class="text-white text-2xl mb-4 text-center font-bold" data-astro-cid-j7pv25f6>
Fire Alarm
</div> <p class="text-white mb-4 text-center" data-astro-cid-j7pv25f6>
Fire Alarm untuk deteksi dini kebakaran.
</p> <a href="/produk/firealarm" class="px-6 py-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300" data-astro-cid-j7pv25f6>
Selengkapnya
</a> </div> </div> <!-- Card 3: Fire Sprinkler --> <div class="relative bg-white shadow-xl overflow-hidden group rounded-lg" data-astro-cid-j7pv25f6> <figure class="h-56 w-full rounded-lg overflow-hidden" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": fireSprinklerImage, "alt": "Fire Sprinkler", "width": 800, "height": 550, "format": "webp", "quality": 85, "class": "w-full h-full object-cover", "data-astro-cid-j7pv25f6": true })} </figure> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg p-4" data-astro-cid-j7pv25f6> <div class="text-white text-2xl mb-4 text-center font-bold" data-astro-cid-j7pv25f6>
Fire Sprinkler
</div> <p class="text-white mb-4 text-center" data-astro-cid-j7pv25f6>
Perlengkapan Fire Sprinkler untuk proteksi maksimal.
</p> <a href="/produk/firesprinkler" class="px-6 py-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300" data-astro-cid-j7pv25f6>
Selengkapnya
</a> </div> </div> <!-- Card 4: Fire Pump --> <div class="relative bg-white shadow-xl overflow-hidden group rounded-lg" data-astro-cid-j7pv25f6> <figure class="h-56 w-full rounded-lg overflow-hidden" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": firepump, "alt": "Fire Sprinkler", "width": 800, "height": 550, "format": "webp", "quality": 85, "class": "w-full h-full object-cover", "data-astro-cid-j7pv25f6": true })} </figure> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg p-4" data-astro-cid-j7pv25f6> <div class="text-white text-2xl mb-4 text-center font-bold" data-astro-cid-j7pv25f6>
Fire Pump
</div> <p class="text-white mb-4 text-center" data-astro-cid-j7pv25f6>
Fire Pump untuk memastikan suplai air kebakaran.
</p> <a href="/produk/firepump" class="px-6 py-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300" data-astro-cid-j7pv25f6>
Selengkapnya
</a> </div> </div> </div> </div> </section>  <section class="text-gray-900 bg-white py-16 px-2" data-astro-cid-j7pv25f6> <div class="container mx-auto" data-astro-cid-j7pv25f6> <!-- Section Header --> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold text-gray-800" data-astro-cid-j7pv25f6>Klien Terpercaya Kami</h2> <p class="mt-4 text-gray-600 md:px-32 px-1" data-astro-cid-j7pv25f6>
Kami bangga telah bekerja sama dengan berbagai perusahaan terkemuka
          untuk menghadirkan solusi perlindungan kebakaran yang terbaik. Jadilah
          bagian dari mereka dan pastikan keamanan bisnis Anda bersama kami.
</p> </div> <!-- Partners Logos --> ${renderComponent($$result2, "Logopartner", $$Logopartner, { "data-astro-cid-j7pv25f6": true })} <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": lebihdari100klient, "alt": "100++ client", "class": "w-screen md:w-9/12 mx-auto mt-10", "data-astro-cid-j7pv25f6": true })} </div> <!-- CTA Buttons --> <div class="flex justify-center mt-10 space-x-6" data-astro-cid-j7pv25f6> <a href="/portofolio" class="no-underline" data-astro-cid-j7pv25f6> <button class="px-6 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300 hover:shadow-lg transform hover:scale-105" data-astro-cid-j7pv25f6>
Lihat Portofolio Klien
</button> </a> </div> </div> </section>  <section class="py-12 bg-white" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <!-- Header Section --> <div class="text-center mb-8" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold text-gray-900" data-astro-cid-j7pv25f6>
Jaminan Standar Kualitas Internasional
</h2> <p class="mt-4 text-lg text-gray-600" data-astro-cid-j7pv25f6>
Produk kami telah teruji dan mengikuti standar internasional,
          memastikan keamanan dan kualitas terbaik untuk kebutuhan Anda.
</p> </div> <!-- Sertifikasi Gambar --> <div class="grid grid-cols-1 sm:grid-cols-3 " data-astro-cid-j7pv25f6> <!-- Sertifikat 1 --> <div class="flex justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": sertifikat, "alt": "Sertifikat 1", "class": "max-w-full h-auto", "loading": "lazy", "width": 2048, "height": 712, "format": "webp", "data-astro-cid-j7pv25f6": true })} </div> <!-- Sertifikat 2 --> <div class="flex justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": sertifikat2, "alt": "Sertifikat 2", "class": "max-w-full h-auto", "loading": "lazy", "width": 2048, "height": 712, "format": "webp", "data-astro-cid-j7pv25f6": true })} </div> <!-- Sertifikat 3 --> <div class="flex justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": sertifikat3, "alt": "Sertifikat 3", "class": "max-w-full h-auto", "loading": "lazy", "width": 2048, "height": 712, "format": "webp", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="flex justify-center bg-gray-100 mt-20" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": certificationImageUrl, "alt": "Sertifikasi Resmi", "class": "max-w-full h-auto shadow-lg rounded-lg", "loading": "lazy", "width": 2048, "height": 712, "format": "webp", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/index.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };