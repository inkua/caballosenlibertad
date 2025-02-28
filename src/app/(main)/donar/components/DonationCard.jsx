import { getUrlBase } from '@/utils/urlRoute';
import { SelectForm } from './SelectForm'

const info = {
    paypal: {
        link: "https://www.instagram.com/caballosenlibertadlp"
    },
    mercadoPago: {
        monthlySubscription: "https://www.instagram.com/caballosenlibertadlp",

        one_timePayment: {

            amountTwo: {
                link: "https://www.instagram.com/caballosenlibertadlp",
                quantity: "200"
            },
            amountThree: {
                quantity: "300",
                link: "https://www.instagram.com/caballosenlibertadlp"
            },
            otherAmount: {
                quantity: "otro",
                link: "https://www.instagram.com/caballosenlibertadlp"
            },
            amountOne: {
                link: "https://www.instagram.com/caballosenlibertadlp",
                quantity: "100"
            }

        }
    }
}

const getData = async () => {
    const urlBase = getUrlBase()
    const url = `${urlBase}/api/payments`
    try {
        const response = await fetch(url, {
            next: {
                revalidate: 60
            }
        });
        const result = await response.json();
        if(result.status==200){
            return result.data
        }
        return info
    } catch (error) {
        return info
    }
}

export const DonationCard = async () => {
    const payments = await getData()
    return (
        <div className='flex flex-col items-center justify-start bg-white p-8 py-10 sm:p-12 xl:px-14 rounded-2xl sm:rounded-[20px] gap-6 w-full lg:min-w-[420px] max-w-[480px] lg:max-w-[520px]'>
            <h2 className='text-primary text-[28px] lg:text-[35px] font-bold text-start w-full'>¡Haz tu aporte!</h2>
            <SelectForm data={payments} />
        </div>
    )
}
