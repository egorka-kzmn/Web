function printMatrix(n) {
        for (let i = 0; i < n; i++) {
                let row = Array(n).fill(n).join(' ');
                console.log(row);
        }
}

printMatrix(7);
