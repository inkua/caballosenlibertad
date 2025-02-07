import Image from "next/image";

function Card() {
    return (
        <div className="flex bg-white rounded-2xl p-16 gap-14">
            <div className="aspect-[8/10] overflow-hidden rounded-2xl w-[40%]">
                <Image
                    src={"/assets/caballos_rescatados.jpg"}
                    alt={"No disponible"}
                    width={700}
                    height={700}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>
            <div className="flex flex-col justify-between w-[60%]">
                <h2 className="text-primary text-h2 font-bold leading-120">Mate-Bingo</h2>
                <p className="text-p2">
                    ¡Te traemos la mejor propuesta para un domingo de fin de año! Vení al Mate-Bingo y disfruta de una hermosa tarde!
                </p>
                <div>
                    <h3 className="text-h3">¿Cuando?</h3>
                    <p className="text-p3">Domingo 22 de Diciembre - 14 a 19 hrs.</p>

                </div>
                <div>
                    <h3 className="text-h3">¿Dónde?</h3>
                    <p className="text-p3">En el circulo de suboficiales (57 E/15 y 16), La Plata.</p>
                </div>


                <button className="button-primary !w-[70%]">VER PUBLICACIÓN</button>
            </div>

        </div>
    )
}

export default Card;