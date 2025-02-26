import { z } from "zod";

// Definir el esquema para one_timePayment
const oneTimePaymentSchema = z.object({
    amountOne: z.object({
        quantity: z.string().min(1),
        link: z.string().url(),
    }),
    amountTwo: z.object({
        quantity: z.string().min(1),
        link: z.string().url(),
    }),
    amountThree: z.object({
        quantity: z.string().min(1),
        link: z.string().url(),
    }),
    otherAmount: z.object({
        quantity: z.string().min(1), // Solo permite "otro"
        link: z.string().url(),
    }),
});

// Definir el esquema completo
const paymentMethodSchema = z.object({
    mercadoPago: z.object({
        one_timePayment: oneTimePaymentSchema,
        monthlySubscription: z.string().url(),
    }),
    paypal: z.object({
        link: z.string().url(),
    }),
});

// Función para validar el objeto
const validatePaymentMethod = (data) => {
    const result = paymentMethodSchema.safeParse(data);
    if (!result.success) {
        /* const errors = result.error.format() 
        console.error(JSON.stringify(errors, null, 4)) */
        return false;
    }
    return true;
};

export {
    validatePaymentMethod,
}