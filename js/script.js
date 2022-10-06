const headerEl = document.querySelector('.header')
const btnNav = document.querySelector('.btn-mobile-nav')

btnNav.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

// /scroll animatioasn
const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const href = link.getAttribute('href')
    //scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    //scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const secEl = document.querySelector(href)
      secEl.scrollIntoView({ behavior: 'smooth' })
    }

    //close mobile nav
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open')
    }
  })
})

// sticky
const secHero = document.querySelector('.section-hero')
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky')
    }
    if (ent.isIntersecting) {
      document.body.classList.remove('sticky')
    }
  },
  {
    // in view port
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
)
observer.observe(secHero)
