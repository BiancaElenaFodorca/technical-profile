var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var jumbotron = document.getElementById('jumbotron');
var aboutMe = document.getElementById('aboutme');
var copyright = document.getElementById('copyright');
var projectsContainer = document.getElementById('projects-container');
var authorDetails = JSON.parse(authorDetailsJSON);
var projects = JSON.parse(projectsJSON);

window.onload = function() {
 populateAuthorInformation();
 populateProjectsList();
}
window.onscroll = function() { 
  scrollThrowPage();
};

function populateAuthorInformation() {
  var name = generateDOMElementsWithAssociateClass('h1','fade-in');
  name.innerText = authorDetails.name.toUpperCase();
  jumbotron.append(name);

  var motto = generateDOMElementsWithAssociateClass('p','fade-in');
  motto.innerHTML = authorDetails.motto;
  jumbotron.append(motto);

  aboutMe.innerText = authorDetails.description;
  copyright.innerText = '@Copyright: ' + authorDetails.name;
}

function populateProjectsList() {
  projects.forEach((project) => {
    let flipCardEl = generateDOMElementsWithAssociateClass('div','flip-card');
    projectsContainer.append(flipCardEl);

    let flipCardInnerEl = generateDOMElementsWithAssociateClass('div','flip-card-inner');
    flipCardEl.append(flipCardInnerEl);
    
    let flipCardFront = generateDOMElementsWithAssociateClass('div','flip-card-front');
    flipCardInnerEl.append(flipCardFront);

    let name = document.createElement('h4');
    name.innerText = project.name;
    let descriptionEl = generateDOMElementsWithAssociateClass('div','flip-card-description');
    descriptionEl.innerText = project.description;
    flipCardFront.append(name);
    flipCardFront.append(descriptionEl);

    let flipCardBackEl = generateDOMElementsWithAssociateClass('div','flip-card-back');
    flipCardInnerEl.append(flipCardBackEl);

    let flipCardTechnologies = generateDOMElementsWithAssociateClass('div','flip-card-technologies');
    let techTitle = document.createElement('strong');
    techTitle.innerText = "Technologies:";
    flipCardTechnologies.append(techTitle);
    flipCardTechnologies.appendChild(createUnorderList(project.technologies));
    flipCardBackEl.append(flipCardTechnologies);

    let flipCardResponsabilities= generateDOMElementsWithAssociateClass('div','flip-card-responsabilities');
    let respTitle = document.createElement('strong');
    respTitle.innerText = "Responsabilities:";
    flipCardResponsabilities.append(respTitle);
    flipCardResponsabilities.appendChild(createUnorderList(project.responsabilities));
    flipCardBackEl.append(flipCardResponsabilities);
  });
}

function generateDOMElementsWithAssociateClass(elementType, className) {
  var element = document.createElement(elementType);

  if (className) {
    element.classList.add(className);
  }
  return element;  
}

function createUnorderList(array) {
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }

    return list;
}

function scrollThrowPage() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {   
    navbar.classList.remove("sticky");
  }
}

function navigateToOfficialPage(websiteName, type) {
  if(type === true) {
    navigateToPersonalPages(websiteName);
  } else {
    navigateToCompanyPage(websiteName)
  }
}

function navigateToCompanyPage(companyName) {
  if(companyName === 'cicada') {
    window.open('https://www.linkedin.com/company/cicada-technologies', '_blank');
  } else {
    window.open("https://www.linkedin.com/company/cognizant", "_blank");
  }
}

function navigateToPersonalPages(websiteName) {
  if(websiteName === 'facebook') {
    window.open('https://www.facebook.com/biancaelena.fodorca', '_blank');
  } else if(websiteName === 'linkedin') {
    window.open('https://www.linkedin.com/in/bianca-elena-fodorca-920867116/', '_blank');
  } else if(websiteName === 'git') {
    window.open('https://github.com/BiancaElenaFodorca/technical-profile', '_blank');
  }
}