function
    this.classList.toggle('active');
    this.style.transform = 'rotate(180deg)'
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      this.style.transform = 'rotate(0deg)'
    } else {
      panel.style.display = 'block';
    }

  function() {
    if (textoSobreMim1.style.display === 'none') {
      textoSobreMim1.style.display = 'block';
    } else {
      textoSobreMim1.style.display = 'none';
    }
  }