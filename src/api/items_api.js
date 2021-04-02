const axios = require('axios');

//Метод извлечения всех товаров из базы данных
function _getItems() {
let items =  axios.get("/items.json")
  .then(response => response.data.items);
return items;
}

//Метод извлечения товара из базы данных по id
function _getItemsById(item_id) {
let item =  axios.get("../items.json")
  .then(response => response.data.items.find(
  item =>  item.id === item_id
  ));
return item;
}

export {_getItems, _getItemsById}
