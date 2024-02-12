import Swal from 'sweetalert2';

const showMessage = status => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
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
      title: 'E-mail ou senha incorretos',
      color: 'white',
      width: '22em',
      background: 'red'
    });
  }
};

export default showMessage;
