$(document).ready(function () {
    $(".save").on("click", function(){
    var value = $(this).siblings(".userInput").val();
    var time = $(this).parent().attr("id");


    localStorage.setItem(time, value)
    })

    function hourUpdate(){
        var currentHour = moment().hours();
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        for (i =0; i < calendar.length; i++){
            if (blockHour < currentHour){
                $(this).addClass("past");
            } else if (currentHour === blockHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).addClass ("future")
            }
        }
        
    }

})


hourUpdate();

localStorage.getItem(time, value);



