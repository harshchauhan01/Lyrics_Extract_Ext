// Create the overlay element
const overlay = document.createElement('div');
overlay.id = 'floating-overlay';
overlay.style.position = 'fixed';
overlay.style.top = '10px';
overlay.style.right = '10px';
overlay.style.width = '300px';
overlay.style.height = '200px';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.color = 'white';
overlay.style.zIndex = '9999';
overlay.style.borderRadius = '8px';
overlay.style.display = 'flex';
overlay.style.flexDirection = 'column';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.padding = '10px';

// Content inside the overlay
const overlayContent = document.createElement('div');
overlayContent.innerHTML = '<h2>Floating Overlay</h2><p>This is a floating overlay.</p>';
overlay.appendChild(overlayContent);

// Close button inside the overlay
const closeButton = document.createElement('button');
closeButton.innerText = 'Close';
closeButton.style.marginTop = '10px';
closeButton.style.backgroundColor = 'red';
closeButton.style.border = 'none';
closeButton.style.color = 'white';
closeButton.style.cursor = 'pointer';
closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Append close button to overlay
overlay.appendChild(closeButton);

// Append the overlay to the body
document.body.appendChild(overlay);

// Function to toggle overlay visibility
function toggleOverlay() {
  overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
}
