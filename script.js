const share = document.getElementById('share');
const avatarContainer = document.querySelector('.avatar-container');
const footerContainer = document.querySelector('.footer-container');
const shareContainer = document.querySelector('.share-container ');
share.addEventListener('click', () => {
    if (window.innerWidth < 768 ) {
        if (footerContainer.classList.contains('light')) {
            //Change the color of footer container
            footerContainer.classList.toggle('light');
            footerContainer.classList.add('dark');
    
            //Make the avatar go away
            avatarContainer.style.display = 'none';
    
            //Make the share icons visible
            shareContainer.classList.toggle('hidden');
    
        } 
    else if (window.innerWidth >= 768) {
        
    }    
    }
   
});