import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#fff"
  },
  title: {},
  input: {
    borderColor: "#789456"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },
  buttonSave: {
    flex: 1,

    backgroundColor: "#456",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  ButtonCancel: {
    flex: 1,

    backgroundColor: "#789",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
});

export default style;
