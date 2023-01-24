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
        const id = $('#name').val();
        const title = $('#title').val();
        const manufacture = $('#manufacture').val();
        const price = $('#price').val();
        const categories = $('#type_prod').val();

        if (categories === 'milk') {
            const fat = $('#fat').val();
            const item = new Milk(id, title, manufacture, price, categories, fat);
            console.log(item);
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));

        } else if (categories === 'chocolate') {
            const color = $('#color').val();
            const item = new Chocolate(id, title, manufacture, price, categories, color);
            console.log(item);
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));
        } else if (categories === 'alcohol') {
            const alcohol = $('#percent').val();
            const item = new Alcohol(id, title, manufacture, price, categories, alcohol);
            console.log(item);
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));

        }
    }




}