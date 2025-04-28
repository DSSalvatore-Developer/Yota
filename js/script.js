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
    window.location.href = "reports/store1.html"; // Перенаправление на страницу отчетов
  } else {
    alert('Неверный логин или пароль');
  }
});

// Отображение формы обратной связи
function showContactForm() {
  document.getElementById('contact-form').classList.remove('hidden');
}

// Отправка формы обратной связи
document.querySelector('#contact-form-data').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('contact-email').value;
  const subject = document.getElementById('contact-subject').value;
  const message = document.getElementById('contact-message').value;

  // Это имитирует отправку email
  alert('Сообщение отправлено!');

  // Очистка формы
  document.getElementById('contact-form').classList.add('hidden');
});

// Обработчик для показа/скрытия пароля
document.getElementById('toggle-password').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  const passwordType = passwordField.type === "password" ? "text" : "password";
  passwordField.type = passwordType;
  this.textContent = passwordType === "password" ? "👁️" : "🙈";
});
