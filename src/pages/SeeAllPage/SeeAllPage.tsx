import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { latestMoviesThunk, popularMoviesThunk, changeSeeAllPageNumber } from '../../store/slices';
import { MovieCard, Paginationn } from "../../components"
import { Box } from '@mui/material';

const SeeAllPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { category, pageNum } = useParams();
    const { latestMovies, popularMovies, page, totalPages } = useAppSelector((state) => state.homeMovies);
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);

    const handleChangePage = (newPage: number) => {
        if (newPage !== page) {
            dispatch(changeSeeAllPageNumber(newPage))
            navigate(`/Movies/${category}/page/${newPage}`)
        }
    }

    useEffect(() => {
        const currentPage = Number(pageNum) || 1
        dispatch(changeSeeAllPageNumber(currentPage))
    }, [category])

    useEffect(() => {
        if (category === 'Latest') {
            dispatch(latestMoviesThunk({page, selectedLanguage}));
        } else if (category === 'Popular') {
            dispatch(popularMoviesThunk({page, selectedLanguage}));
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [category, page]);

    const movies = category === 'Latest' ? latestMovies : category === 'Popular' ? popularMovies : [];
    const filteredMovies = movies.filter((movie) => movie.poster_path);

    return (
        <section>
            <div className='container'>
                <h2 style={{ fontWeight: 'normal', padding: '20px 0' }}>
                    {category === 'latest' ? 'LATEST MOVIES' : category === 'popular' ? 'POPULAR MOVIES' : ''}
                </h2>
                <Box
                    sx={{
                        display: 'grid', gap: 2, justifyContent: 'center',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)',
                            xl: 'repeat(5, 1fr)',
                        }
                    }}
                >
                    {filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </Box>
                <Paginationn page={page} totalPages={totalPages} handleChangePage={handleChangePage} />
            </div>
        </section>
    );
};

export default SeeAllPage;