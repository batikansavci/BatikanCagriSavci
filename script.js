$('#changeImg').click(
    function () {
            document.getElementById("changeImg").src = "ProfilePhoto_1.jpeg";  
    }
);

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


