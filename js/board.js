// Board Object

var board = {
    name: 'Kanban Board',
    addColumn: function (column) {
        this.element.appendChild(column.element);
        initSortable(column.id);
    },
    element: document.querySelector('#board .column-container')
};

// New column button

document.querySelector('#board .create-column').addEventListener('click', function () {
    var name = prompt('Enter a column name');
    if(!name.length) {
        alert('Enter a column name, Please');
    };
    var data = new FormData();

    data.append('name', name);

    fetch(baseUrl + '/column', {
            method: 'POST',
            headers: myHeaders,
            body: data,
        })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (resp) {
            var column = new Column(response.id, columnName);
            board.createColumn(column);
        });
});

// Function Sortable

function initSortable(id) {
    var el = document.getElementById(id);
    var sortable = Sortable.create(el, {
        group: 'kanban',
        sort: true
    });
}