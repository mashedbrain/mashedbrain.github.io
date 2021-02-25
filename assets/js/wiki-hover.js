const template = document.querySelector('#wiki-template')
const initialText = template.textContent

tippy('a[href*="wikipedia.org"]', {
  arrow: true,
  maxWidth: '300px',
  placement: 'bottom',
  theme: 'light',
  html: '#wiki-template',
  onShow(instance) {
    const catchErr = function(e) {
      console.log(e)
      content.innerHTML = 'Loading failed'
      this.loading = false
      if (instance.popperInstance) instance.popperInstance.update()
    }

    const wikiPage = instance.reference.href.split("wikipedia.org/wiki")[1].substring(1);
    const content = instance.popper.querySelector('.tippy-content')

    if (content.innerHTML === '') content.innerHTML = initialText

    if (this.loading || content.innerHTML !== initialText) return

    this.loading = true

    fetch('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&origin=*&redirects=true&exintro=&titles='+wikiPage).then((resp) => resp.json()).then(data => {
      const pageKey = Object.keys(data.query.pages)[0];
      const firstPara = data.query.pages[pageKey].extract
        .replace(/ \(.*?\(listen\).*?\)/g, '')
        .replace(/ \(\)/g, '');

      if(firstPara.split(" ").length > 48) {
        content.innerHTML = '<div style="padding:5px">' + firstPara.split(" ").splice(0,48).join(" ").replace(/,\s*$/, "")  + '...</div>'
      } else {
        content.innerHTML = '<div style="padding:5px">' + firstPara + '</div>'
      }

      content.innerHTML += '<div style="padding:5px; text-align: right"><b>Read more on Wikipedia</b></div>'

      this.loading = false
      if (instance.popperInstance) instance.popperInstance.update()
    }).catch(catchErr)
  },
  onHidden(instance) {
    const content = instance.popper.querySelector('.tippy-content')
    content.innerHTML = initialText
  },
})
