import AdminNav from "./componets/AdminNav/AdminNav"

function layout({ children }) {
    return (
        <body >
            <AdminNav/>

            {children}
        </body>
    )
}

export default layout
