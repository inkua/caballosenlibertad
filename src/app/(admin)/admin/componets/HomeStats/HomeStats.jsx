import { PlusIcon, UserGroupIcon, HeartIcon, CalendarIcon } from '@heroicons/react/24/solid';
import { getStats } from '@/DAO/generic.db';
import FormStats from './components/FormStats';

const iconMapping = {
    Rescates: PlusIcon,
    Voluntarios: UserGroupIcon,
    "En tratamiento": HeartIcon,
    Años: CalendarIcon,
};

const AdminStats = async () => {
    const data = await getStats()

    return (
        <div className="bg-white mx-auto p-4 md:p-6 mt-4 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Estadísticas</h2>

            {/* Grid of current stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {data.statistics.map((stat, index) => {
                    const Icon = iconMapping[stat.name];
                    return (
                        <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-sm">
                            {Icon && <Icon className="h-8 w-8 text-secondary mb-2" />}
                            <span className="text-lg font-semibold">{stat.amount}</span>
                            <span className="text-gray-600">{stat.name}</span>
                        </div>
                    );
                })}
            </div>

            <h3 className="text-xl font-semibold mb-2">Actualiza las Estadísticas</h3>
            <FormStats stats={data.statistics} statsId={data.id} />
        </div>
    );
};

export default AdminStats;
