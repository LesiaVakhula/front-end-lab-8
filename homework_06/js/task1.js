var http = {
    get(url){
        return new Promise(function (resolve,reject){
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET',url);
                    xhr.onreadystatechange = function () {
                        if(xhr.readyState === 4 ){
                            if(xhr.status === 200){
                                let data = xhr.response;
                                resolve(data);
                            } else {
                                reject(xhr.statusText);
                            };
                        } else {
                            console.log('Loading...');
                        };
                    };

                    xhr.onerror = function (error) {
                        reject(error);
                    };
                    xhr.send();
                });
            },
    post(url,requestBody){
        return new Promise(function (resolve,reject) {
                    let xhr = new XMLHttpRequest();
                    xhr.open('POST',url,true);
                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xhr.send(requestBody);
                    xhr.onreadystatechange = function () {
                        console.log(xhr.readyState);
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            resolve(xhr.response);
                        };
                        xhr.onerror = function (error) {
                            reject(error);
                        };
                    };
                });
    }
};
