// Set the categories button
const loadCategories= () =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setMenu(data.data.news_category))
        
}

const setMenu = (categories) =>{
        const categoriesField = document.getElementById('categories-field')
        for(const category of categories){
                // console.log(category.category_name);
                const li = document.createElement('li');
                li.classList.add('li-field');
                li.innerHTML=`
                       <a> ${category.category_name}</a>
                `
                categoriesField.appendChild(li);
        }
}
loadCategories();

const newsLoads = () =>{
        fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => newsSection(data.data))
}


const newsSection = allNews =>{
        const newsField = document.getElementById('news-field');
        allNews.forEach(news =>{
                console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML= `
        <div class="card lg:card-side bg-base-100 shadow-xl my-6">
                <figure><img src="${news.thumbnail_url}" alt="Album"></figure>
                <div class="card-body">
                        <h2 class="card-title">${news.title}</h2>
                        <div class="h-28 p-4 text-ellipsis overflow-hidden">
                           <p>${news.details}</p>
                        </div>
                        
                        <div class="card-actions flex justify-between px-6">
                                <div class="flex items-center">
                                        <label tabindex="0" class="btn-circle avatar">
                                        <div class="w-10 rounded-full">
                                                 <img src="${news.author.img}" />
                                        </div>
                                        </label>
                                        <div>
                                        <strong>${news.author.name === 'system'? 'No data ava ilable':news.author.name }</strong><br>
                                        <span>${news.author.published_date}</span>
                                        </div>
                                </div>
                                <div>
                                        <h1 class="font-medium inline">View </h1>
                                        <p class="inline font-medium"> ${news.total_view === 0?' No data ava ilable':news.total_view }</P>

                                </div>
                                <div>
                                        <button class="btn btn-primary">Details</button>
                                </div>
                        </div>

                </div>
        </div>
        `
        newsField.appendChild(newsDiv);

        })
}
newsLoads();