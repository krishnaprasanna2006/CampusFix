const reportForm = document.getElementById("reportForm");

if (reportForm) {

    reportForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const user = getCurrentUser();

        const complaint = {

            id: Date.now(),

            title:
                document.getElementById("issueTitle").value,

            category:
                document.getElementById("issueCategory").value,

            location:
                document.getElementById("issueLocation").value,

            priority:
                document.getElementById("issuePriority").value,

            description:
                document.getElementById("issueDescription").value,

            status: "Pending",

            date:
                new Date().toISOString().split("T")[0],

            user:
                user ? user.name : "Guest"

        };

        const complaints = getComplaints();

        complaints.push(complaint);

        saveComplaints(complaints);

        const message =
            document.getElementById("reportMessage");

        message.style.color = "#16a34a";

        message.textContent =
            "Complaint submitted successfully!";

        reportForm.reset();

        setTimeout(() => {

            window.location.href =
                "complaints.html";

        }, 1200);

    });
}