(function() {
  var input_elem, image_url, set_page_background, update_image, check_enter;
  input_elem = document.querySelector("#image_url");
  String.prototype.isOneOf = function(array) {
    for(var index in array)
      if(this.trim().toLowerCase() == array[index])
        return true;
    return false;
  };
  set_page_background = image_url => {
    document.body.style.backgroundImage = "url(" + image_url + ")";
    document.body.style.backgroundColor = image_url.isOneOf(["empty", "blank", "white", ""]) ? "white" : (image_url.isOneOf(["red", "orange", "yellow", "green", "blue", "purple", "black"]) || image_url.match(/^#[A-Fa-f0-9]{6}$/)) ? image_url : "transparent";
    input_elem.value = image_url;
  };
  set_page_background((image_url = localStorage.getItem("image_url"))); 
  input_elem.addEventListener("blur", () => {
    set_page_background(input_elem.value);
    localStorage.setItem("image_url", input_elem.value);
  });
  input_elem.addEventListener("keyup", e => {
    if(e.which == 13)
      input_elem.dispatchEvent(new Event("blur"));
  });
})()
