document.getElementById('generate').addEventListener('click', function () {
    document.getElementById('output').innerText = random();
});

function random() {
    const min = +document.getElementById('min').value;
    if (!min) return 'No minimum specified!';

    const max = +document.getElementById('max').value;
    if (!max) return 'No maximum specified!';
    if (max < min) return 'The maximum cannot be smaller than the minimum!';

    let random = Math.random();
    random = random * (max - min + 1);
    random = random + min;
    random = Math.floor(random);

    return random;
};
