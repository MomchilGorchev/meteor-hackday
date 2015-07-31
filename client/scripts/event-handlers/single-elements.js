/**
 * Created by momchillgorchev on 31/07/15.
 */

Template.singleElementEditable.events({

    'click .remove-item': function(event, template){

        var current = $(event.target);
        var itemID = current.closest('.element').attr('data-item');

        console.log(itemID);

        if(confirm('Are you sure?')){
            Meteor.call('removeElement', itemID, function(err, res){
                err ? FlashMessages.sendError('Error..!?')
                    : FlashMessages.sendSuccess('Done!');
            });
        }

    },

    'blur .editable': function(event, template){

        var current = $(event.target);

        console.log(current);
        var item = {
            id: current.closest('.element').attr('data-item'),
            content: current.text()
        };

        console.log(item);

        Meteor.call('updateElement', item, function(err, res){
            err ? FlashMessages.sendError('Error..!?')
                : FlashMessages.sendSuccess('Done!');
        });

    }

});