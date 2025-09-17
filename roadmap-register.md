## Função: Cadastro no site Adopet

### Cenário: Cadastro de Usuário Bem-Sucedido (Caminho Feliz)

**Passos:**
1. O usuário navega até a página de cadastro.
2. O usuário insere seu nome no campo "Nome".
3. O usuário insere um endereço de e-mail válido no campo "E-mail".
4. O usuário insere uma senha válida no campo "Senha".
5. O usuário reinsere a mesma senha no campo "Confirmação de Senha".
6. O usuário envia o formulário de cadastro.
7. O sistema confirma o cadastro bem-sucedido.

**Resultados Esperados:**
- [x] O sistema processa as informações inseridas com sucesso.

**Regra de Negócio:**
- [x] Os campos de e-mail e senha são obrigatórios para o cadastro.

---

### Cenário: Tentativa de Cadastro Mal-Sucedida

**Passos:**
1. O usuário navega até a página de cadastro.
2. O usuário deixa campos obrigatórios em branco.
3. O usuário clica no botão "Cadastrar".

**Resultados Esperados:**
- [x] O sistema valida que há campos em branco.
- [x] O sistema exibe uma mensagem de erro indicando que os campos obrigatórios devem ser preenchidos.

========================================

Funcionalidade: Login no site Adopet

Cenário: Login no sistema com sucesso

Passos:
1. O usuário acessa a pagina de login
2. O usuario insere seu email valido 'ana@email.com' e sennha valida 'Senha123' nos campos correspondentes
3. O usuário clica no botão "Entrar"

Resultado Esperado:
- O sistema autentica as credenciais fornecidas
- O sistema redireciona o usuário para a página "/home"

---

Funcionalidade: Falha no login no site Adopet

Cenário: Login no sistema com sucesso

Passos:
1. O usuário acessa a pagina de login
2. O usuario insere seu email valido 'ana@com' e sennha invalida 'senha' nos campos correspondentes
3. O usuário clica no botão "Entrar"

Resultados Esperados:
- O sistema valida as credenciais fornecidas.
- O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".

Regra de Negócio:
- O e-mail deve ter um formato válido.
- A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres

