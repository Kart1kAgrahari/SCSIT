document.getElementById("collapseBtn").addEventListener("click", function () {
    var content = document.getElementById("collapseContent");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  