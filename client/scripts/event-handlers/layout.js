Template.mainLayout.events({

    'click .add-item': function(event, template){
        var current = $(event.target);

        var docs = $('.homepage').find('.element').length;
        console.log(docs);

        var newItem = {
            className: 'col col__' + current.attr('data-width'),
            content: 'This is a placeholder content. You can drop HTML as well!',
            timestamp: Date.now(),
            order: docs
        };


        Meteor.call('addElement', newItem, function(err, res){
           err ? FlashMessages.sendError('Error..!?')
               : FlashMessages.sendSuccess('Done!');
        });



    }

});