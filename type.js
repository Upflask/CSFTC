  document.getElementById("file").onchange = function() {
    document.getElementById("uploadText").innerHTML = "Uploading...";
    var button = document.getElementById("uploadButton");
    button.className = button.className + " uploading";
    document.getElementById("form").submit();
  };
