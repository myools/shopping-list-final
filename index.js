//setup ability to add to list using form
function addToList() {
    //setup function to run when submit button is pressed
    $('#js-shopping-list-form').submit(function (event) {

        event.preventDefault();
        //set variable for form input
        const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
        //set variable for form input value that has been submitted
        var listItem = userTextElement.val();

        //create shopping list item
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        );

    })
}

//setup ability to delete from list
function deleteListItem() {
    //setup function to run when list delete button is pressed
    $('ul').on('click', '.shopping-item-delete', function (event) {
        //delete corresponding list item
        $(this).closest('li').remove();
    })

}



//setup ability to check and uncheck list item
function checkListItem() {
    //setup function to run when list item check button is pressed
    $('ul').on('click', '.shopping-item-toggle', function (event) {
    //uncheck list item if its class name determines it is checked
    if ($(this).closest('li').find('.shopping-item').attr('class') === 'shopping-item shopping-item__checked') {

      $(this).closest('li').find('.shopping-item').removeClass('shopping-item shopping-item__checked').addClass('shopping-item');

    }
    else {
      //check list item
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked', true);
        
    }
  })
}






$(deleteListItem);
$(addToList);
$(checkListItem);