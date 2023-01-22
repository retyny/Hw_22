class Alcohol extends Products{
    _percent;
    constructor(id, title, manufacture, price, categories, percent) {
        super(id, title, manufacture, price, categories);
        this._percent = percent;
    }

    addAlcohol(value) {
        const cardList = document.getElementById("cards");
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML = `
            <h2 id="card">${JSON.parse(value)._categories}</h2>
            <h3 id="card">id - ${JSON.parse(value)._id}</h3>
            <h3 id="card">Title - ${JSON.parse(value)._title}</h3>
            <h3 id="card">Manufacture - ${JSON.parse(value)._manufacture}</h3>
            <h3 id="card">Price - ${JSON.parse(value)._price}</h3>
            <h3 id="card">Alcohol - ${JSON.parse(value)._percent}%</h3>
            `
        cardList.appendChild(newCard);
    }



}