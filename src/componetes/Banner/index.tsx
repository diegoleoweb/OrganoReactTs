import './Banner.css'

import React from 'react' //importando o React

interface BannerProps {
    //criando a inteface do Banner e trocando o nome do arquivo para index.tsx e fazendo a tipagem.

    //Aqui foi feito a tipagem pode ser string, number, boleans, int, char
    enderecoImagem: string
    textoAlternativo?: string  // colocando ? o interpretador entende como opcional 
}

// Aqui foi denido as Props. OBS: BannerProps tem as propriedades endrecoImagem e textoAlternativo
function Banner({ enderecoImagem, textoAlternativo }: BannerProps) {
    return (
        <header className="banner">
            {/*<img src="" alt="O banner principal da página do Organo" />*/}
            <img src={enderecoImagem} alt={textoAlternativo} />

        </header>
    )
}

export default Banner