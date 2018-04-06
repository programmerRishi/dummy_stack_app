import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    console.log(this.props);
    /*
  --  Here  in ListView "data" key has the object directly
    {library: {…}}
library:{id: 0, title: "Shubhram", description: "Shubhram lives in Agra. His roll no is 84"}
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
      <CardSection>
      <Text style={titleStyle}>{this.props.library.item.title}</Text>
      </CardSection>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
