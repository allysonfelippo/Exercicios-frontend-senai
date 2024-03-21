import './DiaAtual.css';

const DiaAtual = () => {
    const dia = new Date().getDate();
    
    return <div className="diaAtual">
       {'Dia: '+ dia} 
    </div>
};

export default DiaAtual;