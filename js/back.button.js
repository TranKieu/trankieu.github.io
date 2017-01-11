/*
 * <!-- Add Button Back to Home   -->
 * <script type="text/javascript" src="../../js/back.button.js"></script>
 */
// Immediate Function
(function () {
    "use strict";
    /*
     * <div class="hexa-box">
     *    <span class="hexagon">
     *      <a href="../../" class="material-icons">reply</a>
     *    </span>
     * </div>
     */

    //Create div
    var gohome = document.createElement("DIV");
    gohome.className = "hexa-box";
    //add Style
    gohome.style.position = "fixed";
    gohome.style.top = "50px";
    gohome.style.right = "100px";
    gohome.style.textDecoration = "none";

    //create a <a> node
    var material = document.createElement("A");
    material.href = "https://trankieu.github.io";
    //Add Class 
    material.className = "material-icons";
    //Add Text thu thay ban innerhtml
    material.appendChild(document.createTextNode("reply"));

    //Create span.hexagon-node
    var hexagon = document.createElement("span");
    hexagon.className = "hexagon";
    hexagon.appendChild(material);

    gohome.appendChild(hexagon);
    //gohome.style.

    //Add Style to body
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "../../css/hexagon.css";
    document.head.appendChild(stylesheet);

    //Add node to body
    document.getElementsByTagName("body")[0].appendChild(gohome);

})();
