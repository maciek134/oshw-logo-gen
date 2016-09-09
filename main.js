var svg = $('svg');
var downloadLink = $('a');
var templates = {
  schematics: { x: 40, y: 114 },
  pcb: { x: 21, y: 74 },
  firmware: { x: 40, y: 35 },
  mechanical: { x: 77, y: 18 },
  documentation: { x: 118.5, y: 35 },
  bom: { x: 137, y: 74 },
  commercial: { x: 118.5, y: 114 }
};

$('body').on('change', 'input', function (e) {
  change($(this).attr('id'), this.checked);
});

function change(what, value) {
  var elem = svg.find('#' + what.charAt(0));
  if (elem.length === 0 && value === true) {
    svg.append(createText(what));
  } else if (elem.length > 0 && value === false) {
    elem.remove();
  }

  updateLink();
}

function createText(what) {
  var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('id', what.charAt(0));
  text.setAttribute('x', templates[what].x);
  text.setAttribute('y', templates[what].y);
  text.setAttribute('font-family', 'Ubuntu');
  text.setAttribute('font-size', '20');
  text.setAttribute('font-weight', 'bold');
  text.setAttribute('fill', '#ffffff');
  text.textContent = what.charAt(0).toUpperCase();
  return text;
}

function updateLink() {
  svg[0].removeAttribute('width');
  downloadLink.attr('href', 'data:image/svg+xml;utf8,' + unescape(svg[0].outerHTML));
  svg.attr('width', '500');
}