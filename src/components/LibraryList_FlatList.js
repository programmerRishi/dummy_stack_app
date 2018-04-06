import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItemFlatList';


class LibraryList extends Component {
  // ListView is not used because it is Deprecated
  renderItem({ item }) {
    /* { item } -- This is actually  an example of destructuring a value out of an aray
    eg. { item }= this.props.dataToShow;
        It can also be written as --   { item }= data_array[0]; where data_array is the array name of some array.

    --this { item } in here has the individual object,
       in the array of objects.It changes each time the renderRow function runs
     eg. item has a value of { "id": 0, "title": "shubhram", "description": "he lives in agra"}*/
      return (
      <ListItem library={{ item }} />
    );
  }
  render() {
    // console.log(this.props.dataToShow);
    return (
      <FlatList
        data={this.props.dataToShow}/* the value passed in here is the aray of objects.
         [{"id":0,"title": "shubhram", "description": "He lives in agra"........}] */
        renderItem={this.renderItem}// pass a call back function
        //scroll is auto enabled
      />
    );
  }
}

/* the state which we will get here is the initial state returned by the
 reducers when the application first boots up . No action is dispatched so this is not the
 state got after action dispatched*/

const mapStateToProps = state => {
  console.log(state);
  return { dataToShow: state.libraries };
};

/* 'mapStateToProps'  is not an inbuilt function.
It can have any name but it should be same on both
creating the function and passing it to connect*/

export default connect(mapStateToProps)(LibraryList);
// calling connect is necessary otherwise you wont get the state
