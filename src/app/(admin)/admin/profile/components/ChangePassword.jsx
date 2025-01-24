import Link from "next/link"

const ChangePassword = ({user}) => {
    return (
        <>
            {
                user.type=='root'?
                (<span>Cambiar</span>)
                :
                (<Link className="text-green-600" href='/admin/settings'>Cambiar</Link>)
            }
        </>
    )
}

export default ChangePassword
