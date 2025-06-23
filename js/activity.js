$(document).ready(function () {
    $("tbody td").each(function () {
        var cellText = $(this).text().trim();
        if (cellText !== "Not Available") {
            $(this).addClass("selectable").css("cursor", "pointer");
        }
    });

    $("tbody").on("click", "td.selectable", function () {
        $(this).toggleClass("selected");
    });

    $("#view-selected-btn").on("click", function () {
        var selectedList = $("#activity-list");
        selectedList.empty();

        $("tbody td.selected").each(function () {
            var activityName = $(this).text().trim();
            var columnIndex = $(this).index();
            var cliffName = $("thead th").eq(columnIndex).text().trim();
            var listItem = $("<li>").addClass("list-group-item").text(activityName + " (" + cliffName + ")");
            selectedList.append(listItem);
        });

        $("#activityModal").modal("show");
    });
});
