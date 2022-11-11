const inpute_cep = document.getElementById('input-cep')
const butt_cep = document.getElementById('but-input')
const h_logradouro = document.getElementById('logradouro')
const h_bairro = document.getElementById('bairro')
const h_cidade = document.getElementById('cidade')
const h_estado = document.getElementById('estado')

butt_cep.addEventListener('click', () =>{
    let cep = inpute_cep.value

    if (cep.length !== 8) {
        alert('Um CEP possui oito dígitos... Digite novamente !')
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(json=>{

        h_logradouro.innerHTML = 'Logradouro: ' + json.logradouro 
        h_bairro.innerHTML = 'Bairro: ' + json.bairro 
        h_cidade.innerHTML = 'Cidade: ' + json.localidade
        h_estado.innerHTML = 'UF: ' + json.uf
    })
    
} )

gerarQr =()=>{
    var inpute = document.getElementById('input-qr').value
    var apiQrCode = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${inpute}`
    document.querySelector('#qr-code-image').src = apiQrCode
}


let infoCordenadas = document.getElementById('longlati')

function erro(error) {
    console.log(error)
}

function sucesso(position) {
  
   infoCordenadas.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`

   var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

   L.marker([position.coords.latitude,  position.coords.longitude]).addTo(map)
    .bindPopup('Sua Localização')
    .openPopup();
}


var posicaoUsuario = navigator.geolocation.watchPosition(sucesso, erro,{

    enableHighAccuracy:true,
    timeout: 6000
    
})

//navigator.geolocation.clearWatch(posicaoUsuario)

pagQr = () =>{
    window.location.href = '#section-qr-central'
}

lgpd = () =>{
    window.location.href = './Politica de Privacidade/lgpd.html'
}

butAmazonia = () =>{
    window.location.href = '#article-amazonia'
}

videoUm = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=X3gvWKyZy_s'
}

videoDois = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=OODsSZ5KDnI'
}

videoTres = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=XpLoUmn4yG8'
}

videoQuatro = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=uQVOMoTNPAI'
}

videoCinco = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=XK2uVOiRQv8'
}

videoSeis = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=1RkUDzYeGjw'
}