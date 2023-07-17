console.log("Let's get this party started!");

const $gifContainer = $('#gif-container');
const $input = $('#search');

function addGif(result){
    let numResults = result.data.length;
    if(numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", {class: "col-md-4 col-12 mb-2"});
        let $newGif = $("<img>", {
            src: result.data[randomIdx].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifContainer.append($newCol);
    }
}


$('form').on('submit', async function(e){
    e.preventDefault();

    let searchText = $input.val();
    $input.val('');

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchText,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});


$('#remove').on('click', function(){
    $gifContainer.empty();
});

