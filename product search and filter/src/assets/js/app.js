const $ = document;
const IMG_ADDRESS = 'assets/img/';
let products = [
  {
    id: 1,
    name: 'iphone 12',
    price: 1_200,
    category: 'phone',
    img: 'iphone12.jpg',
  },
  {
    id: 2,
    name: 'iphone 14 pro max',
    price: 1_000,
    category: 'phone',
    img: 'iphone14.jpg',
  },
  {
    id: 3,
    name: 'samsung galaxy note',
    price: 2_000,
    category: 'phone',
    img: 'note.jpg',
  },
  {
    id: 4,
    name: 'Xiaomi',
    price: 500,
    category: 'phone',
    img: 'xiaomi.jpg',
  },
  {
    id: 5,
    name: 'zflip',
    price: 750,
    category: 'phone',
    img: 'zflip.jpg',
  },
  {
    id: 6,
    name: 'asus',
    price: 5_000,
    category: 'Laptop',
    img: 'asus.jpg',
  },
  {
    id: 7,
    name: 'macbook',
    price: 4_000,
    category: 'Laptop',
    img: 'macbook.jpg',
  },
  {
    id: 8,
    name: 'msi',
    price: 3_500,
    category: 'Laptop',
    img: 'msi.jpg',
  },
  {
    id: 9,
    name: 'ps5',
    price: 2_550,
    category: 'gaming',
    img: 'ps5.jpg',
  },
  {
    id: 10,
    name: 'xboxs',
    price: 3_430,
    category: 'phone',
    img: 'xboxs.jpg',
  },
];

// show all the products when the page loaded
window.addEventListener('load', function () {
  fetchProducts(products);
});

function fetchProducts(productList) {
  const list = $.querySelector('#list');
  let productsFragment = $.createDocumentFragment();
  productList.forEach((product) => {
    productsFragment.appendChild(createProductElement(product));
  });
  list.append(productsFragment);
}

function createProductElement(product) {
  let productElement = $.createElement('section');
  productElement.classList.add('product','pt-5');
  let productTemplate = `
  <figure class="product__img w-75 m-auto mb-2">
    <img class="img-fluid" src="${IMG_ADDRESS}${product.img}" alt="">
  </figure>
  <p class="product__name text-center mb-1">${product.name}</p>
  <span class="product__price text-center d-block">${product.price}$</span>`;
  productElement.insertAdjacentHTML('beforeend', productTemplate);
  return productElement;
}
