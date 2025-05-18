import { Navigate, useParams } from "react-router-dom"

const RedirectToFirstPage = () => {
    const { category } = useParams()
    return <Navigate to={`/Movies/${category}/page/1`} replace />
}

export default RedirectToFirstPage