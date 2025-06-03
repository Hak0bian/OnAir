import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { changeTvSeriesPageNumber, tvSeriesThunk } from '../../store/slices'
import TvSeriesCard from '../../components/TvSeries/TvSeriesCard/TvSeriesCard'
import { Paginationn } from '../../components'
import { useNavigate } from 'react-router-dom'
import '../../components/global.css'

const TvSeriesPage = () => {
    const { tvSeries, page, totalPages } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleChangePage = (newPage: number) => {
        if (newPage !== page) {
            dispatch(changeTvSeriesPageNumber(newPage))
            navigate(`/TV/page/${newPage}`)
        }
    }

    useEffect(() => {
        dispatch(tvSeriesThunk({ page, selectedLanguage }))
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page, selectedLanguage])

    return (
        <section style={{ paddingBottom: '60px' }}>
            <div className='gridDiv'>
                {
                    tvSeries.map((seria) => (<TvSeriesCard key={seria.id} seria={seria} />))
                }
            </div>
            <Paginationn page={page} totalPages={totalPages} handleChangePage={handleChangePage} />
        </section>
    )
}

export default TvSeriesPage