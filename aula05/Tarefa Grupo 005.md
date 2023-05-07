### Tarefa Grupo 005: Git Exercícios - 28/04/2023.

1. Qual o comando para obter a versão instalada do Git?
```git --version```

2. Qual o efeito da execução de cada um dos comandos abaixo?
  a. git help
    ```mostra algumas funções do git com uma breve descrição, como push update refs along with associated objecs```

  b. git help checkout
     ```utilizado para ver o que a função **checkou** Atualiza arquivos na árvore de trabalho para corresponder à versão no índice ou na árvore especificada. Se nenhum pathspec foi fornecido, o git checkout também atualizará o HEAD para definir o branch especificado como o ramo atual.
     que precisa ser finalizado com Q.```
  c. git help merge
      ```Gera no terminal um guia de como utilizar merge, com a descrição geral, opções de uso com uma descrição breve, exemplos, resolução de conflitos.```
   d. git init
	```cria um repositório. Ele pode ser usado para converter um projeto existente e não versionado em um repositório do Git ou inicializar um novo repositório vazio.```
  e. git add --all
 ```para adicionar e confirmar os arquivos ou alterações ao repositório.```
  f. git add -u
	```Atualize o índice exatamente onde ele já possui uma entrada correspondente a <pathspec>. Isso remove e modifica entradas de índice para corresponder à árvore de trabalho, mas não adiciona novos arquivos.```
            ```Se nenhum <pathspec> for fornecido quando a opção -u for usada, todos os arquivos rastreados em toda a árvore de trabalho serão atualizados (versões antigas do Git usadas para limitar a atualização ao diretório atual e seus subdiretórios).```
  g. git config -l
	```Liste todas as variáveis definidas no arquivo de configuração, junto com seus valores.```
  h. git mv a.txt b.txt
```O comando é usado para renomear arquivos como a.txt para b.txt```
  i. git reset --hard
	```Reset os commit, passando a exibir o último commit.```
  j. git log -27
	```Exibe os últimos 27 commits.```

3. O fluxo “clássico” de interação com o Git é algo como “alterar um ou mais arquivos”, “acrescentar essas mudanças para serem contemplados no próximo commit” e, finalmente, executar um “commit”. Quais os comandos necessários para realizar os dois últimos “passos” desse fluxo?
```git add ...
git rm ...
git mv...
Executar um "commit"
git commit...```

4. Qual o comando deve ser executado para identificar o que foi alterado desde o último “commit”?
5. Em um dado repositório, arquivos simplesmente copiados para lá, ou seja, _untracked_, podem ser exibidos/identificados com que comando?
6. Qual o comando para efetuar um _commit_?
7. Qual o comando que devemos empregar para descartar mudanças ocorridas no arquivo teste.txt, por exemplo?
8. O que deve ser feito para que um determinado diretório do seu repositório seja ignorado pelo Git? Faça uma busca por **.gitignore**.
9. O que acontece se o seu repositório local for acidentalmente removido?
10. Como clonar um repositório remoto?
11. Em alguns cenários **git log** pode produzir extensos resultados. Se houver interesse em visualizar o histórico de um repositório, onde cada mudança é fornecida exatamente em uma única linha, qual o comando que deve ser empregado?
12. Em qual arquivo o Git armazena informações de configuração empregadas por usuário?
13. Qual o comando para criar um repositório local?
14. Qual o nome do diretório criado pelo Git quando se executa o comando **git init**?
15. Qual o comando para adicionar todos os arquivos modificados? (Aqueles para os quais **git status** identificam como **modified**?)
16. O Git faz uso do valor de hash conhecido por SHA1. O que isto significa? Qual o propósito? O que é SHA1?
17. Qual a palavra para indicar o último _commit_ em vez do valor de hash SHA1 correspondente?
-abbrev-commit
18. Quando se cria dois arquivos usando um editor de texto qualquer e, na sequência, executamos o comando **git add -u**, os dois arquivos criados passam de _untracked_ para _new file_?
Não. O comando git add -u adiciona para stage os arquivos editados que são monitorados pelo git
19. Qual o efeito da execução dos dois comandos abaixo, nesta ordem, em um dado repositório?
**git reset --soft HEAD~1** -> volta ao commit anterior e mantém os arquivos atuais no stage
**git reset --hard** -> retorna ao commit anterior e apaga todas as alterações feitas no commit atual, inclusive os arquivos no Stage
20. Após o emprego de um ambiente integrado de desenvolvimento (IDE), é comum a criação de arquivos e diretórios. Qual o comando que podemos empregar para remover arquivos e diretórios _untracked_?
git clean -f
21. Qual o nome do arquivo no qual podemos inserir a indicação para o Git de arquivos e diretórios a serem ignorados?
.gitignore
22. Quando se cria o arquivo _MinhaClasse.class_ em um dado diretório e desejamos que arquivos com a extensão .class, como neste caso, sejam ignorados por todos os membros de uma equipe que estão contribuindo com um dado projeto, como devemos proceder?
*.class
23. jQuery é uma famosa biblioteca em JavaScript. Consulte detalhes em [jQuery](http://jquery.com). O repositório correspondente encontra-se em [gitRep](https://github.com/jquery/jquery.git). Faça o clone deste repositório.
24. No repositório **jqueryrepo**, criado no passo anterior, qual o efeito do comando
**git shortlog -sne**?
Mostra o nome e o e-mail dos contribuintes do repositório
25. No repositório **jqueryrepo**, qual o efeito de **git remote -v**?
Exibe a url do diretório remoto do jqueryrepo
26. Um repositório Git pode ser etiquetado ao longo do tempo. Ou seja, _commits_ específicos podem ser “marcados” ou “etiquetados” para facilitar referências posteriores. Para listar todas as “etiquetas” (_tags_) estabelecidas para um dado repositório, qual comando deve ser executado?
git tag
27. Caso um dado repositório retorne muitas “marcas” ou “etiquetas” para o comando **git tag**, como retornar apenas aquelas que atendem a determinado padrão, por exemplo, iniciadas por 2.0?
git tag -a
28. Qual o efeito do comando **git tag -a 3.4-gold -m “minha versão ouro”**?
Cria uma tag com o nome "minha versão ouro"
29. Após executado o comando acima, qual o efeito de **git show 3.4-gold**?
Exibe os dados da tag junto com o commit
30. O que o comando **git push origin 3.4-gold** teria como efeito?

31. Após executar um commit, qual o efeito de **git commit --amend**?
Edita a mensagem do commit anterior, gerando um novo commit e unindo os dois.
32. Após executar **git add x.txt**, qual o efeito de **git reset HEAD x.txt**?
o git reset Head x.txt retira o arquivo do Stage
33. Após alterar o conteúdo de um arquivo committed em passo anterior, qual o efeito do comando **git checkout -- a.txt**?
34. Qual a diferença entre os comandos **git reset HEAD a.txt** e **git checkout -- a.txt**?
o git reset retira o arquivo do Stage e o git checkout descarta as alterações feitas no arquivo
35. Veja como interpretar o resultado de git diff [aqui](https://medium.com/therobinkim/how-to-read-a-git-diff-6c87a9dc47c5). Execute, em um dos seus projetos, o comando **git diff HEAD~1 HEAD** e certifique-se de que entende o resultado apresentado.
