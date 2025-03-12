// screens/contact.js
function loadContactScreen(container) {
    container.innerHTML = `
        <div class="contact-content">
            <div class="contact-header">
                <h1 class="section-title">Get In <span class="highlight">Touch</span></h1>
                <div class="section-underline"></div>
                <p class="section-description">Let's work together on your next project</p>
            </div>
            
            <div class="contact-container">
                <div class="contact-info">
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="info-details">
                            <h3>Location</h3>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="info-details">
                            <h3>Email</h3>
                            <p>hello@example.com</p>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="info-details">
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <div class="info-details">
                            <h3>Website</h3>
                            <p>www.example.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-social">
                        <h3>Follow Me</h3>
                        <div class="social-links">
                            <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-dribbble"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form-container">
                    <form id="contact-form" class="contact-form">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required>
                            <div class="input-focus-effect"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required>
                            <div class="input-focus-effect"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Enter subject" required>
                            <div class="input-focus-effect"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                            <div class="input-focus-effect"></div>
                        </div>
                        
                        <button type="submit" class="submit-btn">
                            <span class="btn-text">Send Message</span>
                            <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="map-container">
                <h3><i class="fas fa-map-pin"></i> Find Me Here</h3>
                <div class="map" id="map">
                    <!-- Map placeholder - in a real project, you'd integrate Google Maps or similar -->
                    <div class="map-placeholder">
                        <i class="fas fa-map-marked-alt"></i>
                        <p>Interactive map would be displayed here</p>
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
    
    // Form submission handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            
            // Change button state to loading
            btnText.textContent = 'Sending...';
            btnIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Simulate API call
            setTimeout(() => {
                // Success state
                btnText.textContent = 'Message Sent!';
                btnIcon.innerHTML = '<i class="fas fa-check"></i>';
                
                // Reset form
                form.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    btnText.textContent = 'Send Message';
                    btnIcon.innerHTML = '<i class="fas fa-paper-plane"></i>';
                }, 3000);
            }, 2000);
        });
    }
    
    // Add animation to info cards
    document.querySelectorAll('.info-card').forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Add animation to form inputs
    document.querySelectorAll('.form-group').forEach((group, index) => {
        group.style.opacity = 0;
        group.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            group.style.opacity = 1;
            group.style.transform = 'translateX(0)';
        }, 100 * index);
    });
}