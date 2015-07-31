/**
 * Created by momchillgorchev on 31/07/15.
 */


Template.home.rendered = function(){

    var holder = document.querySelector('.homepage');

    var dnd = dragula([holder], {

    });

    dnd.on('drag', function(el, container){
        $(el).addClass('moving');
        $(el).find('.editable').focus();
    });

    dnd.on('dragend', function(el, container){
        $(el).removeClass('moving');

        var items = $(holder).find('.element');

        for (var i = 0; i < items.length; i++){
            var current = $(items[i]);

            if(current.is(el)){
                console.log(i);
            }
        }

    });

};