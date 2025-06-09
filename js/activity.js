$(document).ready(function() {
    $("tbody td").each(function() {
        var cellText = $(this).text().trim();

        if (cellText !== "Not Available") {
            $(this).addClass("selectable").css("cursor", "pointer");
        }
    });

    $("tbody td.selectable").on("click", function() {
        $(this).toggleClass("selected");
        updateSelectedActivities();
    });

    function updateSelectedActivities() {
        var selectedList = $("#activity-list");
        selectedList.empty();

        $("tbody td.selected").each(function() {
            var activityName = $(this).text().trim();
            var columnIndex = $(this).index();
            var cliffName = $("thead th").eq(columnIndex).text().trim();

            selectedList.append("<li>" + activityName + " (" + cliffName + ")</li>");
        });

        if ($("tbody td.selected").length > 0) {
            $("#selected-activities").show();
        } else {
            $("#selected-activities").hide();
        }
    }
});
