import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // here * means all the modules. actions here is a variable.

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { data, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
        <Text style={{ flex: 1 }}>{data.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.data;
    // console.log(this.props);
    /*
  --  Here  in ListView "data" key has the object directly
    {data: {…}}
data:{id: 0, title: "Shubhram", description: "Shubhram lives in Agra. His roll no is 84"},
__proto__:Object
------------------------------------
  while in FlatList "library" key has another object, which had a key which contains
   the actual object
   {library: {…}}
   library:{
   item:{id: 0, title: "Shubhram", description: "Shubhram lives in Agra. His roll no is 84"}
        },
      dispatch:{...}
   __proto__:Object
    */
    return (
      <TouchableWithoutFeedback
      onPress={() => {
        console.log(id);
        this.props.selectLibrary(id);
      }}
      >
      <View>
      <CardSection>
      <Text style={titleStyle}>{title}</Text>
      </CardSection>
      {this.renderDescription()}
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  // checking whether the id of the card which is pressed is equal to the current card or item
  const expanded = state.selectedLibraryId === ownProps.data.id;
  // own props refers to props of the Component
  //state is the object returned after the reducers are executed
     return { expanded };// expanded has the boolean value to be passed to the Component
};

export default connect(mapStateToProps, actions)(ListItem);
