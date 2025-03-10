'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react'


export const SelectForm = ({data}) => {

    const [platform, setPlatform] = useState("mercadoPago") // paypal - mercadoPago
    const [type, setType] = useState("one_timePayment") // monthlySubscription - one_timePayment
    const [amount, setAmount] = useState("amountOne") // // amountOne - amountTwo - amountThree - otherAmount

    const router = useRouter()

    const verifySelection = () => {
        if (platform == "paypal") {
            return platform
        } else {
            if (type == "monthlySubscription") {
                return type
            } else {
                return amount
            }
        }
    }

    const getSelectionLink = () => {
        if (platform === "paypal") {
            return data.paypal.link;
        } else if (platform === "mercadoPago") {
            if (type === "monthlySubscription") {
                return data.mercadoPago.monthlySubscription;
            } else if (type === "one_timePayment") {
                return data.mercadoPago.one_timePayment[amount]?.link;
            }
        }
        return "No disponible";
    }


    const submitForm = (e) => {
        e.preventDefault()

        const selection = getSelectionLink()
        window.open(selection, "_blank", "noopener,noreferrer");
    }

    return (
        <form
            onSubmit={submitForm}
            className='w-full flex flex-col my-4'
        >
            {/* Plataforma de pago */}
            <fieldset className='mt-3'>
                <LegendElement label={'Medio de pago'} image={"/assets/donar/Group1.svg"} />
                <div className='grid grid-cols-2 place-items-center border-t-2 border-secondary mt-6'>
                    <Image
                        src={'/svg/Polygon_1.svg'}
                        alt='selección decorativa'
                        width={14}
                        height={9}
                        className='relative -top-[2px]'
                    />
                    <Image
                        src={'/svg/Polygon_1.svg'}
                        alt='selección decorativa'
                        width={14}
                        height={9}
                        className='relative -top-[2px]'
                    />
                </div>
                <div className="grid grid-cols-2 gap-2 xl:gap-6 mt-8">
                    <DonationOption
                        value="mercadoPago"
                        image="/assets/donar/MPago.svg"
                        name='platform'
                        selectedOption={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        isDisabled={false}
                    />
                    <DonationOption
                        value="paypal"
                        image="/assets/donar/InternationalPAYPAL.svg"
                        name='platform'
                        selectedOption={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        isDisabled={false}
                    />
                </div>
            </fieldset>

            {/* Tipo de aporte */}
            <fieldset className={`my-14 ${platform == "paypal" && "grayscale"}`}>

                <LegendElement label={'Cómo será tu aporte'} image={"/assets/donar/Group2.svg"} />
                <div className="flex items-center justify-between mt-6">
                    <DonationOption
                        value="one_timePayment"
                        label="Pago único"
                        name='one_timePayment'
                        selectedOption={type}
                        onChange={(e) => setType(e.target.value)}
                        isDisabled={platform == "paypal"}
                    />
                    <DonationOption
                        value="monthlySubscription"
                        label="Subscripción mensual"
                        name='monthlySubscription'
                        selectedOption={type}
                        onChange={(e) => setType(e.target.value)}
                        isDisabled={platform == "paypal"}
                    />
                </div>
            </fieldset>

            {/* Monto */}
            <fieldset className={`${(platform == "paypal" || type=="monthlySubscription") && "grayscale"}`}>
                <LegendElement label={'Elige el monto'} image={"/assets/donar/Group3.svg"} />
                <div className="grid grid-cols-2 gap-2 mt-8">
                    <button
                        type='button'
                        onClick={() => setAmount("amountOne")}
                        disabled={type=="monthlySubscription"}
                        className={`text[14px] lg:text-[15px] font-semibold w-full rounded-full py-2 border-2 border-primary ${amount === "amountOne" ? 'bg-primary text-white' : 'text-primary bg-white'} ${(type!=="monthlySubscription")&& "hover:bg-primary hover:text-white"}e transition-colors duration-75`}
                        >
                        {data.mercadoPago.one_timePayment.amountOne.quantity || "..."}
                    </button>
                    <button
                        type='button'
                        disabled={type=="monthlySubscription"}
                        onClick={() => setAmount("amountTwo")}
                        className={`text[14px] lg:text-[15px] font-semibold w-full rounded-full py-2 border-2 border-primary ${amount === "amountTwo" ? 'bg-primary text-white' : 'text-primary bg-white'} ${(type!=="monthlySubscription")&& "hover:bg-primary hover:text-white"} transition-colors duration-75`}
                        >
                        {data.mercadoPago.one_timePayment.amountTwo.quantity || "..."}
                    </button>
                    <button
                        type='button'
                        onClick={() => setAmount("amountThree")}
                        disabled={type=="monthlySubscription"}
                        className={`text[14px] lg:text-[15px] font-semibold w-full rounded-full py-2 border-2 border-primary ${amount === "amountThree" ? 'bg-primary text-white' : 'text-primary bg-white'} ${(type!=="monthlySubscription")&& "hover:bg-primary hover:text-white"} transition-colors duration-75`}
                        >
                        {data.mercadoPago.one_timePayment.amountThree.quantity || "..."}
                    </button>
                    <button
                        type='button'
                        onClick={() => setAmount("otherAmount")}
                        disabled={type=="monthlySubscription"}
                        className={`text[14px] lg:text-[15px] font-semibold w-full rounded-full py-2 border-2 border-primary ${amount === "otherAmount" ? 'bg-primary text-white' : 'text-primary bg-white'} ${(type!=="monthlySubscription")&& "hover:bg-primary hover:text-white"} transition-colors duration-75`}
                    >
                        {data.mercadoPago.one_timePayment.otherAmount.quantity || "..."}
                    </button>
                </div>
            </fieldset>
            {/* <small className='text-[14px] lg:text-[15px] text-end mt-4 text-primary'>Seleccionado: {verifySelection()}</small> */}

            <button
                type='submit'
                className='button-primary mt-14 text-[16px] lg:text-[20px] h-[40px] lg:h-[50px]'
            >
                DONAR
            </button>
        </form>
    )
}

export const LegendElement = ({ image, label }) => {

    return (
        <legend htmlFor="" className='text-primary font-normal text-[20px] lg:text-[26px] xl:text-[30px] flex w-full items-center justify-start gap-2'
        >
            <Image
                src={image}
                alt="imagen de numeración"
                width={30}
                height={30}
                className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]'
            />
            {label}
        </legend>
    );
};

const DonationOption = ({ value, label, image, name, selectedOption, onChange, isDisabled }) => {
    const id = `donation-option-${value}`
    return (
        <label htmlFor={id} className={`flex ${!label && 'flex-col'} items-center gap-4 cursor-pointer`}>
            {
                image &&
                <Image
                    src={image}
                    alt={label || value}
                    width={184}
                    height={48}
                    className={`${value === "paypal" ? 'max-w-[80px] xl:max-w-[118px] h-auto' : 'max-w-[121px] xl:max-w-[184px] h-[32px] xl:h-[48px]'}  mb-2 `}
                />
            }
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={selectedOption === value}
                onChange={onChange}
                disabled={isDisabled}
                className="text-secondary focus:ring-secondary
            transition-colors duration-75"
            />
            {
                label &&
                <span className="text-[14px] lg:text-[18px] xl:text-[20px]">{label}</span>
            }
        </label>
    );
};