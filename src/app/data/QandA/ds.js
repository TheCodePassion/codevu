export const ds = [
  {
    question: 'Що таке структури даних?',
    answer:
      'Структури даних - це спосіб організації даних у ефективний спосіб.',
  },
  {
    question: 'На що потрібні структури даних?',
    answer:
      'Для створення швидких та ефективних алгоритмів. Для організації та управління даними. Для чистого та зрозумілого коду.',
  },
  {
    question: 'Що таке абстрактна структура даних?',
    answer:
      'Абстрактна структура даних (АСД) - це математична модель або інтерфейс, який визначає операції, які можна виконувати з даними, але не залежить від конкретної реалізації. Вона описує, як дані можуть бути організовані та маніпульовані, але не визначає, як саме це повинно бути реалізовано в коді. АСД дозволяють розробникам абстрагуватися від деталей реалізації і концентруватися на вирішенні завдань на більш абстрактному рівні.',
  },
  {
    question: 'Що таке комплексний аналіз в структурах даних?',
    answer:
      'Комплексний аналіз в структурах даних - це процес оцінки продуктивності структури даних з урахуванням часу виконання операцій (наприклад, вставки, видалення, пошуку) та використаної памяті. Цей аналіз дозволяє визначити ефективність структури даних в різних сценаріях використання та вибрати найкращу структуру даних для конкретного завдання.',
  },
  {
    question: 'Що таке big-o?',
    answer:
      '"Big O" - це позначення для асимптотичної оцінки верхньої межі (найгіршого випадку) часової складності виконання алгоритму чи операції в структурах даних. Воно представляється як O(f(n)), де f(n) - функція, яка описує зростання часу виконання алгоритму зі збільшенням розміру вхідних даних n. Big O використовується для оцінки ефективності алгоритмів та структур даних і допомагає порівнювати їх продуктивність в різних сценаріях.',
  },
  {
    question: 'Що таке масив в JavaScript?',
    answer:
      'Масив в JavaScript - це впорядкована колекція елементів, кожен з яких має свій індекс (числове значення), починаючи з нуля. Він може містити різні типи даних, включаючи числа, рядки, обєкти та функції, і надає методи для управління даними, такі як додавання, видалення та доступ до елементів. Масиви в JavaScript є динамічними, що означає, що їх розмір може змінюватися динамічно за потребою.',
  },
  {
    question: 'Чи існує в JavaScript статичний масив?',
    answer:
      'JavaScript не має явно визначеного "статичного масиву" в тому сенсі, як це є в деяких інших мовах програмування, де розмір масиву задається наперед і не може змінюватися. В JavaScript масиви є динамічними, що означає, що їх розмір може змінюватися залежно від потреби. Однак в JavaScript ви можете створити масив з початковою довжиною і заповнити його значеннями, щоб імітувати статичний масив.',
  },
  {
    question:
      "Що таке звязаний список в JavaScript? Об'єкт - це звязаний список?",
    answer:
      "Зв'язаний список (linked list) в JavaScript - це структура даних, яка складається з вузлів, де кожен вузол містить дані та посилання на наступний вузол у списку. Обєкт в JavaScript не є звязаним списком. Обєкт представляє собою більш загальну структуру даних, яка використовується для зберігання пар ключ-значення та довільних властивостей.",
  },
  {
    question: "Як відрізняється одинарний і подвійний зв'язаний список?",
    answer:
      "Одинарний зв'язаний список зберігає дані та посилання лише на наступний елемент і дозволяє переміщатися лише вперед. Подвійний зв'язаний список зберігає дані та посилання як на наступний, так і на попередній елемент і дозволяє переміщатися як вперед, так і назад по списку.",
  },
  {
    question: "Для чого використовуються зв'язані списки в JavaScript?",
    answer:
      "Зв'язані списки в JavaScript використовуються для організації та зберігання колекцій даних, де елементи можуть ефективно додаватися та видалятися в середині списку. Також вони використовуються для реалізації структур даних, таких як стеки та черги.",
  },
  {
    question: 'Що таке стек і для що він використовується?',
    answer:
      'Стек - це структура даних, яка працює за принципом "останній прийшов, перший пішов" (Last-In-First-Out, LIFO). Він використовується для управління тимчасовими даними, викликів функцій в програмуванні, відстеження стеку викликів функцій (стек викликів) та в інших ситуаціях, де потрібно зберігати та вилучати елементи у зворотньому порядку відносно їх початкового додавання.',
  },
  {
    question: 'Що таке черга і для що вона використовується?',
    answer:
      'Черга - це структура даних, яка працює за принципом "перший прийшов, перший пішов" (First-In-First-Out, FIFO). Вона використовується для управління даними, коли елементи додаються в кінець черги і вилучаються з початку черги. Черги використовуються в багатьох сценаріях, таких як управління завданнями в операційних системах, організація запитів в веб-серверах, обробка завдань у багатозадачних додатках та інших ситуаціях, де важливий порядок обробки даних.',
  },
  {
    question: 'Що таке пріоритет черги?',
    answer:
      'Пріоритет черги - це характеристика, яка визначає, які елементи в черзі повинні бути оброблені в першу чергу на основі їх важливості чи пріоритету. Елементи з більшим пріоритетом обробляються раніше, ніж елементи з меншим пріоритетом.',
  },
  {
    question: 'Що таке купа?',
    answer:
      'Купа (або кучева структура) - це структура даних, яка використовується для ефективної організації та управління елементами з пріоритетами, де елемент з найвищим пріоритетом завжди знаходиться на вершині купи. Купи часто використовуються для реалізації пріоритетних черг та інших алгоритмів, де важливо швидко отримувати та вилучати елемент з найвищим пріоритетом.',
  },
  {
    question: 'Що таке Union-Find?',
    answer:
      "Union-Find (або Disjoint-Set) - це структура даних і набір алгоритмів для ефективного розвязання задачі про розділення множини елементів на неперетинаючі групи та визначення, чи належать два елементи одній групі. Вона використовується, наприклад, в задачах об'єднання та пошуку компонент зв'язності в графах або в реалізації кластеризації в алгоритмах машинного навчання.",
  },
  {
    question: 'Що таке бінарні дерева і бінарний пошук по дереву?',
    answer:
      'Бінарне дерево - це ієрархічна структура даних, де кожен вузол має не більше двох дочірніх вузлів: лівий та правий. Бінарний пошук по дереву (Binary Search Tree, BST) - це тип бінарного дерева, де вузли впорядковані таким чином, що для кожного вузла всі значення у лівому піддереві менше його значення, а значення в правому піддереві більше. BST використовується для ефективного пошуку, вставки та вилучення елементів, оскільки дозволяє швидко обмежувати область пошуку.',
  },
  {
    question: 'Що таке хеш-таблиці в JavaScript?',
    answer:
      "Хеш-таблиця в JavaScript - це структура даних, яка використовує хеш-функції для швидкого пошуку, вставки та вилучення даних. Вона представляє собою асоціативний масив, де кожне значення пов'язане з унікальним ключем. Ефективність хеш-таблиці дозволяє виконувати операції зі складністю, близькою до O(1), що робить її корисною для реалізації множин, словників та інших структур даних.",
  },
  {
    question: 'Що таке хеш-функція?',
    answer:
      'Хеш-функція - це функція, яка приймає вхідні дані (зазвичай будь-якої довжини) і перетворює їх в фіксований хеш-код (хеш). Зазвичай цей хеш-код використовується для індексації та швидкого пошуку даних в структурах даних, таких як хеш-таблиці. Добра хеш-функція повинна забезпечувати рівномірний розподіл хешів для різних вхідних даних та мінімізувати ймовірність зіткнень (колізій), коли два різні входи дають однаковий хеш.',
  },
  {
    question: 'Що таке лінійне зондування?',
    answer:
      "Лінійне зондування - це метод розв'язання колізій в хеш-таблицях, при якому при виникненні колізії (коли два ключі отримують однаковий хеш-код), виконується послідовний пошук наступної вільної комірки в таблиці, починаючи з позиції, що відповідає хеш-коду ключа. Таким чином, елементи з колізіями розташовуються в таблиці безпосередньо один після одного.",
  },
  {
    question: 'Що таке квадратичне зондування?',
    answer:
      "Quadratic probing - це метод розв'язання колізій в хеш-таблицях, при якому при виникненні колізії (коли два ключі отримують однаковий хеш-код), виконується пошук наступної вільної комірки, використовуючи квадратичне збільшення індексу. Замість лінійного пошуку, як в лінійному зондуванні, тут індекси обчислюються за допомогою квадратичної функції, що допомагає рівномірніше розподілити елементи в таблиці і зменшити кластеризацію даних.",
  },
  {
    question: 'Що таке подвійне хешування?',
    answer:
      "Подвійне хешування - це метод розв'язання колізій в хеш-таблицях, при якому при виникненні колізії (коли два ключі отримують однаковий хеш-код), використовується друга хеш-функція для обчислення додаткового зсуву (кроку), на який буде переміщений пошук до наступної комірки. Цей процес повторюється, доки не буде знайдена вільна комірка для вставки елемента. Подвійне хешування допомагає зменшити ймовірність колізій і рівномірніше розподіляти елементи в хеш-таблиці.",
  },
  {
    question: 'Що таке Дерево Фенвіка?',
    answer:
      'Дерево Фенвіка (або бінарне індексне дерево) - це структура даних, яка використовується для ефективного вирішення задачі обчислення суми (або інших агрегатних операцій) на інтервалі елементів у масиві. Воно дозволяє виконувати операції оновлення елементів масиву та обчислення суми на інтервалі за логарифмічний час від розміру масиву. Дерево Фенвіка часто використовується в задачах обробки даних і алгоритмах для оптимізації обчислень на інтервалах.',
  },
  {
    question: 'Що таке Суфіксний масив і чи існує він в JavaScript?',
    answer:
      "Суфіксний масив - це структура даних, яка використовується в обробці рядків і містить відсортований список всіх суфіксів даного рядка. Він часто використовується для вирішення завдань, пов'язаних з пошуком підстрок, порівнянням рядків та іншими операціями над рядками. У JavaScript немає вбудованої реалізації суфіксних масивів, але ви можете реалізувати їх самостійно або використовувати сторонні бібліотеки та модулі, доступні для цієї мети.",
  },
  {
    question: 'Що таке збалансоване бінарне дерево пошуку?',
    answer:
      'Збалансоване бінарне дерево пошуку (Balanced Binary Search Tree) - це бінарне дерево, в якому висоти піддерев близькі одне до одного, що забезпечує ефективні операції вставки, пошуку та видалення елементів з часовою складністю, близькою до O(log n), де n - кількість елементів у дереві. Це дозволяє підтримувати структуру даних, відповідну для впорядкованого зберігання та швидкого пошуку даних.',
  },
]