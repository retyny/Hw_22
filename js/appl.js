

const storageVal = localStorage.getItem("items");
const database = storageVal?JSON.parse(storageVal):[]

$('.loader').on('change', e => {
    let prodType = e.target.value;
    switch (prodType) {
        case 'milk':{
            $('label').html(`<input class="form-control" type="number" 
            id="fat" placeholder="Type fat">`);
            break;
        }
        case 'alcohol':{
            $('label').html(`<input class="form-control" type="number" 
            id="percent" placeholder="percent">`);
            break;
        }
        case 'chocolate':{
            $('label').html(`<input class="form-control" type="text" 
            id="color" placeholder="Color">`);
            break;
        }
    }
});

    addItem = () => {
        const add = new Products();
        add.addProducts();
    }

const btnProd = () => {
    $('.activeProd').on('click', locationReload);
    $('.showAllProducts').on('click', renderProd);
    $('.activeAddProd').on('click', renderAddProd);
    $('.milk').on('click', renderAllMilk);
    $('.chocolate').on('click', renderAllChocolate);
    $('.alcohol').on('click', renderAllAlcohol);
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
    hideProd();
};

const renderAddProd = () => {
    $('#side-nav').hide();
    $('#addProduct').show();
    $('#cards').hide();
};

const locationReload = () => {
    location.reload();
}


const renderAllMilk = () => {
    hideProd();
    database.forEach((value, index) => {
        if (JSON.parse(value)._categories === 'milk') {
            const newMilk = new Milk;
            newMilk.addMilk(value, index);
            }
       });
};

const renderAllChocolate = () => {
    hideProd();
    database.forEach((value, index) => {
        if (JSON.parse(value)._categories === 'chocolate') {
            const newChocolate = new Chocolate;
            newChocolate.addChocolate(value, index);
        }
    });

};
const renderAllAlcohol = () => {
    hideProd();
    database.forEach((value, index) => {
        if (JSON.parse(value)._categories === 'alcohol') {
             const newAlcohol = new Alcohol;
             newAlcohol.addAlcohol(value, index);
        }
    });

};


hideProd = () => {
    $('#side-nav').show();
    $('#addProduct').hide();
    $('#cards').show();
}

btnProd();

