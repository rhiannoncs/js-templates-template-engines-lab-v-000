function createPost () {
  var title = document.getElementById("title").value;
  var content = document.getElementById("content").value;
  var author = document.getElementById("author").value;
  
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
  var post = postTemplate({ 'title': title, 'content': content, 'author': author});
  var comments = commentsTemplate();
  var page = pageTemplate({'post': post, 'comments-section': comments});
}

function postComment () {
  var commenter = document.getElementById("commenter").value;
  var commentContent = document.getElementById("comment-content").value;
  
  var commentsDiv = document.getElementById("comments");
  
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  
  var comment = commentTemplate({'comment': commentContent, 'commenter': commenter});
  
  commentsDiv.innerHTML += comment;
}