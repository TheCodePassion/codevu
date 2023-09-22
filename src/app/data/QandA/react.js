export const react = [
  {
    question: 'Яка різниця між псевдокласами та псевдоелементами?',
    answer:
      'Псевдокласи використовуються для вибору елементів на основі їх стану або дій користувача. Наприклад, у CSS-правилі "a:hover { color: red; }" псевдоклас ":hover" вибирає елемент "a", коли користувач наводить курсор на нього. З іншого боку, псевдоелементи використовуються для стилізації конкретних частин елементів. Наприклад, у CSS-правилі "p::before { content: `Привіт, `; font-weight: bold; }" псевдоелемент "::before" додає контент перед вмістом кожного елемента "p".',
  },
  {
    question: 'Як використовувати та в чому різниця між map та filter в React?',
    answer:
      'Метод map() застосовує вказану функцію до кожного елемента масиву і створює новий масив з результатами. Він повертає новий масив з такою ж кількістю елементів, як у вихідному масиві. Метод filter() створює новий масив, що містить лише ті елементи вихідного масиву, для яких функція фільтра повертає true. Ви можете комбінувати їх.',
  },
  {
    question: 'Що таке states в React?',
    answer:
      "У React states - це об'єкти, які містять дані, управляються компонентом. Вони використовуються для зберігання та управління змінними значеннями, які можуть впливати на відображення та поведінку компонента.",
  },
  {
    question: 'Що таке props в React і як вони відрізняються від states?',
    answer:
      'Props використовуються для передачі даних, states використовуються для зберігання даних.',
  },
  {
    question: 'Що таке Inline Conditional Expression?',
    answer: 'Це також відомо як умовний або тернарний оператор.',
  },
  {
    question: 'Що таке обробка подій (Event Handling)?',
    answer:
      'Обробка подій в React - це процес приєднання функціональності або логіки до подій, які відбуваються в межах компонентів React. Коли виникає певна подія, така як клік на елемент або подача форми, React викликає відповідну функцію зворотного виклику, яку ви визначили. У цій функції ви можете виконувати необхідні операції, оновлювати стан компонента або взаємодіяти з іншими компонентами. Обробка подій в React виконується через атрибути з іменами, що відповідають подіям, такими як onClick для події кліка або onChange для події зміни значення.',
  },
  {
    question: 'Що таке ключі (keys) в React?',
    answer:
      'Ключі в React - це спеціальні атрибути, які використовуються для ідентифікації унікальних елементів у списку компонентів при їх відображенні або оновленні. В якості ключа можна використовувати ідентифікатор або індекс у функції map.',
  },
  {
    question: 'Що таке динамічні введення (Dynamic Inputs) в React?',
    answer:
      'Динамічні введення (Dynamic Inputs) в React відносяться до можливості створювати або керувати динамічно змінюваними або змінюваними полями введення в компонентах React. Динамічні введення дозволяють користувачам додавати, видаляти або змінювати поля введення в формі або інших інтерактивних компонентах за потреби. Фактично, це просто введення в форму.',
  },
  {
    question: 'Стилі CSS в React (як їх можна реалізувати або які є варіанти?)',
    answer:
      'Стилі CSS в React можна реалізувати в окремому файлі, у тому ж файлі або безпосередньо в теґу.',
  },
  {
    question: 'Яка різниця між CSS-файлом і модулем CSS?',
    answer:
      'Файли CSS-модулів - це підхід або методологія, яка використовується для організації стилів у React та інших сучасних фреймворках JavaScript. У CSS-модулях кожен файл CSS розглядається як окремий модуль зі своїм власним простором імен. Це ізолює стилі та запобігає конфліктам імен між різними компонентами. Розділення CSS на модулі подібно до розділення компонентів.',
  },
  {
    question:
      'Яка різниця між контрольованими і неконтрольованими компонентами в React?',
    answer:
      'Контрольовані компоненти отримують своє поточне значення як props. Неконтрольовані компоненти використовують onClick, контрольовані компоненти використовують onChange.',
  },
  {
    question: ' Virtual DOM - як він працює?',
    answer:
      'Віртуальний DOM (Virtual DOM) в React працює шляхом створення віртуального представлення фактичного DOM-дерева. Коли стан компонентів змінюється, React порівнює віртуальний DOM з попереднім станом, виявляє різницю (патч), і тільки ці зміни вносить у фактичний DOM. Цей процес забезпечує оптимальну ефективність оновлення інтерфейсу користувача та запобігає зайвим перерисуванням DOM-елементів.',
  },
  {
    question: ' Що таке Узгодження в React?',
    answer:
      'Узгодження в React - це процес порівняння та оновлення віртуального DOM з фактичним DOM для ефективного та оптимального оновлення інтерфейсу користувача.',
  },
  {
    question: 'Що таке InnerHtml в React?',
    answer: 'InnerHtml в React фактично відповідає JSX.',
  },
  {
    question: 'React Fragment - суміжні елементи JSX (що це?)',
    answer:
      'React Fragment - це основний елемент, який має бути повернений з функції, якщо ви хочете повернути декілька елементів JSX без обгортання їх в зайвий DOM-елемент.',
  },
  {
    question: 'Безстаний React (без станів) проти компонентів із станами',
    answer:
      'У React компоненти можуть бути класифіковані як безстаний (без станів) або зі станами. Різниця полягає в тому, як вони управляють даними та оновленнями.',
  },
  {
    question: 'Що таке "debounce" в React?',
    answer:
      'У React "debounce" - це методика, яка використовується для контролю частоти викликів функцій, особливо у відповідь на події користувача, такі як натискання клавіш або прокрутка. Debounce дозволяє обмежити частоту виклику функцій, забезпечуючи, що функцію викликають лише після певного періоду бездіяльності користувача.',
  },
  {
    question: 'Які хуки ви знаєте і що вони роблять?',
    answer:
      'useState: Дозволяє компонентам зберігати та оновлювати локальний стан. useEffect: Дозволяє виконувати певний код при завантаженні компонента, при оновленні стану або при розмонтуванні компонента. useContext: Дозволяє отримувати доступ до контексту, що передається через Context API. useReducer: Дозволяє управляти станом за допомогою редуктора, подібно до роботи з Redux. useRef: Дозволяє отримувати посилання на DOM-елементи або зберігати імперативну інформацію про компонент. useMemo та useCallback: Дозволяють оптимізувати обчислення та функції, які повертаються з компоненту, для запобігання надмірному перерендерингу. useEffect з пустим масивом залежностей: Виконується тільки при монтажі та розмонтажі компонента, і не реагує на зміни стану. useLayoutEffect: Подібний до useEffect, але запускається синхронно, що дозволяє впливати на DOM перед відображенням. useHistory та useLocation (з react-router): Дозволяють взаємодіяти з історією браузера та поточним маршрутом. Власні хуки: Ви також можете створювати власні хуки для повторного використання логіки в різних компонентах.',
  },
]
