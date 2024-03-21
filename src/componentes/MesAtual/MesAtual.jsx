import './MesAtual.css';

const MesAtual = () => {
    const mes = new Date().getMonth();
    
    return <div className='mesAtual'>
        {'Mês: '+ '0' + (mes + 1)}
    </div>
};

export default MesAtual;