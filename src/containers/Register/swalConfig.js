import Swal from 'sweetalert2';

const showMessage = status => {
  let messageConfig = {};

  if (status === 200 || status === 201) {
    messageConfig = {
      icon: 'success',
      color: 'green',
      background: 'white',
      title: 'Solicitação enviada!',
      text: 'Verifique seu e-mail',
      timer: 4000
    };
  } else if (status === 409) {
    messageConfig = {
      icon: 'warning',
      iconColor: 'red',
      color: 'red',
      background: 'white',
      title: 'Erro!',
      text: 'Parece que alguém já se cadastrou com este e-mail',
      timer: 3000
    };
  } else {
    messageConfig = {
      icon: 'error',
      iconColor: 'black',
      color: 'black',
      background: 'white',
      title: 'Falha!',
      text: 'Erro no servidor, tente novamente'
    };
  }

  Swal.fire({
    position: 'center',
    showConfirmButton: false,
    width: '20em',
    timer: 1500,
    ...messageConfig
  });
};

export default showMessage;
