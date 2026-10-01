'use strict';

const WORDS = [
    { en: 'run', ar: 'يجري' }, { en: 'eat', ar: 'يأكل' },
    { en: 'drink', ar: 'يشرب' }, { en: 'read', ar: 'يقرأ' },
    { en: 'write', ar: 'يكتب' }, { en: 'speak', ar: 'يتحدث' },
    { en: 'listen', ar: 'يستمع' }, { en: 'see', ar: 'يرى' },
    { en: 'go', ar: 'يذهب' }, { en: 'learn', ar: 'يتعلم' },
    { en: 'walk', ar: 'يمشي' }, { en: 'talk', ar: 'يتكلم' },
    { en: 'think', ar: 'يفكر' }, { en: 'know', ar: 'يعرف' },
    { en: 'make', ar: 'يصنع' }, { en: 'take', ar: 'يأخذ' },
    { en: 'give', ar: 'يعطي' }, { en: 'big', ar: 'كبير' },
    { en: 'small', ar: 'صغير' }, { en: 'good', ar: 'جيد' },
    { en: 'bad', ar: 'سيء' }, { en: 'new', ar: 'جديد' },
    { en: 'old', ar: 'قديم' }, { en: 'happy', ar: 'سعيد' },
    { en: 'sad', ar: 'حزين' }, { en: 'beautiful', ar: 'جميل' },
    { en: 'easy', ar: 'سهل' }, { en: 'difficult', ar: 'صعب' },
    { en: 'fast', ar: 'سريع' }, { en: 'slow', ar: 'بطيء' },
    { en: 'hot', ar: 'حار' }, { en: 'cold', ar: 'بارد' },
    { en: 'red', ar: 'أحمر' }, { en: 'blue', ar: 'أزرق' },
    { en: 'green', ar: 'أخضر' }, { en: 'water', ar: 'ماء' },
    { en: 'food', ar: 'طعام' }, { en: 'house', ar: 'منزل' },
    { en: 'car', ar: 'سيارة' }, { en: 'book', ar: 'كتاب' },
    { en: 'pen', ar: 'قلم' }, { en: 'school', ar: 'مدرسة' },
    { en: 'teacher', ar: 'معلم' }, { en: 'student', ar: 'طالب' },
    { en: 'friend', ar: 'صديق' }, { en: 'family', ar: 'عائلة' },
    { en: 'mother', ar: 'أم' }, { en: 'father', ar: 'أب' },
    { en: 'brother', ar: 'أخ' }, { en: 'sister', ar: 'أخت' },
    { en: 'day', ar: 'يوم' }, { en: 'night', ar: 'ليل' },
    { en: 'morning', ar: 'صباح' }, { en: 'evening', ar: 'مساء' },
    { en: 'time', ar: 'وقت' }, { en: 'year', ar: 'سنة' },
    { en: 'month', ar: 'شهر' }, { en: 'week', ar: 'أسبوع' },
    { en: 'city', ar: 'مدينة' }, { en: 'country', ar: 'دولة' },
    { en: 'world', ar: 'عالم' }, { en: 'love', ar: 'حب' },
    { en: 'life', ar: 'حياة' }, { en: 'work', ar: 'عمل' },
    { en: 'play', ar: 'يلعب' }, { en: 'help', ar: 'يساعد' },
    { en: 'open', ar: 'يفتح' }, { en: 'close', ar: 'يغلق' },
    { en: 'start', ar: 'يبدأ' }, { en: 'stop', ar: 'يتوقف' },
    { en: 'desk', ar: 'مكتب' }, { en: 'chair', ar: 'كرسي' },
    { en: 'table', ar: 'طاولة' }, { en: 'door', ar: 'باب' },
    { en: 'window', ar: 'نافذة' }, { en: 'room', ar: 'غرفة' },
    { en: 'boy', ar: 'ولد' }, { en: 'girl', ar: 'بنت' },
    { en: 'cat', ar: 'قطة' }, { en: 'dog', ar: 'كلب' },
    { en: 'bird', ar: 'طائر' }, { en: 'fish', ar: 'سمكة' },
    { en: 'sun', ar: 'شمس' }, { en: 'moon', ar: 'قمر' },
    { en: 'sky', ar: 'سماء' }, { en: 'earth', ar: 'أرض' },
    { en: 'tree', ar: 'شجرة' }, { en: 'flower', ar: 'زهرة' },
    { en: 'river', ar: 'نهر' }, { en: 'sea', ar: 'بحر' },
    { en: 'mountain', ar: 'جبل' }, { en: 'rain', ar: 'مطر' },
    { en: 'snow', ar: 'ثلج' }, { en: 'wind', ar: 'رياح' },
    { en: 'fire', ar: 'نار' }, { en: 'stone', ar: 'حجر' },
    { en: 'gold', ar: 'ذهب' }, { en: 'silver', ar: 'فضة' },
    { en: 'iron', ar: 'حديد' }, { en: 'road', ar: 'طريق' },
    { en: 'street', ar: 'شارع' }, { en: 'bridge', ar: 'جسر' },
    { en: 'market', ar: 'سوق' }, { en: 'shop', ar: 'محل' },
    { en: 'hotel', ar: 'فندق' }, { en: 'hospital', ar: 'مستشفى' },
    { en: 'bank', ar: 'بنك' }, { en: 'airport', ar: 'مطار' },
    { en: 'station', ar: 'محطة' }, { en: 'park', ar: 'حديقة' },
    { en: 'museum', ar: 'متحف' }, { en: 'dog', ar: 'كلب' }
];

function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const storedUser = localStorage.getItem(user);

    if (storedUser && storedUser === pass) {
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        loadWordList();
    } else {
        document.getElementById('error-msg').textContent = 'بيانات الدخول غير صحيحة';
    }
}

function register() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user && pass) {
        localStorage.setItem(user, pass);
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        loadWordList();
    } else {
        document.getElementById('error-msg').textContent = 'يرجى إدخال اسم المستخدم وكلمة المرور';
    }
}
function loadWordList() {
    const wordList = document.querySelector('.word-list');
    const wordCount = document.getElementById('word-count');
    wordList.innerHTML = '';
    
    WORDS.forEach((word, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${index + 1}</span><span>${word.en}</span><span>${word.ar}</span>`;
        wordList.appendChild(li);
    });
    
    wordCount.textContent = WORDS.length;
}

const wordSearch = document.getElementById('word-search');
if (wordSearch) {
    wordSearch.addEventListener('input', function() {
        const searchTerm = wordSearch.value.toLowerCase();
        const words = document.querySelectorAll('.word-list li');
        let visibleCount = 0;

        words.forEach(word => {
            const text = word.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                word.style.display = '';
                visibleCount++;
            } else {
                word.style.display = 'none';
            }
        });
        document.getElementById('word-count').textContent = visibleCount;
    });
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let currentQuestionType = '';
let isAnswered = false;

function startQuiz() {
    currentQuestions = shuffle([...WORDS]).slice(0, 10);
    currentIndex = 0;
    score = 0;
    
    if (document.getElementById('quiz-panel')) {
        document.getElementById('quiz-panel').style.display = 'block';
        showQuestion();
    }
}

  function showQuestion() {
    const currentQuestion = currentQuestions[currentIndex];
    isAnswered = false;
    const questionTypes = ['translation', 'multiple-choice', 'fill-in-blank', 'unscramble', 'matching'];
    const currentQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const questionText = document.getElementById('question-text');
    const quizOptions = document.getElementById('quiz-options');
    const userAnswerInput = document.getElementById('user-answer');
    const resultMessage = document.getElementById('result-message');

    if (!questionText) return;

    questionText.innerHTML = `السؤال ${currentIndex + 1} من 10<br><br>${currentQuestion.en}`;
    quizOptions.innerHTML = '';
    userAnswerInput.value = '';
    resultMessage.textContent = '';
    if (!questionText) return;

    questionText.innerHTML = `السؤال ${currentIndex + 1} من 10<br><br>ترجم الكلمة التالية: <strong>${currentWord.en}</strong>`;
    quizOptions.innerHTML = '';
    userAnswerInput.value = '';
    resultMessage.textContent = '';

    if (currentQuestionType === 'multiple-choice') {
        userAnswerInput.style.display = 'none';
        
        const wrongOptions = shuffle(WORDS.filter(w => w.en !== currentWord.en)).slice(0, 3);
        const options = shuffle([...wrongOptions, currentWord]);

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = option.ar;
            btn.onclick = () => checkMultipleChoice(option.ar, currentWord.ar, btn);
            quizOptions.appendChild(btn);
        });
    } else {
        userAnswerInput.style.display = 'block';
        userAnswerInput.focus();
    }
}

function checkMultipleChoice(selected, correct, selectedBtn) {
    if (isAnswered) return;
    isAnswered = true;

    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.disabled = true);

    const resultMessage = document.getElementById('result-message');
    if (selected === correct) {
        score++;
        selectedBtn.style.backgroundColor = '#4CAF50';
        selectedBtn.style.color = '#fff';
        resultMessage.textContent = 'إجابة صحيحة!';
        resultMessage.style.color = '#4CAF50';
    } else {
        selectedBtn.style.backgroundColor = '#f44336';
        selectedBtn.style.color = '#fff';
        resultMessage.textContent = `خطأ! الإجابة الصحيحة هي: ${correct}`;
        resultMessage.style.color = '#f44336';
        options.forEach(opt => {
            if (opt.textContent === correct) {
                opt.style.backgroundColor = '#4CAF50';
                opt.style.color = '#fff';
            }
        });
    }

    setTimeout(nextQuestion, 1500);
}

function checkAnswer() {
    if (isAnswered) return;
    if (currentQuestionType === 'multiple-choice') return;

    isAnswered = true;
    const userAns = document.getElementById('user-answer').value.trim();
    const correct = currentQuestions[currentIndex].ar;
    const resultMessage = document.getElementById('result-message');

    if (userAns === correct) {
        score++;
        resultMessage.textContent = 'إجابة صحيحة!';
        resultMessage.style.color = '#4CAF50';
    } else {
        resultMessage.textContent = `خطأ! الإجابة الصحيحة هي: ${correct}`;
        resultMessage.style.color = '#f44336';
    }

    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizPanel = document.getElementById('quiz-panel');
    let message = score >= 8 ? 'أحسنت! مستوى ممتاز!' : score >= 5 ? 'جيد، استمر في التدريب!' : 'بحاجة لمزيد من الممارسة.';
    
    quizPanel.innerHTML = `
        <h3>انتهى الاختبار!</h3>
        <p>نقاطك: ${score} من 10</p>
        <p>${message}</p>
        <button class="quiz-submit" onclick="location.reload()">إعادة الاختبار</button>
    `;
}
document.addEventListener('DOMContentLoaded', () => {
    const trainingBtn = document.getElementById('training-btn');
    if (trainingBtn) {
        trainingBtn.addEventListener('click', startQuiz);
    }
});
function checkAnswer() {
    const currentWord = currentQuestions[currentIndex];
    const userAnswer = document.getElementById('user-answer').value.trim();
    const resultMessage = document.getElementById('result-message');

    if (userAnswer === currentWord.ar) {
        resultMessage.textContent = 'صح';
        score++;
        currentIndex++;

        setTimeout(() => {
            if (currentIndex < currentQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }, 2000);
    } else {
        resultMessage.textContent = 'خطأ';
    }
}
