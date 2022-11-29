// var env = new nunjucks.Environment(AsyncLoaderFromDatabase, opts);


function create_add() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var image = document.getElementById("image").value;
  var onTopDate = document.getElementById("onTopDate").value;
  console.log(title, description, image,onTopDate);
  var body = { title, description, image,onTopDate }

  axios.put('/adds/new', {
    title:title,
    description:description,
    image:image,
    onTopDate:onTopDate
  })
  .then(function (response) {
    console.log(response,JSON.stringify(body));//JSON.stringify(body)
  })
  .catch(function (error) {
    console.log(error);
  });
}
function delete_add() {
  let id = document.getElementById("id").value;
  axios.delete('/adds/delete', {
    id: id
  })
  .then(function (response) {
    console.log(response);//JSON.stringify(body)
  })
  .catch(function (error) {
    console.log(error);
  });

}
function OnTop() {
  let id = document.getElementById("OnTop").value;
  axios.put('/adds/OnTop', {
    id: id
  })
  .then(function (response) {
    console.log(response);
    return axios.get('/adds');
  })
  .catch(function (error) {
    console.log(error);
  });
}
function OnDown() {
  let id = document.getElementById("OnDown").value;
  axios.put('/adds/OnDown', {
    id: id
  })
  .then(function (response) {
    console.log(response);
    return axios.get('/adds');
  })
  .catch(function (error) {
    console.log(error);
  });
}
function like(){
  let id = document.getElementById("like").value;
  axios.put('/liked/AddToLiked', {
    id: id
  })
  .then(function (response) {
    console.log(response);
    return axios.get('/adds');
  })
  .catch(function (error) {
    console.log(error);
  });
}