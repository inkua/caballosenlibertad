import { TitleSection } from "../components/TitleSection";
import Card from "./components/Card";

const items = [
    {
        id: '001',
        name: 'Magnolia',
        data: '/assets/historias/historias_001.jpg',
        alt: '',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida neque et enim feugiat, ut interdum nulla lacinia. Vivamus cursus eros non lectus efficitur, a tincidunt ante tempor. Ut sagittis urna non ligula consectetur, vel gravida purus dictum. Nam nec arcu ac turpis laoreet sollicitudin id at purus. Donec ullamcorper, ligula vel dapibus dignissim, lorem est laoreet justo, vitae accumsan ante nulla at odio. Phasellus sollicitudin viverra leo, a tempus metus vulputate nec. Pellentesque in fringilla ligula. Morbi et feugiat velit, nec mollis arcu. Aliquam erat volutpat. Nam viverra bibendum purus sit amet tincidunt. Sed sed justo ligula. Etiam id dictum lorem. Integer tincidunt ipsum ut leo fermentum malesuada. Integer tincidunt tincidunt nunc, a eleifend neque convallis ac. Morbi maximus ultricies orci, nec vulputate lectus. Curabitur efficitur velit ut augue rhoncus gravida. Fusce et velit sed tortor malesuada tristique non at augue. Nulla facilisi. Fusce lobortis dolor a libero auctor, ac maximus felis tempor. Suspendisse potenti. Vivamus euismod bibendum ante, non vehicula leo placerat in. Integer non felis non leo malesuada tincidunt ut at nulla. Integer ac leo nec nulla sollicitudin pretium. Sed mollis orci nec dolor tristique maximus. Sed et eros id felis laoreet auctor. Nunc convallis erat sit amet erat vulputate, non scelerisque ante bibendum. Sed gravida ipsum ac dolor tincidunt pretium.'
    },
    {
        id: '002',
        name: 'Sofía',
        data: '/assets/historias/historias_002.jpg',
        alt: '',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '003',
        name: 'Bella',
        data: '/assets/historias/historias_003.jpg',
        alt: '',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: '004',
        name: 'Pepe',
        data: '/assets/historias/historias_004.jpg',
        alt: '',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

function Historias() {
    return (
        <main className="mx-mobile my-28 sm:m-tablet  lg:m-desktop">
            <section className="m-auto max-w-content">
                <TitleSection
                    titleTextContent="Historias de nuestros rescatados"
                    spanTextContent="Conocé las historias de nuestros rescatados"
                />

                <div className="masonry columns-2 gap-4">
                    {items.map((item) => (
                        <Card key={item.id} name={item.name} data={item.data} alt={item.alt} info={item.info} />
                    ))}
                </div>

                <div>
                    <h2 className="text-primary text-h2 font-bold leading-120 mt-12 mb-12 text-center">¡Esto no sería posible sin tu ayuda y la de nuestros voluntarios!</h2>
                </div>
            </section>
        </main>
    )
}

export default Historias;
