/*
 * <!-- Add Button Back to Home   -->
 * <script type="text/javascript" src="../../js/home.button.js"></script>
 *
 * dependencies: Font Awesome
 * <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
 * 
 */
// Immediate Function
(function () {
    "use strict";
    /*
     * <div class="hexa-box">
     *    <a  href="../../" class="hexagon">
     *      <spanclass="fa fa-home"></span>
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
    var fontawesome = document.createElement("SPAN");
    //Add Class 
    fontawesome.className = "fa fa-home";

    //Create a.hexagon-node
    var hexagon = document.createElement("A");
	hexagon.href = "https://trankieu.github.io";
    hexagon.className = "hexagon";
    hexagon.appendChild(fontawesome);

    gohome.appendChild(hexagon);
    //gohome.style.

    //Add Style to body
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "../../css/hexa-with-awesome.css";
    document.head.appendChild(stylesheet);

    //Add node to body
    document.getElementsByTagName("body")[0].appendChild(gohome);

})();