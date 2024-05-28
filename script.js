fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
    .then(response => response.json())
    .then(data => {
        const newsList = document.querySelector('#news-list');
        console.log(data);
        data.items.forEach(element => {

            const li = document.createElement('li');
            const h2 = document.createElement('h2');
            const a = document.createElement('a')
            h2.textContent = element.title;
            a.textContent = 'Read More';
            a.href = element.link;
            a.target = '_blank';
            li.appendChild(h2);
            li.appendChild(document.createTextNode(element.description))
            li.appendChild(a);
            newsList.appendChild(li);
            

        });
    })