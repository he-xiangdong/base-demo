// 判断元素是否有一个 className
function hasClass(ele, className) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    return ele.className.match(reg);
}

// 添加 className
function addClass(ele, className) {
    if (!hasClass(ele, className)) {
        ele.className += ' ' + className;
    }
}

// 删除 className
function removeClass(ele, className) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    if (hasClass(ele, className)) {
        ele.className = ele.className.replace(reg, '');
    }
}

// 切换 className
function toggleClass(ele, className) {
    if (hasClass(ele, className)) {
        removeClass(ele, className)
    } else {
        addClass(ele, className)
    }
}