// Cible le composant que l'on souhaite observer
const targetElement = document.querySelector("");

// Options de l'observer https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
const targetElementOptions = {
    rootMargin: '0px',
    threshold: 1.0
}

const sectionObserver = new IntersectionObserver(function( entries ) {
    // Pour chaque entrée observer, on execture le code suivant
    entries.forEach(entry => {
        // Ici, le code à executer lorsque la section à observer est dans le viewport
        console.log(entry.target); 
        
    });
  },
  targetElementOptions);
  
  sectionObserver.observe(targetElement);
  