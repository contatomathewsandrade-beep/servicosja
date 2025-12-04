import styles from './plans.module.css'

export default function Plans () {
    return(
        <div className={styles.plansContainer}>
            <img className={styles.bannerPlanos} src="/img/banner/bannerPlanos.png" alt="" />
            <p className={styles.textoDestaque}>Explore nossos planos e <span className={styles.enfase}>desbloqueie benefícios incríveis</span>! Selecione o <span className={styles.enfase}>pacote perfeito</span> para começar hoje mesmo com mais praticidade, suporte e vantagens.</p>

            <section className={styles.planoGrid}>
                <div className={styles.cardPlano}>
                    <p className={styles.pOculto}>Plano mais popular</p>
                    <div className={styles.cardPrincipal}>
                        <h2>Básico</h2>
                        <p className={styles.frasePlano}>Ideal para iniciantes</p>
                        <h1>Grátis</h1>
                        <ul>
                            <li className={styles.detalheOk}>Visualização de Pedidos: 5x / semana</li>
                            <li className={styles.detalheOk}>Área de Atuação: 5km.</li>
                            <li className={styles.detalheX}>Anúncios rotativos</li>
                            <li className={styles.detalheX}>Selo de Verificação JÁ</li>
                            <li className={styles.detalheX}>Agenda Digital JÁ (Google Calendar)</li>
                        </ul>
                        <button className={styles.buttonPlano}>Selecionar Plano</button>
                        <span className={styles.spanOculto}>ou consulte-nos</span>
                    </div>
                </div>

                <div className={styles.cardPlano}>
                    <p className={styles.pOculto}>Plano mais popular</p>
                    <div className={styles.cardPrincipal}>
                        <h2>Intermediário</h2>
                        <p className={styles.frasePlano}>Ideal para quem está crescendo</p>
                        <h1>$39,90<span className={styles.valorDestaque}>/Mês</span></h1>
                        <ul>
                            <li className={styles.detalheOk}>Visualização de Pedidos: Ilimitada (Grátis)</li>
                            <li className={styles.detalheOk}>Área de Atuação: 15km ou seleção de até 3 bairros.</li>
                            <li className={styles.detalheOk}>Anúncios rotativos</li>
                            <li className={styles.detalheOk}>Selo de Verificação JÁ</li>
                            <li className={styles.detalheX}>Agenda Digital JÁ (Google Calendar)</li>
                        </ul>
                        <button className={styles.buttonPlano}>Selecionar Plano</button>
                        <span className={styles.spanOculto}>ou consulte-nos</span>
                    </div>
                </div>

                <div className={styles.cardPlano}>
                    <p className={styles.pOculto}>Plano mais popular</p>
                    <div className={styles.cardPrincipal}>
                        <h2>Profissional</h2>
                        <p className={styles.frasePlano}>Ideal para quem é exclusivo</p>
                        <h1>$79,90<span className={styles.valorDestaque}>/Mês</span></h1>
                        <ul>
                            <li className={styles.detalheOk}>Visualização de Pedidos: Ilimitada (Grátis)</li>
                            <li className={styles.detalheOk}>Área de Atuação: Ilimitada.</li>
                            <li className={styles.detalheOk}>Anúncios fixos em 4 das categorias.</li>
                            <li className={styles.detalheOk}>Selo de Verificação JÁ</li>
                            <li className={styles.detalheOk}>Agenda Digital JÁ (Google Calendar)</li>
                        </ul>
                        <button className={styles.buttonPlano}>Selecionar Plano</button>
                        
                        <span className={styles.spanOculto}>ou consulte-nos</span>
                    </div>
                </div>
            </section>
        </div>
    )
}