// Toggle about section visibility
document.getElementById('show-more-about').addEventListener('click', function() {
    const moreAbout = document.getElementById('more-about');
    if (moreAbout.style.display === 'none' || moreAbout.style.display === '') {
        moreAbout.style.display = 'block';
    } else {
        moreAbout.style.display = 'none';
    }
});

// Toggle projects section visibility
document.getElementById('show-more-projects').addEventListener('click', function() {
    const moreProjects = document.getElementById('more-projects');
    if (moreProjects.style.display === 'none' || moreProjects.style.display === '') {
        moreProjects.style.display = 'block';
    } else {
        moreProjects.style.display = 'none';
    }
});
