document.addEventListener("DOMContentLoaded", function() {

    const complaints = getComplaints();

    const total = complaints.length;

    const resolved = complaints.filter(
        c => c.status === "Resolved"
    ).length;

    const active = complaints.filter(
        c => c.status !== "Resolved"
    ).length;

    const highPriority = complaints.filter(
        c =>
            c.priority === "High" ||
            c.priority === "Critical"
    ).length;

    const resolutionRate =
        total === 0
            ? 0
            : Math.round((resolved / total) * 100);

    document.getElementById("analyticsTotal")
        .textContent = total;

    document.getElementById("resolutionRate")
        .textContent = resolutionRate + "%";

    document.getElementById("highPriority")
        .textContent = highPriority;

    document.getElementById("activeIssues")
        .textContent = active;


    // Category chart

    const categories = {};

    complaints.forEach(c => {

        categories[c.category] =
            (categories[c.category] || 0) + 1;

    });

    const categoryChart =
        document.getElementById("categoryChart");

    const maxCategory =
        Math.max(...Object.values(categories), 1);

    categoryChart.innerHTML =
        Object.entries(categories).map(
            ([category, count]) => {

                const width =
                    (count / maxCategory) * 100;

                return `

                    <div class="bar-item">

                        <div class="bar-label">
                            <span>${category}</span>
                            <strong>${count}</strong>
                        </div>

                        <div class="bar">
                            <div
                                class="bar-fill"
                                style="width:${width}%">
                            </div>
                        </div>

                    </div>

                `;

            }
        ).join("");


    // Status chart

    const statuses = {

        "Pending":
            complaints.filter(c => c.status === "Pending").length,

        "In Progress":
            complaints.filter(c => c.status === "In Progress").length,

        "Resolved":
            complaints.filter(c => c.status === "Resolved").length

    };

    const statusChart =
        document.getElementById("statusChart");

    statusChart.innerHTML =
        Object.entries(statuses).map(
            ([status, count]) => `

                <div class="status-row">

                    <span>${status}</span>

                    <strong>${count}</strong>

                </div>

            `
        ).join("");

});