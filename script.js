$(document).ready(function () {
    // get values from local storage
    
    
    for (let hour = 9; hour < 18; hour++) {
        var item = localStorage.getItem(hour)
        if (item !== null) {
            // push those values into corresponding input boxes
            $('input.' + hour).val(item);
        }
    }


    
    // console.log(moment().format('H'));
    
    var currentHour = moment().format('H');
   
    
    for (let hour = 9; hour < currentHour; hour++) {
       
        $("li." + hour).addClass("redBg")
    }

    
    // $("li.list-group-item").addClass("redBg")
    // }
    
    
    
   

    
    // create a class in css that gives color wanted
    // use jquery to add a class to that element
    // or
    // dynamically changes html



   




    // link moment().format result to css 
    // 1) get result from moment.format
    // 2) link time >current time to css colors
    // 3) set css coloring for card
    // 4) set css coloring to grey if time is <current time
    // 5) set css coloring to green if time is >= current time

    // console.log(moment().format());

    



    // on click for save buttons
    $('.save').on('click', function () {

        // grabs the text from the input box
        
        var currentButtonId = this.id;
        var text = $('input.' + currentButtonId).val();
        
        // push it to local storage
        localStorage.setItem(currentButtonId, text);

        // $('.' + currentButtonId).addClass('redBg');
    })

});