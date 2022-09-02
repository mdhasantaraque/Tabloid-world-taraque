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
                li.classList.add('li-field')
                li.innerHTML=`
                       <a> ${category.category_name}</a>
                `
                categoriesField.appendChild(li);
        }
}
loadCategories();