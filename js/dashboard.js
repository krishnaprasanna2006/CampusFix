document.addEventListener("DOMContentLoaded", function() {

    const complaints = getComplaints();

    const total = complaints.length;

    const pending = complaints.filter(
        c => c.status === "Pending"
    ).length;

    const progress = complaints.filter(
        c => c.status === "In Progress"
    ).length;

    const resolved = complaints.filter(
        c => c.status === "Resolved"
    ).length;

    document.getElementById("totalComplaints").textContent = total;
    document.getElementById("pendingComplaints").textContent = pending;
    document.getElementById("progressComplaints").textContent = progress;
    document.getElementById("resolvedComplaints").textContent = resolved;

    const container =
        document.getElementById("recentComplaints");

    const recent = complaints.slice(-5).reverse();

    if (recent.length === 0) {

        container.innerHTML =
            "<p>No complaints found.</p>";

        return;
    }

    container.innerHTML = recent.map(c => `

        <div class="complaint-card">

            <h3>${c.title}</h3>

            <p>
                📍 ${c.location}
            </p>

            <p>
                ${c.description}
            </p>

            <div class="complaint-meta">

                <span class="status ${c.status.replace(" ", "-")}">
                    ${c.status}
                </span>

                <span class="priority ${c.priority}">
                    ${c.priority}
                </span>

            </div>

            <a
                href="complaint-details.html?id=${c.id}"
                class="view-btn">
                View Details →
            </a>

        </div>

    `).join("");

});