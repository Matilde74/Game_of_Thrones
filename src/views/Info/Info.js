import React from "react";
import style from "./Info.module.css"
function Info () {
    return (
        <div>
            <div className={style.sfondo} >
                <h2>
                    Questo progetto è stato creato attraverso l’utilizzo delle API:
                    <ul className={style.ul}>
                        <li>
                            <a className={style.info} href={'https://gameofthronesquotes.xyz/'}>
                                https://gameofthronesquotes.xyz/
                            </a>
                        </li>
                        <li>
                            <a className={style.info} href={'https://thronesapi.com/swagger/index.html?urls.primaryName=Game of Thrones API v2'}>
                                https://thronesapi.com/swagger/index.html?urls.primaryName=Game of Thrones API v2
                            </a>
                        </li>
                        <li>
                            <a className={style.info} href={'https://anapioficeandfire.com/'}>
                                https://anapioficeandfire.com/
                            </a>
                        </li>
                    </ul>
                    Il sito ci guida all’interno del mondo del Trono di Spade creato dallo scrittore George R.R. Martin e successivamente reso celebre dalla serie tv omonima ideata da David Benioff e D. B. Weiss.
                    A partire dalle famiglie più importanti possiamo scoprire i personaggi che popolano questo mondo: quando sono nati, i loro titoli, i loro soprannomi, quali sono le relazioni tra di loro, in quale stagione della serie tv possiamo trovarli e quali attori li hanno interpretati.
                    Questo progetto è stato creato da Matilde Cotti per l’insegnamento di Applicazioni Web: Progettazione e Sviluppo del corso di Teoria e Tecnologia della Comunicazione.
                </h2>
            </div>
        </div>
        )
}
export default Info