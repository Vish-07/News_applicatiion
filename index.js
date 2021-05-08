console.log("Welcome to News App")
//API key
//686ae863d606457a8d170b50acd45e7e

const APIToken = 'dbabd388bd2a8898b71e6379e23d02c9';
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=${APIToken}`, true);

xhr.onload = function () {
    if(this.status === 200)
    {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        
        let newsHTML = "";
        articles.forEach(function(element, index) {
            let news = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        <b>Breaking News ${index + 1}:</b> ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#newsAccordion">
                    <div class="accordion-body"> ${element["content"]}. <a href = "${element['url']}" target = "_blank"> Read more here </a> </div>
                </div>
            </div>`

            newsHTML += news;
            
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else{
        console.log('Some error occurred');
    }
}

xhr.send();
