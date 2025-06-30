import { Pagination } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IPaginationPropsType } from '../../componentsTypes/propsTypes';

const Paginationn = ({ page, totalPages, handleChangePage }: IPaginationPropsType) => {
    const isSmallScreen = useMediaQuery('(max-width:740px)');
    const changePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
        handleChangePage(newPage)
    }

    return (
        <Pagination
            count={Math.min(totalPages, 500)}
            page={page}
            onChange={changePage}
            siblingCount={isSmallScreen ? 0 : 1}
            boundaryCount={1}
            sx={{
                mt: 6,
                display: 'flex',
                justifyContent: 'center',
                '& .MuiPaginationItem-root': {
                    width: { xs: 32, sm: 36, md: 40 },
                    height: { xs: 28, sm: 28, md: 32 },
                    fontSize: { xs: 12, sm: 14, md: 16 },
                    borderRadius: '0%',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    border: '1px solid var(--text-color-gray)',
                    color: 'var(--text-color-gray)',
                    transition: '0.3s',

                    '&:hover': {
                        color: 'var(--text-color-secondary)',
                        border: '1px solid var(--text-color-secondary)',
                    },
                },
                '& .MuiPaginationItem-previousNext': {
                    border: 'none',
                    '&:hover': {
                        color: 'var(--text-color-secondary)',
                        border: 'none',
                    },
                },
                '& .MuiPaginationItem-ellipsis': {
                    fontSize: 20,
                    border: 'none',
                    '&:hover': {
                        color: 'var(--text-color-gray)',
                        border: 'none',
                    },
                },
                '& .Mui-selected': {
                    color: 'var(--text-color-secondary)',
                    border: '1px solid var(--text-color-secondary)',
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                },
            }}
        />
    )
}

export default Paginationn