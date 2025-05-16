document.addEventListener("DOMContentLoaded", function () {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];

    function updateBookmarks() {
        localStorage.setItem("bookmarkedJobs", JSON.stringify(bookmarks));
    }

    function toggleBookmark(jobId) {
        if (bookmarks.includes(jobId)) {
            bookmarks = bookmarks.filter(id => id !== jobId);
        } else {
            bookmarks.push(jobId);
        }
        updateBookmarks();
        renderBookmarks();
    }

    function renderBookmarks() {
        document.querySelectorAll(".bookmark-btn").forEach(btn => {
            btn.innerText = bookmarks.includes(btn.dataset.id) ? "Unbookmark" : "Bookmark";
        });
    }

    document.querySelectorAll(".bookmark-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            toggleBookmark(this.dataset.id);
        });
    });

    renderBookmarks();
});
