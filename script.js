// INICIO - Definición variables principales

let tipoCorteza = ["estilo Chicago", "lanzada a mano", "borde de queso", "casera"];
let tipoSalsa = ["tradicional", "marinara", "blanca", "Barbacoa"];
let quesos = ["mozzarella", "feta", "provolone", "pepper jack"];
let ingredientes = ["pepperoni", "salchicha", "champiñones", "aceitunas", "cebolla"];

// FIN - Definición variables principales

// INICIO - Definición función que determina los ingredientes en base al tipo de corteza

function pizzaIngrediente (tipoCorteza){
    let ingredientesBase = [];

    if (tipoCorteza == "estilo Chicago"){
        for(i = 0; i < 2; i++){
            ingredientesBase.push(ingredientes[i])
        }
    }
    else if (tipoCorteza == "lanzada a mano"){
        for(i = 2; i < 5; i++){
            ingredientesBase.push(ingredientes[i])
        }
    }

    return ingredientesBase;
}

// FIN - Definición función que determina los ingredientes en base al tipo de corteza

// INICIO - Definición función que determina las pizzas solicitadas

function pizzaOven (tipoCorteza, tipoSalsa, quesos, ingredientes){
    let pizza = {};
    
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    
    if (typeof ingredientes == 'object' ){
        pizza.ingredientes = pizzaIngrediente(pizza.tipoCorteza);
    }
    else { 
        pizza.ingredientes = ingredientes;
    }
    
    return pizza;
}

// FIN - Definición función que determina las pizzas solicitadas

// INICIO - Definición función que determina las pizzas aleatorias

function randomPizzaOven (tipoCorteza, tipoSalsa, quesos, ingredientes){
    let ranPizza={};
    let ranTipoCorteza = tipoCorteza[Math.floor(Math.random() * tipoCorteza.length)];
    let ranTipoSalsa = tipoSalsa[Math.floor(Math.random() * tipoSalsa.length)];
    let ranQuesos = quesos[Math.floor(Math.random() * quesos.length)];
    let ranIngredientes = ingredientes[Math.floor(Math.random() * ingredientes.length)];
    
    ranPizza.tipoCorteza = ranTipoCorteza;
    ranPizza.tipoSalsa = ranTipoSalsa;
    ranPizza.quesos = ranQuesos;
    ranPizza.ingredientes = ranIngredientes;
    
    return ranPizza;
}

// FIN - Definición función que determina las pizzas aleatorias

// INICIO - Ejecución funciones de pizzas

let pizza1= pizzaOven(tipoCorteza[0], tipoSalsa[0], quesos[0], ingredientes);
let pizza2 = pizzaOven(tipoCorteza[1], tipoSalsa[1], quesos[0], ingredientes);
let randomPizza1 = randomPizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes);
let randomPizza2 = randomPizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes);
let randomPizza3 = randomPizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes);

// FIN - Ejecución funciones de pizzas

// INICIO - Visualización pizzas preparadas

console.log(pizza1)
console.log(pizza2)
console.log(randomPizza1)
console.log(randomPizza2)

// FIN - Visualización pizzas preparadas