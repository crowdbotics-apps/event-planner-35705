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
      <View style={styles.View_59_416}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c33ac884-32d4-4964-925e-2eac902fb01a"
          }}
          style={styles.ImageBackground_59_417}
        />
        <View style={styles.View_59_418}>
          <View style={styles.View_59_419} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c96eb5d8-3c1b-476d-a69a-fe34577ae8d3"
            }}
            style={styles.ImageBackground_59_420}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e275435-3c59-45d1-b7c5-9be9c50c0f07"
            }}
            style={styles.ImageBackground_59_422}
          />
          <View style={styles.View_59_424}>
            <Text style={styles.Text_59_424}>
              Decorater, Cake, Catering, Planner..
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45a187a0-8a69-4d84-a865-d66abe83a3fc"
          }}
          style={styles.ImageBackground_59_425}
        />
        <View style={styles.View_59_430}>
          <Text style={styles.Text_59_430}>Event Planner</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_59_431}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("42_262"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18d515f4-dfb3-4a3b-a22e-7706ccc9fcfe"
            }}
            style={styles.ImageBackground_59_432}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e40b7a81-2828-4612-8ede-580d10abf372"
            }}
            style={styles.ImageBackground_59_433}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_65_705}>
        <View style={styles.View_I65_705_31_630} />
        <View style={styles.View_I65_705_31_631}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_705_31_632}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_304"))
            }
          >
            <View style={styles.View_I65_705_36_107}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c70a8bff-72e9-4219-a109-6ea1a80d2dce"
                }}
                style={styles.ImageBackground_I65_705_36_108}
              />
            </View>
            <View style={styles.View_I65_705_31_635}>
              <Text style={styles.Text_I65_705_31_635}>Need Help?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_705_31_636}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_371"))
            }
          >
            <View style={styles.View_I65_705_31_637}>
              <Text style={styles.Text_I65_705_31_637}>Saved</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b03b0978-c2c5-417f-9d67-9dae5bd61107"
              }}
              style={styles.ImageBackground_I65_705_31_638}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_705_35_835}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_393"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e908fbc-2aee-45f1-984d-540d5e04b8ad"
              }}
              style={styles.ImageBackground_I65_705_35_744}
            />
            <View style={styles.View_I65_705_35_745}>
              <Text style={styles.Text_I65_705_35_745}>Invite &amp; Earn</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I65_705_31_644}>
            <View style={styles.View_I65_705_35_1029}>
              <View style={styles.View_I65_705_31_645}>
                <Text style={styles.Text_I65_705_31_645}>Create event</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5978e6f3-f019-4121-b088-d86779f8a0c4"
                }}
                style={styles.ImageBackground_I65_705_31_687}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_705_31_648}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("14_247"))
            }
          >
            <View style={styles.View_I65_705_31_649}>
              <Text style={styles.Text_I65_705_31_649}>Home</Text>
            </View>
            <View style={styles.View_I65_705_31_651}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15fb3a30-16cf-48e8-a5cf-30e6ae9b8e66"
                }}
                style={styles.ImageBackground_I65_705_31_651_246_2252}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e1dfec1-2735-4a13-ae14-1778cf868f9e"
          }}
          style={styles.ImageBackground_I65_705_31_680}
        />
      </View>
      <View style={styles.View_65_568} />
      <View style={styles.View_65_569}>
        <View style={styles.View_65_570}>
          <Text style={styles.Text_65_570}>4G</Text>
        </View>
        <View style={styles.View_65_571}>
          <View style={styles.View_65_572} />
          <View style={styles.View_65_573} />
          <View style={styles.View_65_574} />
          <View style={styles.View_65_575} />
        </View>
        <View style={styles.View_65_576}>
          <View style={styles.View_65_577} />
          <View style={styles.View_65_578} />
          <View style={styles.View_65_579} />
        </View>
        <View style={styles.View_65_580}>
          <Text style={styles.Text_65_580}>08:34</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_59_416: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_59_417: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_418: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  View_59_419: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_420: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_59_422: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_59_424: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_59_424: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_425: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_59_430: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_59_430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_431: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_59_432: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_59_433: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_65_705: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I65_705_31_630: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I65_705_31_631: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  TouchableOpacity_I65_705_31_632: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I65_705_36_107: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I65_705_36_108: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I65_705_31_635: {
    width: wp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_705_31_635: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I65_705_31_636: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_I65_705_31_637: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_705_31_637: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I65_705_31_638: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I65_705_35_835: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%")
  },
  ImageBackground_I65_705_35_744: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I65_705_35_745: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_705_35_745: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I65_705_31_644: {
    width: wp("16%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I65_705_35_1029: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I65_705_31_645: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_705_31_645: {
    color: "rgba(223, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I65_705_31_687: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_I65_705_31_648: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I65_705_31_649: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_705_31_649: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I65_705_31_651: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I65_705_31_651_246_2252: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I65_705_31_680: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_65_568: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_65_569: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_65_570: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_65_570: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_571: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_65_572: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_573: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_574: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_575: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_576: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_65_577: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.9492018222808838
  },
  View_65_578: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(253, 208, 21, 1)"
  },
  View_65_579: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_580: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_65_580: {
    color: "rgba(0, 0, 0, 1)",
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
