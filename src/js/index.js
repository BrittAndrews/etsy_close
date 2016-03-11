// // Javascript Entry Point
// import etsyData from './items';
// import $ from 'jquery';

// var products = etsyData.results;

// function getProduct (product) {


// 	var image 			= product.Images[0].url_170x135;
// 	var description = product[0].description;
// 	var price 			= product[0].price;
// 	var title 			= product[0].title;
	


// 	return `
// 		<div class="contentboxes">
//       <div class="box1">
//         <img src="${image}" alt="${description}">
//       </div>
//       <div class="price">${price}</div>
//       <div class="item-title">${title}</div>
//     </div>
//   `;
// }


// products.forEach(function(product){
// 		var itemHtml = getProduct(product);
// 		$('.contentboxescontainer').append(itemHtml);
// });

/////////////////


import etsyData from './items';
import $ from 'jquery';

var products = etsyData.results;

var itemHtml = products.map(function(product) {



	var image 			= product.Images[0].url_170x135;
	var description = product.title;
	var price 			= product.price;
	var title 			= product.title;
	


	return `
		<div class="contentboxes">
      <div class="box1">
        <img src="${image}" alt="${description}">
        </div>
      <div class="item-title">${title}</div>
      <div class="price">${price}</div>
    </div>
  `;
})


		$('.contentboxescontainer').append(itemHtml);


