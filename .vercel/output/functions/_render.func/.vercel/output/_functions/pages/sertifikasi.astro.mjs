import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CuHTeFs0.mjs';
import { $ as $$Heropagetitle } from '../chunks/heropagetitle_DN9q-62X.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tigrisfire.com/");
const $$Sertifikasi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sertifikasi;
  const { pagetitle = "Sertifikasi", pagesubtitle = "Maantap" } = Astro2.props;
  const titlemeta = "Sertifikasi Tigrisfire | Layanan Proteksi Kebakaran Terpercaya di Indonesia";
  const descriptionmeta = "Perusahaan kami telah meraih berbagai sertifikasi untuk menjamin kualitas, keamanan, dan layanan terbaik bagi pelanggan. .";
  const keywordsmeta = "sertifikasi perusahaan, manajemen mutu, keamanan, kualitas, Nama Perusahaan, sertifikasi ISO, sertifikasi industri, layanan terbaik, profesional";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heropagetitle", $$Heropagetitle, { "pagetitle": pagetitle })} ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/sertifikasi.astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/sertifikasi.astro";
const $$url = "/sertifikasi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sertifikasi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
