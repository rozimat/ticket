const speakerWrap = document.querySelector('#wrapper-speakers');

const url = 'http://localhost:4000/api/admin/speakerGet'

 const getData = async (url) => {
  try {
    const response = await axios.get(`${url}`);
    const data = response.data;

    console.log(data);

    return newTodoItem;
  } catch (errors) {
    console.error(errors);
  }
};
getData(url)