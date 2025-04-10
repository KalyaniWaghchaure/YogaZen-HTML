// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const contentArea = document.getElementById('contentArea');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Check if elements exist before adding event listeners
    if (menuToggle) {
        // Open sidebar
        menuToggle.addEventListener('click', function() {
            console.log('Menu toggle clicked');
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            if (window.innerWidth > 768) {
                contentArea.classList.add('shifted');
            }
        });
    } else {
        console.error('Menu toggle button not found');
    }

    // Close sidebar function
    function closeSidebar() {
        console.log('Closing sidebar');
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        contentArea.classList.remove('shifted');
    }

    // Add event listeners for closing sidebar
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Handle responsive layout
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            contentArea.classList.remove('shifted');
        } else if (sidebar && sidebar.classList.contains('active')) {
            contentArea.classList.add('shifted');
        }
    });
    
    // Debug - check if elements exist
    console.log('Menu toggle:', menuToggle);
    console.log('Sidebar:', sidebar);
    console.log('Sidebar close:', sidebarClose);
    console.log('Content area:', contentArea);
    console.log('Sidebar overlay:', sidebarOverlay);
});

// Additional functionality to ensure sidebar works
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const contentArea = document.getElementById('contentArea');
    
    if (sidebar && sidebarOverlay) {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        
        if (contentArea && window.innerWidth > 768) {
            contentArea.classList.toggle('shifted');
        }
    }
}

// Make toggleSidebar globally available
window.toggleSidebar = toggleSidebar;

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Elements to animate
    const footerColumns = document.querySelectorAll('.footer-column');
    const socialColumns = document.querySelectorAll('.social-column');
    const footerBrand = document.querySelector('.footer-brand');
    const footerCopyright = document.querySelector('.footer-copyright');
  
    // Simple animation function
    const animateOnScroll = () => {
      // Reset animations if footer is not in viewport
      if (!isInViewport(document.querySelector('.footer'))) {
        footerColumns.forEach(column => {
          column.style.opacity = '0';
          column.style.transform = 'translateY(20px)';
        });
        
        socialColumns.forEach(column => {
          column.style.opacity = '0';
        });
        
        footerBrand.style.opacity = '0';
        footerBrand.style.transform = 'translateY(20px)';
        
        footerCopyright.style.opacity = '0';
        return;
      }
  
      // Trigger animations when footer is in viewport
      setTimeout(() => {
        footerBrand.style.opacity = '1';
        footerBrand.style.transform = 'translateY(0)';
      }, 200);
  
      footerColumns.forEach((column, index) => {
        setTimeout(() => {
          column.style.opacity = '1';
          column.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
      });
  
      socialColumns.forEach((column, index) => {
        setTimeout(() => {
          column.style.opacity = '1';
        }, 800 + (200 * index));
      });
  
      setTimeout(() => {
        footerCopyright.style.opacity = '1';
      }, 1600);
    };
  
    // Hover effects for links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.color = '#8a4fff';
        this.style.transform = 'translateX(5px)';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.color = '#666';
        this.style.transform = 'translateX(0)';
      });
    });
  
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check
    animateOnScroll();
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    // Get all testimonial cards
    const slides = Array.from(track.getElementsByClassName('testimonial-card'));
    const slideCount = slides.length;
    let currentIndex = 0;
    let slideWidth;
    
    // Create indicator dots
    slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
    
    // Get all indicators
    const indicators = Array.from(indicatorsContainer.getElementsByClassName('indicator'));
    
    // Function to update the slide position
    function updateSlidePosition() {
      slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      
      // Update active states
      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
      
      // Disable/enable buttons based on position
      prevBtn.classList.toggle('disabled', currentIndex === 0);
      nextBtn.classList.toggle('disabled', currentIndex === slideCount - 1);
    }
    
    // Go to a specific slide
    function goToSlide(index) {
      currentIndex = index;
      updateSlidePosition();
    }
    
    // Next slide handler
    function nextSlide() {
      if (currentIndex < slideCount - 1) {
        currentIndex++;
        updateSlidePosition();
      }
    }
    
    // Previous slide handler
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
      }
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Initialize
    updateSlidePosition();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });
    
    // Auto-advance every 5 seconds
    let autoplayInterval = setInterval(function() {
      if (currentIndex < slideCount - 1) {
        nextSlide();
      } else {
        goToSlide(0); // Loop back to first slide
      }
    }, 5000);
    
    // Pause autoplay on hover
    track.addEventListener('mouseenter', function() {
      clearInterval(autoplayInterval);
    });
    
    // Resume autoplay when mouse leaves
    track.addEventListener('mouseleave', function() {
      clearInterval(autoplayInterval);
      autoplayInterval = setInterval(function() {
        if (currentIndex < slideCount - 1) {
          nextSlide();
        } else {
          goToSlide(0);
        }
      }, 5000);
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      updateSlidePosition();
    });
    
    // Add touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left, go to next slide
        nextSlide();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right, go to previous slide
        prevSlide();
      }
    }
    
    // Add animation when new testimonials come into view
    function animateTestimonials() {
      const activeSlide = slides[currentIndex];
      activeSlide.style.animation = 'none';
      setTimeout(() => {
        activeSlide.style.animation = 'fadeIn 0.5s ease forwards';
      }, 10);
    }
    
    // Add animation when changing slides
    track.addEventListener('transitionend', animateTestimonials);
  });
  