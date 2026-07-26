
// ===== TAB NAVIGATION =====
const tabBtns = document.querySelectorAll('.tab-btn');
const pages = document.querySelectorAll('.page');

function switchToPage(pageId) {
    // Hide all pages
    pages.forEach(p => p.classList.remove('active-page'));

    // Show selected page
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active-page');

    // Update active button
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === pageId) btn.classList.add('active');
    });

    // Update URL hash (bookmarkable)
    window.location.hash = pageId;

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add click listeners to all tabs
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchToPage(btn.dataset.page));
});

// Check URL hash on page load
if (window.location.hash) {
    const id = window.location.hash.replace('#', '');
    if (document.getElementById(id)) switchToPage(id);
}




// ===== CONSOLE FLAIR =====
console.log('%c🔥 Jannimal Performance | BMW Specialists', 'color:#2563eb;font-size:18px;font-weight:bold;');
console.log('%c📧 info@jannimalperformance.com', 'color:#888;font-size:14px;');
function toggleVideo(element) {
    const card = element.closest('.video-card') || element;
    const img = card.querySelector('.video-thumbnail img');
    const video = card.querySelector('.video-thumbnail video');
    const playBtn = card.querySelector('.play-button-overlay');
    const tag = card.querySelector('.video-tag');
    
    if (!video) return;
    
    const isPlaying = video.getAttribute('data-playing') === 'true';
    
    if (isPlaying) {
        video.pause();
        video.currentTime = 0;
        video.setAttribute('data-playing', 'false');
        if (img) img.style.display = 'block';
        if (playBtn) playBtn.style.display = 'flex';
        if (tag) tag.style.display = 'block';
        video.style.display = 'none';
    } else {
        video.setAttribute('data-playing', 'true');
        if (img) img.style.display = 'none';
        if (playBtn) playBtn.style.display = 'none';
        if (tag) tag.style.display = 'none';
        video.style.display = 'block';
        video.play();
    }
}

// Prevent clicks on the video itself (native controls: pause, seek, volume, etc.)
// from bubbling up to the card and re-triggering toggleVideo.
document.querySelectorAll('.video-card video').forEach(video => {
    video.addEventListener('click', e => e.stopPropagation());

    video.addEventListener('ended', () => {
        resetToThumbnail(video.closest('.video-card'));
    });
});

function resetToThumbnail(card) {
    const img = card.querySelector('.work-image img');
    const video = card.querySelector('.work-image video');
    const playBtn = card.querySelector('.play-button-overlay');
    const tag = card.querySelector('.video-tag');

    video.pause();
    video.currentTime = 0;
    video.setAttribute('data-playing', 'false');
    if (img) img.style.display = 'block';
    if (playBtn) playBtn.style.display = 'flex';
    if (tag) tag.style.display = 'block';
    video.style.display = 'none';
}

// ===== BOOKING FORM =====
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const car = document.getElementById('car')?.value.trim();
        const service = document.getElementById('service')?.value;

        if (!name || !email || !car || !service) {
            alert('Please fill out all required fields (*)');
            return;
        }

        bookingForm.style.display = 'none';
        const success = document.getElementById('formSuccess');
        if (success) success.style.display = 'block';
    });
}

console.log('🔥 Jannimal Performance loaded!');