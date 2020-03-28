import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import logoImg from "../../assets/logo.svg"
import {FiArrowLeft} from 'react-icons/fi'



export default function NewIncident() {
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form action="">
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em R$"/>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}