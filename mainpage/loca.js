const search = document.querySelector(".search_cont");
const buy_btn = document.querySelector(".buy_btn");

buy_btn.addEventListener("click", () => {

});



function catagory_sec(img, product_name){
    const category_section = document.querySelector(".category-section");
    const cat_items=document.createElement("div");
    cat_items.classList.add("catagory-product");
    cat_items.innerHTML =`
                    <div class="catagory-item">
                        <img src="${img}" alt="Electronics">
                        <p>${product_name}</p>
                    </div>`;
                    category_section.appendChild(cat_items);
};

catagory_sec(
    "Images/electronic-product1.png",
    "Electronics"
);
catagory_sec(
    "Images/electronic-product1.png",
    "Electronics"
);
catagory_sec(
    "Images/electronic-product1.png",
    "Electronics"
);
catagory_sec(
    "Images/electronic-product1.png",
    "Electronics"
);



