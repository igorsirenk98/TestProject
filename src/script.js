function checkPagePosition() {
    const funfactsSectionPosition = 3815;

    let currentPosition = document.body.scrollTop;

    return currentPosition >= funfactsSectionPosition ? getCategories() : null;
}

function getCategories() {
    let categories = document.querySelectorAll('.funfacts__count');

    [].map.call(categories, category => increaseValue(category.getAttribute('id')));
}

function increaseValue(category) {
    const employeesCount = 120;
    const clientsCount = 310;
    const projectsCount = 510;
    const cupsCount = 720;

    let currentCategory = document.querySelector(`#${category}`);
    let currentCategoryCount = currentCategory.innerHTML;
    let count;
    
    switch(category) {
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

    let timer = setInterval(() => {
        currentCategoryCount < count ? (currentCategoryCount++, currentCategory.innerHTML = currentCategoryCount) 
                              : setTimeout(() => clearInterval(timer), 0);
    }, 0);
}

document.body.addEventListener('scroll', () => checkPagePosition());