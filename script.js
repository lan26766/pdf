// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Adjust on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
    
    // Platform tabs for download page
    const platformTabs = document.querySelectorAll('.platform-tab');
    const platformContents = document.querySelectorAll('.platform-content');
    
    if (platformTabs.length > 0) {
        platformTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and contents
                platformTabs.forEach(t => t.classList.remove('active'));
                platformContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show corresponding content
                const platform = this.getAttribute('data-platform');
                document.getElementById(platform).classList.add('active');
            });
        });
    }
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle answer visibility
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            
            // Rotate icon
            icon.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Download button handler (simulated)
    const downloadButtons = document.querySelectorAll('.download-btn, .btn-primary');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('download-btn')) {
                e.preventDefault();
                // Simulate download start
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
                this.classList.add('downloading');
                
                // Simulate download completion
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-check"></i> Download Complete!';
                    this.classList.remove('downloading');
                    this.classList.add('downloaded');
                    
                    // Show installation instructions
                    alert('Download complete! Run the installer to start your 7-day free trial.');
                }, 2000);
            }
        });
    });
    
    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            alert('Language selector: In the actual software, you can switch between 20+ languages from the settings menu.');
        });
    }
    
    // Trust indicators animation
    const trustIcons = document.querySelectorAll('.trust-icons i');
    if (trustIcons.length > 0) {
        trustIcons.forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.2}s`;
            icon.classList.add('pulse-animation');
        });
    }
});

// Add CSS animation for trust icons
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; transform: scale(1.1); }
    }
    
    .pulse-animation {
        animation: pulse 2s infinite;
    }
    
    .downloading {
        background-color: #6c757d !important;
    }
    
    .downloaded {
        background-color: #28a745 !important;
    }
    
    @media (max-width: 992px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .nav-links.active {
            display: flex;
        }
    }
`;
document.head.appendChild(style);