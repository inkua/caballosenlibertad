
export const BankAccountCard = () => {
  return (
    <div id='CuentaBancaria' className='grid lg:grid-cols-2 bg-primary2 mx-auto p-5 min-[352px]:p-6 md:p-8 rounded-2xl my-12 md:my-20 lg:my-28 gap-8 lg:gap-12 w-[90%] max-w-[1044px]'>
        <div className='my-auto'>
            <h3 className="text-primary font-bold text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">Si sos de Argentina</h3>  
            <p className='font-light mt-3 text-[16px] md:text-[20px]'>
                También podés realizar una transferencia a la siguiente cuenta 
            </p>
        </div>
        <div className="flex flex-col text-[16px] md:text-[18px] xl:text-[20px] overflow-x-auto">
            <span className='text-sm md:text-base lg:text-lg mb-1'><strong className="text-primary">BANCO SANTANDER RIO SUCURSAL: </strong>743</span>
            <span className='text-sm md:text-base lg:text-lg mb-1'><strong className="text-primary">N° DE CUENTA: </strong>003032 4</span>
            <span className='text-sm md:text-base lg:text-lg mb-1'><strong className="text-primary">CUIT: </strong>000000033715048219</span>
            <span className='text-sm md:text-base lg:text-lg mb-1'><strong className="text-primary">CBU: </strong>0720743520000000303240</span>
            <span className='text-sm md:text-base lg:text-lg mb-1'><strong className="text-primary">NOMBRE: </strong>CABALLOS EN LIBERTAD ASOC CIV</span>              
        </div>
    </div>
  )
}
