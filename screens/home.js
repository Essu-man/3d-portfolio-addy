// Home screen functionality
function loadHomeScreen(container) {
    // Create home content
    const homeContent = document.createElement('div');
    homeContent.className = 'home-content';
    
    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';
    
    // Add animated title
    const title = document.createElement('h1');
    title.className = 'animated-title';
    title.textContent = 'Addy Isaac Asare';
    
    // Add animated subtitle with typing effect
    const subtitle = document.createElement('h2');
    subtitle.className = 'animated-subtitle';
    subtitle.innerHTML = 'I\'m a <span class="highlight-text" id="typed-text">Web Developer</span>';
    
    // Add animated description
    const description = document.createElement('p');
    description.className = 'animated-text';
    description.textContent = 'Specializing in creating immersive digital experiences with modern web technologies';
    
    // Add intro section
    const introSection = document.createElement('div');
    introSection.className = 'intro-section';
    introSection.innerHTML = `
        <p>Welcome to my portfolio! I'm passionate about building beautiful, functional, and user-friendly websites and applications. With a focus on modern technologies and best practices, I strive to create memorable digital experiences.</p>
    `;
    
    // Add stats section
    const statsContainer = document.createElement('div');
    statsContainer.className = 'stats-container';
    
    // Add stats items
    const statsData = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '10+', label: 'Awards' }
    ];
    
    statsData.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        
        const statNumber = document.createElement('div');
        statNumber.className = 'stat-number';
        statNumber.textContent = stat.number;
        
        const statLabel = document.createElement('div');
        statLabel.className = 'stat-label';
        statLabel.textContent = stat.label;
        
        statItem.appendChild(statNumber);
        statItem.appendChild(statLabel);
        statsContainer.appendChild(statItem);
    });
    
    // Add featured project section
    const featuredProject = document.createElement('div');
    featuredProject.className = 'featured-project';
    featuredProject.innerHTML = `
        <h3>Featured Project</h3>
        <div class="project-preview">
            <div class="project-image"></div>
            <div class="project-info">
                <h4>3D Interactive Website</h4>
                <p>A fully interactive 3D website built with Three.js and modern JavaScript, featuring immersive user experiences and stunning visual effects.</p>
                <div>
                    <span class="tech-tag">Three.js</span>
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">WebGL</span>
                    <span class="tech-tag">CSS3</span>
                </div>
            </div>
        </div>
    `;
    
    // Add call to action buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    
    const ctaButton = document.createElement('button');
    ctaButton.className = 'cta-button pulse';
    ctaButton.textContent = 'View My Work';
    ctaButton.addEventListener('click', () => {
        // Find the projects nav item and click it
        const projectsNavItem = document.querySelector('.nav-item[data-screen="projects"]');
        if (projectsNavItem) {
            projectsNavItem.click();
        }
    });
    
    const secondaryButton = document.createElement('button');
    secondaryButton.className = 'secondary-button';
    secondaryButton.textContent = 'Contact Me';
    secondaryButton.addEventListener('click', () => {
        // Find the contact nav item and click it
        const contactNavItem = document.querySelector('.nav-item[data-screen="contact"]');
        if (contactNavItem) {
            contactNavItem.click();
        }
    });
    
    buttonContainer.appendChild(ctaButton);
    buttonContainer.appendChild(secondaryButton);
    
    // Add social icons
    const socialIcons = document.createElement('div');
    socialIcons.className = 'social-icons';
    
    const socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/' },
        { icon: 'fab fa-linkedin', url: 'https://linkedin.com/' },
        { icon: 'fab fa-twitter', url: 'https://twitter.com/' },
        { icon: 'fab fa-instagram', url: 'https://instagram.com/' }
    ];
    
    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.className = 'social-icon';
        link.href = social.url;
        link.target = '_blank';
        
        const icon = document.createElement('i');
        icon.className = social.icon;
        
        link.appendChild(icon);
        socialIcons.appendChild(link);
    });
    
    // Append all elements to the content wrapper
    contentWrapper.appendChild(title);
    contentWrapper.appendChild(subtitle);
    contentWrapper.appendChild(description);
    contentWrapper.appendChild(introSection);
    contentWrapper.appendChild(statsContainer);
    contentWrapper.appendChild(featuredProject);
    contentWrapper.appendChild(buttonContainer);
    contentWrapper.appendChild(socialIcons);
    
    // Append content wrapper to home content
    homeContent.appendChild(contentWrapper);
    
    // Clear container and append home content
    container.innerHTML = '';
    container.appendChild(homeContent);
    
    // Initialize typing effect
    initTypingEffect();
}

// Typing effect for the subtitle
function initTypingEffect() {
    const roles = ['Web Developer', 'UI/UX Designer', '3D Artist', 'Frontend Engineer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Deleting text
            typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Typing text
            typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // If finished typing the current role
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at the end of typing
            isDeleting = true;
            typingSpeed = 1500;
        } 
        // If finished deleting the current role
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start the typing effect
    setTimeout(type, 1000);
}