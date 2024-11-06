import { f as fetchContentfulData } from '../../chunks/contentful_5aJ_IuiX.mjs';
export { renderers } from '../../renderers.mjs';

// src/pages/api/revalidate.js

async function post({ request }) {
  try {
    // Paksa refresh cache
    await fetchContentfulData(true); // Mengatur parameter `true` untuk paksa refresh

    return new Response(JSON.stringify({ message: "Cache diperbarui!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Terjadi kesalahan." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
