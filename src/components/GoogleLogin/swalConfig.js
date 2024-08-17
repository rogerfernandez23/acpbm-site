import Swal from 'sweetalert2';

const isSmall = window.matchMedia('(max-width: 740px)').matches;

const showMessage = status => {
  if (isSmall) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      customClass: 'swal-height'
    });

    if (status === 200 || status === 201) {
      Toast.fire({
        icon: 'success',
        iconColor: 'white',
        title: 'Logado com sucesso!',
        color: 'white',
        width: '18em',
        background: 'green'
      });
    } else {
      Toast.fire({
        icon: 'warning',
        iconColor: 'white',
        title: 'Ops! Algo não deu certo',
        color: 'white',
        width: '22em',
        background: 'red'
      });
    }
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      customClass: 'swal-height'
    });

    if (status === 200 || status === 201) {
      Toast.fire({
        icon: 'success',
        iconColor: 'white',
        title: 'Logado com sucesso!',
        color: 'white',
        width: '18em',
        background: 'green'
      });
    } else {
      Toast.fire({
        icon: 'warning',
        iconColor: 'white',
        title: 'Ops! Algo não deu certo',
        color: 'white',
        width: '22em',
        background: 'red'
      });
    }
  }
};

export default showMessage;
