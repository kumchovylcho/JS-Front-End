function solve() {
    const baseUrl = "http://localhost:3030/jsonstore/grocery/";

    const tbody = document.querySelector("#tbody");

    const [...fields] = Array.from(document.querySelectorAll("input"));

    const addProdBtn = document.querySelector("#add-product");
    const updateProdBtn = document.querySelector("#update-product");
    const loadProductsBtn = document.querySelector("#load-product");

    loadProductsBtn.addEventListener("click", loadAllProducts);
    addProdBtn.addEventListener("click", addProduct);
    updateProdBtn.addEventListener("click", updateProduct);

    let updateId = ""

    function createElement(type,
                           textContent="",
                           value="",
                           klass="",
                           id="",
                           listener="",
                           ) {
        const element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        if (value) {
            element.value = value;
        }

        if (klass) {
            element.classList.add(klass);
        }

        if (id) {
            element.id = id;
        }

        if (listener) {
            element.addEventListener("click", listener);
        }

        return element;
    }

    function loadAllProducts(event) {
        event.preventDefault();
        tbody.innerHTML = "";

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(item => {
                    const newRow = createElement("tr", "", "", "", item._id);

                    newRow.appendChild(createElement("td", item.product, "", "name"));
                    newRow.appendChild(createElement("td", item.count, "", "count-product"));
                    newRow.appendChild(createElement("td", item.price, "", "product-price"));

                    const tdWithBtns = createElement("td", "", "", "btn");
                    tdWithBtns.appendChild(createElement("button", "Update", "", "update", "", addValuesToField));
                    tdWithBtns.appendChild(createElement("button", "Delete", "", "delete", "", deleteProduct));

                    newRow.appendChild(tdWithBtns);
                    tbody.appendChild(newRow);
                })
            }).catch();
    }

    function addProduct(event) {
        event.preventDefault();

        const [name, count, price] = fields;
        const newProduct = {
            product: name.value,
            count: count.value,
            price: price.value,
        }

        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(newProduct)

        })
            .then(() => loadAllProducts(event))
            .catch();

    }

    function addValuesToField(event) {
        addProdBtn.disabled = true;
        updateProdBtn.disabled = false;

        const row = event.target.parentElement.parentElement

        const data = Array.from(row.querySelectorAll("td")).slice(0, 3)

        for (let i = 0; i < data.length; i++) {
            fields[i].value = data[i].textContent
        }

        updateId = row.id
    }

    function updateProduct(event) {
        const newProduct = {
            product: fields[0].value,
            count: fields[1].value,
            price: fields[2].value,
        }

        fetch(`${baseUrl}${updateId}`, {
            method: 'PATCH',
            body: JSON.stringify(newProduct),
        })
            .then(() => loadAllProducts(event))
            .catch();
    }

    function deleteProduct(event) {
        const elementId = event.target.parentElement.parentElement.id

        fetch(`${baseUrl}${elementId}`, {
            method: "DELETE",

        })
            .then(() => loadAllProducts(event))
            .catch();
    }
}


solve();