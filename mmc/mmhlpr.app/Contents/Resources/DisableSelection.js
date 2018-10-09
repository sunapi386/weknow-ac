function disableselect(e) {

    var activeObj = document.activeElement;
    if (activeObj.tagName == "INPUT") {
        return true;
    }
    else {
        return false;
    }
//        return false
    }

    function reEnable() {
        return true
    }

    //if IE4+
    document.onselectstart = disableselect// new Function("return false")
    //if NS6
    if (window.sidebar) {

        //document.onmousedown=disableselect
        // the above line creates issues in mozilla so keep it commented.
        document.onclick = reEnable

    }
    function clickIE() {
        if (document.all) {

            (message);

            return false;
        }
    }

    document.oncontextmenu = new Function("return false")

    var element = document.getElementById('q');

    //    element.onmousedown = function() { return false; } // mozilla


//------Disable Mouse Wheel Zoom ---------------------------------------
    var obj = document.body;  // obj=element for example body
    // bind mousewheel event on the mouseWheel function
    if (obj.addEventListener) {
        obj.addEventListener('DOMMouseScroll', mouseWheel, false);
        obj.addEventListener("mousewheel", mouseWheel, false);
    }
    else obj.onmousewheel = mouseWheel;

    function mouseWheel(e) {
        // disabling
        e = e ? e : window.event;

        //alert(e.ctrlKey);
        if (e.ctrlKey) {
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
    }
//-------------------------------------------------------------------