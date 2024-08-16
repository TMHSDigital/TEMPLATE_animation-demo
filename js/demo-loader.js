document.addEventListener('DOMContentLoaded', () => {
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            const demoShowcase = document.getElementById('demo-showcase');
            const demoContainer = document.getElementById('demo-container');
            
            config.demos.forEach(demo => {
                // Create preview card
                const previewCard = document.createElement('div');
                previewCard.className = 'demo-preview';
                previewCard.innerHTML = `
                    <h3>${demo.name}</h3>
                    <p>${demo.description}</p>
                    <button class="load-demo" data-demo-id="${demo.id}">View Demo</button>
                `;
                demoShowcase.appendChild(previewCard);

                // Add event listener to load demo
                previewCard.querySelector('.load-demo').addEventListener('click', () => {
                    loadDemo(demo, demoContainer);
                    demoContainer.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });
});

function loadDemo(demo, container) {
    // Clear previous demo
    container.innerHTML = '';

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
