/*
 * <!-- Add Button Back to Home   -->
 * <script type="text/javascript" src="../../js/back.button.js"></script>
 * dependencies: Google-Icon
 */
// Immediate Function
(function () {
    "use strict";
    /*
     * <div class="hexa-box">
     *    <a  href="../../" class="hexagon">
     *      <spanclass="material-icons">reply</span>
     *    </a>
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

    //create a <span> node
    var material = document.createElement("SPAN");
    //Add Class 
    material.className = "material-icons";
    //Add Text thu thay ban innerhtml
    material.appendChild(document.createTextNode("reply"));

    //Create a.hexagon-node
    var hexagon = document.createElement("A");
    hexagon.href = "https://trankieu.github.io";
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
