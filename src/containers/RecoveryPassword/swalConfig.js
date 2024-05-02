import Swal from 'sweetalert2';

const showMessage = status => {
  let messageConfig = {};

  if (status === 200 || status === 201) {
    messageConfig = {
      icon: 'success',
      color: 'green',
      background: 'white',
      title: 'Senha alterada com sucesso!',
      text: 'Acesse sua conta',
      timer: 4000
    };
  } else if (status === 401) {
    messageConfig = {
      icon: 'warning',
      iconColor: 'red',
      color: 'red',
      background: 'white',
      title: 'Erro!',
      text: 'O código informado é inválido ou está expirado!',
      timer: 4000
    };
  } else {
    messageConfig = {
      icon: 'error',
      iconColor: 'black',
      color: 'black',
      background: 'white',
      title: 'Erro!',
      text: 'Este e-mail não solicitou uma redefnição de senha',
      timer: 4000
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
