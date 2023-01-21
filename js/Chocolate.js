class Chocolate extends Products{
    _color;
    constructor(id, title, manufacture, price, categories, color) {
        super(id, title, manufacture, price, categories);
        this._color = color;
    }

    addChocolate(value, index) {
        const cardList = document.getElementById("cards");
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML = `
            <h2 id="card-${index}">${JSON.parse(value)._categories}</h2>
            <h3 id="card-${index}">id - ${JSON.parse(value)._id}</h3>
            <h3 id="card-${index}">Title - ${JSON.parse(value)._title}</h3>
            <h3 id="card-${index}">Manufacture - ${JSON.parse(value)._manufacture}</h3>
            <h3 id="card-${index}">Price - ${JSON.parse(value)._price}</h3>
            <h3 id="card-${index}">Color - ${JSON.parse(value)._color}</h3>
            `
        cardList.appendChild(newCard);
    }

}