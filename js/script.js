// Alex Xu Resume - Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.id = 'print-resume';
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Resume';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        font-family: inherit;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    `;
    
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    });
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);
    
    // Add smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add section highlight on scroll
    const sections = document.querySelectorAll('.section');
    
    const highlightSection = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Remove all active classes
        sections.forEach(section => {
            section.classList.remove('active-section');
        });
        
        // Add active class to current section
        if (currentSection) {
            const currentSectionElement = document.getElementById(currentSection);
            if (currentSectionElement) {
                currentSectionElement.classList.add('active-section');
            }
        }
    };
    
    // Initial call
    highlightSection();
    
    // Listen for scroll
    window.addEventListener('scroll', highlightSection);
    
    // Add CSS for active section
    const style = document.createElement('style');
    style.textContent = `
        .active-section .section-title {
            color: var(--accent-color) !important;
            transition: color 0.3s ease;
        }
        
        @media (max-width: 768px) {
            #print-resume {
                bottom: 10px;
                right: 10px;
                padding: 8px 16px;
                font-size: 0.9rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Log page load
    console.log('Alex Xu Resume loaded successfully');
});