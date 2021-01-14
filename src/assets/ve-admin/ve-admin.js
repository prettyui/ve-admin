export {
    ClickTab,
    OpenTab,
    CloseAllTabs
}

let ClickTab = function clickTab() {
    //console.log("clickTab");
    let event = window.event || arguments[0];
    //当前元素
    let currentElement = event.target;
    //console.log(currentElement);
    //获取点击的li元素的node
    let tab_node = currentElement.nodeName === "LI" ? currentElement : currentElement.parentNode;
    //获取点击的li元素的index
    let tab_index = 0;
    for (let i = 0; i < tab_node.parentNode.childNodes.length; i++) {
        if (tab_node.isSameNode(tab_node.parentNode.childNodes[i])) {
            tab_index = i;
            break;
        }
    }
    //console.log("tab_index:" + tab_index);
    //获取对应的iframe节点
    let iframe_box = document.getElementsByClassName("vea-content-iframe-box")[0];
    let iframe_node = iframe_box.childNodes[tab_index];
    if (currentElement.nodeName === "I") {
        //关闭标签页
        closeTab(tab_node, iframe_node)
    } else {
        //打开标签页
        showTab(tab_node, iframe_node);
    }
}

function showTab(tab_node, iframe_node) {
    //显示标签页
    //遍历标签，全部取消active
    let tab_box = document.getElementsByClassName("vea-content-header-bar-tab")[0];
    let tab_nodes = tab_box.getElementsByTagName("li");
    for (let i = 0; i < tab_nodes.length; i++) {
        tab_nodes[i].className = "";
    }
    //设置选中的标签class为active
    tab_node.className = "active";
    //遍历iframe容器，全部隐藏
    let iframe_box = document.getElementsByClassName("vea-content-iframe-box")[0];
    let child_nodes = iframe_box.childNodes;
    for (let i = 0; i < child_nodes.length; i++) {
        child_nodes[i].style = "display: none;";
    }
    //设置选中的标签对应的iframe容器可见
    iframe_node.style = "display: block;";
}

function closeTab(tab_node, iframe_node) {
    //关闭标签页
    //删除tab标签
    tab_node.parentNode.removeChild(tab_node);
    //删除iframe
    iframe_node.parentNode.removeChild(iframe_node);
    //关闭的不是当前显示的标签页，则不需要操作标签页的显示
    if (tab_node.className === "active") {
        //关闭的是当前选择的标签页，则显示第一个标签页
        //遍历标签，第一个tab的class设置为active，其他为空
        let tab_box = document.getElementsByClassName("vea-content-header-bar-tab")[0];
        let tab_nodes = tab_box.getElementsByTagName("li");
        for (let i = 0; i < tab_nodes.length; i++) {
            if (i === 0) {
                tab_nodes[i].className = "active";
            } else {
                tab_nodes[i].className = "";
            }
        }
        //遍历iframe容器，全部隐藏
        let iframe_box = document.getElementsByClassName("vea-content-iframe-box")[0];
        let child_nodes = iframe_box.childNodes;
        for (let i = 0; i < child_nodes.length; i++) {
            if (i === 0) {
                //设置选中的标签对应的iframe容器可见
                child_nodes[i].style = "display: block;";
            } else {
                child_nodes[i].style = "display: none;";
            }
        }
    }

    //显示或隐藏【关闭全部标签】按钮
    ShowOrHideCloseAllTabButton();
}

let OpenTab = ({
    title,
    url,
    open_tab
}) => {
    /* console.log({title, url, open_tab}); */
    //console.log(open_tab);
    if (!open_tab) {
        //console.log("新窗口打开");
        window.open(url);
        return;
    }
    //console.log("在标签中打开");

    let tab_id = title + url;
    //根据title和url赋值ID
    let tab_node = document.getElementById(tab_id);
    //console.log(tab_node);
    if (tab_node) {
        //console.log("存在该节点");
        //获取点击的li元素的index
        let tab_index = 0;
        for (let i = 0; i < tab_node.parentNode.childNodes.length; i++) {
            if (tab_node.isSameNode(tab_node.parentNode.childNodes[i])) {
                tab_index = i;
                break;
            }
        }
        //获取对应的iframe节点
        let iframe_box = document.getElementsByClassName("vea-content-iframe-box")[0];
        let iframe_node = iframe_box.childNodes[tab_index];
        //显示标签页
        showTab(tab_node, iframe_node);
    } else {
        //console.log("无该节点");
        //添加新的tab
        addTab(title, url)
    }
}

function addTab(title, url) {
    let tab_id = title + url;
    let tab_box = document.getElementsByClassName("vea-content-header-bar-tab")[0];
    let ul_node = tab_box.firstChild;
    //遍历tab并隐藏
    for (let i = 0; i < ul_node.childNodes.length; i++) {
        ul_node.childNodes[i].className = "";
    }
    //添加tab
    let li_node = document.createElement("li");
    li_node.id = tab_id;
    li_node.className = "active";
    li_node.style = "background-image: url(" + require('@/assets/ve-admin/image/tabBackground.png') + ")";
    //绑定事件
    li_node.onclick = function () {
        ClickTab();
    };
    let span_node = document.createElement("span");
    span_node.innerText = title;
    let i_node = document.createElement("i");
    i_node.style = "background-image: url(" + require('@/assets/ve-admin/image/tabBackground-close.png') + ")";
    let em_node = document.createElement("em");
    em_node.style = "background-image: url(" + require('@/assets/ve-admin/image/tabBackground.png') + ")";
    li_node.appendChild(span_node);
    li_node.appendChild(i_node);
    li_node.appendChild(em_node);
    ul_node.appendChild(li_node);

    let iframe_box = document.getElementsByClassName("vea-content-iframe-box")[0];
    //遍历iframe并隐藏
    for (let i = 0; i < iframe_box.childNodes.length; i++) {
        iframe_box.childNodes[i].style = "display:none";
    }
    //添加iframe
    let div_node = document.createElement("div");
    div_node.className = "vea-content-iframe";
    div_node.style = "display:block;";
    let iframe_node = document.createElement("iframe");
    iframe_node.frameBorder = "0";
    iframe_node.src = url;
    div_node.appendChild(iframe_node);
    iframe_box.appendChild(div_node);

    //显示或隐藏【关闭全部标签】按钮
    ShowOrHideCloseAllTabButton();
}

let CloseAllTabs = function closeAllTabs() {
    //遍历标签并删除全部，除了第一个不删除
    let tab_box = document.getElementsByClassName("vea-content-header-bar-tab")[0];
    let tab_nodes = tab_box.getElementsByTagName("li");
    for (let i = tab_nodes.length - 1; i >= 0; i--) {
        if (i === 0) {
            //显示第一个标签
            tab_nodes[i].className = "active";
        } else {
            //删除其他标签
            tab_nodes[i].parentNode.removeChild(tab_nodes[i]);
        }
    }

    //遍历iframe容器并全部删除，除了第一个不删除
    let iframe_box = document.getElementsByClassName("vea-content-iframe-box")[0];
    let child_nodes = iframe_box.childNodes;
    for (let i = child_nodes.length - 1; i >= 0; i--) {
        if (i === 0) {
            //显示第一个页面
            child_nodes[i].style = "display: block;";
        } else {
            //删除其他页面
            iframe_box.removeChild(child_nodes[i]);
        }
    }

    //显示或隐藏【关闭全部标签】按钮
    ShowOrHideCloseAllTabButton();
}

function ShowOrHideCloseAllTabButton() {
    let tab_box = document.getElementsByClassName("vea-content-header-bar-tab")[0];
    let ul_node = tab_box.firstChild;
    //如果标签大于3个，则显示关闭全部的按钮
    if (ul_node.childNodes.length > 3) {
        //显示【关闭全部】按钮
        document.getElementsByClassName("vea-content-header-bar-button")[0].style = "display:block";
    } else {
        //显示【关闭全部】按钮
        document.getElementsByClassName("vea-content-header-bar-button")[0].style = "display:none";
    }
}