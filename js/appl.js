

const storageVal = localStorage.getItem("items");
const database = storageVal?JSON.parse(storageVal):[]

const formLoader = document.querySelector('.loader');


formLoader.addEventListener('change', e => {
    let prodType = e.target.value;
    switch (prodType) {
        case 'milk':{
            formLoader.querySelector('label').innerHTML=
                `<input class="form-control" type="number" id="fat"
               placeholder="Type fat">` ;
            break;
        }
        case 'alcohol':{
            formLoader.querySelector('label').innerHTML=
                `<input class="form-control" type="number" id="percent"
               placeholder="percent">` ;
            break;
        }
        case 'chocolate':{
            formLoader.querySelector('label').innerHTML=
                `<input class="form-control" type="text" id="color"
               placeholder="Color">` ;
            break;
        }
    }
})

    addItem = () => {
        const add = new Products();
        add.addProducts();
    }

const btnProd = () => {
    document.querySelectorAll('.activeProd').forEach(value => {
        value.addEventListener('click', locationReload);
    });
    document.querySelectorAll('.showAllProducts').forEach(value => {
        value.addEventListener('click', renderProd);
    });
    document.querySelectorAll('.activeAddProd').forEach(value => {
        value.addEventListener('click', renderAddProd);
    });
    document.querySelectorAll('.milk').forEach(value => {
        value.addEventListener('click', renderAllMilk);
    });
    document.querySelectorAll('.chocolate').forEach(value => {
        value.addEventListener('click', renderAllChocolate);
    });
    document.querySelectorAll('.alcohol').forEach(value => {
        value.addEventListener('click', renderAllAlcohol);
    });
}
const renderProd = () => { // ProductsLink
    database.map((value,index) => {
        if (JSON.parse(value)._categories === 'milk') {
            const newMilk = new Milk;
            newMilk.addMilk(value, index);
        } else if (JSON.parse(value)._categories === 'chocolate') {
            const newChocolate = new Chocolate();
            newChocolate.addChocolate(value, index);
        } else if (JSON.parse(value)._categories === 'alcohol') {
            const newAlcohol = new Alcohol;
            newAlcohol.addAlcohol(value, index);
        }
    });

    const id_nav = document.getElementById('side-nav');
    id_nav.classList.remove('hide');
    const id_add = document.getElementById('addProduct');
    id_add.classList.add('hide');
    const id_cards = document.getElementById('cards');
    id_cards.classList.remove('hide');

};

const renderAddProd = () => {
    const id_nav = document.getElementById('side-nav');
    id_nav.classList.add('hide');
    const id_add = document.getElementById('addProduct');
    id_add.classList.remove('hide');
    const id_cards = document.getElementById('cards');
    id_cards.classList.add('hide');
};

const locationReload = () => {
    location.reload();
}


const renderAllMilk = () => {
    const id_nav = document.getElementById('side-nav');
    id_nav.classList.remove('hide');
    const id_add = document.getElementById('addProduct');
    id_add.classList.add('hide');
    const id_cards = document.getElementById('cards');
    id_cards.classList.remove('hide');
       database.forEach((value, index) => {
           if (JSON.parse(value)._categories === 'milk') {
               const newMilk = new Milk;
               newMilk.addMilk(value, index);
            }
       });
};

const renderAllChocolate = () => {
    const id_nav = document.getElementById('side-nav');
    id_nav.classList.remove('hide');
    const id_add = document.getElementById('addProduct');
    id_add.classList.add('hide');
    const id_cards = document.getElementById('cards');
    id_cards.classList.remove('hide');
    database.forEach((value, index) => {
        if (JSON.parse(value)._categories === 'chocolate') {
            const newChocolate = new Chocolate;
            newChocolate.addChocolate(value, index);
        }
    });

};
const renderAllAlcohol = () => {
    const id_nav = document.getElementById('side-nav');
    id_nav.classList.remove('hide');
    const id_add = document.getElementById('addProduct');
    id_add.classList.add('hide');
    const id_cards = document.getElementById('cards');
    id_cards.classList.remove('hide');
    database.forEach((value, index) => {
        if (JSON.parse(value)._categories === 'alcohol') {
            const newAlcohol = new Alcohol;
            newAlcohol.addAlcohol(value, index);
        }
    });

};

btnProd();