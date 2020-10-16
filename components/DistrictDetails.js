import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { render } from "react-dom";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class DistrictDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { districtInfoOpen, onClose } = this.props;
    return (
      // <Modal transparent visible={districtInfoOpen} onRequestClose={onClose}>
      //   <TouchableOpacity
      //     style={{ justifyContent: "center", alignItems: "center" }}
      //   >
      //     <View
      //       style={{
      //         backgroundColor: "white",
      //         height: "50%",
      //         width: "70%",
      //         justifyContent: "center",
      //         alignItems: "center",
      //       }}
      //     >
      //       <Text>This is the District Details Page</Text>
      //     </View>
      //   </TouchableOpacity>
      // </Modal>
      <div></div>
    );
  }
}
