const axios = require('axios');

//Метод извлечения всех товаров из базы данных
function _getItems() {
let items =  axios.get("http://localhost:8081/")
  .then(response => response.data);

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

//Метод добавления нового товара в базу данных
function _addNewItem(title, price, quantity) {
  console.log(title);
  console.log(price);
  console.log(quantity);

 //let items =  axios.post("http://localhost:8081/")
//  .then(response => response.data);

}

export {_getItems, _getItemsById, _addNewItem}
