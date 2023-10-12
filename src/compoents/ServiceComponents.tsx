import {Dispatch, FC, FormEvent, SetStateAction, useState} from 'react';
import {ICheckConfiguration} from "../globalInterface/globalInterface.ts";

interface IPropsServices {
    item: ICheckConfiguration,
    setAmount: Dispatch<SetStateAction<number>>
    amount: number
}
const ServiceComponents:FC<IPropsServices> = ({item,setAmount, amount}) => {
    const [active, setActive] = useState(false)
    const addToAmount = (e: FormEvent) => {
        e.preventDefault()
        setActive(!active)
        if(active){
            setAmount(amount - item.price)
        } else {
            setAmount(amount + item.price)
        }
    }
    return (
        <button className={active ? 'p-2 bg-white rounded-t-lg' : 'p-2'} onClick={addToAmount}>
            <img className='block w-10' src={`${item.img}`} alt=""/>
            <span className='flex text-sm justify-center mt-2'>{item.price}₽</span>
        </button>
    );
};

export default ServiceComponents;