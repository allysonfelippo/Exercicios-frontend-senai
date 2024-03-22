import './HoraAtual.css';

const HoraAtual = () => {
    const hora = new Date().getHours();
    
    return <div className='caixa-fora'>
        <div className='hora-atual'>
            {hora}
        </div>
    </div>
        
};

export default HoraAtual;