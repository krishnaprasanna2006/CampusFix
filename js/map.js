const markers = document.querySelectorAll(".map-marker");

markers.forEach(marker => {

    marker.style.cursor = "pointer";

    marker.addEventListener("click", function() {

        alert(
            "Campus Issue Location\n\n" +
            "Click Reports → Complaints to view complete details."
        );

    });

});