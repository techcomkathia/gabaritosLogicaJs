const difficultyNames = {
  facil: "Fácil",
  intermediario: "Intermediário",
  avancado: "Avançado"
};

const lessonNav = document.querySelector("#lesson-nav");
const lessonTitle = document.querySelector("#lesson-title");
const lessonKicker = document.querySelector("#lesson-kicker");
const lessonSummary = document.querySelector("#lesson-summary");
const lessonCount = document.querySelector("#lesson-count");
const footerLesson = document.querySelector("#footer-lesson");
const difficultySelect = document.querySelector("#difficulty-select");
const pinCheckbox = document.querySelector("#pin-questions");
const shuffleButton = document.querySelector("#shuffle-button");
const questionList = document.querySelector("#question-list");
const questionCount = document.querySelector("#question-count");
const selectionNote = document.querySelector("#selection-note");
const toggleAllButton = document.querySelector("#toggle-all-answers");
const lessons = window.bancoAulas;
let activeLesson;
let visibleQuestions = [];

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function selectionKey() {
  return `pratica-js:${activeLesson.id}:${difficultySelect.value}`;
}

function pinKey() {
  return `${selectionKey()}:fixada`;
}

function difficultyKey() {
  return `pratica-js:${activeLesson.id}:dificuldade`;
}

function questionId(question) {
  return activeLesson.questoes.indexOf(question);
}

function drawQuestions() {
  const difficulty = difficultySelect.value;
  const pool = difficulty === "aleatorio"
    ? activeLesson.questoes
    : activeLesson.questoes.filter((question) => question.nivel === difficulty);

  if (pinCheckbox.checked) {
    const savedIds = JSON.parse(localStorage.getItem(selectionKey()) || "null");
    if (Array.isArray(savedIds)) {
      const savedQuestions = savedIds
        .map((id) => activeLesson.questoes[id])
        .filter((question) => question && (difficulty === "aleatorio" || question.nivel === difficulty));
      if (savedQuestions.length === 6) return savedQuestions;
    }
  }

  const selected = shuffle(pool).slice(0, 6);
  return selected.sort((first, second) => questionId(first) - questionId(second));
}

function savePinnedQuestions() {
  if (pinCheckbox.checked) {
    localStorage.setItem(pinKey(), "true");
    localStorage.setItem(selectionKey(), JSON.stringify(visibleQuestions.map(questionId)));
  } else {
    localStorage.removeItem(pinKey());
    localStorage.removeItem(selectionKey());
  }
}

function makeAnswerButton(panel) {
  const button = document.createElement("button");
  button.className = "answer-button";
  button.type = "button";
  button.textContent = "Ver resposta";
  button.setAttribute("aria-expanded", "false");
  button.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    button.textContent = panel.hidden ? "Ver resposta" : "Ocultar resposta";
    button.setAttribute("aria-expanded", String(!panel.hidden));
  });
  return button;
}

function renderQuestions() {
  visibleQuestions = drawQuestions();
  if (pinCheckbox.checked) {
    localStorage.setItem(pinKey(), "true");
    localStorage.setItem(selectionKey(), JSON.stringify(visibleQuestions.map(questionId)));
  }
  questionList.replaceChildren();
  questionCount.textContent = `${visibleQuestions.length} questões`;
  selectionNote.textContent = pinCheckbox.checked
    ? "Seleção guardada neste dispositivo."
    : difficultySelect.value === "aleatorio"
      ? "Cada sorteio combina níveis diferentes."
      : `Questões de nível ${difficultyNames[difficultySelect.value]}.`;
  shuffleButton.disabled = pinCheckbox.checked;
  shuffleButton.setAttribute("aria-disabled", String(pinCheckbox.checked));
  toggleAllButton.textContent = "Mostrar todas as respostas";

  visibleQuestions.forEach((question, index) => {
    const item = document.createElement("li");
    item.className = "question-item";
    item.style.animationDelay = `${index * 35}ms`;

    const topline = document.createElement("div");
    topline.className = "question-topline";
    const number = document.createElement("span");
    number.className = "question-index";
    number.textContent = `QUESTÃO ${String(index + 1).padStart(2, "0")}`;
    const level = document.createElement("span");
    level.className = "level-tag";
    level.dataset.level = question.nivel;
    level.textContent = difficultyNames[question.nivel];
    topline.append(number, level);

    const prompt = document.createElement("p");
    prompt.className = "question-prompt";
    prompt.textContent = question.enunciado;

    const answer = document.createElement("section");
    answer.className = "answer-panel";
    answer.hidden = true;
    const code = document.createElement("pre");
    const codeText = document.createElement("code");
    codeText.textContent = question.resposta;
    code.append(codeText);
    answer.append(code);

    item.append(topline, prompt, makeAnswerButton(answer), answer);
    questionList.append(item);
  });
}

function renderLesson() {
  const requestedId = window.location.hash.slice(1);
  activeLesson = lessons.find((lesson) => lesson.id === requestedId) || lessons[0];
  if (window.location.hash !== `#${activeLesson.id}`) history.replaceState(null, "", `#${activeLesson.id}`);

  lessonNav.replaceChildren();
  lessons.forEach((lesson) => {
    const link = document.createElement("a");
    link.className = "lesson-link";
    link.href = `#${lesson.id}`;
    if (lesson.id === activeLesson.id) link.setAttribute("aria-current", "page");
    const number = document.createElement("span");
    number.className = "lesson-number";
    number.textContent = lesson.numero;
    const title = document.createElement("span");
    title.className = "lesson-link-text";
    title.textContent = lesson.titulo;
    link.append(number, title);
    lessonNav.append(link);
  });

  lessonKicker.textContent = `AULA ${activeLesson.numero} / MÓDULO DE LÓGICA`;
  lessonTitle.textContent = activeLesson.titulo;
  lessonSummary.textContent = activeLesson.resumo;
  lessonCount.textContent = `${activeLesson.questoes.length} EXERCÍCIOS`;
  footerLesson.textContent = `AULA ${activeLesson.numero}`;
  difficultySelect.value = localStorage.getItem(difficultyKey()) || "facil";
  pinCheckbox.checked = localStorage.getItem(pinKey()) === "true";
  renderQuestions();
}

difficultySelect.addEventListener("change", () => {
  localStorage.setItem(difficultyKey(), difficultySelect.value);
  renderQuestions();
});
pinCheckbox.addEventListener("change", () => {
  savePinnedQuestions();
  renderQuestions();
});
shuffleButton.addEventListener("click", () => {
  if (!pinCheckbox.checked) renderQuestions();
});
toggleAllButton.addEventListener("click", () => {
  const answers = [...questionList.querySelectorAll(".answer-panel")];
  const shouldShow = answers.some((answer) => answer.hidden);
  answers.forEach((answer) => {
    answer.hidden = !shouldShow;
    const button = answer.previousElementSibling;
    button.textContent = shouldShow ? "Ocultar resposta" : "Ver resposta";
    button.setAttribute("aria-expanded", String(shouldShow));
  });
  toggleAllButton.textContent = shouldShow ? "Ocultar todas as respostas" : "Mostrar todas as respostas";
});
window.addEventListener("hashchange", renderLesson);

renderLesson();