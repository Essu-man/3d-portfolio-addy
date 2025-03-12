// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize 3D background
    init3DBackground();
    
    // Screen navigation
    const appContainer = document.getElementById('app-container');
    let currentScreen = 'home';
    
    // Load initial screen
    loadScreen(currentScreen);
    
    // Navigation event listeners
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const screen = e.currentTarget.getAttribute('data-screen');
            if (screen !== currentScreen) {
                // Update active class
                document.querySelector('.nav-item.active').classList.remove('active');
                e.currentTarget.classList.add('active');
                
                loadScreen(screen);
            }
        });
    });
    
    // Function to load screen content
    function loadScreen(screen) {
        currentScreen = screen;
        
        // Clear current content
        appContainer.innerHTML = '';
        
        // Load content based on screen
        if (window[`load${screen.charAt(0).toUpperCase() + screen.slice(1)}Screen`]) {
            window[`load${screen.charAt(0).toUpperCase() + screen.slice(1)}Screen`](appContainer);
        } else {
            appContainer.innerHTML = `<h1>${screen.charAt(0).toUpperCase() + screen.slice(1)}</h1>`;
        }
    }
});

// Initialize 3D background
// Initialize 3D background
function init3DBackground() {
    // Create a scene
    const scene = new THREE.Scene();
    
    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add renderer to the DOM with proper z-index to ensure it's behind content
    const backgroundContainer = document.getElementById('background-container');
    if (backgroundContainer) {
        backgroundContainer.appendChild(renderer.domElement);
    } else {
        const newBackgroundContainer = document.createElement('div');
        newBackgroundContainer.id = 'background-container';
        newBackgroundContainer.style.position = 'fixed';
        newBackgroundContainer.style.top = '0';
        newBackgroundContainer.style.left = '0';
        newBackgroundContainer.style.width = '100%';
        newBackgroundContainer.style.height = '100%';
        newBackgroundContainer.style.zIndex = '-10'; // Lower z-index to ensure it's behind all content
        newBackgroundContainer.style.pointerEvents = 'none';
        document.body.insertBefore(newBackgroundContainer, document.body.firstChild); // Insert at beginning of body
        newBackgroundContainer.appendChild(renderer.domElement);
    }
    
    // Add Spider-Man 3D object
    let spiderman;
    
    // Create Spider-Man geometry (simplified)
    const createSpiderman = () => {
        // Body group
        const spideyGroup = new THREE.Group();
        
        // Head
        const headGeometry = new THREE.SphereGeometry(1.2, 32, 32);
        const headMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xff0000,
            shininess: 100,
            emissive: 0x330000
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        
        // Eyes (white parts)
        const eyeGeometry = new THREE.SphereGeometry(0.4, 32, 32);
        const eyeMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffffff,
            shininess: 100
        });
        
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.5, 0.2, 0.9);
        leftEye.scale.set(1, 1.5, 0.2);
        
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.5, 0.2, 0.9);
        rightEye.scale.set(1, 1.5, 0.2);
        
        // Body
        const bodyGeometry = new THREE.CylinderGeometry(1, 1.5, 3, 32);
        const bodyMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xff0000,
            shininess: 100,
            emissive: 0x330000
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = -2.2;
        
        // Blue parts (lower body)
        const legsGeometry = new THREE.CylinderGeometry(1.5, 0.8, 3, 32);
        const legsMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x0000ff,
            shininess: 100,
            emissive: 0x000033
        });
        const legs = new THREE.Mesh(legsGeometry, legsMaterial);
        legs.position.y = -5.2;
        
        // Arms
        const armGeometry = new THREE.CylinderGeometry(0.4, 0.3, 2.5, 32);
        
        const leftArm = new THREE.Mesh(armGeometry, bodyMaterial);
        leftArm.position.set(-1.5, -2, 0);
        leftArm.rotation.z = Math.PI / 4;
        
        const rightArm = new THREE.Mesh(armGeometry, bodyMaterial);
        rightArm.position.set(1.5, -2, 0);
        rightArm.rotation.z = -Math.PI / 4;
        
        // Web pattern (simplified)
        const addWebPattern = (parentMesh, color, segments) => {
            const webMaterial = new THREE.LineBasicMaterial({ color: color });
            
            for (let i = 0; i < segments; i++) {
                const angle = (i / segments) * Math.PI * 2;
                const webGeometry = new THREE.BufferGeometry();
                
                const vertices = new Float32Array([
                    0, 0, 1.21,
                    Math.cos(angle) * 1.21, Math.sin(angle) * 1.21, 1.21
                ]);
                
                webGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
                const line = new THREE.Line(webGeometry, webMaterial);
                parentMesh.add(line);
            }
        };
        
        // Add web pattern to head
        addWebPattern(head, 0x000000, 16);
        
        // Add all parts to the group
        spideyGroup.add(head);
        spideyGroup.add(leftEye);
        spideyGroup.add(rightEye);
        spideyGroup.add(body);
        spideyGroup.add(legs);
        spideyGroup.add(leftArm);
        spideyGroup.add(rightArm);
        
        // Scale and position the entire model
        spideyGroup.scale.set(0.8, 0.8, 0.8);
        spideyGroup.position.set(0, 0, -15);
        
        return spideyGroup;
    };
    
    // Create and add Spider-Man to the scene
    spiderman = createSpiderman();
    scene.add(spiderman);
    
    // Create more interesting geometries
    const geometries = [
        new THREE.TorusKnotGeometry(3, 1, 100, 16),
        new THREE.OctahedronGeometry(2.5, 1),
        new THREE.IcosahedronGeometry(2, 1),
        new THREE.SphereGeometry(2, 32, 32),
        new THREE.TorusGeometry(2, 0.5, 16, 100)
    ];
    
    // Create materials with more interesting effects
    const materials = [
        new THREE.MeshPhongMaterial({ 
            color: 0x00aaff, 
            wireframe: true,
            emissive: 0x0044aa,
            shininess: 100,
            transparent: true,
            opacity: 0.8
        }),
        new THREE.MeshPhongMaterial({ 
            color: 0xff00aa, 
            wireframe: true,
            emissive: 0x440044,
            shininess: 100,
            transparent: true,
            opacity: 0.8
        }),
        new THREE.MeshPhongMaterial({ 
            color: 0xffaa00, 
            wireframe: true,
            emissive: 0x442200,
            shininess: 100,
            transparent: true,
            opacity: 0.8
        }),
        new THREE.MeshPhongMaterial({ 
            color: 0x00ffaa, 
            wireframe: true,
            emissive: 0x004422,
            shininess: 100,
            transparent: true,
            opacity: 0.8
        })
    ];
    
    // Create floating objects
    const objects = [];
    for (let i = 0; i < 15; i++) {
        const geomIndex = Math.floor(Math.random() * geometries.length);
        const matIndex = Math.floor(Math.random() * materials.length);
        
        const mesh = new THREE.Mesh(geometries[geomIndex], materials[matIndex]);
        
        // Random position in a more interesting pattern
        const radius = 30 + Math.random() * 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
        mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
        mesh.position.z = radius * Math.cos(phi) - 30;
        
        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.rotation.z = Math.random() * Math.PI;
        
        // Random scale
        const scale = Math.random() * 0.6 + 0.4;
        mesh.scale.set(scale, scale, scale);
        
        // Add to scene and objects array
        scene.add(mesh);
        objects.push({
            mesh: mesh,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            orbitSpeed: Math.random() * 0.01 + 0.005,
            orbitRadius: radius,
            orbitAngle: Math.random() * Math.PI * 2,
            orbitAxis: new THREE.Vector3(
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() - 0.5
            ).normalize()
        });
    }
    
    // Add a central object
    const centralGeometry = new THREE.IcosahedronGeometry(5, 1);
    const centralMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true,
        emissive: 0x222222,
        shininess: 100,
        transparent: true,
        opacity: 0.6
    });
    
    const centralMesh = new THREE.Mesh(centralGeometry, centralMaterial);
    scene.add(centralMesh);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Add point lights with different colors
    const pointLights = [
        { color: 0x00aaff, position: { x: 15, y: 15, z: 15 } },
        { color: 0xff00aa, position: { x: -15, y: 15, z: -15 } },
        { color: 0xffaa00, position: { x: 15, y: -15, z: -15 } }
    ];
    
    pointLights.forEach(light => {
        const pointLight = new THREE.PointLight(light.color, 1, 50);
        pointLight.position.set(light.position.x, light.position.y, light.position.z);
        scene.add(pointLight);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Smooth camera movement following mouse
        targetX = mouseX * 5;
        targetY = mouseY * 5;
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (targetY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        
        // Animate Spider-Man
        if (spiderman) {
            // Make Spider-Man swing
            spiderman.rotation.y += 0.01;
            spiderman.position.y = Math.sin(Date.now() * 0.001) * 2;
            
            // Make Spider-Man "shoot webs" occasionally
            if (Math.random() < 0.005) {
                const webGeometry = new THREE.CylinderGeometry(0.05, 0.05, 20, 8);
                const webMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
                const web = new THREE.Mesh(webGeometry, webMaterial);
                
                // Position the web at Spider-Man's hand
                web.position.copy(spiderman.position);
                web.position.x += 1.5 * Math.cos(spiderman.rotation.y);
                web.position.z += 1.5 * Math.sin(spiderman.rotation.y);
                
                // Rotate the web to shoot outward
                web.rotation.x = Math.PI / 2;
                web.rotation.z = Math.random() * Math.PI * 2;
                
                scene.add(web);
                
                // Remove the web after a short time
                setTimeout(() => {
                    scene.remove(web);
                    web.geometry.dispose();
                    web.material.dispose();
                }, 1000);
            }
        }
        
        // Rotate central object
        centralMesh.rotation.x += 0.003;
        centralMesh.rotation.y += 0.005;
        
        // Animate objects
        objects.forEach(obj => {
            // Rotate object
            obj.mesh.rotation.x += obj.rotationSpeed.x;
            obj.mesh.rotation.y += obj.rotationSpeed.y;
            obj.mesh.rotation.z += obj.rotationSpeed.z;
            
            // Orbit around center
            obj.orbitAngle += obj.orbitSpeed;
            
            // Calculate new position based on orbit
            const orbitQuat = new THREE.Quaternion().setFromAxisAngle(
                obj.orbitAxis, 
                obj.orbitAngle
            );
            
            const orbitPos = new THREE.Vector3(obj.orbitRadius, 0, 0);
            orbitPos.applyQuaternion(orbitQuat);
            
            obj.mesh.position.copy(orbitPos);
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Add mobile navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create nav toggle button if it doesn't exist
    if (!document.querySelector('.nav-toggle')) {
        const navToggle = document.createElement('div');
        navToggle.className = 'nav-toggle';
        navToggle.innerHTML = '<span></span>';
        document.body.appendChild(navToggle);
        
        // Toggle navigation on click
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.navigation').classList.toggle('active');
        });
        
        // Close navigation when clicking on a nav item on mobile
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    document.querySelector('.nav-toggle').classList.remove('active');
                    document.querySelector('.navigation').classList.remove('active');
                }
            });
        });
    }
});