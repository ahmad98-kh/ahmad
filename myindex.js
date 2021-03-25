fetch('https://ahmadsrv.herokuapp.com/data2')
  .then(response => response.json())
  .then(json => {

    var mainul=document.getElementById('mainul');
    for(var i=0; i<json.length; i++){
        var li=document.createElement('li');
            li.innerHTML=json[i].NAME;
            li.className='list-group-item'
            mainul.appendChild(li)
    }

  })