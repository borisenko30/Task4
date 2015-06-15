$(document).ready(function () {

// 'Enter' key handler for the top EditBox;
    $('#editBox').keyup(function (key) {
        if ((key.keyCode == 13) && ($(this).val() != '')) { addItem(); }
    });
// 'CheckAll' checkbox handler;    
    $('#checkall').click(function () {
        if (!$(this).is(':checked')) {
            $('.check:checked').click();
        } else {
            $('.check.unchecked').click();
        }
    });
// 'DeleteAll' button handler;
    $('button').click(function () {
        $('.container.selected').remove();
    });
// Create and add new item to the list;
    function addItem() {
    
        var container = $('<div class="container">'),
            checkbox = $('<input class="check unchecked" type="checkbox">'),
            listItem = $('<input type="text">'),
            closeBtn = $('<img src="http://www.mycarbazar.com/images/close.gif" alt="close">');
        
        $('body').append(container);
        container.addClass('item');
        closeBtn.hide();
        
        listItem.val($('#editBox').val());
        $('#editBox').val('');
        listItem.addClass('elem');
        listItem.fadePower = 1; // variable stores opacity, used for myFade function;
        editOff(listItem);
        
        container.append(checkbox, listItem, closeBtn);
        
        container.mouseenter(function () {
            closeBtn.show();
            container.css('background-color', '#dafcec');
        });
        
        container.mouseleave(function () {
            closeBtn.hide();
            container.css('background-color', '#f2fff9');
        });
        
        listItem.dblclick(function () {
            editOn(listItem);
            this.temp = listItem.val();
        });
        
        listItem.keyup(function (key) {
            if (key.keyCode == 13) {
                editOff(listItem);
            } else if (key.keyCode == 27) {
                editOff(listItem);
                listItem.val(this.temp);
            }
                
        });
        
        checkbox.click(function () {
            strikeThroughToggle(listItem);
            myFade(listItem);
            checkbox.toggleClass('unchecked');
            container.toggleClass('selected');
        });
        
        closeBtn.click(function () {
            container.remove();
        });
    }
// Enable text editing;
    function editOn(elem) {
        elem.removeAttr('readonly');
    }
// Disable text editing;
    function editOff(elem) {
        elem.attr('readonly', 'readonly');
    }

    function strikeThroughToggle(elem) {
        if (elem.css('text-decoration') == 'none') {
            elem.css('text-decoration', 'line-through');
        } else {
            elem.css('text-decoration', 'none');
        }
    }
//Just custom FadeToggle() function;
    function myFade(elem) {
        if (elem.fadePower == 1) {
            elem.fadePower = 0.3;
        } else {
            elem.fadePower = 1;
        }
        elem.fadeTo('fast', elem.fadePower);
    }
});