import axios from 'axios';

export async function addArticle() {
  const text = (await axios.get('/src/pages/Home/home.mdx')).data;
  axios
    .post('/api/addArticle', {
      title: 'home',
      content: text,
      artist: 'Zhuim',
      layer: 'Home',
      category: 'Home',
      side_category: 'Home',
      created_at: new Date().getTime(),
    })
    .then((res) => {
      console.log('res', res);
    })
    .catch((err) => {
      console.error('err', err);
    });
}
