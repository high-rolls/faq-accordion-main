const accordionHeaders = document.querySelectorAll('[data-accordion-header]');
const expandedSrc = 'assets/images/icon-plus.svg';
const notExpandedSrc = 'assets/images/icon-minus.svg';

accordionHeaders.forEach((accordionHeader) => {
    let target = accordionHeader.parentElement.nextElementSibling;
    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
        accordionHeader.setAttribute('aria-expanded', !expanded);
        let img = accordionHeader.children[0];
        img.setAttribute('src', expanded ? expandedSrc : notExpandedSrc);
        target.hidden = expanded;
    }
});