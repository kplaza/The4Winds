<![CDATA[
$(document).ready(function(){
    var from,to,subject,text;
    $("#send_email").click(function(){      
        to=$("#to").val();
        subject=$("#subject").val();
        text=$("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            $("#message").empty().html("Your email has been sent!");
        }

});
    });
});