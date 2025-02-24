$(document).ready(function () {
    var $post = $("#Post");
    $post.attr("placeholder", "Write your reply..."); // Set placeholder

    $post.sceditor({
        format: "bbcode",
        style: "https://cdnjs.cloudflare.com/ajax/libs/sceditor/3.2.0/themes/content/default.min.css",
        toolbar: "bold,italic,underline,strikethrough|subscript,superscript|left,center,right,justify|" +
         "font,size,color,removeformat|cut,copy,paste|bulletlist,orderedlist,table|" +
         "code,quote,horizontalrule|image,email,link,unlink,youtube|" +
         "ltr,rtl|date,time|source,maximize",
        resizeEnabled: true,
        plugins: "bbcode",
        toolbarExclude: "source"
    }).sceditor("instance").sourceMode(true);
});
