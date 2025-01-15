const footerContainer = document.querySelector('.footer-container');
const avatarContainer = document.querySelector('.avatar-container');
const shareContainer = document.querySelector('.share-container');
const share = document.getElementById('share');


//Initially hide the share container
shareContainer.classList.add('hidden');

share.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('clicked');
    if (window.innerWidth < 768 ) {
        avatarContainer.classList.toggle('hidden');
        shareContainer.classList.toggle('hidden');
        footerContainer.classList.toggle('dark');
        
        } 
    else if (window.innerWidth >= 768) {
        shareContainer.classList.toggle('hidden');
    }    
    
   
});

//To make sure visibility of the containers are toggled when the window is resized
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        if (share.classList.contains('clicked')) {
            avatarContainer.classList.add('hidden');
            shareContainer.classList.remove('hidden');
            footerContainer.classList.add('dark');
        } else {
            avatarContainer.classList.remove('hidden');
            shareContainer.classList.add('hidden');
            footerContainer.classList.remove('dark');
        }
    } else {
        avatarContainer.classList.remove('hidden');
        footerContainer.classList.remove('dark');
        if (share.classList.contains('clicked')) {
            shareContainer.classList.remove('hidden');
        } else {
            shareContainer.classList.add('hidden');
        }
    }
});