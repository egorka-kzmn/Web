function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const selectMenu = document.getElementById('menu');

    const text = textInput.value.trim();
    const value = valueInput.value.trim();

    if (text !== '' && value !== '') {
        const option = document.createElement('option');
        option.text = text;
        option.value = value;
        selectMenu.appendChild(option);
    }

    // Очистка полей ввода после добавления
    textInput.value = '';
    valueInput.value = '';
}
