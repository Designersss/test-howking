import {useGetServicesQuery} from "../api/api.ts";
import ServiceComponents from "./ServiceComponents.tsx";
import {useEffect, useState} from "react";
import {ICheckConfiguration} from "../globalInterface/globalInterface.ts";
import {useActions} from "../hooks/useActions.ts";

const ServicesCheck = () => {
    const {data} = useGetServicesQuery([])
    const [servicesCheck, setServicesCheck] = useState<ICheckConfiguration[]>([])
    const [amount, setAmount] = useState(0)
    const {setServices} = useActions()
    useEffect(() => {
        data && setServicesCheck(data)
    }, [data]);
    useEffect(() => {
        setServices(amount)
    }, [amount, []]);
    return (
        <div className='mt-12'>
            <div className='flex space-x-8'>
                {
                    servicesCheck?.map(item => <ServiceComponents key={item.id} item={item} setAmount={setAmount} amount={amount} />)
                }
            </div>
        </div>
    );
};

export default ServicesCheck;