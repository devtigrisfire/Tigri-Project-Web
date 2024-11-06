import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot, b as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_rrdLqZHv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CuHTeFs0.mjs';
import { c as contentfulClient } from '../../chunks/contentful_DXaELXkG.mjs';
import 'clsx';
/* empty css                                     */
import { marked } from 'marked';
export { renderers } from '../../renderers.mjs';

const $$Astro$8 = createAstro("https://tigrisfire.com/");
const $$Email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Email;
  const { url = Astro2.request.url, title, description } = Astro2.props;
  let URL = `mailto:?subject=${title}&body=${description}%0A${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-6mwf65d6> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-6mwf65d6><title>Email</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" data-astro-cid-6mwf65d6></path></svg> `)} </a>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/Email.astro", void 0);

const $$Astro$7 = createAstro("https://tigrisfire.com/");
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Facebook;
  const { url = Astro2.request.url } = Astro2.props;
  let URL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-nksckkzh> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nksckkzh><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-nksckkzh></path></svg> `)} </a>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/Facebook.astro", void 0);

const $$Astro$6 = createAstro("https://tigrisfire.com/");
const $$HackerNews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HackerNews;
  const { url = Astro2.request.url, title } = Astro2.props;
  let URL = `http://news.ycombinator.com/submitlink?u=${url}&t=${title}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-upxiorz7> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-upxiorz7><title>Y Combinator</title><path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" data-astro-cid-upxiorz7></path></svg> `)} </a>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/HackerNews.astro", void 0);

const $$Astro$5 = createAstro("https://tigrisfire.com/");
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  const { url = Astro2.request.url } = Astro2.props;
  let URL = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-lja7htzy> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-lja7htzy><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-lja7htzy></path></svg> `)} </a>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/LinkedIn.astro", void 0);

const $$Astro$4 = createAstro("https://tigrisfire.com/");
const $$Reddit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Reddit;
  const { url = Astro2.request.url, title } = Astro2.props;
  const encoded_url = encodeURIComponent(url);
  let URL = `https://www.reddit.com/submit?url=${encoded_url}&title=${title}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-qrrmiaqu> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-qrrmiaqu><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" data-astro-cid-qrrmiaqu></path></svg> `)} </a>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/Reddit.astro", void 0);

const $$Astro$3 = createAstro("https://tigrisfire.com/");
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Twitter;
  const { url = Astro2.request.url, description, via } = Astro2.props;
  let URL = `https://twitter.com/intent/tweet?url=${url}`;
  if (description) URL += `&text=${description}`;
  if (via) URL += `&via=${via}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-a232q27d> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-a232q27d><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" data-astro-cid-a232q27d></path></svg> `)} </a>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/Twitter.astro", void 0);

const $$Astro$2 = createAstro("https://tigrisfire.com/");
const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  const { url = Astro2.request.url, description, style } = Astro2.props;
  let URL = `whatsapp://send?text=`;
  if (description) URL += `${description} `;
  URL += `${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(encodeURI(URL), "href")} rel="noopener noreferrer" data-action="share/whatsapp/share" data-astro-cid-pvkfizkd> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-pvkfizkd><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-pvkfizkd></path></svg> `)} </a>`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/Whatsapp.astro", void 0);

const $$Astro$1 = createAstro("https://tigrisfire.com/");
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const DEFAULT_COMPONENTS = [$$Twitter, $$Facebook, $$HackerNews, $$LinkedIn, $$Reddit, $$Email, $$Whatsapp];
  const { buttons = DEFAULT_COMPONENTS, url = Astro2.request.url, title, description, via } = Astro2.props;
  return renderTemplate`${renderSlot($$result, $$slots["astro-social-share-css"], renderTemplate`  ${maybeRenderHead()}<div class="astro-social-share"> ${buttons.map((Button) => renderTemplate`${renderComponent($$result, "Button", Button, { "url": url, "description": description, "via": via, "title": title })}`)} </div>`)}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/node_modules/astro-social-share/src/SocialShare.astro", void 0);

const $$Astro = createAstro("https://tigrisfire.com/");
async function getStaticPaths() {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost"
  });
  return entries.items.map((item) => ({
    params: { slug: item.fields.slug }
    // Menentukan slug yang akan di-generate
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
    "fields.slug": slug
  });
  if (!entries.items.length) {
    throw new Error("Post not found");
  }
  const post = entries.items[0].fields;
  const contentHtml = marked(post.content.toString());
  const relatedPostsEntries = await contentfulClient.getEntries({
    content_type: "blogPost",
    limit: 3,
    // Batasi jumlah related posts
    "fields.slug[ne]": slug
    // Exclude current post by slug
  });
  const relatedPosts = relatedPostsEntries.items.map((item) => {
    const { title, slug: slug2, description, date, image } = item.fields;
    return {
      title,
      slug: slug2,
      description,
      date: new Date(date).toLocaleDateString(),
      imageUrl: image ? image["fields"]["file"]["url"] : null
    };
  });
  const titlemeta = post.metatitle || post.title;
  const descriptionmeta = post.metadeskripsi || post.description;
  const keywordsmeta = post.metakeywords || "default, keywords";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "titlemeta": titlemeta, "descriptionmeta": descriptionmeta, "keywordsmeta": keywordsmeta, "imagemeta": post["image"]["fields"]["file"]["url"] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <!-- Bagian Header --> <time class="block text-center text-gray-500 text-sm"> ${new Date(post.date).toLocaleDateString()} </time> <h1 class="text-5xl font-extrabold text-center text-black mb-8"> ${post.title} </h1> <div class="border-t-2 border-gray-400 mb-10"></div> <!-- Gambar Post --> ${post.image && renderTemplate`<div class="flex items-center justify-center overflow-hidden rounded-lg mb-11"> <img${addAttribute(post["image"]["fields"]["file"]["url"], "src")}${addAttribute(post.title, "alt")} class=" object-cover"> </div>`} <!-- Bagian Artikel --> <div> <article class="prose mx-auto bg-white shadow-md rounded-lg p-2 md:p-16"> <!-- Konten yang sudah dikonversi dari Markdown ke HTML --> <div>${unescapeHTML(contentHtml)}</div> </article> </div> <!-- Bagian Footer atau tambahan lainnya --> <div class="text-center mt-12"> <a href="/posts" class="inline-block text-blue-600 text-lg font-semibold hover:underline">
&larr; Kembali ke Blog
</a> </div> </div> <div class="text-center"> <p>Share Social Media</p> ${renderComponent($$result2, "SocialShare", $$SocialShare, { "description": "", "title": "" })} </div>  <div class="container max-w-7xl mx-auto px-5 md:px-20 py-12"> <h2 class="text-3xl font-bold text-center mb-8">Related Posts</h2> <!-- Grid Container for 3 Posts per Row --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${relatedPosts.map((post2) => renderTemplate`<div class="group relative bg-white overflow-hidden rounded-3xl transition-all duration-500 ease-in-out transform hover:scale-105"> <!-- Image Section --> <div class="relative overflow-hidden rounded-3xl transition-shadow duration-500 ease-in-out"> ${post2.imageUrl && renderTemplate`<img${addAttribute(post2.imageUrl, "src")}${addAttribute(post2.title, "alt")} class="w-full h-full max-h-fit object-cover transition-all duration-500 ease-in-out">`} <!-- Overlay on hover --> <div class="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-60 transition-opacity duration-500 ease-in-out"></div> </div> <!-- Content Section --> <div class="p-3"> <h2 class="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 truncate"> ${post2.title} </h2> <p class="text-gray-600 mt-3 truncate"> ${post2.description} </p> <a${addAttribute(`/posts/${post2.slug}`, "href")} class="mt-4 inline-flex items-center justify-center px-4 py-2 border-2 border-black text-black rounded-3xl hover:bg-black hover:text-white transition duration-300 ease-in-out">
Read more
</a> </div> </div>`)} </div> </div> ` })}`;
}, "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/posts/[slug].astro", void 0);

const $$file = "D:/1.BELAJAR/Rumah Api Web/Web Coding/tigrisfirexastro -Vercel SSR/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
