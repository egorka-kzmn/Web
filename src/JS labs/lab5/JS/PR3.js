function processStore(currentStock, orderedStock) {
        const store = {};

        for (let i = 0; i < currentStock.length; i += 2) {
                const product = currentStock[i];
                store[product] = parseInt(currentStock[i + 1]);
        }

        for (let i = 0; i < orderedStock.length; i += 2) {
                const product = orderedStock[i];
                const quantity = parseInt(orderedStock[i+1]);

                if (store.hasOwnProperty(product)) {
                        store[product] += quantity;
                } else {
                        store[product] = quantity;
                }
        }

        for (const [product, quantity] of Object.entries(store)) {
                console.log(`${product} -> ${quantity}`);
        }
}

processStore(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);