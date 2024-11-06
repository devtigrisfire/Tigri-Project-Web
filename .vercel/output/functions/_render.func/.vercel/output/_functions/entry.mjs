import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_31L0ax7z.mjs';
import { manifest } from './manifest_11HIWXZO.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/revalidate.astro.mjs');
const _page3 = () => import('./pages/cctv/_slug_.astro.mjs');
const _page4 = () => import('./pages/cctv.astro.mjs');
const _page5 = () => import('./pages/firetraining.astro.mjs');
const _page6 = () => import('./pages/inspeksiapargratis.astro.mjs');
const _page7 = () => import('./pages/kontak.astro.mjs');
const _page8 = () => import('./pages/layanankami.astro.mjs');
const _page9 = () => import('./pages/maintenance.astro.mjs');
const _page10 = () => import('./pages/portofolio.astro.mjs');
const _page11 = () => import('./pages/posts/_slug_.astro.mjs');
const _page12 = () => import('./pages/posts.astro.mjs');
const _page13 = () => import('./pages/produk/apar.astro.mjs');
const _page14 = () => import('./pages/produk/firealarm.astro.mjs');
const _page15 = () => import('./pages/produk/firepump.astro.mjs');
const _page16 = () => import('./pages/produk/firesprinkler.astro.mjs');
const _page17 = () => import('./pages/produk/firesystems.astro.mjs');
const _page18 = () => import('./pages/produkkami.astro.mjs');
const _page19 = () => import('./pages/refil.astro.mjs');
const _page20 = () => import('./pages/robotfire/_slug_.astro.mjs');
const _page21 = () => import('./pages/robotfire.astro.mjs');
const _page22 = () => import('./pages/sertifikasi.astro.mjs');
const _page23 = () => import('./pages/tentangkami.astro.mjs');
const _page24 = () => import('./pages/test.astro.mjs');
const _page25 = () => import('./pages/tigrisproduct/_slug_.astro.mjs');
const _page26 = () => import('./pages/tigrisproduct.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/revalidate.js", _page2],
    ["src/pages/cctv/[slug].astro", _page3],
    ["src/pages/cctv/index.astro", _page4],
    ["src/pages/firetraining.astro", _page5],
    ["src/pages/inspeksiapargratis.astro", _page6],
    ["src/pages/kontak.astro", _page7],
    ["src/pages/layanankami.astro", _page8],
    ["src/pages/maintenance.astro", _page9],
    ["src/pages/portofolio/index.astro", _page10],
    ["src/pages/posts/[slug].astro", _page11],
    ["src/pages/posts/index.astro", _page12],
    ["src/pages/produk/apar.astro", _page13],
    ["src/pages/produk/firealarm.astro", _page14],
    ["src/pages/produk/firepump.astro", _page15],
    ["src/pages/produk/firesprinkler.astro", _page16],
    ["src/pages/produk/firesystems.astro", _page17],
    ["src/pages/produkkami.astro", _page18],
    ["src/pages/refil.astro", _page19],
    ["src/pages/robotfire/[slug].astro", _page20],
    ["src/pages/robotfire/index.astro", _page21],
    ["src/pages/sertifikasi.astro", _page22],
    ["src/pages/tentangkami.astro", _page23],
    ["src/pages/test.astro", _page24],
    ["src/pages/tigrisproduct/[slug].astro", _page25],
    ["src/pages/tigrisproduct/index.astro", _page26],
    ["src/pages/index.astro", _page27]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3c596741-066d-4fe8-9dfa-28ea9427e6bb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
