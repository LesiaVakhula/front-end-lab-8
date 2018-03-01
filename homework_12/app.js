function createHead(){
    let div = document.createElement('div'),
        h1 = document.createElement('h1');
        div.className = 'preview block';
        h1.innerHTML = 'Most popular tanks';
        div.appendChild(h1);
    return div
}
function createPreview(tanksArr) {
    let divListTank = document.createElement('div');
    for (let i=0,l = tanksArr.length; i<l; i++){
        let thumbnailDIv = document.createElement('a'),
            tankInfo = document.createElement('div'),
            tankImage = document.createElement('img'),
            countryImage = document.createElement('img'),
            tankInfoText =  document.createElement('p');

            thumbnailDIv.className = 'thumbnail-box';
            thumbnailDIv.href = '#'+ tanksArr[i].model.replace(' ','_');
            tankImage.src = tanksArr[i].preview;
            tankImage.className = 'tank-img';
            countryImage.src = tanksArr[i].country_image;
            countryImage.className = 'country-img';
            tankInfoText.innerHTML = tanksArr[i].level + ' ' + tanksArr[i].model;
            thumbnailDIv.appendChild(tankImage);
            tankInfo.appendChild(countryImage);
            tankInfo.appendChild(tankInfoText);
            thumbnailDIv.appendChild(tankInfo);
            thumbnailDIv.addEventListener('click', function () {
                let idLocal =  tanksArr[i].model.replace(/ /g,'_');
                    mainHref = location.href;
                    location.hash =idLocal;
            });

        divListTank.appendChild(thumbnailDIv);
    }
    return divListTank
}
function createDetails(tank) {
    let mainDetails = document.createElement('div'),
        countryImage = document.createElement('img'),
        tankInfoText =  document.createElement('h2');

        mainDetails.className = 'details';
        countryImage.src = tank.country_image;
        tankInfoText.innerHTML =tank.model + ' (<span>level</span> ' + tank.level + ')';
        headDetails = document.createElement('div');
        headDetails.appendChild(countryImage);
        headDetails.appendChild(tankInfoText);

    let previewDiv = document.createElement('div'),
        previewName = document.createElement('h3'),
        tankImage = document.createElement('img'),
        characteristicsDiv = document.createElement('div'),
        characteristicsName = document.createElement('h3'),
        table =  document.createElement('table');

        previewDiv.className = 'preview-tank';
        previewName.innerHTML = 'Preview';
        tankImage.src = tank.preview;
        characteristicsDiv.className = 'characteristics-tank';
        characteristicsName.innerHTML = 'Characteristics';
        previewDiv.appendChild(previewName);
        previewDiv.appendChild(tankImage);
        characteristicsDiv.appendChild(characteristicsName);

    for(key in tank.details){
        let row = document.createElement('tr'),
            cell_1 = document.createElement('td'),
            cell_2 = document.createElement('td');

            cell_1.innerHTML = key;
            cell_2.innerHTML = tank.details[key];
        row.appendChild(cell_1);
        row.appendChild(cell_2);
        table.appendChild(row);
    }
    characteristicsDiv.appendChild(table);
    let buttonBack = document.createElement('button');
        buttonBack.innerHTML = 'Back to list view';
        buttonBack.addEventListener('click', function () {
            location.href = mainHref;
            });
    mainDetails.appendChild(headDetails);
    mainDetails.appendChild(previewDiv);
    mainDetails.appendChild(characteristicsDiv);
    mainDetails.appendChild(buttonBack);
    mainDiv.appendChild(mainDetails);
}

let mainHref = '',
    mainDiv = document.getElementById('root'),
    div = createHead();

    div.appendChild(createPreview(tanks));
    mainDiv.appendChild(div);

window.addEventListener('hashchange', function () {
    mainDiv.innerHTML = '';
    let hashString = location.hash.substring(1);
    let model = hashString.replace(/_/g,' ');
    for(let i = 0, l = tanks.length; i < l; i++){
        if(tanks[i].model === model){
            createDetails(tanks[i]);
        }
    }
});
