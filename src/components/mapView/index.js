import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ModelActions from "../../store/ducks/model";
import UserActions from "../../store/ducks/user";

import { View, Text, Image } from "react-native";

import MapView, { Marker, Callout } from "react-native-maps";

import ModelInput from "../modelInput";

class mapView extends Component {
  handleClick = coordinate => {
    console.tron.log(coordinate);
    const { visible, setCoordinate } = this.props;
    console.tron.log(this.props);
    setCoordinate(coordinate);
    visible();
  };

  render() {
    const { data } = this.props.data;
    console.tron.log("mapdataiew");
    console.tron.log(data);
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          onLongPress={({ nativeEvent: { coordinate } }) =>
            this.handleClick(coordinate)
          }
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031
          }}
        >
          {data.map(user => (
            <Marker
              key={user.id}
              coordinate={user.coordinate}
              title={user.login}
              description={user.bio}
            >
              <Image
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                  padding: 10,
                  backgroundColor: "#fff"
                }}
                source={{ uri: user.avatar_url }}
              />
              {/* <Callout title={user.login} description={user.bio}>
                <View>
                  <Text>{user.login}</Text>
                  <Text>{user.bio}</Text>
                </View>
              </Callout> */}
            </Marker>
          ))}
        </MapView>
        <ModelInput />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.User
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModelActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mapView);
