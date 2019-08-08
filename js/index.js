const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// set nav items
let navItems = document.querySelectorAll('nav a');
  console.log(navItems);
  navItems.forEach((nav, index) => {
    nav.textContent = siteContent.nav[`nav-item-${index+1}`];
  });

  navItems.forEach((nav) => {
    nav.style.color = 'green';
  });

  navItems = document.getElementsByTagName('a')[0];
  const createNav = (nav) => {
    const newNav = document.createElement('a');
      newNav.textContent = nav;
        return newNav;
  };

  navItems.prepend(createNav('My Idea'));
  navItems.append(createNav('Your Idea'));






// set cta items
const ctaHOne = document.querySelector('h1');
  ctaHOne.textContent = siteContent['cta']['h1'];

const ctaImage = document.getElementById('cta-img');
  ctaImage.src = siteContent['cta']['img-src'];

const ctaButton = document.querySelector('button');
  ctaButton.textContent = siteContent['cta']['button'];

// main content items
const mainContent = document.getElementsByClassName('main-content')[0];
  console.log(mainContent);

  mainContent.getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];

  mainContent.getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];

  mainContent.getElementsByTagName('h4')[1].textContent = siteContent['main-content']['about-h4'];

  mainContent.getElementsByTagName('p')[1].textContent = siteContent['main-content']['about-content'];

const middleImage = document.getElementById('middle-img');
  middleImage.src = siteContent['main-content']['middle-img-src'];

  mainContent.getElementsByTagName('h4')[2].textContent = siteContent['main-content']['services-h4'];

  mainContent.getElementsByTagName('p')[2].textContent = siteContent['main-content']['services-content'];

  mainContent.getElementsByTagName('h4')[3].textContent = siteContent['main-content']['product-h4'];

  mainContent.getElementsByTagName('p')[3].textContent = siteContent['main-content']['product-content'];

  mainContent.getElementsByTagName('h4')[4].textContent = siteContent['main-content']['vision-h4'];

  mainContent.getElementsByTagName('p')[4].textContent = siteContent['main-content']['vision-content'];

// contact items
const contact = document.getElementsByClassName('contact')[0];
  contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];

  contact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];

  contact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];

  contact.getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

// footer item
const footer = document.querySelector('footer');
  footer.textContent = siteContent['footer']['copyright'];


