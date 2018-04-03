var buttonIp = document.getElementById('track');
    buttonIp.addEventListener('click', getId);

function hideSpinner() {
    let spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
};

function showSpinner() {
    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
};

function getId() {
    let inputId = document.getElementById('setId');
    let div = document.getElementById('ipData');
    let removeButton = document.getElementById('validBtn');
    let removeArrow = document.getElementsByClassName('valid-arrow');
    let ip = inputId.value;
        showSpinner();
        if (removeButton != null) {
            removeButton.remove();
            removeArrow[0].remove();
        };
        div.innerHTML = '';
        http.get('https://ipapi.co/' + ip + '/json/')
            .then(data => {
                hideSpinner();
                let buttonValidIp = document.createElement('button');
                let table = document.createElement('table');
                let mainDiv = document.getElementsByClassName('main-input');
                let arrowDiv = document.createElement('div');
                let obj = JSON.parse(data);
                    arrowDiv.className = 'valid-arrow';
                    table.className = 'data-about-ip';

                for (let key in obj) {
                    let tr = document.createElement('tr');
                    let td1 = document.createElement('td');
                    let td2 = document.createElement('td');
                        td1.innerHTML = key;
                        td2.innerHTML = obj[key];
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        table.appendChild(tr);
                };
                    div.appendChild(table);
                    buttonValidIp.innerHTML = 'validate response';
                    buttonValidIp.id = 'validBtn';
                    buttonValidIp.addEventListener('click', sendData);
                    mainDiv[0].appendChild(buttonValidIp);
                    mainDiv[0].appendChild(arrowDiv);

                function sendData() {
                    showSpinner();
                    div.innerHTML = '';
                    http.post('https://shrouded-garden-94580.herokuapp.com/', data)
                        .then((str) => {
                             hideSpinner();
                             div.innerHTML = `<p>Response from server:<br> <strong>${str}</strong> </p>`;
                        }).catch((e) => {
                             div.innerHTML = `<p>Oops... ${e.type} </p>`;
                             console.log('Oops...');});

                };
            }).catch(() => console.log('Oops...'));
};




