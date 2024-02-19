import Swal from 'sweetalert2';

const showMessage = status => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  });

  if (status === 200 || status === 201) {
    Toast.fire({
      icon: 'success',
      iconColor: 'white',
      title: 'Alterações realiadas com sucesso!',
      color: 'white',
      width: '24em',
      background: 'green'
    });
  } else {
    Toast.fire({
      icon: 'error',
      iconColor: 'white',
      title: 'Erro na solicitação',
      color: 'white',
      width: '22em',
      background: 'red'
    });
  }
};

export default showMessage;
