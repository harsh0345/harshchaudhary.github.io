// Loading screen functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading');
    
    // Show loading screen for 3 seconds
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
    }, 3000);
    
    // Remove loading screen from DOM after animation
    setTimeout(function() {
        if (loadingScreen && loadingScreen.parentNode) {
            loadingScreen.parentNode.removeChild(loadingScreen);
        }
    }, 3500);
});

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll-to-top functionality
function createScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #007bff;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#0056b3';
        this.style.transform = 'scale(1.1)';
    });
    
    scrollButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#007bff';
        this.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTop);

// Add fade-in animation to sections
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation to all sections and cards
    const elementsToAnimate = document.querySelectorAll('.section, .project-card, .experience-item, .education-item, .achievement-item');
    
    elementsToAnimate.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
}

// Initialize scroll animations after loading screen
setTimeout(addScrollAnimations, 3500);

// Add typing effect to main title
function addTypingEffect() {
    const mainName = document.querySelector('.main-name');
    const title = document.querySelector('.title');
    
    if (mainName && title) {
        const nameText = mainName.textContent;
        const titleText = title.textContent;
        
        mainName.textContent = '';
        title.textContent = '';
        
        // Type name first
        let nameIndex = 0;
        const nameTyper = setInterval(function() {
            mainName.textContent += nameText.charAt(nameIndex);
            nameIndex++;
            
            if (nameIndex >= nameText.length) {
                clearInterval(nameTyper);
                
                // Then type title
                let titleIndex = 0;
                const titleTyper = setInterval(function() {
                    title.textContent += titleText.charAt(titleIndex);
                    titleIndex++;
                    
                    if (titleIndex >= titleText.length) {
                        clearInterval(titleTyper);
                    }
                }, 50);
            }
        }, 100);
    }
}

// Start typing effect after loading screen
setTimeout(addTypingEffect, 3500);

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.borderColor = '#007bff';
                this.style.borderWidth = '2px';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.borderColor = '#e9ecef';
                this.style.borderWidth = '1px';
            });
        });
    }, 3500);
});

// Add click tracking for analytics (simulated)
function trackClick(element, action) {
    console.log(`Analytics: ${action} clicked on ${element}`);
    // In a real implementation, this would send data to an analytics service
}

// Track LinkedIn button clicks
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const linkedinBtn = document.querySelector('.linkedin-btn');
        const readMoreLinks = document.querySelectorAll('.read-more');
        const footerLinks = document.querySelectorAll('.footer-links a');
        
        if (linkedinBtn) {
            linkedinBtn.addEventListener('click', function() {
                trackClick('LinkedIn Button', 'Social Link');
            });
        }
        
        readMoreLinks.forEach((link, index) => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                trackClick(`Project ${index + 1}`, 'Read More');
                // You could redirect to a detailed project page here
                alert('This would redirect to the full project details page.');
            });
        });
        
        footerLinks.forEach(link => {
            link.addEventListener('click', function() {
                trackClick(this.textContent, 'Footer Link');
            });
        });
    }, 3500);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'T' to scroll to top
    if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.metaKey) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'B' to scroll to bottom
    if (e.key.toLowerCase() === 'b' && !e.ctrlKey && !e.metaKey) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// Add print functionality
function addPrintStyles() {
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Print Portfolio';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        padding: 10px 15px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        opacity: 0.8;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    printButton.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1.05)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(printButton);
}

// Initialize print button
setTimeout(addPrintStyles, 3500);