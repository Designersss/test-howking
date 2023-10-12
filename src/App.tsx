import './App.css'
import MinutesSlider from "./compoents/MinutesSlider.tsx";
import SmsSlider from "./compoents/SmsSlider.tsx";
import {useGetAmount} from "./hooks/useGetAmount.ts";
import InternetSlider from "./compoents/InternetSlider.tsx";
import ServicesCheck from "./compoents/ServicesCheck.tsx";
import {FormEvent} from "react";
import Info from "./compoents/Info.tsx";

function App() {
    const {smsAmount, servicesAmount, internetsAmount, minutesAmount, operator, phone} = useGetAmount()
    const buy = (e: FormEvent) => {
        e.preventDefault()
        if (!phone || operator === ''){
            alert('Заполните номер телефона и выберите оператора')
        } else {
            const home = {
                "телефон": phone,
                "оператор": operator,
                "стоимость смс:": smsAmount,
                "стоимость сервисов:": servicesAmount,
                "стоимость минут:": minutesAmount,
                "стоимость интрнета": internetsAmount
            }
            alert(Object.entries(home).join('\n'))
        }
    }
    return (
        <form className='container'>
            <h1 className='text-3xl font-bold'>Настройте тариф</h1>
            <Info />
            <MinutesSlider/>
            <SmsSlider/>
            <InternetSlider/>
            <ServicesCheck/>
            <button onClick={buy} className='px-5 py-2 bg-[#7A5CFA] text-white rounded-md mt-6'><span
                className='font-medium text-xl'>{smsAmount + servicesAmount + internetsAmount + minutesAmount}₽</span> в
                месяц
            </button>
        </form>
    )
}

export default App
