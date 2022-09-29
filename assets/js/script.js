let sidebarDiv = document.querySelector('.sidebar');

let openButton = document.querySelector('.open');

let headerDiv = document.querySelector('.header');

let logoImage = document.querySelector('.logo');

let searchButton = document.querySelector('.search');
let searchText = document.querySelector('.search__text');

let dashboardButton = document.querySelector('.dashboard');
let dashboardText = document.querySelector('.dashboard__text');

let petsButton = document.querySelector('.pets');
let petsText = document.querySelector('.pets__text');

let clientsButton = document.querySelector('.clients');
let clientsText = document.querySelector('.clients__text');

let vetsButton = document.querySelector('.vets');
let vetsText = document.querySelector('.vets__text');

let toolsButton = document.querySelector('.tools');
let toolsText = document.querySelector('.tools__text');

let logoff = document.querySelector('.logoff');
let userInfo = document.querySelector('.user-info');

let isShrink = false;

function removeComponents() {
  headerDiv.removeChild(logoImage);
  sidebarDiv.style.width = '5rem';

  searchButton.removeChild(searchText);
  dashboardButton.removeChild(dashboardText);
  petsButton.removeChild(petsText);
  clientsButton.removeChild(clientsText);
  vetsButton.removeChild(vetsText);
  toolsButton.removeChild(toolsText);
  logoff.removeChild(userInfo);

  logoff.style.justifyContent = 'center';
}

function addComponents() {
  headerDiv.appendChild(logoImage);
  sidebarDiv.style.width = '16rem';

  searchButton.appendChild(searchText);
  dashboardButton.appendChild(dashboardText);
  petsButton.appendChild(petsText);
  clientsButton.appendChild(clientsText);
  vetsButton.appendChild(vetsText);
  toolsButton.appendChild(toolsText);
  logoff.appendChild(userInfo);

  logoff.style.justifyContent = 'space-between';
}

function handleMenuClick() {
  if (isShrink) {
    addComponents();
    isShrink = false;
  } else {
    removeComponents();
    isShrink = true;
  }
}

openButton.addEventListener('click', handleMenuClick);
