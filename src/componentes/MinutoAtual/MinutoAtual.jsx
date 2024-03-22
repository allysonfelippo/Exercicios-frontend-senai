import './MinutoAtual.css';

const MinutoAtual = () => {
    const minutos = new Date().getMinutes();

    return <div className='caixa-fora'>
        <div className='minuto-atual'>
        {minutos}
        </div>
    </div>
};

export default MinutoAtual;