class Milk extends Products{
    _fat;
    constructor(id, title, manufacture, price, categories, fat) {
        super(id, title, manufacture, price, categories);
        this._fat = fat;
    }

    addMilk(value, index) {
        const cardList = document.getElementById("cards");
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML = `
            <h2 id="card-${index}">${JSON.parse(value)._categories}</h2>
            <h3 id="card-${index}">id - ${JSON.parse(value)._id}</h3>
            <h3 id="card-${index}">Title - ${JSON.parse(value)._title}</h3>
            <h3 id="card-${index}">Manufacture - ${JSON.parse(value)._manufacture}</h3>
            <h3 id="card-${index}">Price - ${JSON.parse(value)._price}</h3>
            <h3 id="card-${index}">Fat - ${JSON.parse(value)._fat}%</h3>
            `
        cardList.appendChild(newCard);
    }

}