const { post } = require("../../routes/api/posts");

$("#postTextarea").keyup(event =>{
    var textbox = $(event.target);
    var value = textbox.val().trim();
    // console.log(textbox)
    var submitButton = $("#submitPostButton");

    if(submitButton.lenght == 0) return alert("no submit button found");

    if (value == "") {
        submitButton.prop("disabled",true);
        return;
    }

    submitButton.prop("disabled",false);
})

$("#submitPostButton").click(()=>{
    var button = $(event.target);
    var textbox=$("#postTextarea");

    var data = {
        content: textbox.val()
    }

    $.post("/api/posts", data, postData => {
        // console.log(postData);
        var html = createPostHtml(postData);
        $(".postsContainer").prepend(html);
        textbox.val("");
        button.prop("disabled",true);
    })
})

function createPostHtml(postData) {
    return postData.content;
}