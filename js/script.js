// Обработчик для скрытия/показа текста в полях ввода
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    // Здесь можно добавить логику для авторизации
    alert('Вы успешно вошли');
  } else {
    alert('Заполните все поля');
  }
});
