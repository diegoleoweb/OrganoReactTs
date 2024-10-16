import './rodape.css'


const Rodape = () => {

    return (
        <footer>
                <section >
                     <div className="rodape">
                         <ul >
                            <li>
                                <a href='faceebok.com' target='_Blank'>
                                    <img src='./imagens/close.png' alt='faceebok'></img></a>
                                </li>
                                <li>
                                    <a href='twitter.com' target='_Blank'>
                                        <img src='./imagens/delete.png' alt='twitter'></img>                   
                                    </a>
                                </li>
                                <li>
                                    <a href='instagram.com' target='_Blank'>
                                        <img src='./imagens/edit.png' alt='instagram'></img>                   
                                    </a>
                                </li>
                            </ul>                    
                        <img src='./imagens/Saque.png' alt='logo'></img>
                       <p className='texto_rodape'>
                        Projeto Alura
                        </p>
                    </div>
                </section>
                
        </footer>)
}


export default Rodape