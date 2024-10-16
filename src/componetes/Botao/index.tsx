import { ReactElement } from 'react'
import './Botao.css'
import React from 'react' // Fazendo o import do react e abilitando ele no tsconfig 

interface BotaoProps {
    children : ReactElement //Criando uma interface para a props e importando o ReactElement
}

const Botao = (props: BotaoProps) =>{ //colocou a tipagem da props com 'BotaoProps'
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao