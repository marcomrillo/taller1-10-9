let sablesLuz=[10,-2,7,8,-5,-4,5]

function hallarSables(sablesLuz) {
    let contador=0;
    
    for(let i =0;i<sablesLuz.length;i++){
        if(sablesLuz[i]<0){
            contador++
        }
    }
    console.log(contador)
}
hallarSables(sablesLuz)
