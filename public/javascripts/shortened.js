const copyButton = document.querySelector('#copyButton')
copyButton.addEventListener('click', (event) => {
  const URLstring = document.querySelector('#URLstring')
  document.querySelector('#URLstring').select()
  document.execCommand('copy')
})
