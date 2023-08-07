// Copyright © Asher Carrier
var links = document.getElementsByTagName('a');
var linkList = '<table style="width:100%;"><tr><th>Text</th><th>URL</th><th>Target</th></tr>';
for (var i = 0; i < links.length; i++) {
    var linkText = links[i].textContent;
    var linkUrl = links[i].href;
    var linkTarget = links[i].target;
    if (i % 2 == 0) {
        linkList += '<tr><td style="border-bottom: 1px solid #000000; background-color: #ffffff;">' + linkText + '</td><td style="border-bottom: 1px solid #000000; background-color: #ffffff;"><a href="' + linkUrl + '">' + linkUrl + '</a></td><td style="border-bottom: 1px solid #000000; background-color: #ffffff;">' + linkTarget + '</td></tr>';
    } else {
        linkList += '<tr><td style="border-bottom: 1px solid #000000; background-color: #d4d4d4;">' + linkText + '</td><td style="border-bottom: 1px solid #000000; background-color: #d4d4d4;"><a href="' + linkUrl + '">' + linkUrl + '</a></td><td style="border-bottom: 1px solid #000000; background-color: #d4d4d4;">' + linkTarget + '</td></tr>';
    };
};
linkList += '</table>';
var popup = window.open('', 'Link List', 'width=1400,height=700,scrollbars=1,resizable=1');
popup.document.body.innerHTML = linkList;