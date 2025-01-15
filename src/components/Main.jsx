import imgfundo from '../assets/imagemAnoNovo.png'
import S from './style.module.scss'

export default function Main(){
    return(
        <main>
            <img src={imgfundo} alt="Imagem escrito 'Ano Novo 2025' adornado de luzinhas amarelas nas letras e estrelas nos lados." />
            <section className={S.conteinerBoasFestas}>
                <h3>Boas Festas!!!</h3>
                <h2>Felicidades!!!</h2>
                <section className={S.conteinerPoema}>
                    <p>Em 2025, vamos juntos programar,</p>
                    <p>Com mais código limpo e muito para alcançar!</p>
                    <p>Que o ano novo traga só funções de felicidade,</p>
                    <p>E que a paz seja nossa variável de realidade!</p>
                    <p>Sem bugs, sem falhas, com muito amor,</p>
                    <p>Vamos debugar os problemas com ardor!</p>
                    <p>Que a vida seja sempre o output de alegria,</p>
                    <p>O Vai Na Web te deseja um Ano Novo, que seja</p> 
                    <p>pura harmonia!</p>
                </section>
            </section>
        </main>
    )
}