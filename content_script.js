'use strict';

// BDS和QDR上tagname文本框的位置不一样
var tagnameIndex = 0;
if (location.hostname.indexOf('bds.') === 0) {
  tagnameIndex = 53;
} else if (location.hostname.indexOf('qdr.') === 0) {
  tagnameIndex = 8;
}

document.querySelector('input[type=password]').value = 'xgz7h.l6mup_f%_';
document.querySelectorAll('.setting-input')[tagnameIndex].value = '其他';
