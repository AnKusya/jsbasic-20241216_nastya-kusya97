function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.addEventListener('click', function() {
    this.hidden = true;
  });
}
