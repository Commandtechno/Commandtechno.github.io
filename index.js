document.getElementById('generate').addEventListener('click', function () {
    document.getElementById('output').innerText = random();
});

function random() {
    const min = +document.getElementById('min').value;
    if (!min) return 'No minimum specified!';
    if (min < 0) return 'Negative values are not allowed!';

    const max = +document.getElementById('max').value;
    if (!max) return 'No maximum specified!';
    if (max < 0) return 'Negative values are not allowed!';

    if (max < min) return 'The maximum cannot be smaller than the minimum!';

    let random = Math.random();
    random = random * (max - min + 1);
    random = random + min;
    random = Math.floor(random);

    return random;
};
