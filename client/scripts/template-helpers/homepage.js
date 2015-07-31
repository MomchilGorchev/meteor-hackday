/**
 * Created by momchillgorchev on 31/07/15.
 */

Template.home.helpers({

    allElements: function(){
        return Elems.find({}, {sort: {order: 1}});
    }

});