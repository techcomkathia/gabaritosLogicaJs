# Contexto do projeto

## Objetivo

Aplicação estática para praticar lógica de programação com JavaScript. O índice apresenta aulas, uma breve explicação do tema e seis questões por rodada, com gabaritos que o aluno pode revelar ou ocultar. O estado da interface e o conteúdo não dependem de framework ou etapa de build.

## Estrutura atual

- `index.html`: casca da aplicação. Carrega os bancos de aula com `defer` antes de `js/app.js`; essa ordem é necessária porque o controlador usa `window.bancoAulas` ao iniciar.
- `css/app.css`: tema, componentes e regras responsivas.
- `js/app.js`: navegação pelas aulas via hash, seleção de dificuldade, sorteio, fixação, persistência local e renderização segura do conteúdo.
- `js/aulas/aula01.js` a `js/aulas/aula04.js`: descrição da aula e banco de exercícios. Cada arquivo adiciona uma aula a `window.bancoAulas`.
- `aula02.html`, `aula03.html`, `aula04.html`: atalhos que redirecionam para o índice com a aula selecionada.
- `arquivosGabaritos/`: material antigo mantido no repositório, não consumido pela interface atual.

## Dados das aulas

Cada arquivo de aula segue este formato:

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

A convenção atual é de 18 questões por aula: seis em cada nível (`facil`, `intermediario`, `avancado`). O seletor também oferece `aleatorio`, que sorteia seis questões de todos os níveis. O sorteio atual não garante a presença de cada nível na rodada.

Para adicionar uma aula, criar `js/aulas/aulaNN.js` seguindo o formato e incluir seu `<script defer>` em `index.html` antes de `js/app.js`. O controlador deriva a navegação do banco, então não é necessário criar uma página HTML por aula. Preserve IDs únicos e as chaves de nível esperadas.

Os gabaritos são exibidos como texto dentro de `<code>` via `textContent`; não os execute na página. Muitos usam `prompt`, `alert` ou `console.log`, apropriados como exemplos para o aluno, mas não para execução automática pelo aplicativo.

## Comportamentos importantes

- A aula ativa é representada pelo hash, por exemplo `index.html#aula03`.
- Uma rodada contém até seis itens, ordenados pela posição no banco da aula.
- A opção de fixar grava os IDs selecionados e a preferência de dificuldade no `localStorage`, por aula e nível. A opção de sortear fica desativada enquanto a rodada está fixada.
- O botão individual e o botão global controlam a visibilidade dos gabaritos; ao trocar a rodada, as respostas começam ocultas.
- Use APIs DOM e `textContent` para inserir textos e respostas, evitando interpretação de HTML vindo dos bancos.
- As páginas de atalho das aulas 02 a 04 redirecionam ao índice. Não recriar nelas uma segunda cópia da interface ou dos exercícios.

## Executar e validar

Não há dependências de build. Abrir `index.html` diretamente em um navegador é suficiente; os estilos das fontes externas podem precisar de conexão com a internet.

Checagens disponíveis com Node.js no PowerShell:

```powershell
node --check js/app.js
node --check js/aulas/aula01.js
node --check js/aulas/aula02.js
node --check js/aulas/aula03.js
node --check js/aulas/aula04.js
```

Também validar que cada aula tenha 18 questões, seis por nível e gabarito não vazio. No navegador, verificar navegação por hash, filtros, sorteio, fixação após recarregar e abrir/fechar respostas em desktop e celular.

## Estado e limites conhecidos

- O conteúdo ativo representa quatro aulas: dados e cálculos, condicionais, repetição com `while` e repetição com `for`. Não assumir que todo o módulo de JS já foi cadastrado.
- `aleatorio` escolhe seis questões sem balanceamento garantido entre os níveis. Se o produto passar a exigir níveis mistos em toda rodada, alterar `drawQuestions()` em `js/app.js` e validar a nova distribuição.
- Os arquivos em `arquivosGabaritos/` são históricos e não foram reconciliados com os novos bancos. Ao migrar ou remover esse material, comparar os gabaritos e preservar conteúdo ainda útil.
- As soluções novas são exemplos didáticos e podem pressupor entradas válidas; não há validador automático de respostas ou execução isolada de código.
