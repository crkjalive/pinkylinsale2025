const styles = {
    dodgerblue: {backColor:'dodgerblue', colorFont:'white'},
    darkblue: {backColor: 'rgb(30,107,255)', colorFont:'white'},
    lime: {backColor: 'lime', colorFont:'black'},
    deeppink: {backColor: 'deeppink', colorFont:'white'},
    gold: {backColor: 'gold', colorFont:'black'},
    yellow: {backColor: 'rgb(255, 255, 15)', colorFont:'black'},
    biche: {backColor: 'rgb(159, 241, 35)', colorFont:'black'},
    orange: {backColor: 'rgb(255, 136, 0)', colorFont:'black'},
}

const color = () => {

    const elementos = document.querySelectorAll('.color')

    elementos.forEach( elemento => {
        if (elemento.classList.contains('dodgerblue')){
            elemento.style.backgroundColor = styles.dodgerblue.backColor;
            elemento.style.color = styles.dodgerblue.colorFont;
            return
        }
        if (elemento.classList.contains('azul')){
            elemento.style.backgroundColor = styles.darkblue.backColor;
            elemento.style.color = styles.darkblue.colorFont;
            return

        }
        if (elemento.classList.contains('lime')){
            elemento.style.backgroundColor = styles.lime.backColor;
            elemento.style.color = styles.lime.colorFont;
            return

        }
        if (elemento.classList.contains('deeppink')){
            elemento.style.backgroundColor = styles.deeppink.backColor;
            elemento.style.color = styles.deeppink.colorFont;
            return

        }
        if (elemento.classList.contains('gold')){
            elemento.style.backgroundColor = styles.gold.backColor;
            elemento.style.color = styles.gold.colorFont;
            return

        }
        if (elemento.classList.contains('yellow')){
            elemento.style.backgroundColor = styles.yellow.backColor;
            elemento.style.color = styles.yellow.colorFont;
            return

        } 
        if (elemento.classList.contains('biche')){
            elemento.style.backgroundColor = styles.biche.backColor;
            elemento.style.color = styles.biche.colorFont;
            return

        }
        if (elemento.classList.contains('orange')){
            elemento.style.backgroundColor = styles.orange.backColor;
            elemento.style.color = styles.orange.colorFont;
            return

        } 
    })
}
