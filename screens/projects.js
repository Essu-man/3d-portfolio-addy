// screens/projects.js
function loadProjectsScreen(container) {
    container.innerHTML = `
        <div class="projects-content">
            <div class="projects-header">
                <h1 class="section-title">My <span class="highlight">Projects</span></h1>
                <div class="section-underline"></div>
                <p class="section-description">Explore my latest work and creative endeavors</p>
            </div>
            
            <div class="projects-filter">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="web">Web</button>
                <button class="filter-btn" data-filter="mobile">Mobile</button>
            </div>
            
            <div class="projects-grid">
                <div class="project-card" data-category="web">
                    <div class="project-image" style="background-image: url('https://via.placeholder.com/600x400/00aaff/ffffff')">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-eye"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">E-Commerce Platform</h3>
                        <p class="project-description">A full-featured online shopping platform with payment integration</p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card" data-category="mobile">
                    <div class="project-image" style="background-image: url('https://via.placeholder.com/600x400/ff00aa/ffffff')">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-eye"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title"> Farm management App</h3>
                        <p class="project-description">Mobile application ........ and </p>
                        <div class="project-tech">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Expo</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card" data-category="design">
                    <div class="project-image" style="background-image: url('https://via.placeholder.com/600x400/aa00ff/ffffff')">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-eye"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">Brand Identity System</h3>
                        <p class="project-description">Complete brand identity design for a tech startup</p>
                        <div class="project-tech">
                            <span class="tech-tag">Figma</span>
                            <span class="tech-tag">Illustrator</span>
                            <span class="tech-tag">Photoshop</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card" data-category="web">
                    <div class="project-image" style="background-image: url('https://via.placeholder.com/600x400/00ffaa/ffffff')">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-eye"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">AI Content Generator</h3>
                        <p class="project-description">Web app that generates content using AI algorithms</p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">TensorFlow</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card" data-category="mobile">
                    <div class="project-image" style="background-image: url('https://via.placeholder.com/600x400/ffaa00/ffffff')">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-eye"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">AR Navigation</h3>
                        <p class="project-description">Augmented reality app for indoor navigation</p>
                        <div class="project-tech">
                            <span class="tech-tag">Swift</span>
                            <span class="tech-tag">ARKit</span>
                            <span class="tech-tag">CoreML</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card" data-category="design">
                    <div class="project-image" style="background-image: url('https://via.placeholder.com/600x400/ff5500/ffffff')">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-eye"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">3D Product Visualizer</h3>
                        <p class="project-description">Interactive 3D product visualization tool</p>
                        <div class="project-tech">
                            <span class="tech-tag">Three.js</span>
                            <span class="tech-tag">WebGL</span>
                            <span class="tech-tag">Blender</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = 0;
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add animation to project cards
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}
