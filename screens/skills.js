// screens/skills.js
function loadSkillsScreen(container) {
    container.innerHTML = `
        <div class="skills-content">
            <div class="skills-header">
                <h1 class="section-title">My <span class="highlight">Skills</span></h1>
                <div class="section-underline"></div>
                <p class="section-description">A comprehensive overview of my technical expertise</p>
            </div>
            
            <div class="skills-container">
                <div class="skills-category">
                    <h2 class="category-title"><i class="fas fa-code"></i> Frontend Development</h2>
                    <div class="skills-grid">
                        <div class="skill-item" data-skill="HTML/CSS">
                            <div class="skill-icon"><i class="fab fa-html5"></i></div>
                            <div class="skill-info">
                                <h3>HTML/CSS</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="95"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="JavaScript">
                            <div class="skill-icon"><i class="fab fa-js"></i></div>
                            <div class="skill-info">
                                <h3>JavaScript</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="90"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="React">
                            <div class="skill-icon"><i class="fab fa-react"></i></div>
                            <div class="skill-info">
                                <h3>React</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="85"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="Vue.js">
                            <div class="skill-icon"><i class="fab fa-vuejs"></i></div>
                            <div class="skill-info">
                                <h3>Vue.js</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="80"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="skills-category">
                    <h2 class="category-title"><i class="fas fa-server"></i> Backend Development</h2>
                    <div class="skills-grid">
                        <div class="skill-item" data-skill="Node.js">
                            <div class="skill-icon"><i class="fab fa-node-js"></i></div>
                            <div class="skill-info">
                                <h3>Node.js</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="88"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="Python">
                            <div class="skill-icon"><i class="fab fa-python"></i></div>
                            <div class="skill-info">
                                <h3>Python</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="75"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="MongoDB">
                            <div class="skill-icon"><i class="fas fa-database"></i></div>
                            <div class="skill-info">
                                <h3>MongoDB</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="82"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="SQL">
                            <div class="skill-icon"><i class="fas fa-table"></i></div>
                            <div class="skill-info">
                                <h3>SQL</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="78"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="skills-category">
                    <h2 class="category-title"><i class="fas fa-paint-brush"></i> Design & Tools</h2>
                    <div class="skills-grid">
                        <div class="skill-item" data-skill="Figma">
                            <div class="skill-icon"><i class="fab fa-figma"></i></div>
                            <div class="skill-info">
                                <h3>Figma</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="92"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="Adobe XD">
                            <div class="skill-icon"><i class="fab fa-adobe"></i></div>
                            <div class="skill-info">
                                <h3>Adobe XD</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="85"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="Git">
                            <div class="skill-icon"><i class="fab fa-git-alt"></i></div>
                            <div class="skill-info">
                                <h3>Git</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="90"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                        
                        <div class="skill-item" data-skill="Docker">
                            <div class="skill-icon"><i class="fab fa-docker"></i></div>
                            <div class="skill-info">
                                <h3>Docker</h3>
                                <div class="skill-bar">
                                    <div class="skill-progress" style="width: 0%;" data-percent="70"></div>
                                </div>
                                <span class="skill-percent">0%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="other-skills">
                    <h2 class="category-title"><i class="fas fa-plus-circle"></i> Other Skills</h2>
                    <div class="tags-container">
                        <span class="skill-tag">Three.js</span>
                        <span class="skill-tag">WebGL</span>
                        <span class="skill-tag">TypeScript</span>
                        <span class="skill-tag">GraphQL</span>
                        <span class="skill-tag">AWS</span>
                        <span class="skill-tag">Firebase</span>
                        <span class="skill-tag">Redux</span>
                        <span class="skill-tag">Jest</span>
                        <span class="skill-tag">Webpack</span>
                        <span class="skill-tag">SASS</span>
                        <span class="skill-tag">Tailwind CSS</span>
                        <span class="skill-tag">UI/UX Design</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add Font Awesome if not already added
    if (!document.getElementById('font-awesome')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.id = 'font-awesome';
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }
    
    // Animate skill bars
    setTimeout(() => {
        document.querySelectorAll('.skill-progress').forEach(progress => {
            const percent = progress.getAttribute('data-percent');
            progress.style.width = percent + '%';
            
            // Update percentage text
            const percentText = progress.parentElement.nextElementSibling;
            
            // Animate percentage counter
            let startValue = 0;
            const endValue = parseInt(percent);
            const duration = 1500;
            
            let startTime = null;
            const updateCounter = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const value = Math.floor(progress * endValue);
                percentText.textContent = value + '%';
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };
            
            requestAnimationFrame(updateCounter);
        });
    }, 300);
    
    // Animate skill tags
    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
        tag.style.opacity = 0;
        tag.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            tag.style.opacity = 1;
            tag.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
}