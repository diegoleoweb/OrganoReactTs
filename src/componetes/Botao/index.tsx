import { ReactElement } from 'react'
import './Botao.css'

interface BotaoProps {
    children : ReactElement  | string //Criando uma interface para a props e importando o ReactElement
}

const Botao = (props: BotaoProps) =>{ //colocou a tipagem da props com 'BotaoProps'
    return(
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao