import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ModelActions from "../../store/ducks/model";
import UserActions from "../../store/ducks/user";

import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";

import style from "./styles";

class ModelInput extends Component {
  state = {
    username: ""
  };

  render() {
    const { username } = this.state;
    // console.tron.log("modelIn");
    // console.tron.log(this.props);
    const { modelState, visible, userState, loadRequest } = this.props;

    return (
      <Modal
        animationType="slide"
        visible={modelState.visible}
        transparent={true}
        // onRequestClose={() => visible()}
      >
        <View style={style.container}>
          <Text>Adicionar um novo local</Text>
          {userState.error && <Text>Usuário não encontrado</Text>}
          <TextInput
            style={style.input}
            placeholder="Usuário do GitHub"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <View style={style.buttons}>
            <TouchableOpacity
              style={style.ButtonCancel}
              onPress={() => {
                visible();
              }}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>

            {userState.loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <TouchableOpacity
                style={style.buttonSave}
                onPress={() => loadRequest(username)}
              >
                <Text>Salvar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({
  modelState: state.Model,
  userState: state.User
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModelActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelInput);
