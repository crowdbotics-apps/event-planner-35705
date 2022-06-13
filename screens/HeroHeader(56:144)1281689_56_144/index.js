import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_56_143}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4492134d-3d1b-41ad-b6a4-905370874e93"
          }}
          style={styles.ImageBackground_56_77}
        />
        <View style={styles.View_56_142}>
          <View style={styles.View_56_79} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07d3732e-daff-40c1-9f3b-6cdec980bea3"
            }}
            style={styles.ImageBackground_56_80}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/984a11de-dec5-462f-8778-43b9f2813c5d"
            }}
            style={styles.ImageBackground_56_82}
          />
          <View style={styles.View_56_84}>
            <Text style={styles.Text_56_84}>Decorater, Cake, Catering..</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b45ea437-7a6f-47a3-8bd9-689b58649841"
          }}
          style={styles.ImageBackground_56_130}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_56_136}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("42_262"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f354923-15e3-4823-91ad-4d69010dbaa0"
            }}
            style={styles.ImageBackground_56_137}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b7c7583-d422-461d-b9ba-3747da4040b2"
            }}
            style={styles.ImageBackground_56_138}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_56_143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_56_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_56_142: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("20%")
  },
  View_56_79: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_56_80: {
    width: wp("5%"),
    height: hp("25%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_56_82: {
    width: wp("5%"),
    height: hp("28%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  View_56_84: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_56_84: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_56_130: {
    width: wp("7%"),
    height: hp("35%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_56_136: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_56_137: {
    width: wp("6%"),
    height: hp("20%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_56_138: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
