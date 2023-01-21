

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
  const render = () => {
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
        })

}

render();


