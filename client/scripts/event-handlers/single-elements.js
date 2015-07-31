/**
 * Created by momchillgorchev on 31/07/15.
 */

Template.singleElement.events({

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

    }

});