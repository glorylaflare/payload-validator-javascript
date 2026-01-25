# Payload Validator JS - Documentação do Projeto

Este documento descreve a estrutura e organização do projeto **Payload Validator JS**, uma biblioteca para validação de payloads em JavaScript/Node.js.

## 📁 Estrutura Geral do Projeto

```
src/
├── constants/          # Dados fixos e constantes
├── core/               # Lógica central de validação
├── docs/               # Documentação do projeto
├── index.js            # Ponto de entrada principal
├── payloads/           # Exemplos de payloads para teste
├── rules/              # Regras de validação por entidade
├── utils/              # Funções utilitárias auxiliares
└── validators/         # Validações específicas
    └── common/         # Validações reutilizáveis
```

---

## 🔹 `constants/`

**Propósito:** Armazenar dados fixos e constantes que não mudam durante a execução.

**Conteúdo esperado:**

- Enums para tipos de validação
- Listas de valores permitidos
- Blacklists ou whitelists
- Constantes de configuração

**Exemplo:**

```js
export const VALIDATION_TYPES = {
  REQUIRED: 'required',
  EMAIL: 'email',
  MIN_LENGTH: 'minLength',
}

export const ALLOWED_DOMAINS = ['gmail.com', 'outlook.com']
```

---

## 🔹 `core/`

**Propósito:** Contém a lógica central do validador, responsável por orquestrar as validações.

**Conteúdo esperado:**

- `validator.js`: Classe ou função principal que recebe payload + regras e executa validações
- Agregação de erros
- Retorno padronizado dos resultados

**Fluxo:**

1. Recebe payload + regras
2. Itera pelas regras aplicando validações
3. Coleta e agrega erros encontrados
4. Retorna resultado estruturado

---

## 🔹 `docs/`

**Propósito:** Documentação do projeto e guias de uso.

**Conteúdo atual:**

- `documentacao-projeto.md`: Este arquivo, com a estrutura e descrição das pastas

**Conteúdo esperado adicional:**

- README de instalação e uso
- Exemplos de código
- API documentation

---

## 🔹 `index.js`

**Propósito:** Ponto de entrada principal da biblioteca.

**Conteúdo esperado:**

- Exportações das funções/classes principais
- Inicialização da biblioteca
- Interface pública para uso externo

**Exemplo:**

```js
export { validatePayload } from './core/validator.js'
export { userRules } from './rules/user.js'
```

---

## 🔹 `payloads/`

**Propósito:** Exemplos de payloads JSON para testes e demonstrações.

**Conteúdo atual:**

- `payload.json`: Exemplo de payload para validação

**Conteúdo esperado:**

- Payloads de diferentes entidades (user, product, etc.)
- Casos de teste válidos e inválidos

---

## 🔹 `rules/`

**Propósito:** Define regras de validação específicas para cada entidade ou tipo de dado.

**Conteúdo esperado:**

- Arquivos por entidade (ex.: `user.js`, `product.js`)
- Combinação de validações comuns em regras completas

**Exemplo:**

```js
export const userRules = {
  fullName: [required, minLength(2), maxLength(100)],
  email: [required, email],
  password: [required, minLength(8), hasSpecialChar],
  cpf: [required, cpfValidator],
}
```

---

## 🔹 `utils/`

**Propósito:** Funções utilitárias auxiliares para operações comuns.

**Conteúdo esperado:**

- Cálculo de idade a partir de data de nascimento
- Validação de CPF/CNPJ
- Parse e formatação de datas
- Funções de string (capitalize, slugify)
- Helpers para arrays e objetos

**Exemplo:**

```js
export function calculateAge(birthDate) {
  // lógica de cálculo
}

export function isValidCPF(cpf) {
  // validação de CPF
}
```

---

## 🔹 `validators/`

**Propósito:** Contém validações específicas e reutilizáveis.

### 🔸 `validators/common/`

**Propósito:** Validações genéricas que podem ser reutilizadas em diferentes contextos.

**Conteúdo esperado:**

- `required.js`: Verifica se valor existe
- `minLength.js`: Valida tamanho mínimo
- `maxLength.js`: Valida tamanho máximo
- `regex.js`: Validação por expressão regular
- `email.js`: Validação de formato de email
- `numeric.js`: Verifica se é número

**Exemplos de uso:**

```js
import { required, minLength, regex } from './validators/common'

const passwordValidators = [
  required,
  minLength(8),
  regex(/^(?=.*[A-Za-z])(?=.*\d)/),
]
```

---

## 🔄 Fluxo de Funcionamento

1. **Entrada:** Payload JSON é recebido
2. **Regras:** `rules/` define quais validações aplicar
3. **Execução:** `validators/` executam as validações específicas
4. **Agregação:** `core/` coleta e organiza os erros
5. **Saída:** Retorno padronizado com erros ou confirmação de sucesso

## 🚀 Como Usar

```js
import { validatePayload } from 'payload-validator-js'
import { userRules } from './rules/user.js'

const payload = { name: 'João', email: 'joao@email.com' }
const result = validatePayload(payload, userRules)

if (result.isValid) {
  console.log('Payload válido!')
} else {
  console.log('Erros encontrados:', result.errors)
}
```

## 📝 Notas de Desenvolvimento

- Todas as validações devem retornar objetos de erro padronizados
- Usar async/await para validações que dependem de I/O
- Manter validações independentes e testáveis
- Documentar novas validações com exemplos
