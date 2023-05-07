### Tarefa 006: Git Branching - 28/04/2023

1. Qual o nome do branch padrão do Git?
O nome padrão do branch do git é master também pode ser main

2. O que o comando **<code>git branch nome</code>** realiza?
O comando git branch permite criar, listar, renomear e excluir ramificações

3. Como criar um branch a partir de um commit específico?
Passando o commit ID ao criar a branch, exemplo: git checkout -b NOME_DA_BRANCH COMMIT_ID

4. Em um repositório, qual o efeito do comando **<code>git checkout -b bugfix/234</code>**?
O objetivo do comando é para fazer o desenvolvedor criar uma nova branch e mudar para a branch, no caso com o nome de bugfix/234

5. Qual o comando para se alternar para um branch de nome **experimento2**?
Tem que usar o comando: git checkout experimento2
Obs: Se adicionar o -b uma nova branch será criada

6. Em um repositório com dois branches, **b1** e **b2**, onde b1 é o corrente, qual o efeito do comando **<code>git branch</code>**?
O comando "git branch" irá mostrar as branchs e no caso a branch corrente era mostrada com um "*" na frente 

7. O que o comando **<code>git checkout -b</code>** nome faz?
O comando "git checkout -b" cria uma nova branch e muda para ela, se não adicionar o -b apenas muda de branch

8. Qual a função do <code>**comando git branch -d teste</code>**?
O comando "git branch -d teste" deleta uma branch chamada teste

9. Durante o desenvolvimento de um software é comum, por exemplo, utilizar um novo recurso por meio de experimentação. Talvez uma nova tecnologia, uma nova biblioteca que pode ser útil ao que está em desenvolvimento, ou até mesmo uma nova versão de um produto já empregado. Para que o uso deste novo recurso não interfira com o que é considerado pronto, um branch pode ser criado para a experimentação. Código que for criado para a experimentação existirá apenas no branch criado. Se eventualmente o experimento demonstrar um resultado satisfatório, as alterações realizadas no branch poderão ser incorporadas no que é considerado pronto, ou seja, no branch principal (master). Esta última ação é conhecida por merge. Neste item, crie uma sequência de comandos que simula um caso simples de criação e uso seguido de merge empregando um branch para ilustrar uma experimentação conforme acima. A sequência deve incluir, obrigatoriamente: 
(a) criação de um ou mais branches; 

git branch teste_01

(b) chaveamento para pelo menos dois branches

git checkout teste_02 -b

(c) merge.

git merge teste_01

INSTRUÇÕES:

1. No seu repositório pessoal, na sua branch pessoal, criar a pasta aula05.
2. Commitar este arquivo respondido nesta pasta.
3. A data limite para concluir esta tarefa é dia 01/05/2023, as 23h59min.

</DIV/>



