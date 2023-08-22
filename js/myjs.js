function doLike(pid, uid) {
    console.log(pid + "," + uid);

    const d = {
        uid: uid,
        pid: pid,
        operation: 'like'
    }
    $.ajax({
        url: "LikeServlet",
        data: d,
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            if (data.trim() == 'true') {
                let c = $('.like-counter').html();
                c++;
                $('.html-counter').html(c);
            }
        },
        error: function (jqXHR, textSttaus, errorThrown) {
            console.log(data);
        }
    });
}
