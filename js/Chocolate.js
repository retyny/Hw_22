class Chocolate extends Products{
    _color;
    constructor(id, title, manufacture, price, categories, color) {
        super(id, title, manufacture, price, categories);
        this._color = color;
    }

    addChocolate(value) {
        const cardList = document.getElementById("cards");
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML = `
            <h2 id="card">${JSON.parse(value)._categories}</h2>
            <h3 id="card">id - ${JSON.parse(value)._id}</h3>
            <h3 id="card">Title - ${JSON.parse(value)._title}</h3>
            <h3 id="card">Manufacture - ${JSON.parse(value)._manufacture}</h3>
            <h3 id="card">Price - ${JSON.parse(value)._price}</h3>
            <h3 id="card">Color - ${JSON.parse(value)._color}</h3>
            `
        cardList.appendChild(newCard);
    }

}