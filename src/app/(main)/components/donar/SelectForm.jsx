'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const amountOptions = [
    { value: "$ 1000", label: "$ 1000" },
    { value: "$ 2000", label: "$ 2000" },
    { value: "$ 5000", label: "$ 5000" },
    { value: "OTRO", label: "OTRO" },
];

const temporalityOptions = [
    { value: "MENSUAL", label: "Mensual" },
    { value: "UNICA", label: "Suscripción única" },
];

const methodOfPayment = [
    { value: "MercadoPago", image: "/assets/donar/MPago.svg" },
    { value: "PAYPAL", image: "/assets/donar/InternationalPAYPAL.svg" },
];

export const SelectForm = () => {

    const [selectedAmount, setSelectedAmount] = useState("$ 1000");
    const [selectedTemporality, setSelectedTemporality] = useState("MENSUAL");
    const [selectedMethod, setSelectedMethod] = useState("MercadoPago");

    const submitForm = (e) => {
        e.preventDefault()
        confirm(`Método de pago: ${selectedMethod}\nTipo de donación: ${selectedTemporality}\nMonto seleccionado: ${selectedAmount}`)
    }

  return (
    <form 
        onSubmit={submitForm}
        className='w-full flex flex-col my-4'
    >        
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
                {methodOfPayment.map((option) => (
                    <DonationOption
                        key={option.value}
                        value={option.value}
                        image={option.image}
                        name='method'
                        selectedOption={selectedMethod}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                    />
                ))}
            </div>
        </fieldset>

        <fieldset className='my-14'>
            <LegendElement label={'Cómo será tu aporte'} image={"/assets/donar/Group2.svg"} />
            <div className="flex items-center justify-between mt-6">
                {temporalityOptions.map((option) => (
                    <DonationOption
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        name='tempotality'
                        selectedOption={selectedTemporality}
                        onChange={(e) => setSelectedTemporality(e.target.value)}
                    />
                ))}
            </div>
        </fieldset>
        <fieldset>
            <LegendElement label={'Elige el monto'} image={"/assets/donar/Group3.svg"} />
            <div className="grid grid-cols-2 gap-2 mt-8">
            {amountOptions.map((option) => (
                <button
                    type='button'
                    key={option.value}
                    onClick={ () => setSelectedAmount(option.value) }
                    className={`text[14px] lg:text-[15px] font-semibold w-full rounded-full py-2 border-2 border-primary ${selectedAmount === option.value ? 'bg-primary text-white' : 'text-primary bg-white'} hover:bg-primary hover:text-white transition-colors duration-75`}
                >
                    {option.label}
                </button>
            ))}
            </div>
        </fieldset>
        <small className='text-[14px] lg:text-[15px] text-end mt-4 text-primary'>Seleccionado: {selectedAmount}</small>

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
          { label }
      </legend>
    );
};

const DonationOption = ({ value, label, image, name, selectedOption, onChange }) => {
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
                className={`${value === "PAYPAL" ? 'max-w-[80px] xl:max-w-[118px]' : 'max-w-[121px] xl:max-w-[184px]'} mb-2 h-[32px] xl:h-[48px]`}
            />
        }
        <input
            id={id}
            type="radio"
            name={name}
            value={value}
            checked={selectedOption === value}
            onChange={onChange}
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