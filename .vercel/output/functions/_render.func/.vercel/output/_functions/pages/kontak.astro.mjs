import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CuHTeFs0.mjs';
import { $ as $$Heropagetitle } from '../chunks/heropagetitle_DN9q-62X.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tigrisfire.com/");
const $$Kontak = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kontak;
  const { pagetitle = "Kontak" } = Astro2.props;
  const titlemeta = "Hubungi Tigrisfire | Layanan Proteksi Kebakaran Terpercaya di Indonesia";
  const descriptionmeta = "Hubungi Tigrisfire untuk layanan proteksi kebakaran terpercaya. Konsultasikan kebutuhan APAR, sistem pemadam, dan solusi keamanan lainnya dengan tim ahli kami.";
  const keywordsmeta = "kontak Tigrisfire, layanan proteksi kebakaran, hubungi Tigrisfire, konsultasi APAR, sistem pemadam kebakaran, solusi keamanan, informasi kontak Tigrisfire, layanan pemadam kebakaran";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle })} ${maybeRenderHead()}<section class="body-font relative"> <div class="absolute inset-0"> <iframe width="100%" height="100%" title="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.8856021780334!2d106.89601807926309!3d-6.146063977960163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDgnNDUuOCJTIDEwNsKwNTQnMDMuMiJF!5e0!3m2!1sid!2sid!4v1726586379831!5m2!1sid!2sid" style="filter: contrast(1.2) opacity(0.6);"></iframe> </div> <div class="container px-5 py-24 mx-auto flex"> <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"> <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
Alamat Kami :
</h2> <p class="leading-relaxed mb-5 text-gray-600">
PT. Tigris Berkat Sejati<br> <a href="https://maps.app.goo.gl/n7RwDzW5ijVHr2BDA">
Jl. Tigris No 7.8.9 Kp Pintu, Babelan Kota, Kec. Babelan, Kabupaten
            Bekasi, Jawa Barat, Indonesia
</a> </p> <h3 class="text-gray-900 text-lg mb-1 font-medium title-font">
Email Kami :
</h3> <p class="leading-relaxed mb-5 text-gray-600">
sales@tigrisfire.com
</p><h4 class="text-gray-900 text-lg mb-1 font-medium title-font">
Hubungi Kami :
</h4> <p class="leading-relaxed mb-5 text-gray-600"> <a href="https://wa.me/6281382529368?text=Hallo%20Tigrisfire%2C%20Saya%20Mau%20Konsultasi%20dong" target="_blank">+62 877 8750 0580</a> </p>  </div> </div> </section> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/kontak.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/kontak.astro";
const $$url = "/kontak";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontak,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
