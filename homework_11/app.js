var rootNode = document.getElementById("root");

// var mainUl = document.createElement('ul');
// mainUl.className = 'main';

// for(let i=0, l=structure.length; i<l; i++){
//     var liFolder=document.createElement('li');
//
//
//     liFolder.innerHTML='<p><i class="material-icons">folder</i>' +structure[i].title+'</p>';
//
//     for(let j=0, k=structure[i].children.length; j<k; j++){
//         var subFolder = document.createElement('ul');
//         var childSubFolder = document.createElement('li');
//             childSubFolder.innerHTML ='<p><i class="material-icons">folder</i>' +structure[i].children[j].title+'</p>';
//
//             console.log(structure[i].children[j]);
//             if(structure[i].children[j].children instanceof Array ){
//                 console.log(structure[i].children[j]);
//                 for(let n=0, m = structure[i].children[j].children.length; n<m; n++){
//                     var ulChildNext=document.createElement('ul');
//                     var childNext = document.createElement('li');
//                     childNext.innerHTML ='<p><i class="material-icons">folder</i>' +structure[i].children[j].children[n].title+'</p>';
//                     ulChildNext.appendChild(childNext);
//                     childSubFolder.appendChild(ulChildNext);
//                 }
//             }
//             subFolder.appendChild(childSubFolder);
//             liFolder.appendChild(subFolder);
//     }
//
//     mainUl.appendChild(liFolder);
// }

function createElem(arr) {
    var folder = document.createElement('ul');
    if(arr === structure){
        folder.className = 'block';

    }else {
        folder.className = 'hide';
    }

    for (let i = 0, l = arr.length; i < l; i++) {

        let subFolder = document.createElement('li');

        function show() {
            let child=this.children;
            // console.log(child);
            child[0].innerHTML ='<i class="material-icons">folder_open</i>' + arr[i].title;
            child[1].className ='block';
            // child[2].className ='block';
            event.stopPropagation();
            this.removeEventListener('click',show);
            this.addEventListener('click',hide)

        }

        function hide() {
            if(event.target.className === 'stop'){
                event.target.removeEventListener('click', hide);
                // console.log('+++++++++++++++++++');
                return
            }
            console.log(event.target);
            let child = this.children;
            // console.log(child);
            child[1].className = 'hide';
            child[0].innerHTML ='<i class="material-icons ">folder</i>' + arr[i].title;
            this.removeEventListener('click', hide);
            this.addEventListener('click', show);
            event.stopPropagation();
        }

        if (arr[i].folder === true) {

            subFolder.innerHTML = '<p><i class="material-icons ">folder</i>' + arr[i].title + '</p>';
            subFolder.addEventListener('click', show);
            // debugger;
        } else {
            subFolder.innerHTML = '<p class="stop"><i class="material-icons file">insert_drive_file</i>' + arr[i].title + '</p>';
            removeEventListener('click', hide);
        }
        if (arr[i].children instanceof Array) {
            subFolder.appendChild(createElem(arr[i].children));
        }

        if (arr[i].children === null || arr[i].children === false){
            let emptyUl =  document.createElement('ul');
            emptyUl.className = 'hide';
            let emptyLi =  document.createElement('li');
            emptyLi.innerHTML ='<i class="stop">Folder is empty</i>';
            emptyUl.appendChild(emptyLi);
            subFolder.appendChild(emptyUl);

        }
        folder.appendChild(subFolder);
    }
    return folder
}
rootNode.appendChild(createElem(structure));