import { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MainButton from '../../UI/MainButton/MainButton';
import { useAppSelector } from '../../../store/hooks/hooks';

const Trailer = ({ trailerKey }: {trailerKey: string | null}) => {
  const { selectedLanguage } = useAppSelector((state => state.languagesData))
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MainButton text={selectedLanguage === 'en' ? "Watch Trailer" : "Смотреть трейлер"} onClick={handleClickOpen}/>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
