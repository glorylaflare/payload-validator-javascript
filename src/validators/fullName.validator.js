const fullNameValidator = (name) => {
  // nome: Marcelo Gonçalves de Oliveira Júnior
  // Verifica se o nome é uma string
  if (typeof name !== 'string') {
    return false;
  }

  const parts = name.trim().split(/\s+/);

  // Verifica se o nome contém pelo menos duas partes
  if (parts.length < 2) {
    return false;
  }

  // Verifica se o nome está vazio ou contém apenas espaços
  for (const part of parts) {
    if (part.length < 2 || !/^[A-Za-z]+$/.test(part)) {
      return false;
    }
  }

  return true;
};

export default fullNameValidator;
