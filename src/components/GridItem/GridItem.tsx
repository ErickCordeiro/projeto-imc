import { LevelProps } from "../../helpers/imc";
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type GridItemProps = {
    item: LevelProps
}

export const GridItem = ({ item }: GridItemProps) => {

    return (
        <div className="flex flex-1 justify-center items-center text-white rounded flex-col" style={{ backgroundColor: item.color }}>
            <div className="gridIcon mb-5">
                <img src={item.icon === "up" ? upImage : downImage} alt="Normal" className="w-8" />
            </div>
            <div className="gridTitle text-2xl">{item.title}</div>

            {item.yourImc &&
                <div className="my-4 font-semibold">Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className="gridInfos text-xs mt-3">
                <>
                    IMG está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>

        </div>
    )
}