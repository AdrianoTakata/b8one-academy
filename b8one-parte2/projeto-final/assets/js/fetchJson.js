function fetchJson(url, options) {
  return fetch(url, options).then((response) => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error(response.statusText);
      }
  }).catch(error => {
      return false;
  });
}

export default fetchJson;