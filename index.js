$(function (){ 
//on submit, add new item to shopping list
    $('#js-shopping-list-form').submit( function(e) {
        //create variable that grabs the value of the input form
        const text = $('#shopping-list-entry').val();
        //append to shopping list
        $('.shopping-list').append
            ('<li>' 
                +'<span class="shopping-item">' 
                    + text 
                + '</span>' 
                + '<button class="shopping-item-toggle">' 
                    + '<span class="button-label">' 
                        + 'check' 
                    + '</span>' 
                + '</button>' 
                + ' '
                + '<button class="shopping-item-delete">'
                    + '<span class="button-label">' 
                        + 'delete'
                    + '</span>'
                + '</button>'
            +'</li>');
        $('.shopping-list').val();
        $('.shopping-list-entry').val();
        //empty the form field
        $('#shopping-list-entry').val('');
        e.preventDefault();
    });

    //delete shopping list item on click, first target the delete button
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {                                                                                                                                                
        //then remove the closest li element
        $(this).closest('li').remove();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        console.log($(this).closest('li').find('.shopping-item'));  
        $(this).closest('li').find('span', '.shopping-item').toggleClass('shopping-item__checked'); 
    });

})




