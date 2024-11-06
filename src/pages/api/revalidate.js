// src/pages/api/revalidate.js
import { fetchContentfulData } from '../../utils/contentful';

export async function post({ request }) {
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
