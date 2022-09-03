// Set the categories button
const loadCategories= () =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setMenu(data.data.news_category))
        .catch(error => console.log(error))
}

const setMenu = (categories) =>{
        const categoriesField = document.getElementById('categories-field')
        for(const category of categories){
                // console.log(category.category_id);
                const li = document.createElement('li');
                li.classList.add('li-field');
                li.innerHTML=`
                       <button onclick="newsLoads('${category.category_id}')"> ${category.category_name}</button>
                `
                categoriesField.appendChild(li);
        }
}
loadCategories();

/*-----------------News Portal--------------------*/

const newsLoads = (code) =>{
        const url =`https://openapi.programming-hero.com/api/news/category/${code}`
        console.log('get news details', url);
        fetch(url)
        .then(res => res.json())
        .then(data => newsSection(data.data))
        .catch(error => console.log(error))
}


const newsSection = allNews =>{
        const newsField = document.getElementById('news-field');
        const totalArticles = document.getElementById('total-articles')
        totalArticles.innerText = allNews.length;

        newsField.innerHTML ='';
        allNews.forEach(news =>{
                // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML= `
        <div class="card lg:card-side bg-base-100 shadow-xl my-6">
                <figure><img src="${news.thumbnail_url}" alt="Album"></figure>
                <div class="card-body">
                        <h2 class="card-title">${news.title}</h2>
                        <div class="h-28 p-4  text-ellipsis overflow-hidden">
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
                                        <strong>${news.author.name == null || news.author.name == ''? 'No data available':news.author.name }</strong><br>
                                        <span>${news.author.published_date}</span>
                                        </div>
                                </div>
                                <div>
                                        <h1 class="font-medium inline">View </h1>
                                        <p class="inline font-medium"> ${news.total_view == null ||news.total_view == '' ? ' No data available' : news.total_view }</P>

                                </div>
                                <div>
                                    <label onclick="displayModalField('${news.category_id}')" for="my-modal-6" class="btn btn-primary modal-button">open modal</label>
                                        
                                </div>
                        </div>

                </div>
        </div>
        `
        newsField.appendChild(newsDiv);

        })
}
/*-------------Modal field---------------*/
const displayModalField = id =>{
        const url =`https://openapi.programming-hero.com/api/news/category/${id}`        
        fetch(url)
        .then(res => res.json())
        .then(data => allModals(data.data))
}
const allModals = modals =>{
        console.log(modals);
        const modalSection = document.getElementById('modal-section');
        modals.forEach(modal=>{
                console.log(modal);
                const modalDiv = document.createElement('div')
                modalDiv.innerHTML =`
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div class="modal-action">
                                        <label for="my-modal-6" class="btn">close</label>
                                </div>
                        </div>
                </div>
                `
                modalSection.appendChild(modalDiv);
        })
                
      
}