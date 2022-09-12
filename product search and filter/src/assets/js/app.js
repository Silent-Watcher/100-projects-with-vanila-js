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
    category: 'gaming',
    img: 'xboxs.jpg',
  },
];
const $ = document,
  categoryWrapper = $.querySelector('#category_wrapper'),
  IMG_ADDRESS = 'assets/img/';
//
let currentActiveCategory = 'All';

function fetchProducts(productList, category = null , includes = '') {
  const list = $.querySelector('#list');
  list.innerHTML = null;
  let productsFragment = $.createDocumentFragment();
  let resultProducts = productList.filter((product) => {
    return (category === 'All' ? true : product.category === category ) && product.name.includes(includes);
  });
  resultProducts.forEach((product) => {
    productsFragment.appendChild(createProductElement(product));
  });
  list.append(productsFragment);
}
//
function createProductElement(product) {
  let productElement = $.createElement('section');
  productElement.classList.add('product', 'pt-5');
  let productTemplate = `
  <figure class="product__img w-75 m-auto mb-2">
    <img class="img-fluid" src="${IMG_ADDRESS}${product.img}" alt="">
  </figure>
  <p class="product__name text-center mb-1">${product.name}</p>
  <span class="product__price text-center d-block">${product.price}$</span>`;
  productElement.insertAdjacentHTML('beforeend', productTemplate);
  return productElement;
}
//
function fetchCategoryButtons(products) {
  let categories = getCategories(products);
  let categoriesFragment = $.createDocumentFragment();
  categories.forEach((category) => {
    categoriesFragment.appendChild(createCategoryButton(category));
  });
  $.querySelector('#category_wrapper').append(categoriesFragment);
}
//
function getCategories(products) {
  let categories = [];
  for (const { category } of products) categories.push(category);
  categories = _.uniq(categories);
  return categories;
}
//
function createCategoryButton(category) {
  let categoryButton = $.createElement('button');
  categoryButton.type = 'button';
  categoryButton.className = 'btn btn-outline-primary ms-2';
  categoryButton.innerHTML = category;
  return categoryButton;
}
// show all the products and category buttons when the page loaded
window.addEventListener('load', () => {
  fetchProducts(products , currentActiveCategory);
  fetchCategoryButtons(products);
});
//
categoryWrapper.addEventListener('click', activeTargetButton);
categoryWrapper.addEventListener('click', () => {
  currentActiveCategory = event.target.innerHTML;
  fetchProducts(products, currentActiveCategory);
});

function _siblings(element) {
  let siblings = [];
  [...element.parentElement.children].forEach((sibling) => {
    sibling !== element && siblings.push(sibling);
  });
  return siblings;
}

function activeTargetButton(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.classList.add('active');
    _siblings(event.target).forEach((sibling) => {
      sibling.classList.remove('active');
    });
  }
}

$.querySelector('#search__input').addEventListener('keyup', function () {
  fetchProducts(products, currentActiveCategory, this.value);
});