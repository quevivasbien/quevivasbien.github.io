function filterPosts() {
  checkboxes = document.getElementById('checkboxes').getElementsByTagName('input');
  posts = document.getElementById('post-list').getElementsByTagName('li');
  var nothingChecked = true;
  for (var i = 0; i < posts.length; i++) {
    posts[i].style.display = 'none';
  }
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      nothingChecked = false;
      for (var j = 0; j < posts.length; j++) {
        if (posts[j].classList.contains(checkboxes[i].value)) {
          posts[j].style.display = 'list-item';
        }
      }
    }
  }
  if (nothingChecked) {
    for (var i = 0; i < posts.length; i++) {
      posts[i].style.display = 'list-item';
    }
  }
}
