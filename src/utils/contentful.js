// src/utils/contentful.js
import { contentfulClient } from "../lib/contentful";

let cache = null;
let lastFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000; // Cache selama 5 menit

export async function fetchContentfulData(forceRefresh = false) {
  const now = Date.now();

  // Jika cache masih valid dan tidak dipaksa refresh, gunakan cache
  if (cache && !forceRefresh && (now - lastFetch < CACHE_DURATION)) {
    return cache;
  }

  // Jika cache sudah kadaluarsa atau dipaksa refresh, ambil data dari Contentful
  const entries = await contentfulClient.getEntries({ content_type: "blogPost" });
  
  // Simpan data ke cache
  cache = entries;
  lastFetch = now;

  return cache;
}
