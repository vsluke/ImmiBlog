const contentful = require('contentful');
const CFUL_ACCES_TOKEN = process.env.CFUL_ACCES_TOKEN;

const client = contentful.createClient({
  space: 'gfmhnigbe31h',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: CFUL_ACCES_TOKEN ,
});

export function getBlogPage(slug) {
  return client
    .getEntries({ 'fields.slug': slug, content_type: 'homePage', include: 3 })
    .then((resp) => resp.items[0])
    .catch((err) => console.log(err));
}
export function getBlogPages() {
  return client
    .getEntries({ content_type: 'homePage', include: 3 })
    .then((resp) => resp.items)
    .catch((err) => console.log(err));
}
export function searchBlogPages(query = 'undefined undefined') {
  return client
    .getEntries({ query, content_type: 'homePage', include: 3 })
    .then((resp) => resp.items)
    .catch((err) => console.log(err));
}
