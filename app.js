document.addEventListener('DOMContentLoaded', () => {

    const cursor = document.querySelector('.cross-cursor');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const interactiveElements = document.querySelectorAll('a, .track-header');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    } else {
        console.warn("System Alert: cursor couldn't been found");
    }

    const trackHeaders = document.querySelectorAll('.track-header');

    trackHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentEntry = header.parentElement;
            const isActive = currentEntry.classList.contains('active');
            
            document.querySelectorAll('.track-entry').forEach(entry => {
                entry.classList.remove('active');
            });

            if (!isActive) {
                currentEntry.classList.add('active');
            }
        });
    });
});

const videoContainer = document.getElementById('tbm-video');

    if (videoContainer) {
        videoContainer.addEventListener('click', function() {
            const iframeCode = `
                <iframe 
                    src="https://www.youtube.com/embed/SREZ-ggSDjM?autoplay=1" 
                    title="The Birthday Massacre - Looking Glass" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                </iframe>
            `;
            
            this.innerHTML = iframeCode;
            
            this.classList.remove('fallback-video');
        });
    }