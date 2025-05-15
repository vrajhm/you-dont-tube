function siteblock(){
    const content = document.querySelector('body');
    content.parentNode.removeChild(content);
}