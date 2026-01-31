const fullNameValidator = (name) => {
    // Verifica se o nome é uma string
    if (typeof name !== 'string') {
        return false;
    };
    
    const parts = name.trim().split(/\s+/);

    // Verifica se o nome contém pelo menos duas partes
    if (parts.length < 2) {
        return false;
    };

    // Verifica se o nome está vazio ou contém apenas espaços
    parts.forEach(part => {
        if (part.length < 2 || !/^[A-Za-z]+$/.test(part)) {
            return false;
        }
        return true;
    });

    return true;
};

export default fullNameValidator;