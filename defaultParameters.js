// old default paramters
function fetchOrders(count, start) {
    if (count === undefined) {
        count = 10;
    }

    if (start === undefined){
        start = 0;
    }
}

// new default parameters ecma 2019
function fetchOrders2(count = 10, start = 0){
    console.log('Greeting', count,
      'orders tarting from', start);
}
fetchOrders2();
// Объект по умолчанию
function findProducts (opts = {minPrice: 10, maxPrice: 20}){
  console.log(opts);
}

findProducts();
