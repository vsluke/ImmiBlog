const contentful = require('contentful');

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'gfmhnigbe31h',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'H1VFcN-DBW5btIjwIFFkytIXTNH7CVOK-F8WFA4_hGI',
});

export function getBlogPage(slug) {
  return client
    .getEntries({ 'fields.slug': slug, content_type: 'homePage' })
    .then((resp) => resp.items[0])
    .catch((err) => console.log(err));
}
export function getBlogPages() {
  return client
    .getEntries({ content_type: 'homePage' })
    .then((resp) => resp.items)
    .catch((err) => console.log(err));
}
