function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}
