document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.redirect-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const linkId = parseInt(this.getAttribute('data-link-id'), 10);

            // Determine which chunk to load based on linkId
            let loadMappings;
            if (linkId >= 1 && linkId <= 5) {
                loadMappings = import(/* webpackChunkName: "chunkA" */ './chunkA.js');
            } else if (linkId >= 6 && linkId <= 10) {
                loadMappings = import(/* webpackChunkName: "chunkB" */ './chunkB.js');
            } else {
                console.error('No link mappings available for link ID:', linkId);
                return;
            }

            loadMappings.then(module => {
                const url = module.default[linkId];
                if (url) {
                    window.location.href = url;
                } else {
                    console.error('No URL found for link ID:', linkId);
                }
            }).catch(error => console.error('Error loading mappings:', error));
        });
    });
});




// Download button functionality
function downloadClicked() {
    const button = document.getElementById("downloadButton");
    if (button.getAttribute("disabled")) return;
  
    button.style.backgroundColor = "#4CAF50";
    button.innerHTML = "Downloading...";
  
    setTimeout(function() {
      button.style.backgroundColor = "#e67e22";
      button.innerHTML = "Download";
      triggerImageReplacement(); // Call the function to replace the image
    }, 1000);
  }
