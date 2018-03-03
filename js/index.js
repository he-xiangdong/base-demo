var navList = document.getElementById("navList");
var pageIframe = document.getElementById("pageIframe");

// 生成一级目录
for (let i = 0, length = navData.length; i < length; i++) {
    const element = `<li id="nav${navData[i].id}" class="navItem">
                        <h4>${navData[i].name}</h4>
                        <ul class="pageList"></ul>
                    </li>`;
    navList.innerHTML += element;
}

var menuList = navList.children;
var preActive = null;

// 一级目录绑定事件
for (let i = 0; i < menuList.length; i++) {
    menuList[i].onclick = function() {

        if (preActive && preActive != this.id) {
            removeClass(document.getElementById(preActive), 'active');
        }

        preActive = this.id;

        if (!hasClass(this, 'active')) {
            showPageList(this.id)
        }

        toggleClass(this, 'active');

    }
}

// 显示二级目录
function showPageList(id) {
    var target = document.getElementById(id).getElementsByTagName('ul')[0];
    target.innerHTML = '';
    for (const key in pageData) {
        if (pageData.hasOwnProperty(key) && key == id) {
            // const element = pageData[key];
            for (let i = 0, length = pageData[key].length; i < length; i++) {
                const element = `<li id="page${pageData[key][i].pageId}" 
                                        url="${pageData[key][i].url}"
                                        onclick="openIframe('${pageData[key][i].url}')"
                                >${pageData[key][i].name}</li>`;

                target.innerHTML += element;
            }
        }
    }
}

// 打开页面
function openIframe(url) {
    pageIframe.src = url
    event.stopPropagation()
}