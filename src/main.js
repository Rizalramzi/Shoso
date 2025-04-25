const loveButtons = document.querySelectorAll('.love-button');
    
loveButtons.forEach(button => {
    let isLoved = false;
    const icon = button.querySelector('.love-icon');
    
    button.addEventListener('click', function() {
        isLoved = !isLoved;
        
        if (isLoved) {
            icon.src = "assets/images/icons/love.svg";
            icon.alt = "Unlike";
            button.classList.add('active');
        } else {
            icon.src = "assets/images/icons/love-outline.svg";
            icon.alt = "Like";
            button.classList.remove('active');
        }
        
        icon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('follow-button')) {
            const button = e.target;
            const isFollowing = button.textContent.trim() === 'Following';
            
            if (isFollowing) {
                button.classList.remove('bg-[#F6FAFD]', 'border', 'border-[#2579D1]', 'text-[#2579D1]');
                button.classList.add('bg-[#2579D1]', 'text-white');
                button.textContent = '+Follow';
            } else {
                button.classList.remove('bg-[#2579D1]', 'text-white');
                button.classList.add('bg-[#F6FAFD]', 'border', 'border-[#2579D1]', 'text-[#2579D1]');
                button.textContent = 'Following';
            }
        }
    });
});