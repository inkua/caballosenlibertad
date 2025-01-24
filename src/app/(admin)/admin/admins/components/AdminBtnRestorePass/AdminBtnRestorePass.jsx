
export default function AdminBtnRestorePass({ admin, disabled=false }) {
    const handlerClick = async () => {
        if (confirm("Desea restaurar contraseña?")) {

            const response = await fetch('/api/admin/pass/reset', {
                method: 'POST',
                body: JSON.stringify({
                    data: admin,
                }),
            });
            if(response.ok){
                alert("Se envió una contraseña provisional al email del administrador")
            }
            else{
                alert("No se ha podido realizar la operación")
            }
        }
    }

    return (
        <>
            <button
                onClick={() => handlerClick()}
                className={`block px-4 py-2 text-sm ${disabled? "text-gray-400": "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Restaurar Contraseña
            </button>

        </>
    )
}
