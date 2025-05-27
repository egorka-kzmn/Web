function search() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const towns = document.querySelectorAll('#towns li');
    let matches = 0;

    for (const town of towns) {
        const townName = town.textContent.toLowerCase();

        if (searchText !== '' && townName.includes(searchText)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    }

    document.getElementById('result').textContent = `${matches} matches found`;
}
