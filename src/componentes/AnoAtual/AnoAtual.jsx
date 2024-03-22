import './AnoAtual.css';

const AnoAtual = () => {
    const ano = new Date().getFullYear();

    return <div className='ano-atual'>
        {ano}
    </div>
};

export default AnoAtual;