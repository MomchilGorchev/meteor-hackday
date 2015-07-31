Template.mainLayout.events({

    'click .add-item': function(event, template){
        var current = $(event.target);

        var newItem = {
            className: 'col col__' + current.attr('data-width'),
            content: 'This is a placeholder content. You can drop HTML as well!',
            timestamp: Date.now()
        };


        Meteor.call('addElement', newItem, function(err, res){
           err ? FlashMessages.sendError('Error..!?')
               : FlashMessages.sendSuccess('Done!');
        });



    }

});