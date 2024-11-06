import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://tigrisfire.com/");
const $$Heropagetitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heropagetitle;
  const { pagetitle } = Astro2.props;
  const { pagesubtitle = "Solusi Proteksi Kebakaran Terbaik untuk Keamanan Aset Anda" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 py-20 w-full overflow-hidden group" data-astro-cid-kuawnuu3> <!-- Moving Background Gradient --> <div class="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-600 bg-gradient-animate group-hover:animate-gradient-move transition-transform duration-500" data-astro-cid-kuawnuu3></div> <!-- Flame-Like Particle Effect --> <div class="absolute top-0 left-0 w-full h-full opacity-50 overflow-hidden" data-astro-cid-kuawnuu3> <!-- Flame Particles --> <div class="absolute bottom-0 left-10 w-10 h-10 bg-blue-600 rounded-sm transform rotate-45 mix-blend-overlay animate-ping-slow" data-astro-cid-kuawnuu3></div> <div class="absolute bottom-10 left-20 w-8 h-8 bg-blue-500 rounded-sm transform rotate-45 mix-blend-overlay animate-ping-slow" data-astro-cid-kuawnuu3></div> <div class="absolute bottom-5 right-10 w-12 h-12 bg-blue-400 rounded-sm transform rotate-45 mix-blend-overlay animate-ping-slow" data-astro-cid-kuawnuu3></div> <div class="absolute bottom-16 right-16 w-9 h-9 bg-blue-800 rounded-sm transform rotate-45 mix-blend-overlay animate-ping-slow" data-astro-cid-kuawnuu3></div> <div class="absolute bottom-20 left-32 w-6 h-6 bg-blue-700 rounded-sm transform rotate-45 mix-blend-overlay animate-ping-slow" data-astro-cid-kuawnuu3></div> </div> <!-- Banner Content --> <div class="relative z-10 w-full text-center px-2" data-astro-cid-kuawnuu3> <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-wide transition duration-500 group-hover:scale-110 group-hover:tracking-wider group-hover:transform group-hover:-translate-y-2" data-astro-cid-kuawnuu3> ${pagetitle} </h1> <p class="text-white text-lg md:text-xl mt-4 transition-opacity duration-500 group-hover:opacity-90" data-astro-cid-kuawnuu3> ${pagesubtitle} </p> </div> </section> <!-- Custom Animations (add to tailwind.config.js or custom CSS section) --> `;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/components/heropagetitle.astro", void 0);

export { $$Heropagetitle as $ };
