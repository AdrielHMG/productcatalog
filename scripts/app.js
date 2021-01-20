function toggleActive() {
  const background = document.querySelector('.background');
  const orderMethod = document.querySelector('.order-method');
  background.classList.toggle('active');
  orderMethod.classList.toggle('active');
}