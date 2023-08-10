import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (type, message) => {
  console.log('toast');
  switch (type) {
    case 'success':
      toast.success(message);
      console.log('toast');

      break;
    case 'error':
      toast.error(message);
      console.log('toast');

      break;
    default:
      toast(message);
  }
};
