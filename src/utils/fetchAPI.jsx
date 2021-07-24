const fetchAPI = async (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
    .then((json) => json)
    .catch((error) => { throw error; });
};

export default fetchAPI;
