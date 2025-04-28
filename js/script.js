// Моковые данные для авторизации
const validCredentials = {
  username: 'admin',
  password: 'admin123'
};

// Обработчик формы авторизации
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === validCredentials.username && password === validCredentials.password) {
    window.location.href = "reports.html"; // Перенаправление на страницу отчетов
  } else {
    alert('Неверный логин или пароль');
  }
});

// Отображение формы обратной связи
function showContactForm() {
  document.getElementById('contact-form').classList.remove('hidden');
}

// Отправка формы обратной связи
document.querySelector('#contact-form form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Здесь будет код отправки письма через сервер
  alert('Сообщение отправлено!');

  // Очистка формы
  document.getElementById('contact-form').classList.add('hidden');
});
