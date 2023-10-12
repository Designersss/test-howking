import {useActions} from "../hooks/useActions.ts";
import {useEffect, useState} from "react";
import {InputMask} from "primereact/inputmask";
import {Nullable} from "primereact/ts-helpers";

const Info = () => {
    const {setPhone} = useActions()
    const {setOperator} = useActions()
    const [addPhone, setAddPhone] = useState<Nullable<string>>()
    const [addOperator, setAddOperator] = useState<string | undefined>()
    useEffect(() => {
        addPhone && setPhone(addPhone)
        addOperator && setOperator(addOperator)
    }, [addPhone, addOperator]);
    console.log(addPhone)
    const phoneAddRes = (phone: Nullable<string>) => {
        setAddPhone(phone)
    }
    return (
        <div>
            <label>
                <InputMask autoClear={false} mask="+7(999) 999-9999" placeholder={'+7(___) ___-__-__'} value={addPhone} onChange={e => phoneAddRes(e.target.value)} className='bg-gray-50 outline-0 mt-4 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg' type="tel"/>
            </label>
            <label>
                <select required value={addOperator} onChange={e => setAddOperator(e.target.value)} className="bg-gray-50 mt-4 px-2 outline-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Оператор №1</option>
                    <option>Оператор №2</option>
                    <option>Оператор №3</option>
                </select>
            </label>
        </div>
    );
};

export default Info;