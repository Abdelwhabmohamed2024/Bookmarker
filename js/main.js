var websiteName = document.getElementById('webName');
var websiteUrl = document.getElementById('webSite');
var bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

function addBookmark() {
  
  var bookmark = {
    name: websiteName.value,
    url: websiteUrl.value
  };

  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  websiteName.value = '';
  websiteUrl.value = '';

  displayBookmarks();

  return false
}

function displayBookmarks() {
    
 
  var cartona=""
  for (var i = 0; i < bookmarks.length; i++) {
    var bookmark = bookmarks[i];
    cartona += `<tr>
                    <td>${i + 1}</td>
                    <td>${bookmark.name}</td>
                    <td><a class="btn btn-success" target="_blank" href="${bookmark.url}"><i class="fa-solid fa-eye pe-2"></i>Visit</a></td>
                    <td><button class="btn btn-danger" onclick="deleteBookmark(${i})">Delete</button></td>
                </tr>`;
  
  }
  document.getElementById("demo").innerHTML= cartona;
}




function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  displayBookmarks();
}


displayBookmarks();