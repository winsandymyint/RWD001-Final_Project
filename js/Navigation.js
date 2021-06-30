document.getElementById("search").onclick = function searchBar() {
  var icon = document.getElementById("search");
  var changesInSearchBar = document.createElement('div');
    changesInSearchBar.style.display = 'flex';
    changesInSearchBar.classList = "wrap";
  var textbar = document.createElement("input");
  var parent = icon.parentNode;

    textbar.setAttribute("type","text");
    textbar.placeholder = "Search..";
    textbar.name = "search";
    textbar.classList = 'searchTerm';
  var button = document.createElement('button');
    button.type = 'submit';
    button.classList = 'searchButton';
    var button_i = document.createElement('i');
      button_i.classList = 'lnr lnr-magnifier';
    
    button.appendChild(button_i);
  
  changesInSearchBar.appendChild(textbar);
  changesInSearchBar.appendChild(button);

  parent.replaceChild(changesInSearchBar,icon);

}


var profile = document.getElementById('profile');
profile.addEventListener('click',function profileOpen(){
  window.location = "Profile.html"; // Redirecting to profile page.
})