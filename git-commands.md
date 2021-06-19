### Fazer um commit 

```bash
    git add .
    git commit -m "mensagem"

    # Fazer um commit que representa uma nova funcionalidade use "feat:"
    # Exemplo: git commit -m "feat: create validation of form"

    # Fazer um commit que representa uma melhoria no código "refactor:"
    # Exemplo: git commit -m "refactor: correct name of var"

    # Fazer um commit que representa uma correção no código "fix:"
    # Exemplo: git commit -m "fix: correct fuction that valid form"
```

>(Respeitando as regras do [conventional commits](https://www.conventionalcommits.org/en/v1.0.0))


### Para subir para o github

```bash
    git push origin nome-da-branch
```

### Para criar uma nova branch a partir de outra

```bash
    git checkout -b nome-da-nova-branch

    # Lembre-se de criar branchs com nomes semânticos 

    # Ao criar uma branch que representa uma nova funcionalidade ou implementanção use "feat/"
    # Exemplo: git checkout -b feat/new-func

    # Ao criar uma branch que representa um ajuste em um código use "refactor/"
    # Exemplo: git checkout -b refactor/adjust

    # Ao criar uma branch que representa uma correção use "fix/"
    # Exemplo: git checkout -b fix/correction

```

### Para navegar entre branchs

```bash
    git checkout  nome-da-branch-que-desejo-ver
```

### Para atualizar uma branch local em relação a branch remota 

```bash
    git pull origin nome-da-branch
```

### Para renomear a branch atual 

```bash
    git branch -m novo-nome
```

