import { useState } from 'react';
import powered from './assets/powered.png';
import { levels, calculateImc } from './helpers/imc';
import { GridItem } from './components/GridItem/GridItem';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeighField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (!heightField || !weightField) {
      alert("Digite todos os campos!");
    }

    const imcCalculate = calculateImc(heightField, weightField);

  }

  return (
    <div className="">
      <header>
        <div className='max-w-5xl my-10 mx-auto'>
          <img src={powered} alt="Powered IMC" className='w-40' />
        </div>
      </header>

      <div className='container flex m-auto max-w-5xl'>
        <div className="leftSide flex-1 mr-10">
          <h1 className="text-4xl font-bold">Calcule o seu IMC.</h1>
          <p className='text-md text-gray-500 my-10'>IMC é a sigla para Índice de Massa Corpórea, parâmentro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            className='w-full p-2 border-b border-gray-400 mb-10'
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input
            className='w-full p-2 border-b border-gray-400 mb-10'
            type="number"
            placeholder="Digite a seu peso. Ex: 58.4 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeighField(parseFloat(e.target.value))}
          />

          <button
            className='w-full p-2 bg-cyan-600 text-white rounded hover:bg-cyan-800'
            onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className="rightSide flex flex-1 ml-10">
          <div className="grid flex-1 grid-cols-2 gap-5">
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
