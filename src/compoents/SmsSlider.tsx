import {useEffect, useState} from "react";
import {useGetSmsQuery} from "../api/api.ts";
import {ISliderConfiguration} from "../globalInterface/globalInterface.ts";
import {useActions} from "../hooks/useActions.ts";


const MinutesSlider = () => {
    const [smsOption, setSmsOption] = useState<ISliderConfiguration[]>()
    const {data} = useGetSmsQuery([])
    const [serialNumber,setSerialNumber] = useState(0)
    const {setSms} = useActions()
    useEffect(() => {
        setSmsOption(data)
    }, [data])
    useEffect(() => {
        data && setSms(data[serialNumber].price)
    }, [serialNumber, []]);
    return (
        <div className='w-[770px] mt-12'>
            <span className='block font-medium text-xl'>Смс</span>
            <label>
                <input className='w-[600px] bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' type="range" step={1} min={0} max={3} onChange={e => setSerialNumber(Number(e.target.value))} defaultValue={0}/>
                <div className='w-full grid grid-cols-4'>
                    {
                        smsOption ? smsOption.map(item => <span className='font-medium' key={item.id}>{item.option}</span>) : <>Ничего не найдено</>
                    }
                </div>
            </label>
        </div>
    );
};

export default MinutesSlider;