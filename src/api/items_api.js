const axios = require('axios');

//Метод извлечения всех товаров из базы данных
function _getItems() {
let items =  axios.get("./items.json")
  .then(response => response.data.items);
return items;
}

export {_getItems}
