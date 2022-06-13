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
      <View style={styles.View_45_539} />
      <View style={styles.View_47_133}>
        <Text style={styles.Text_47_133}>
          You Already agreed our Terms of Use, Privacy Policy &amp; Content
          Policy
        </Text>
      </View>
      <View style={styles.View_47_93}>
        <View style={styles.View_47_94}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4df6506c-14f5-4fab-8dd7-e0939edace50"
            }}
            style={styles.ImageBackground_47_95}
          />
          <View style={styles.View_47_96}>
            <Text style={styles.Text_47_96}>Language</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_71_253}>
        <View style={styles.View_45_731}>
          <View style={styles.View_45_732}>
            <View style={styles.View_45_733}>
              <Text style={styles.Text_45_733}>List your Service </Text>
            </View>
            <View style={styles.View_45_734}>
              <Text style={styles.Text_45_734}>
                List your Service : Music, Catering, Learn More.
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fe58cfa-4643-4dc8-b6ee-ee7c2a08f4c5"
            }}
            style={styles.ImageBackground_45_738}
          />
        </View>
        <View style={styles.View_45_716}>
          <View style={styles.View_45_717}>
            <View style={styles.View_45_718}>
              <Text style={styles.Text_45_718}>List your Property</Text>
            </View>
            <View style={styles.View_45_719}>
              <Text style={styles.Text_45_719}>
                List your property : Garden, Launge, Hotel, Learn More.{" "}
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e656533-5d90-4ae0-a457-b14334a9c8e8"
            }}
            style={styles.ImageBackground_47_87}
          />
        </View>
        <View style={styles.View_45_709}>
          <View style={styles.View_45_710}>
            <View style={styles.View_45_711}>
              <Text style={styles.Text_45_711}>Ragister Vendor</Text>
            </View>
            <View style={styles.View_45_712}>
              <Text style={styles.Text_45_712}>
                Ragister your business as a vendor : Cake Shop Learn More.
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff1680dc-d0f1-4de1-b388-55319964009c"
            }}
            style={styles.ImageBackground_47_91}
          />
        </View>
        <View style={styles.View_45_697}>
          <Text style={styles.Text_45_697}>Need a Business Solution?</Text>
        </View>
        <View style={styles.View_45_698}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94f08847-8437-4e08-a93e-465a00f4c99f"
            }}
            style={styles.ImageBackground_45_699}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/751634db-4cf4-47da-8562-3a774db0d4a5"
            }}
            style={styles.ImageBackground_45_700}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_45_666}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_3"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95532848-b420-41b2-96f8-153ff37bc487"
          }}
          style={styles.ImageBackground_45_696}
        />
        <View style={styles.View_45_667}>
          <Text style={styles.Text_45_667}>Log Out</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/147cc269-2908-480c-acaf-6d2a664ba0da"
          }}
          style={styles.ImageBackground_45_682}
        />
      </TouchableOpacity>
      <View style={styles.View_71_252}>
        <View style={styles.View_45_586}>
          <View style={styles.View_45_587}>
            <View style={styles.View_45_588}>
              <Text style={styles.Text_45_588}>Settings</Text>
            </View>
            <View style={styles.View_45_589}>
              <Text style={styles.Text_45_589}>Notifications, password</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9e2c286-02b4-4825-be20-7f94b743c0b6"
            }}
            style={styles.ImageBackground_45_590}
          />
        </View>
        <View style={styles.View_45_593}>
          <View style={styles.View_45_594}>
            <View style={styles.View_45_595}>
              <Text style={styles.Text_45_595}>My reviews</Text>
            </View>
            <View style={styles.View_45_596}>
              <Text style={styles.Text_45_596}>Reviews for 4 items</Text>
            </View>
          </View>
          <View style={styles.View_45_597} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2501ec39-ca21-4e9d-ba9a-8e51f56ddf37"
            }}
            style={styles.ImageBackground_45_598}
          />
        </View>
        <View style={styles.View_45_578}>
          <View style={styles.View_45_579}>
            <View style={styles.View_45_580}>
              <Text style={styles.Text_45_580}>Wallet - Refer &amp; Earn</Text>
            </View>
            <View style={styles.View_45_581}>
              <Text style={styles.Text_45_581}>
                Refer 2Accounts - Balance 200₹
              </Text>
            </View>
          </View>
          <View style={styles.View_45_582} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62105d79-ce96-475d-acb0-742bde418e21"
            }}
            style={styles.ImageBackground_45_583}
          />
        </View>
        <View style={styles.View_45_601}>
          <View style={styles.View_45_602} />
          <View style={styles.View_45_603}>
            <View style={styles.View_45_604}>
              <Text style={styles.Text_45_604}>Payment methods</Text>
            </View>
            <View style={styles.View_45_605}>
              <Text style={styles.Text_45_605}>Visa **34</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ec11f4b-a623-4170-a6ac-820ba41b3e83"
            }}
            style={styles.ImageBackground_45_606}
          />
        </View>
        <View style={styles.View_45_570}>
          <View style={styles.View_45_571}>
            <View style={styles.View_45_572}>
              <Text style={styles.Text_45_572}>Shipping addresses</Text>
            </View>
            <View style={styles.View_45_573}>
              <Text style={styles.Text_45_573}>3 addresses</Text>
            </View>
          </View>
          <View style={styles.View_45_574} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dce9ca9-5b0a-4ec3-9d14-c8d2f213f88d"
            }}
            style={styles.ImageBackground_45_575}
          />
        </View>
        <View style={styles.View_45_609}>
          <View style={styles.View_45_610} />
          <View style={styles.View_45_611}>
            <View style={styles.View_45_612}>
              <Text style={styles.Text_45_612}>My orders &amp; Events</Text>
            </View>
            <View style={styles.View_45_613}>
              <Text style={styles.Text_45_613}>Already have 12 orders</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b2f0a5a-de1c-4ae0-bb33-f0d7e4e2a424"
            }}
            style={styles.ImageBackground_45_614}
          />
        </View>
      </View>
      <View style={styles.View_42_344}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef6b75da-f458-4c9f-825d-7757781ce254"
          }}
          style={styles.ImageBackground_42_341}
        />
        <View style={styles.View_42_342}>
          <View style={styles.View_42_336}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6212848c-b897-4e58-9469-14a4ba1bd8fa"
              }}
              style={styles.ImageBackground_42_337}
            />
          </View>
          <View style={styles.View_42_340}>
            <Text style={styles.Text_42_340}>Edit your Profile</Text>
          </View>
        </View>
        <View style={styles.View_42_343}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21837d7b-bbf6-4f51-a432-beb9c84b8879"
            }}
            style={styles.ImageBackground_42_332}
          />
          <View style={styles.View_42_333}>
            <Text style={styles.Text_42_333}>Hi Krish, How are you!</Text>
          </View>
          <View style={styles.View_42_334}>
            <Text style={styles.Text_42_334}>+91-8349780870</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("109%") },
  View_45_539: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("147%"),
    minHeight: hp("147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_47_133: {
    width: wp("57%"),
    top: hp("138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    justifyContent: "center"
  },
  Text_47_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_93: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("127%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_94: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_47_95: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_96: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_253: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("88%")
  },
  View_45_731: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_732: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_45_733: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_733: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_734: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_734: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_738: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_45_716: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_717: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_45_718: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_718: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_719: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_719: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_87: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_45_709: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_710: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_45_711: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_711: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_712: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_712: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_47_91: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_45_697: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_45_697: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_698: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_45_699: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_45_700: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_45_666: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_696: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_45_667: {
    width: wp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_45_667: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_682: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_252: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("17%")
  },
  View_45_586: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_587: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_45_588: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_588: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_589: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_589: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_590: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%")
  },
  View_45_593: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_594: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_45_595: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_595: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_596: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_596: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_597: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(155, 155, 155, 1)"
  },
  ImageBackground_45_598: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%")
  },
  View_45_578: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_579: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_45_580: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_580: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_581: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_581: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_582: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(155, 155, 155, 1)"
  },
  ImageBackground_45_583: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%")
  },
  View_45_601: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_602: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(155, 155, 155, 1)"
  },
  View_45_603: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_45_604: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_604: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_605: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_605: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_606: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%")
  },
  View_45_570: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_571: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_45_572: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_572: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_573: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_573: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_574: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(155, 155, 155, 1)"
  },
  ImageBackground_45_575: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%")
  },
  View_45_609: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_45_610: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(155, 155, 155, 1)"
  },
  View_45_611: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_45_612: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_612: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_613: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_45_613: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_614: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%")
  },
  View_42_344: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_42_341: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_42_342: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  View_42_336: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_42_337: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_42_340: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_42_340: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_343: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_42_332: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_42_333: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_42_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_334: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_42_334: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
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
