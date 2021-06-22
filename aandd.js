function createSequentialNumbers(array, n) {
    for (i = 1; i <= n; i++) {
        numbers.push(i)
    }
}

function createRandomNumbers(array, n) {
    for (i = 1; i <= n; i++) {
        var random = Math.floor(Math.random() * n);
        numbers.push(random)
    }
}

function show(obj) {
    if (Array.isArray(obj)) {
        var html = '';
        html = html + '<table border="1">';
        html = html + '<tr>';
        for (var i = 0; i < obj.length; i++) {
            html = html + '<td>' + obj[i] + '</td>';
        }
        html = html + '</tr>';
        html = html + '</table>';
        //html = html + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', html);
    } else {
        var string = JSON.stringify(obj);
        string = string + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', string);
    }
}

function createOrderedRundomNumbers() {

}