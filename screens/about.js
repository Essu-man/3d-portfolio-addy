// screens/about.js
// About screen functionality
function loadAboutScreen(container) {
    // Create about content
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about-content';
    
    // Create about header
    const aboutHeader = document.createElement('div');
    aboutHeader.className = 'about-header';
    
    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'section-title';
    sectionTitle.textContent = 'About Me';
    
    const sectionUnderline = document.createElement('div');
    sectionUnderline.className = 'section-underline';
    
    const sectionDescription = document.createElement('p');
    sectionDescription.className = 'section-description';
    sectionDescription.textContent = 'Get to know me better - my background, skills, and what drives me as a developer.';
    
    aboutHeader.appendChild(sectionTitle);
    aboutHeader.appendChild(sectionUnderline);
    aboutHeader.appendChild(sectionDescription);
    
    // Create about grid
    const aboutGrid = document.createElement('div');
    aboutGrid.className = 'about-grid';
    
    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'about-image-container';
    
    const aboutImage = document.createElement('div');
    aboutImage.className = 'about-image';
    
    const imageOverlay = document.createElement('div');
    imageOverlay.className = 'image-overlay';
    
    const experienceBadge = document.createElement('div');
    experienceBadge.className = 'experience-badge';
    experienceBadge.textContent = '5+ Years Experience';
    
    imageContainer.appendChild(aboutImage);
    imageContainer.appendChild(imageOverlay);
    imageContainer.appendChild(experienceBadge);
    
    // Create about text
    const aboutText = document.createElement('div');
    aboutText.className = 'about-text';
    
    const aboutSubtitle = document.createElement('h3');
    aboutSubtitle.className = 'about-subtitle';
    aboutSubtitle.textContent = 'Web Developer & UI/UX Designer';
    
    const aboutDescription = document.createElement('p');
    aboutDescription.className = 'about-description';
    aboutDescription.innerHTML = `
        I'm a passionate web developer and designer with over 5 years of experience creating beautiful, functional, and user-friendly websites and applications. I specialize in modern JavaScript frameworks, responsive design, and creating immersive user experiences with 3D technologies like Three.js.
        <br><br>
        My journey in web development began when I was studying Computer Science at University. Since then, I've worked with various clients from startups to established businesses, helping them achieve their digital goals through innovative solutions.
    `;
    
    // Create about details
    const aboutDetails = document.createElement('div');
    aboutDetails.className = 'about-details';
    
    const detailsData = [
        { icon: 'fas fa-user', title: 'Name', text: 'John Doe' },
        { icon: 'fas fa-calendar', title: 'Birthday', text: 'January 1, 1990' },
        { icon: 'fas fa-envelope', title: 'Email', text: 'john@example.com' },
        { icon: 'fas fa-phone', title: 'Phone', text: '+1 234 567 890' },
        { icon: 'fas fa-map-marker-alt', title: 'Location', text: 'New York, USA' },
        { icon: 'fas fa-globe', title: 'Languages', text: 'English, Spanish' }
    ];
    
    detailsData.forEach(detail => {
        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';
        
        const icon = document.createElement('i');
        icon.className = detail.icon;
        
        const detailContent = document.createElement('div');
        
        const detailTitle = document.createElement('h3');
        detailTitle.textContent = detail.title;
        
        const detailText = document.createElement('p');
        detailText.textContent = detail.text;
        
        detailContent.appendChild(detailTitle);
        detailContent.appendChild(detailText);
        
        detailItem.appendChild(icon);
        detailItem.appendChild(detailContent);
        
        aboutDetails.appendChild(detailItem);
    });
    
    aboutText.appendChild(aboutSubtitle);
    aboutText.appendChild(aboutDescription);
    aboutText.appendChild(aboutDetails);
    
    // Add download CV button
    const downloadBtn = document.createElement('a');
    downloadBtn.className = 'download-cv-btn';
    downloadBtn.href = '#';
    downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download CV';
    
    aboutText.appendChild(downloadBtn);
    
    // Add to grid
    aboutGrid.appendChild(imageContainer);
    aboutGrid.appendChild(aboutText);
    
    // Create timeline section
    const timelineSection = document.createElement('div');
    timelineSection.className = 'timeline-section';
    
    const timelineTitle = document.createElement('h3');
    timelineTitle.className = 'timeline-title';
    timelineTitle.textContent = 'Experience & Education';
    
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    
    const timelineData = [
        {
            title: 'Senior Web Developer',
            company: 'Tech Solutions Inc.',
            date: '2020 - Present',
            description: 'Leading the frontend development team, creating responsive and interactive web applications using modern JavaScript frameworks and 3D technologies.'
        },
        {
            title: 'Web Developer',
            company: 'Digital Agency',
            date: '2018 - 2020',
            description: 'Developed and maintained client websites, implemented responsive designs, and collaborated with designers to create engaging user experiences.'
        },
        {
            title: 'Junior Developer',
            company: 'Startup Hub',
            date: '2016 - 2018',
            description: 'Assisted in the development of web applications, learned modern web technologies, and contributed to team projects.'
        },
        {
            title: 'Bachelor of Computer Science',
            company: 'University of Technology',
            date: '2012 - 2016',
            description: 'Studied computer science with a focus on web technologies, software development, and user interface design.'
        }
    ];
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const timelineDot = document.createElement('div');
        timelineDot.className = 'timeline-dot';
        
        const timelineContent = document.createElement('div');
        timelineContent.className = 'timeline-content';
        
        const itemTitle = document.createElement('h4');
        itemTitle.textContent = `${item.title} - ${item.company}`;
        
        const itemDate = document.createElement('span');
        itemDate.className = 'date';
        itemDate.textContent = item.date;
        
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        
        timelineContent.appendChild(itemTitle);
        timelineContent.appendChild(itemDate);
        timelineContent.appendChild(itemDescription);
        
        timelineItem.appendChild(timelineDot);
        timelineItem.appendChild(timelineContent);
        
        timeline.appendChild(timelineItem);
    });
    
    timelineSection.appendChild(timelineTitle);
    timelineSection.appendChild(timeline);
    
    // Append all sections to about content
    aboutContent.appendChild(aboutHeader);
    aboutContent.appendChild(aboutGrid);
    aboutContent.appendChild(timelineSection);
    
    // Clear container and append about content
    container.innerHTML = '';
    container.appendChild(aboutContent);
}