$(document).ready(function () {
    
    $('#item-name').keyup(function (key) {
        if ((key.keyCode == 13)&&($(this).val() != '')) { addItem(); }
    });
    
    $('#checkall').click(function () {
        $('.check').click();
    });
    
    $('button').click(function () {
        $('.container.selected').hide();
    });
    
    function addItem() {
    
        var container = $('<div class="container">'),
            checkbox = $('<input class="check" type="checkbox">'),
            listItem = $('<input type="text">'),
            closeBtn = $('<img src="http://www.mycarbazar.com/images/close.gif" alt="close">');
        
        $('body').append(container);
        container.addClass('item');
        closeBtn.hide();
        
        listItem.val($('#item-name').val());
        $('#item-name').val('');
        listItem.addClass('elem');
        listItem.fadePower = 1;
        editOff(listItem);
        
        container.append(checkbox, listItem, closeBtn);
        
        container.mouseenter(function () {
            closeBtn.show();
        });
        
        container.mouseleave(function () {
            closeBtn.hide();
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
            lineThroughToggle(listItem);
            myFade(listItem);
            container.toggleClass('selected');
        });
        
        closeBtn.click(function () {
            container.hide();    
        });
    }
    
    function editOn(elem) {
        elem.removeAttr('readonly');
    }
    function editOff(elem) {
        elem.attr('readonly', 'readonly');
    }
    function lineThroughToggle(elem) {
        if (elem.css('text-decoration') == 'none') {
            elem.css('text-decoration', 'line-through');
        } else {
            elem.css('text-decoration', 'none');
        }
    }
    function myFade(elem) {
        if (elem.fadePower == 1) {
                elem.fadePower = 0.3;
            } else {
                elem.fadePower = 1;
            }
            elem.fadeTo('fast', elem.fadePower);
    }
});