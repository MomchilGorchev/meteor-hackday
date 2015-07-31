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
            return false;
        },

        removeElement: function(elemID){
            if(elemID){
                Elems.remove({_id: elemID});
                return true;
            }
            return false;
        },

        updateElement: function(item){
            if(item){
                Elems.update({_id: item.id}, {$set: {content: item.content}});
                return true;
            }
            return false;
        }
    });
});