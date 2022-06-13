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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7085c0f-b547-4cb0-9101-88474df649ed"
        }}
        style={styles.ImageBackground_71_220}
      />
      <View style={styles.View_71_246}>
        <Text style={styles.Text_71_246}>
          Rewarded Amount credit to your EventP Wallet
        </Text>
      </View>
      <View style={styles.View_71_251}>
        <Text style={styles.Text_71_251}>Currently 0 Accounts Refferal !!</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ae612cd-7e9b-4f0e-8b41-9dba7403be87"
        }}
        style={styles.ImageBackground_71_247}
      />
      <View style={styles.View_71_224}>
        <Text style={styles.Text_71_224}>
          Invite your friends &amp; earn upto 200₹ per referral
        </Text>
      </View>
      <View style={styles.View_71_225}>
        <Text style={styles.Text_71_225}>
          Share this code with your friends
        </Text>
      </View>
      <View style={styles.View_71_257}>
        <View style={styles.View_71_222} />
        <View style={styles.View_71_223}>
          <Text style={styles.Text_71_223}>250757</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec20e751-549d-48e9-9e17-dbefaa698580"
          }}
          style={styles.ImageBackground_71_235}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/025e739b-30eb-4227-848a-a6c8895c6e30"
        }}
        style={styles.ImageBackground_71_221}
      />
      <View style={styles.View_59_394}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b18e7035-1248-4fe3-b15c-aeb5b209c2fb"
          }}
          style={styles.ImageBackground_59_395}
        />
        <View style={styles.View_59_396}>
          <View style={styles.View_59_397} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/435cbda6-5292-4ee0-b338-02c39133b16f"
            }}
            style={styles.ImageBackground_59_398}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d38425d5-b204-430e-af50-2ca6754fc201"
            }}
            style={styles.ImageBackground_59_400}
          />
          <View style={styles.View_59_402}>
            <Text style={styles.Text_59_402}>
              Decorater, Cake, Catering, Planner..
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a48f5d39-8956-4be6-9eec-db1f3ed6bd24"
          }}
          style={styles.ImageBackground_59_403}
        />
        <View style={styles.View_59_408}>
          <Text style={styles.Text_59_408}>Event Planner</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_59_409}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("42_262"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4660449-46fc-4a25-a296-78e1124e86f4"
            }}
            style={styles.ImageBackground_59_410}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d2d932e-bf5f-408d-880b-7b91f3ec84bc"
            }}
            style={styles.ImageBackground_59_411}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_65_674}>
        <View style={styles.View_I65_674_31_630} />
        <View style={styles.View_I65_674_31_631}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_674_31_632}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_304"))
            }
          >
            <View style={styles.View_I65_674_36_107}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/039b311f-381c-43fb-9db0-611b0d2a7ace"
                }}
                style={styles.ImageBackground_I65_674_36_108}
              />
            </View>
            <View style={styles.View_I65_674_31_635}>
              <Text style={styles.Text_I65_674_31_635}>Need Help?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_674_31_636}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_371"))
            }
          >
            <View style={styles.View_I65_674_31_637}>
              <Text style={styles.Text_I65_674_31_637}>Saved</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b8de923-f309-46a4-8925-aac239dbcc6d"
              }}
              style={styles.ImageBackground_I65_674_31_638}
            />
          </TouchableOpacity>
          <View style={styles.View_I65_674_35_835}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24fab4d9-926c-4c7c-b64b-d99ab31db36c"
              }}
              style={styles.ImageBackground_I65_674_35_744}
            />
            <View style={styles.View_I65_674_35_745}>
              <Text style={styles.Text_I65_674_35_745}>Invite &amp; Earn</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_674_31_644}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_415"))
            }
          >
            <View style={styles.View_I65_674_35_1029}>
              <View style={styles.View_I65_674_31_645}>
                <Text style={styles.Text_I65_674_31_645}>Create event</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95f00011-18ba-48a2-99e6-a82d08beda48"
                }}
                style={styles.ImageBackground_I65_674_31_687}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_674_31_648}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("14_247"))
            }
          >
            <View style={styles.View_I65_674_31_649}>
              <Text style={styles.Text_I65_674_31_649}>Home</Text>
            </View>
            <View style={styles.View_I65_674_31_651}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95b5661f-bb89-4bd0-b458-e908ef500007"
                }}
                style={styles.ImageBackground_I65_674_31_651_246_2252}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a5429cb-13b0-4dbd-b264-a1dc85b54fa9"
          }}
          style={styles.ImageBackground_I65_674_31_680}
        />
      </View>
      <View style={styles.View_65_555} />
      <View style={styles.View_65_556}>
        <View style={styles.View_65_557}>
          <Text style={styles.Text_65_557}>4G</Text>
        </View>
        <View style={styles.View_65_558}>
          <View style={styles.View_65_559} />
          <View style={styles.View_65_560} />
          <View style={styles.View_65_561} />
          <View style={styles.View_65_562} />
        </View>
        <View style={styles.View_65_563}>
          <View style={styles.View_65_564} />
          <View style={styles.View_65_565} />
          <View style={styles.View_65_566} />
        </View>
        <View style={styles.View_65_567}>
          <Text style={styles.Text_65_567}>08:34</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_71_220: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82%")
  },
  View_71_246: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_71_246: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_251: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_71_251: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_71_247: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_71_224: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_71_224: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_225: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_71_225: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_257: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("69%")
  },
  View_71_222: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(117, 117, 117, 1)",
    borderWidth: 2
  },
  View_71_223: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_71_223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 13,
    textTransform: "none"
  },
  ImageBackground_71_235: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_71_221: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("34%"),
    resizeMode: "cover"
  },
  View_59_394: {
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
  ImageBackground_59_395: {
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
  View_59_396: {
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
  View_59_397: {
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
  ImageBackground_59_398: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_59_400: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_59_402: {
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
  Text_59_402: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_403: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_59_408: {
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
  Text_59_408: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_409: {
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
  ImageBackground_59_410: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_59_411: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_65_674: {
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
  View_I65_674_31_630: {
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
  View_I65_674_31_631: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  TouchableOpacity_I65_674_31_632: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I65_674_36_107: {
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
  ImageBackground_I65_674_36_108: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I65_674_31_635: {
    width: wp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_674_31_635: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I65_674_31_636: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_I65_674_31_637: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_674_31_637: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I65_674_31_638: {
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
  View_I65_674_35_835: {
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
  ImageBackground_I65_674_35_744: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I65_674_35_745: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_674_35_745: {
    color: "rgba(223, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I65_674_31_644: {
    width: wp("16%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I65_674_35_1029: {
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
  View_I65_674_31_645: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_674_31_645: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I65_674_31_687: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_I65_674_31_648: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I65_674_31_649: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_674_31_649: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I65_674_31_651: {
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
  ImageBackground_I65_674_31_651_246_2252: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I65_674_31_680: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_65_555: {
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
  View_65_556: {
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
  View_65_557: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_65_557: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_558: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_65_559: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_560: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_561: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_562: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_563: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_65_564: {
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
  View_65_565: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(253, 208, 21, 1)"
  },
  View_65_566: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_567: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_65_567: {
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
