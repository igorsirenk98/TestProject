"use strict";

function checkPagePosition() {
  var funfactsSectionPosition = 3815;
  var currentPosition = document.body.scrollTop;
  return currentPosition >= funfactsSectionPosition ? getCategories() : null;
}

function getCategories() {
  var categories = document.querySelectorAll('.funfacts__count');
  [].map.call(categories, function (category) {
    return increaseValue(category.getAttribute('id'));
  });
}

function increaseValue(category) {
  var employeesCount = 120;
  var clientsCount = 310;
  var projectsCount = 510;
  var cupsCount = 720;
  var currentCategory = document.querySelector("#".concat(category));
  var currentCategoryCount = currentCategory.innerHTML;
  var count;

  switch (category) {
    case 'employees':
      count = employeesCount;
      break;

    case 'clients':
      count = clientsCount;
      break;

    case 'projects':
      count = projectsCount;
      break;

    case 'cups':
      count = cupsCount;
      break;

    default:
      count = 0;
  }

  var timer = setInterval(function () {
    currentCategoryCount < count ? (currentCategoryCount++, currentCategory.innerHTML = currentCategoryCount) : setTimeout(function () {
      return clearInterval(timer);
    }, 0);
  }, 0);
}

document.body.addEventListener('scroll', function () {
  return checkPagePosition();
});