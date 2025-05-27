function subtract() {
    // Получаем значения из input-полей
    const firstValue = document.getElementById('firstNumber').value;
    const secondValue = document.getElementById('secondNumber').value;

    // Преобразуем строки в числа
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    // Вычисляем разность
    const result = num1 - num2;

    // Отображаем результат в div с id "result"
    document.getElementById('result').textContent = `Результат: ${result}`;
}
