function mudatema(tema) {
    if (tema==='fogo') {
   document.body.classList.remove('natureza')    
   document.body.classList.add('fogo') 
    }
    else{
        document.body.classList.remove('fogo')    
        document.body.classList.add('natureza')
    }
}
