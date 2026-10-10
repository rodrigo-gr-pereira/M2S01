// Criação do alias Usuario conforme as especificações
type Usuario = {
  id: number;
  nome: string;
  ativo: boolean;
};

// Criação da função buscarUsuario
function buscarUsuario(
  usuarios: Usuario[],
  idBusca: number,
): Usuario | undefined {
  // Procura o usuário correspondente ao ID informado
  const usuarioEncontrado = usuarios.find((usuario) => usuario.id === idBusca);

  // Verifica se o usuário foi encontrado para exibir as informações ou a mensagem de erro
  if (usuarioEncontrado) {
    console.log("Informações do usuário:", usuarioEncontrado);
  } else {
    console.log("Usuário não encontrado");
  }

  return usuarioEncontrado;
}

// --- Exemplo de uso para testar a função ---
const listaDeUsuarios: Usuario[] = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Carlos", ativo: false },
  { id: 3, nome: "Beatriz", ativo: true },
];

// Testando com um usuário existente
buscarUsuario(listaDeUsuarios, 2);

// Testando com um usuário que não existe
buscarUsuario(listaDeUsuarios, 1);
