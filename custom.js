document.addEventListener('DOMContentLoaded', function() {
  var languageSwitchButton = document.createElement('div');
  languageSwitchButton.innerHTML = `
    <button onclick="switchLanguage('english')">English</button>
    <button onclick="switchLanguage('french')">French</button>
  `;
  document.body.insertBefore(languageSwitchButton, document.body.firstChild);

  function switchLanguage(language) {
    var cells = document.getElementsByClassName('language-switch-cell');
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      if (cell.dataset.language === language) {
        cell.style.display = 'block';
      } else {
        cell.style.display = 'none';
      }
    }
  }
});
