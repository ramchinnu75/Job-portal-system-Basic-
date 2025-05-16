document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("jobSearch");
    const jobList = document.getElementById("jobList");

    searchInput.addEventListener("input", function () {
        let filter = searchInput.value.toLowerCase();
        let jobs = jobList.getElementsByClassName("job-item");

        for (let job of jobs) {
            let title = job.getElementsByTagName("h3")[0].innerText.toLowerCase();
            job.style.display = title.includes(filter) ? "" : "none";
        }
    });
});
