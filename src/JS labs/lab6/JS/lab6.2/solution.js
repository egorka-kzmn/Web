function solve() {
    const text = document.getElementById("text").value;
    const convention = document.getElementById("naming-convention").value;
    const resultElement = document.getElementById("result");

    const words = text.toLowerCase().split(' ');
    let result = '';

    if (convention === "Camel Case") {
        result = words
            .map((word, index) => {
                if (index === 0) return word;
                return word[0].toUpperCase() + word.slice(1);
            })
            .join('');
    } else if (convention === "Pascal Case") {
        result = words
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join('');
    } else {
        result = "Error!";
    }

    resultElement.textContent = result;
}
