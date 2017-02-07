var shoppinglist = [
  {"name": "Apples", "price":0.99},
  {"name": "Cereal", "price":2.99},
  {"name": "Milk", "price":3.00},
  {"name": "Eggs", "price":1.99},
];

for (i=0; i < shoppinglist.length; i++){
  console.log(shoppinglist[i].name + " will cost you " + shoppinglist[i].price);
};

var sum= 0
shoppinglist.forEach(function(shoppinglist){
    sum += shoppinglist.price;
});
console.log(sum);
