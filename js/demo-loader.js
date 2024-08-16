document.addEventListener('DOMContentLoaded', () => {
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            const demoContainer = document.getElementById('demo-container');
            config.demos.forEach(demo => {
                loadDemo(demo, demoContainer);
            });
        });
});

function loadDemo(demo, container) {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = demo.css;
    document.head.appendChild(link);

    // Load JS
    const script = document.createElement('script');
    script.src = demo.js;
    document.body.appendChild(script);

    // Load HTML
    fetch(demo.html)
        .then(response => response.text())
        .then(html => {
            const demoElement = document.createElement('div');
            demoElement.innerHTML = html;
            container.appendChild(demoElement);
        });
}
