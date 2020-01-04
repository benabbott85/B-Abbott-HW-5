$(document).ready(function () {
    // get values from local storage
    
    
    for (let hour = 9; hour < 18; hour++) {
        var item = localStorage.getItem(hour)
        if (item !== null) {
            // push those values into correspding input boxes
            $('input.' + hour).val(item);
        }
    }


    
    console.log(moment().format('H'));
    
    var currentHour = moment().format('H');
   
    
    for (let hour = 9; hour < currentHour; hour++) {
       
        $("li." + hour).addClass("redBg")
    }

    
    // $("li.list-group-item").addClass("redBg")
    // }
    
    
    // anything under the current hour
   

    // either
    // create a class in you css that gives color wanted
    // use jquery to add a class to that element
    // or
    // dynamically changes html



    // hour = hour + 1;
    // hour += 1;
    // ++hour;

    // hour++;
    // for (let hour = 0900; hour < 0800 || hour > 1800; hour++) {
    // };
    // var time = hour
    // item = localStorage.getItem(time)
    // if (item !== null) {
    //     $('.' + time + '> input').val(item)
    // }
    // if (hour === 1200){
    //     hour = 0;
    // };




    // link moment().format result to css styling
    // 1) get result from moment.format
    // 2) link time >current time to css coloring
    // 3) set css coloring for card
    // 4) set css coloring to grey if time is <current time

    // console.log(moment().format());

    



    // on click for save buttons
    $('.save').on('click', function () {

        // grab the text from the input box
        // console.log(this.id);
        var currentButtonId = this.id;
        var text = $('input.' + currentButtonId).val();
        // console.log(inputBox.val())
        // push it to local storage
        localStorage.setItem(currentButtonId, text);

        // $('.' + currentButtonId).addClass('redBg');
    })

});