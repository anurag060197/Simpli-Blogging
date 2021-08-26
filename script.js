function submitForm(){
    var utitle = document.getElementById('title');
    var uimgurl = document.getElementById('imgurl');
    var udescription = document.getElementById('description');
    var ucontent = document.getElementById('content');

    if(localStorage){
        // localStorage.removeItem('dblog');
        console.log(Boolean(localStorage.getItem('dblog')));
        var arr = Boolean(localStorage.getItem('dblog')) ? JSON.parse(localStorage.getItem('dblog')) : new Array();
        let obj = {
            title: utitle.value,
            imgurl: uimgurl.value,
            description: udescription.value,
            content: ucontent.value
        }
        arr.push(obj)
        localStorage.setItem('dblog', JSON.stringify(arr));
        console.log(JSON.parse(localStorage.getItem('dblog')));
    }
}