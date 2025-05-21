import { IRatingPropsType } from '../../componentsTypes/propsTypes';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Rating = ({ value, type }: IRatingPropsType) => {
    let rating = 0;
    if (type === 'vote') {
        rating = value / 2;
    } else if (type === 'popularity') {
        const capped = Math.min(value, 100);
        rating = (capped / 100) * 5;
    }

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<StarIcon key={`full-${i}`} sx={{ color: '#f87719', fontSize: '18px' }} />);
    }
    if (hasHalfStar) {
        stars.push(<StarHalfIcon key="half" sx={{ color: '#f87719', fontSize: '18px' }} />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<StarBorderIcon key={`empty-${i}`} sx={{ color: '#f87719', fontSize: '18px' }} />);
    }

    return <div>{stars}</div>;
};

export default Rating