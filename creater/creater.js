/*
 * Pixel Letter Creater v0.1.0
 */
function createSmallLetterHtml(str, tagName) {
    if (typeof tagName == 'undefined') tagName = "span";
    str = str.toLowerCase();
    var html = "";
    for (var i = 0; i < str.length; i++) {
        var x = -1;
        var y = -1;
        var ch = str.charAt(i);
        if (ch >= 'a' && ch <= 'z') {
            y = 0;x = ch.charCodeAt(0) - ('a').charCodeAt(0);
        } else if (ch >= '0' && ch <= '9') {
            y = 1;x = ch.charCodeAt(0) - ('0').charCodeAt(0);
        } else if (ch >= ' ' && ch <= '/') {
            y = 2;x = ch.charCodeAt(0) - (' ').charCodeAt(0);
        } else if (ch >= ':' && ch <= '@') {
            y = 3;x = ch.charCodeAt(0) - (':').charCodeAt(0);
        } else if (ch >= '[' && ch <= '`') {
            y = 4;x = ch.charCodeAt(0) - ('[').charCodeAt(0);
        } else if (ch >= '{' && ch <= '~') {
            y = 5;x = ch.charCodeAt(0) - ('{').charCodeAt(0);
        } else {
            html += ch;//if not need unsolve letter,delete this code
        }
        if (x >= 0 && y >= 0) {
            html += '<' + tagName + ' class="pl pls" style="background-position:' + (-x * 5) + 'px ' + (-y * 5) + 'px;"></' + tagName + '>';
        }
    }
    return html;
}
function createBigLetterHtml(str) {
    if (typeof tagName == 'undefined') tagName = "span";
    str = str.toLowerCase();
    var html = "";
    for (var i = 0; i < str.length; i++) {
        var x = -1;
        var y = -1;
        var ch = str.charAt(i);
        if (ch >= 'a' && ch <= 'z') {
            y = 0; x = ch.charCodeAt(0) - ('a').charCodeAt(0);
        } else if (ch >= '0' && ch <= '9') {
            y = 1; x = ch.charCodeAt(0) - ('0').charCodeAt(0);
        } else if (ch >= ' ' && ch <= '/') {
            y = 2; x = ch.charCodeAt(0) - (' ').charCodeAt(0);
        } else if (ch >= ':' && ch <= '@') {
            y = 3; x = ch.charCodeAt(0) - (':').charCodeAt(0);
        } else if (ch >= '[' && ch <= '`') {
            y = 4; x = ch.charCodeAt(0) - ('[').charCodeAt(0);
        } else if (ch >= '{' && ch <= '~') {
            y = 5; x = ch.charCodeAt(0) - ('{').charCodeAt(0);
        } else {
            html += ch; //if not need unsolve letter,delete this code
        }
        if (x >= 0 && y >= 0) {
            html += '<' + tagName + ' class="pl plb" style="background-position:' + (-x * 10) + 'px ' + (-(y+3) * 10) + 'px;"></' + tagName + '>';
        }
    }
    return html;
}