function dblogFunc(){
    let tempArr = Boolean(localStorage.getItem('dblog')) ? JSON.parse(localStorage.getItem('dblog')) : new Array();
    console.log(tempArr);
    const mainDiv = document.getElementById('dynamic-blog');

    tempArr.map((obj, index)=>{
        var col = document.createElement('div');
        col.setAttribute('class', 'col');

        var div1 = document.createElement('div');
        div1.setAttribute('class', 'card border-dark mb-3 h-100');
        div1.setAttribute('style', "width: 25rem;");
    
        var img = document.createElement('img');
        img.setAttribute('src', !Boolean(obj.imgurl) ? obj.imgurl : 'https://d3nn873nee648n.cloudfront.net/900x600/18272/220-ES822144.jpg');
        img.setAttribute('class', "card-img-top");
        img.setAttribute('alt', "img" + (index+1));
    
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'card-body');
    
        var h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.innerText = obj.title;
    
        var p = document.createElement('p');
        p.setAttribute('class', 'card-text');
        p.innerText = obj.description;
    
        div2.appendChild(h5);
        div2.appendChild(p);
        
        div1.appendChild(img);
        div1.appendChild(div2);
    
        col.appendChild(div1);
        mainDiv.appendChild(col);

    })
}
dblogFunc();