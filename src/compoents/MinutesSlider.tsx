import {useEffect, useState} from "react";
import {useGetMinutesQuery} from "../api/api.ts";
import {ISliderConfiguration} from "../globalInterface/globalInterface.ts";
import {useActions} from "../hooks/useActions.ts";


const MinutesSlider = () => {
    const [minutesOption, setMinutesOption] = useState<ISliderConfiguration[]>()
    const {data} = useGetMinutesQuery([])
    const [serialNumber,setSerialNumber] = useState(0)
    const {setMinutes} = useActions()
    useEffect(() => {
        setMinutesOption(data)
    }, [data])
    useEffect(() => {
        data && setMinutes(data[serialNumber].price)
    }, [serialNumber, []]);
    return (
        <div className='w-[770px] mt-12'>
            <span className='block font-medium text-xl'>Минуты</span>
            <label>
                <input className='w-[600px] bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' type="range" step={1} min={0} max={3} onChange={e => setSerialNumber(Number(e.target.value))} defaultValue={0}/>
                <div className='w-full grid grid-cols-4'>
                    {
                        minutesOption ? minutesOption.map(item => <span className='font-medium' key={item.id}>{item.option}</span>) : <>Ничего не найдено</>
                    }
                </div>
            </label>
        </div>
    );
};

export default MinutesSlider;