import axios from 'axios';

const baseUrl = 'https://hn.algolia.com/api/v1';

const getFrontNews = async () => {
  const response = await axios.get(`${baseUrl}/search?tags=front_page`);
  console.log(response);
  return response.data;
};

export default { getFrontNews };
