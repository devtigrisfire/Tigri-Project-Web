import contentful from 'contentful';

const contentfulClient = contentful.createClient({
  space: "ud35kouns4pl",
  accessToken: "CJQ5Nv7gK8-w9ll0RMyGNoAVkVRPmok0JFicOW3_NeA",
  host: "cdn.contentful.com"
});

export { contentfulClient as c };
