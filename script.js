function changeImage(img) {
    document.getElementById("changeImg").src = img.src.replace("_0", "_1");
}
$('#cv_print').click(
    function () {
        var w = window.open();
        var header= $("#print_general").html();
        

        var html = "<!DOCTYPE HTML>";
        html += '<html lang="en-us">';
        html += '<head><style></style></head>';
        html += "<body>";
        
        if(header != null) html += header + "<br/><br/>";
        
        html += "</body>";
        w.document.write(html);
        w.window.print();
        w.document.close();
        w.close();
    }
);
