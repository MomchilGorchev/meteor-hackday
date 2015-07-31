/**
 * Created by momchillgorchev on 01/07/15.
 */


Meteor.startup(function(){

    return Meteor.methods({

        addElement: function(elem){
            if(elem){
                Elems.insert(elem);
                return true;
            }
        },

        removeElement: function(elemID){
            if(elemID){
                Elems.remove({_id: elemID});
            }
        }

    });

});