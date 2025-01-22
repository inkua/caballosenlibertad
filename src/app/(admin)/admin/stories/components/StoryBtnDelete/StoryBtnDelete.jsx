
const StoryBtnDelete = ({sid}) => {

    const handlerDelete = async () => {
        if(confirm("Desea eliminar el registro?")){
            const URL = `/api/stories`
            const response = await fetch(URL, {
                method: "DELETE",
                body: JSON.stringify({
                    data: sid
                }),
            });
    
            const data = await response.json();
    
            if (data.data) {
                alert("Operación Exitosa!");
            } else {
                alert("No se pudo realizar la operación!");
            }
        }
    }

    return (
        <button
            onClick={() => handlerDelete()}
            className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
        >
            Eliminar
        </button>
    )
}

export default StoryBtnDelete
