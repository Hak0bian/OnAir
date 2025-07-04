import { useState } from 'react';
import { Dialog, DialogContent, IconButton, useMediaQuery } from '@mui/material';
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import CloseIcon from '@mui/icons-material/Close';
import MainButton from '../../UI/MainButton/MainButton';


const Trailer = ({ trailerKey }: {trailerKey: string | null}) => {
  const { selectedLanguage } = useAppSelector((state => state.languagesData))
  const t = translations[selectedLanguage].movies
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isSmallScreen = useMediaQuery('(max-width:740px)');

  return (
    <div>
      <MainButton text={t.trailer} onClick={handleClickOpen}/>

      <Dialog open={open} onClose={handleClose} maxWidth={isSmallScreen ? 'xs' : 'md'} fullWidth>
        <DialogContent sx={{ position: 'relative', p: 0, fontSize: 0 }}>
          <IconButton onClick={handleClose} 
            sx={{ 
              position: 'absolute', top: 8, right: 8, 
              color: 'white', backgroundColor: 'rgba(0,0,0,0.4)' 
            }}
            >
            <CloseIcon />
          </IconButton>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="..."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Trailer