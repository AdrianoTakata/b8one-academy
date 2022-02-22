import fetchJson from "./http.js";


async function main() {

  const url = "https://clone-youtube-api-d5dmr.ondigitalocean.app/";
  const dataApi = await fetchJson(url);

  console.log(dataApi);
}

main();