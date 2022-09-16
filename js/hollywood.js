$(function () {
    $('#header',).load('header.html');
});
$(function(){
    $('#second_header',).load('second_header.html');
})
$(function(){
    $('#footer',).load('footer.html');
})



let newsPro = document.getElementById('content');


var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.jsonbin.it/bins/29H6noZa',true);
// xhr.open('GET','https://api.publicapis.org/entries',true);
xhr.getResponseHeader('Content-type','application/json');

xhr.onload= function(){
    if(this.status === 200){
       let json = JSON.parse(this.responseText);
       let results = json.images;
    //    console.log(results);
       let newsHtml= "";
       
       results.forEach(function(element){
        //   console.log(results[news]);
           let news=`
           <div class="card_second">
                <div class="movie_det">
                    <img src="${element["ImageURL"]}" alt="">
                    <div class="all_det">
                        <h4>${element["Name"]}</h4>
                        <span class="year">${element["year"]}</span>
                        <p>Rating <span>${element["Rating"]}/10</span></p>
                        <div class="box">
                            <a class="button" href="#popup1"><button style="width:100%;" id="${element["vid"]}" onClick="GFG_click(this.id)">Watch Now</button></a>
                        </div>
                    </div>
                </div>
           </div>`;
            newsHtml += news;

        });
       newsPro.innerHTML = newsHtml;
    }
    else{
        console.log("Error occured")
    }
}
xhr.send()


function GFG_click(clicked){
    document.getElementById("iframe").src
    =clicked+"/preview";
}
