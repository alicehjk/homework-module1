$(document).ready(function() {
  // Make selectable cells clickable
  $("tbody td").each(function() {
      var cellText = $(this).text().trim();

      // If cell is NOT "Not Available", add selectable class and hand cursor
      if (cellText !== "Not Available") {
          $(this).addClass("selectable").css("cursor", "pointer");
      }
  });

  // Toggle selection on click
  $("tbody td.selectable").on("click", function() {
      $(this).toggleClass("selected");
  });
});
