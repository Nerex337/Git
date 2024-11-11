const loginform = document.getElementById('login-form');

loginform.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();
  // Получаем значения полей формы
  const Email = loginform.elements.Email.value;
  const password = loginform.elements.password.value;

  // Проверяем, что поля заполнены
  if (!Email || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Если всё в порядке, отправляем форму
  savedEmail=window.localStorage.getItem('Email');
  savedpassword=window.localStorage.getItem('password');
  if (Email===savedEmail && password===savedpassword)
  { 
    window.location.href='home-page.html';
  }
  else
  {
    alert('Неверный Email или пароль. Попробуйте ещё раз!');
  }
});