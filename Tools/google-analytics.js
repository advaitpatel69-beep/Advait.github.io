// Load the Google Tag library dynamically
var script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-B0M63KX41H';
script.async = true;
document.head.appendChild(script);

// Initialize tracking
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B0M63KX41H');
