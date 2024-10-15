document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.redirect-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const linkId = parseInt(this.getAttribute('data-link-id'), 10);

            // Dynamically load the external JS file based on link ID
            if (linkId >= 1 && linkId <= 5) {
                loadScript('https://raw.githubusercontent.com/yourusername/yourrepo/main/CodeA.js', () => {
                    const url = CodeA[linkId];
                    if (url) {
                        window.location.href = url;
                    } else {
                        console.error('No URL found for link ID:', linkId);
                    }
                });
            } else if (linkId >= 6 && linkId <= 10) {
                loadScript('https://raw.githubusercontent.com/yourusername/yourrepo/main/CodeB.js', () => {
                    const url = CodeB[linkId];
                    if (url) {
                        window.location.href = url;
                    } else {
                        console.error('No URL found for link ID:', linkId);
                    }
                });
            } else {
                console.error('No link mappings available for link ID:', linkId);
            }
        });
    });
});

// Function to dynamically load an external script
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    script.onerror = () => console.error('Failed to load script:', url);
    document.head.appendChild(script);
}



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
