 let sc = document.createElement('script');
 sc.innerHTML = `"
     function myfun(e) {
         mangaid = e.target;
         var getit = prompt('"WebviumUniqueGeneratedID"', e.target.outerHTML);" +
         if (getit != null) {
             e.target.outerHTML = getit;
         }
         e.stopPropagation();
         e.preventDefault();
     }`;
document.body.appendChild(sc);
