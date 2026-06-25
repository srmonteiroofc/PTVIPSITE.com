function irPara(pagina) {
    window.location.href = pagina;
}

function copiarPix() {
    const texto = document.getElementById('codigoCopiaCola').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        const msg = document.getElementById('msgCopiado');
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 3000);
    });
}
