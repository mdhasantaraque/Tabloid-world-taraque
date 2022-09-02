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
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div class="card-actions justify-end">
                                <button class="btn btn-primary">Listen</button>
                        </div>
                </div>
        </div>
        `
        newsField.appendChild(newsDiv);

        })
}
newsLoads();