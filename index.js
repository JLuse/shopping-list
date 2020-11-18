
$(function() {
    // enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    // add eventlistener to add item button
    $('#js-shopping-list-form').on('submit', e => {
        e.preventDefault();
        const input = $(this).find('#shopping-list-entry').val();

        $('.shopping-list').append(
            $('<li>').append($('<span>').attr('class','shopping-item').append(input))
                .append(
                    $('<div>').attr('class','shopping-item-controls').append($('<button>').attr('class','shopping-item-toggle').append($('<span>').attr('class', 'button-label').append('check')))
                    .append(
                            $('<button>').attr('class','shopping-item-delete').append($('<span>').attr('class', 'button-label').append('delete')                                                 
        ))));
    });

    // check and uncheck items on the list by clicking the "Check" button
    // add an event listener to check button
    // when clicked apply class .shopping-item__checked
    $('ul').on('click', '.shopping-item-toggle', function() {
        $(this).parent().prev().toggleClass('shopping-item__checked');
    });

    // permanently remove items from the list
    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).parent().parent().remove();
    });

});

