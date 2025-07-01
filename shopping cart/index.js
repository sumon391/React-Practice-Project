
let allproducts = document.getElementsByClassName("productdiv");
let cart_products = document.getElementById("cartproducts");
let total_price = document.getElementById("totalprice");
let promo = document.getElementById("promo");

let name_elmement;
let img_element;
let price_element;
let quantity_element;
let cart_element;

let sum = 0;
for (let i = 0; i < allproducts.length; i++) {

    let allelements = allproducts[i].children;

    for (let index = 0; index < allelements.length; index++) {

        if (index == 4) {
            cart_element = allelements[index];
            cart_element.addEventListener("click", (e) => {
                e.preventDefault();
                img_element = allelements[0];
                name_elmement = allelements[1];
                price_element = allelements[2];
                quantity_element = allelements[3];
                let counter=parseFloat(quantity_element.dataset.value);
                if(counter==0)
                    return;
                counter--;
                quantity_element.innerText=`Quantity : ${counter}`;
                quantity_element.setAttribute("data-value",counter.toString());

                let new_element = document.createElement("div");

                //creating name
                let name = document.createElement("p");
                name.innerText = name_elmement.innerText;

                //creating image
                let img = document.createElement("img");
                img.setAttribute("src", img_element.getAttribute("src"));
                img.setAttribute("height", 100);
                img.setAttribute("width", 100);

                //creating quantity
                let quantity = document.createElement("p");
                quantity.innerText = '1';

                //creating add button
                let add_button = document.createElement("button");
                add_button.innerText = '+';

                //creating remove button
                let remove_button = document.createElement("button");
                remove_button.innerText = '-';

                //creating price
                let price = price_element.innerText;
                let price_value = parseFloat(price_element.dataset.value);
                sum += price_value;
                total_price.innerText = (sum).toString();

                //creating totalprice
                let subtotal = document.createElement("p");
                subtotal.innerText = price;

                //adding children to new_element
                new_element.append(name, img, price, quantity, add_button, remove_button, subtotal);
                new_element.classList.add("cart");

                //adding new_element to cart
                cart_products.appendChild(new_element);
                //add one more
                add_button.addEventListener("click", (e) => {
                    e.preventDefault();
                    if(counter<=0)
                        return;
                    let current_quantity = parseFloat(quantity.innerText);
                    current_quantity++;
                    let str = current_quantity.toString();
                    quantity.innerText = str;
                    subtotal.innerText = (current_quantity * price_value).toString();
                    sum += price_value;
                    total_price.innerText = sum.toString();
                    counter--;
                    quantity_element.innerText=`Quantity : ${counter}`;
                    quantity_element.setAttribute("data-value",counter.toString());

                })

                //remove one more
                remove_button.addEventListener("click", (e) => {
                    e.preventDefault();
                    let current_quantity = parseFloat(quantity.innerText);
                    current_quantity--;
                    if (current_quantity >= 0)
                        sum -= price_value;
                    if (current_quantity < 0)
                        current_quantity = 0;
                    let str = current_quantity.toString();
                    quantity.innerText = str;
                    subtotal.innerText = (current_quantity * price_value).toString();
                    if (current_quantity == 0)
                        cart_products.removeChild(new_element);
                    total_price.innerText = sum.toString();
                    counter++;
                    quantity_element.innerText=`Quantity : ${counter}`;
                    quantity_element.setAttribute("data-value",counter.toString());
                })
            })
        }
    }

}

//promo
promo.addEventListener("click", (e) => {
    e.preventDefault();
    let tmp = sum;
    tmp = tmp - (tmp * 0.15);
    document.getElementById("p1").innerText = `Total After Promo Code : ${tmp}`;
})

//upload image
let upload = document.getElementById("upload");
let preview = document.getElementById("preview");
upload.addEventListener("change", function () {
    let file = this.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function () {
            let dataURL = reader.result;
            preview.src = dataURL;
            localStorage.setItem("uploadedImage", dataURL);
        };
        reader.readAsDataURL(file);
    }

});

let saved = localStorage.getItem("uploadedImage");
if (saved) {
    document.getElementById("preview").src = saved;
}

//upload new product
uploadbutton.addEventListener("click", (e) => {
    e.preventDefault();

    let product_name = document.getElementById("productname").value;
    let product_price = document.getElementById("productprice").value;
    let product_quantity = document.getElementById("productquantity").value;
    let new_element1 = document.createElement("div");
    //new image
    let new_img = document.createElement("img");
    new_img.setAttribute("src", preview.getAttribute("src"));
    new_img.setAttribute("height", 100);
    new_img.setAttribute("width", 100);
    preview.setAttribute("src","");
    //new name
    let name_ele = document.createElement("p");
    name_ele.innerText = product_name;

    //new price
    let price_ele = document.createElement("p");
    price_ele.innerText = `Price : ${product_price}`;
    price_ele.setAttribute("data-value", product_price);

    //new quantity
    let quantity_ele = document.createElement("p");
    quantity_ele.innerText = `Quantity : ${product_quantity}`;
    quantity_ele.setAttribute("data-value", product_quantity);

    // add cart button
    let new_button = document.createElement("button");
    new_button.innerText = 'Add to Cart';

    //set class
    new_element1.classList.add("productdiv");
    new_element1.append(new_img, name_ele, price_ele, quantity_ele, new_button);
    document.getElementById("maindiv").appendChild(new_element1);

    new_button.addEventListener("click", (e) => {
        e.preventDefault();
        let counter=parseFloat(quantity_ele.dataset.value);
        if(counter<=0)
            return;
        counter--;
        quantity_ele.innerText = `Quantity : ${counter}`;
        quantity_ele.setAttribute("data-value",counter.toString());
        sum += parseFloat(product_price);
        total_price.innerText = sum.toString();
        //creating new element
        let new_element2 = document.createElement("div");

        //creating quantity element
        let qe = document.createElement("p");
        qe.innerText = '1';

        //creating add button
        let add_button = document.createElement("button");
        add_button.innerText = '+';

        //creating remove button
        let remove_button = document.createElement("button");
        remove_button.innerText = '-';

        //creating totalprice
        let subtotal = document.createElement("p");
        subtotal.innerText = product_price;

        // creating image
        let new_img2 = document.createElement("img");
        new_img2.setAttribute("src", new_img.getAttribute("src"));
        new_img2.setAttribute("height", 100);
        new_img2.setAttribute("width", 100);

        //creating name
        let new_name2 = document.createElement("p");
        new_name2.innerText = product_name;

        //creating price

        let new_price2 = document.createElement("p");
        new_price2.innerText = product_price;
        new_element2.classList.add("id1");
        new_element2.append(new_name2,new_img2, new_price2, qe, add_button, remove_button, subtotal);
        cart_products.appendChild(new_element2);
        if(counter<=0)
            return;

        //add button listener
        add_button.addEventListener("click", (e) => {
            e.preventDefault();
            if(counter<=0)
                return;
            counter--;
            quantity_ele.innerText = `Quantity : ${counter}`;
            quantity_ele.setAttribute("data-value",counter.toString());
            let current_quantity1 = parseFloat(qe.innerText);
            current_quantity1++;
            let str1 = current_quantity1.toString();
            qe.innerText = str1;
            let cost = parseFloat(new_price2.innerText);
            let tot_sub = current_quantity1 * cost;
            sum += cost;
            subtotal.innerText = tot_sub.toString();
            total_price.innerText = sum.toString();

        })

        //remove button listener
        remove_button.addEventListener("click", (e) => {
            e.preventDefault();
            let current_quantity1 = parseFloat(qe.innerText);
            current_quantity1--;
            let str1 = current_quantity1.toString();
            qe.innerText = str1;
            let cost = parseFloat(new_price2.innerText);
            let tot_sub = current_quantity1 * cost;
            sum -= cost;
            subtotal.innerText = tot_sub.toString();
            total_price.innerText = sum.toString();
            if (current_quantity1 <= 0) {
                cart_products.removeChild(new_element2);
            }
            counter++;
            quantity_ele.innerText = `Quantity : ${counter}`;
            quantity_ele.setAttribute("data-value",counter.toString());
        })
    })
   document.getElementById("productname").value="";
   document.getElementById("productprice").value="";
   document.getElementById("productquantity").value="";
})
preview.src="";
