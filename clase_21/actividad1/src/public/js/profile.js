fetch('/api/current',{
    method:'GET',
    headers:{
        'Content-Type':'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }
}).then(result=>result.json()).then(json=>{
    const paragraph = document.getElementById('result');
    paragraph.innerHTML = `Hola, tus datos son ${json.payload.email} y ${json.payload.password}`
})