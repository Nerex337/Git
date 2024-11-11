const registrationform = document.getElementById('registration-form');

registrationform.addEventListener('submit', (evt) => {
  // Отменяем действие по умолчанию
  evt.preventDefault();
  
  // Получаем значения полей формы
  const Email = registrationform.elements.Email.value;
  const username = registrationform.elements.username.value;
  const password = registrationform.elements.password.value;
  const confirmPassword = registrationform.elements.confirmPassword.value;
  
  // Проверяем, что поля заполнены
  if (!Email || !username || !password || !confirmPassword) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Проверяем, что пароли совпадают
  if (password !== confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  
  // Если всё в порядке, отправляем форму
  window.localStorage.setItem('Email',Email);
  window.localStorage.setItem('password',password);
  registrationform.submit();
  alert('Вы успешно зарегистрированы!');
});