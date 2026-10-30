# Contexto do projeto

## Objetivo e estado

Aplicação estática para praticar lógica de programação com JavaScript. O índice mostra uma aula por vez, uma breve explicação do tema e seis questões por rodada. O aluno pode escolher a dificuldade, sortear uma rodada, fixar a seleção e revelar ou ocultar os gabaritos.

A interface não usa framework, dependências de build, servidor ou backend. O conteúdo é carregado de bancos JS locais. O módulo está parcialmente cadastrado: há quatro aulas ativas, não o curso inteiro.

## Estrutura

- `index.html`: casca da aplicação, controles e rodapé. Um script curto no `<head>` aplica a preferência de tema antes do carregamento do CSS para evitar flash de cores. Os bancos de aula são carregados com `defer` antes de `js/app.js`; mantenha essa ordem.
- `css/app.css`: layout responsivo, componentes e tokens de cor dos temas claro e escuro.
- `js/app.js`: navegação por hash, sorteio, fixação, persistência, alternância de tema, realce de sintaxe e renderização segura.
- `js/aulas/aula01.js` a `js/aulas/aula04.js`: metadados e questões. Cada arquivo acrescenta uma aula a `window.bancoAulas`.
- `aula02.html`, `aula03.html`, `aula04.html`: páginas de compatibilidade que redirecionam para a aula correspondente no índice. Não duplicar nelas a aplicação.
- `arquivosGabaritos/`: scripts e páginas legados, preservados mas não consumidos pela interface atual.

## Bancos de questões

Cada banco segue este formato:

```js
window.bancoAulas = window.bancoAulas || [];
window.bancoAulas.push({
  id: "aula05",
  numero: "05",
  titulo: "Título da aula",
  resumo: "Breve explicação do conteúdo da aula.",
  questoes: [
    {
      nivel: "facil", // facil, intermediario ou avancado
      enunciado: "Descrição do exercício.",
      resposta: `// Gabarito em JavaScript`
    }
  ]
});
```

Convenção: cada aula começa com 18 questões, seis em cada nível (`facil`, `intermediario`, `avancado`), e pode receber questões extras acrescentadas ao final do array; cada nível deve manter pelo menos seis questões para completar uma rodada. As Aulas 02 a 04 incluem os desafios extras dos PDFs antigos do Google Drive: condicionais na Aula 02; repetição dividida entre a Aula 03 (laços por condição ou sentinela, com `while`) e a Aula 04 (laços contados, com `for`). O valor `aleatorio` é uma opção do seletor, não um nível armazenado na questão. IDs de aula devem ser únicos; questões são referenciadas pela posição no array do banco, portanto preserve a ordem dos itens ao editar bancos existentes.

Para adicionar uma aula, criar `js/aulas/aulaNN.js` seguindo o formato e adicionar seu `<script defer>` em `index.html` antes de `js/app.js`. A navegação é gerada a partir de `window.bancoAulas`, então não criar uma página específica para a nova aula.

Gabaritos são texto didático que pode usar `prompt`, `alert` e `console.log`. Não executar esses exemplos na interface. O destaque visual de sintaxe é feito pelo tokenizer simples em `js/app.js`, sem biblioteca: spans são criados via DOM e o conteúdo de cada token é definido por `textContent`. Ele oferece realce para os padrões comuns nos exemplos, mas não é um parser completo da linguagem JavaScript. Não substituir a inserção segura por `innerHTML`.

## Comportamentos e persistência

- A aula atual é identificada pelo hash, por exemplo `index.html#aula03`.
- Cada rodada seleciona até seis questões e as exibe na ordem original do banco. Níveis Fácil, Intermediário e Avançado selecionam do grupo correspondente; Aleatório seleciona do conjunto inteiro.
- Aleatório não garante uma questão de cada nível. Para exigir uma distribuição balanceada, alterar `drawQuestions()` em `js/app.js` e testar a distribuição.
- A fixação impede novo sorteio e persiste a seleção no `localStorage`. O array salvo contém índices das questões, não IDs individuais. As chaves são `pratica-js:<aulaId>:<nivel>` para índices, `pratica-js:<aulaId>:<nivel>:fixada` para o estado fixado e `pratica-js:<aulaId>:dificuldade` para a preferência de nível da aula.
- As respostas começam ocultas ao renderizar uma rodada. Há controle por questão e controle global para mostrar/ocultar todas.
- O modo começa escuro se ainda não houver escolha salva. O botão do cabeçalho alterna claro/escuro e grava `pratica-js:tema` no `localStorage`. O script de inicialização em `index.html` também sincroniza `data-theme` e `meta theme-color` antes do CSS.
- A identidade visual usa roxo e rosa. Em `css/app.css`, `--accent`/`--accent-soft` representam o roxo e `--pink`/`--pink-soft` representam o rosa; evite introduzir novamente cores verdes como cor de marca.
- Blocos de código mantêm o fundo escuro em ambos os temas e usam cores inspiradas no tema Dark+ do VS Code: roxo para palavras-chave, laranja para strings, verde para comentários, azul para literais, verde-água para APIs e amarelo para chamadas de função. Em celular, linhas compridas devem rolar dentro do bloco, não alargar a página.
- Use APIs DOM e `textContent` para inserir textos e respostas. Conteúdo vindo dos bancos não deve ser interpretado como HTML.
- O rodapé mantém centralizada a frase `APRENDER É FAZER, TESTAR E TENTAR DE NOVO.`, com assinatura de Káthia Rocha, ícone de LinkedIn e ícone de GitHub para o repositório.
  - LinkedIn: `https://www.linkedin.com/in/kathiarochasa/`
  - GitHub: `https://github.com/techcomkathia/gabaritosLogicaJs`
- O aviso de direitos autorais comunica autoria e atribuição, mas não substitui uma licença que defina permissões de reutilização.

## Executar e validar

Não há etapa de build. Abrir `index.html` diretamente em um navegador é suficiente. As fontes DM Sans, Space Grotesk e DM Mono vêm do Google Fonts; sem conexão, o navegador usa fontes substitutas.

Checagens de sintaxe com Node.js no PowerShell:

```powershell
node --check js/app.js
node --check js/aulas/aula01.js
node --check js/aulas/aula02.js
node --check js/aulas/aula03.js
node --check js/aulas/aula04.js
```

Validar também que cada aula tenha pelo menos seis questões por nível, com enunciado e gabarito não vazios. No navegador, conferir navegação por hash, filtros, distribuição aleatória, fixação após recarregar, abrir/fechar respostas, persistência dos dois temas e largura móvel com um gabarito longo aberto.

## Limites conhecidos

- Conteúdo ativo: Aula 01, dados e cálculos; Aula 02, decisões e condicionais; Aula 03, repetição com `while`; Aula 04, repetição com `for`. Não presumir que todo o módulo de JavaScript já foi cadastrado.
- Os bancos novos não foram totalmente reconciliados com o material histórico em `arquivosGabaritos/`. Antes de migrar ou remover scripts antigos, comparar gabaritos e preservar conteúdo que ainda seja útil.
- Soluções podem pressupor entradas válidas. A aplicação não valida respostas dos alunos nem executa gabaritos em sandbox.
- O tokenizer de sintaxe é propositalmente pequeno e baseado em expressões regulares; não ampliar para uma linguagem completa sem adotar um parser ou biblioteca de highlighting.
