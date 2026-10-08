// CampusFix common JavaScript

function getComplaints() {
    return JSON.parse(localStorage.getItem("campusComplaints")) || [];
}

function saveComplaints(complaints) {
    localStorage.setItem(
        "campusComplaints",
        JSON.stringify(complaints)
    );
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("campusUser"));
}

function logout() {
    localStorage.removeItem("campusUser");
    window.location.href = "login.html";
}

// Create demo complaints on first run
function initializeDemoData() {

    if (!localStorage.getItem("campusComplaints")) {

        const demoComplaints = [
            {
                id: 1001,
                title: "Broken Classroom Fan",
                category: "Electrical",
                location: "Block A - Room 204",
                priority: "High",
                description: "The ceiling fan is not working properly.",
                status: "Pending",
                date: "2026-10-05",
                user: "Demo User"
            },
            {
                id: 1002,
                title: "Water Leakage",
                category: "Water",
                location: "Block B - Ground Floor",
                priority: "Critical",
                description: "Water leakage near the main corridor.",
                status: "In Progress",
                date: "2026-10-04",
                user: "Demo User"
            },
            {
                id: 1003,
                title: "Dustbin Overflow",
                category: "Cleanliness",
                location: "Canteen",
                priority: "Medium",
                description: "Dustbins need immediate cleaning.",
                status: "Resolved",
                date: "2026-10-02",
                user: "Demo User"
            }
        ];

        saveComplaints(demoComplaints);
    }
}

initializeDemoData();