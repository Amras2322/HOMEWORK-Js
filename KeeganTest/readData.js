const fetch = require('isomorphic-fetch');
const params = {
  apiKey: 'JAt2QvcpexsoAC3aLsxoPHeyBKvCHiiG212XnbZTmFT25uZw7-Dn95grYIY',
  spreadsheetId: '1R8FT2Ars9ZdW2aXULX-ppLMgU2tYmGcQxAPCyNPHwrw',
};
const url = new URL('https://api.sheetson.com/v2/sheets/Sheet1');
Object.keys(params).forEach((key) =>
  url.searchParams.append(key, encodeURIComponent(params[key])),
);
fetch(url)
  .then((r) => r.json())
  .then((result) => console.log(result));
