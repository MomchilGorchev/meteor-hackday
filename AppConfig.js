/**
 * Created by momchillgorchev on 01/07/15.
 */

Elems = new Meteor.Collection('elems');
Sortable.collections = ['elems'];


if(Meteor.isServer){
    Meteor.publish('elems', function(){
        return Elems.find();
    })
}