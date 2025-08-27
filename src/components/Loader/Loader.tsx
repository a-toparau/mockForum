import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface LoaderProps {
  open: boolean;
}

export const Loader = ({ open }: LoaderProps) => (
  <Backdrop open={open}>
    <CircularProgress color="primary" />
  </Backdrop>
);
