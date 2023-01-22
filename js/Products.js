class Products {
    _id;
    _title;
    _manufacture;
    _price;
    _categories
    constructor(id, title, manufacture, price, categories) {
        this._id = id;
        this._title = title;
        this._manufacture = manufacture;
        this._price = price;
        this._categories = categories;
    }

    addProducts() {
        const id = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const manufacture = document.getElementById('manufacture').value;
        const price = document.getElementById('price').value;
        const categories = document.getElementById('type_prod').value;

        if (categories === 'milk') {
            const fat = document.getElementById('fat').value;
            const item = new Milk(id, title, manufacture, price, categories, fat);
            console.log(item);
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));

        } else if (categories === 'chocolate') {
            const color = document.getElementById('color').value;
            const item = new Chocolate(id, title, manufacture, price, categories, color);
            console.log(item);
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));
        } else if (categories === 'alcohol') {
            const alcohol = document.getElementById('percent').value;
            const item = new Alcohol(id, title, manufacture, price, categories, alcohol);
            console.log(item);
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));

        }
    }




}