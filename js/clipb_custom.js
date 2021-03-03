// native работает только на локальном, потому что для сервера требует httpS
// const copyButton = document.querySelector('button')
// let copyValue = document.querySelector('#code').innerHTML;

// copyButton.addEventListener('click', () => {
//   window.navigator.clipboard.writeText(copyValue)
//   console.log(copyValue)
// })


var clipboard = new ClipboardJS('.btn-copy');

clipboard.on('success', function(e) {
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    document.querySelector('button').innerHTML = 'Copied';
    setTimeout(() => document.querySelector('button').innerHTML = 'Copy code', 1000)
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});