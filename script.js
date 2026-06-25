function irPara(pagina) {
    window.location.href = pagina;
}

function copiarPix() {
    const codigo = document.getElementById('codigoCopiaCola').innerText;
    navigator.clipboard.writeText(codigo).then(() => {
        const msg = document.getElementById('msgCopiado');
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 3000);
    });
}
