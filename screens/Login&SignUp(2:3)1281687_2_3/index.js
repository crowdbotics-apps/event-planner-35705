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
      <TouchableOpacity
        style={styles.TouchableOpacity_3_105}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_92"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9bd56aa-61b2-4a72-bd21-b44f344ba78d"
          }}
          style={styles.ImageBackground_I3_105_3_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca649bfc-0e35-42d0-9089-5bc0be2b858b"
          }}
          style={styles.ImageBackground_I3_105_3_118}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_3_152}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_247"))
        }
      >
        <View style={styles.View_3_153}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fab75a13-d814-4f64-89df-0c81c2c542fc"
            }}
            style={styles.ImageBackground_3_154}
          />
          <View style={styles.View_3_155}>
            <Text style={styles.Text_3_155}>Skip </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd6c1499-8f13-4b59-bfed-280e8f6c4ddd"
            }}
            style={styles.ImageBackground_3_156}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_14_218}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f29dfea3-7178-452c-bf62-d9126d8872f8"
          }}
          style={styles.ImageBackground_I14_218_14_134}
        />
        <View style={styles.View_I14_218_14_135}>
          <Text style={styles.Text_I14_218_14_135}>
            By Creating account you agree our Terms of Use, Privacy Policy &amp;
            Content Policy
          </Text>
        </View>
        <View style={styles.View_I14_218_14_136}>
          <View style={styles.View_I14_218_14_137}>
            <View style={styles.View_I14_218_14_138}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2348809-6fbf-42a0-b228-e5fc0ffc79aa"
                }}
                style={styles.ImageBackground_I14_218_14_139}
              />
              <View style={styles.View_I14_218_14_144}>
                <Text style={styles.Text_I14_218_14_144}>Google</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I14_218_14_145}>
            <View style={styles.View_I14_218_14_146}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa470aa8-aa92-4c51-a179-d9dc7efe674c"
                }}
                style={styles.ImageBackground_I14_218_14_147}
              />
              <View style={styles.View_I14_218_14_150}>
                <Text style={styles.Text_I14_218_14_150}>Facebook</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I14_218_14_151}>
            <Text style={styles.Text_I14_218_14_151}>Or continue with</Text>
          </View>
        </View>
        <View style={styles.View_I14_218_14_152}>
          <View style={styles.View_I14_218_14_153} />
          <View style={styles.View_I14_218_14_154}>
            <Text style={styles.Text_I14_218_14_154}>+91</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I14_218_14_155}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("14_188"))
            }
          >
            <Text style={styles.Text_I14_218_14_155}>Verify</Text>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29d00e6e-5a37-44d6-aab3-d3036e0f4025"
            }}
            style={styles.ImageBackground_I14_218_14_156}
          />
        </View>
        <View style={styles.View_I14_218_14_157}>
          <View style={styles.View_I14_218_14_158}>
            <Text style={styles.Text_I14_218_14_158}>Welcome to You!</Text>
          </View>
          <View style={styles.View_I14_218_14_159}>
            <Text style={styles.Text_I14_218_14_159}>
              Let’s Login or Sign up to get more better experience
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/936ae98e-6fad-49ae-ad84-e10ae9928775"
            }}
            style={styles.ImageBackground_I14_218_14_160}
          />
        </View>
      </View>
      <View style={styles.View_47_134}>
        <View style={styles.View_47_135}>
          <Text style={styles.Text_47_135}>4G</Text>
        </View>
        <View style={styles.View_47_136}>
          <View style={styles.View_47_137} />
          <View style={styles.View_47_138} />
          <View style={styles.View_47_139} />
          <View style={styles.View_47_140} />
        </View>
        <View style={styles.View_47_141}>
          <View style={styles.View_47_142} />
          <View style={styles.View_47_143} />
          <View style={styles.View_47_144} />
        </View>
        <View style={styles.View_47_145}>
          <Text style={styles.Text_47_145}>08:34</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("127%") },
  TouchableOpacity_3_105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I3_105_3_78: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_105_3_118: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("57%")
  },
  TouchableOpacity_3_152: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_153: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3_154: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_155: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_3_155: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_156: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%")
  },
  View_14_218: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I14_218_14_134: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I14_218_14_135: {
    flexGrow: 1,
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_I14_218_14_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_218_14_136: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("31%")
  },
  View_I14_218_14_137: {
    width: wp("33%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(241, 245, 249, 1)"
  },
  View_I14_218_14_138: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  ImageBackground_I14_218_14_139: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I14_218_14_144: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I14_218_14_144: {
    color: "rgba(71, 85, 105, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_218_14_145: {
    width: wp("33%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    backgroundColor: "rgba(241, 245, 249, 1)"
  },
  View_I14_218_14_146: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  ImageBackground_I14_218_14_147: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I14_218_14_150: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I14_218_14_150: {
    color: "rgba(71, 85, 105, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_218_14_151: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_I14_218_14_151: {
    color: "rgba(100, 116, 139, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_218_14_152: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%")
  },
  View_I14_218_14_153: {
    width: wp("84%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(117, 117, 117, 1)",
    borderWidth: 0.5
  },
  View_I14_218_14_154: {
    width: wp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I14_218_14_154: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I14_218_14_155: {
    width: wp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_I14_218_14_155: {
    color: "rgba(147, 7, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I14_218_14_156: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_I14_218_14_157: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("9%")
  },
  View_I14_218_14_158: {
    width: wp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I14_218_14_158: {
    color: "rgba(223, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I14_218_14_159: {
    width: wp("63%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I14_218_14_159: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I14_218_14_160: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_47_134: {
    width: wp("84%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_47_135: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_47_135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_136: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_47_137: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_138: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_139: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_140: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_141: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_47_142: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.9492018222808838
  },
  View_47_143: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(253, 208, 21, 1)"
  },
  View_47_144: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_47_145: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.544198989868164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
