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
      <View style={styles.View_65_744} />
      <View style={styles.View_71_182}>
        <Text style={styles.Text_71_182}>
          One Qucikk Solutions Digital Services Ltd. © 2022
        </Text>
      </View>
      <View style={styles.View_71_181}>
        <Text style={styles.Text_71_181}>
          You Already agreed our Terms of Use, Privacy Policy &amp; Content
          Policy
        </Text>
      </View>
      <View style={styles.View_71_256}>
        <View style={styles.View_71_167}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6916f99-5626-4455-b2f0-d3da38e7604e"
            }}
            style={styles.ImageBackground_71_168}
          />
          <View style={styles.View_71_169}>
            <View style={styles.View_71_170}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2058639-4fd7-41b7-a4fb-06f3b9c646c3"
                }}
                style={styles.ImageBackground_71_171}
              />
            </View>
          </View>
          <View style={styles.View_71_174}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/192034f0-6dda-4e8c-ac97-d34a22db1bbc"
              }}
              style={styles.ImageBackground_71_175}
            />
          </View>
          <View style={styles.View_71_177}>
            <View style={styles.View_71_178} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc75c254-d764-4435-adda-86839855abd9"
              }}
              style={styles.ImageBackground_71_179}
            />
          </View>
        </View>
        <View style={styles.View_65_836}>
          <Text style={styles.Text_65_836}>
            Mail Us : info@eventplanner.in Tele : +91-855-505-6080
          </Text>
        </View>
        <View style={styles.View_71_183}>
          <Text style={styles.Text_71_183}>Know More.</Text>
        </View>
        <View style={styles.View_71_180}>
          <Text style={styles.Text_71_180}>Follow Us</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5ff3de1-d4e2-4cf7-832d-9b74512ddddf"
        }}
        style={styles.ImageBackground_65_831}
      />
      <View style={styles.View_71_255}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a54b6a4-5b90-428c-b68a-434e90d33fbd"
          }}
          style={styles.ImageBackground_65_830}
        />
        <View style={styles.View_65_827}>
          <Text style={styles.Text_65_827}>FAQ</Text>
        </View>
        <View style={styles.View_65_828}>
          <Text style={styles.Text_65_828}>Frequently Asked Questions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80a8c0be-ae4e-4193-8cea-d8b80f2a767a"
          }}
          style={styles.ImageBackground_65_825}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30a4928e-4e94-4c49-b03f-020a400d062f"
        }}
        style={styles.ImageBackground_65_829}
      />
      <View style={styles.View_71_254}>
        <View style={styles.View_65_792}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23789a27-ef05-471c-9f98-6a5905ddc12e"
            }}
            style={styles.ImageBackground_65_793}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_65_814}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("65_819"))
          }
        >
          <View style={styles.View_65_813} />
          <View style={styles.View_65_812}>
            <Text style={styles.Text_65_812}>Start Chat</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_65_811}>
          <Text style={styles.Text_65_811}>
            To direct chat with our customer care for instant solve your problem
          </Text>
        </View>
        <View style={styles.View_65_810}>
          <Text style={styles.Text_65_810}>Chat with us</Text>
        </View>
      </View>
      <View style={styles.View_65_809}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69d893bf-1341-4ccb-8557-37e80fa1ea81"
          }}
          style={styles.ImageBackground_65_736}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9030c942-a19a-4383-976b-765fbe3a0199"
          }}
          style={styles.ImageBackground_65_743}
        />
        <View style={styles.View_65_808}>
          <View style={styles.View_65_739}>
            <Text style={styles.Text_65_739}>Need Help?</Text>
          </View>
          <View style={styles.View_65_740}>
            <Text style={styles.Text_65_740}>How can we help today?</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_305}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7670d090-d915-47a9-8b6a-d2c5e513ee5d"
          }}
          style={styles.ImageBackground_59_306}
        />
        <View style={styles.View_59_307}>
          <View style={styles.View_59_308} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ce39412-4261-4d87-9d4a-fd6a84aaedf2"
            }}
            style={styles.ImageBackground_59_309}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12f45bb2-04da-46b2-80b3-401784facb5a"
            }}
            style={styles.ImageBackground_59_311}
          />
          <View style={styles.View_59_313}>
            <Text style={styles.Text_59_313}>
              Decorater, Cake, Catering, Planner..
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a7e9e2-b4d2-48f3-b02d-44b5f70e7ff5"
          }}
          style={styles.ImageBackground_59_359}
        />
        <View style={styles.View_59_364}>
          <Text style={styles.Text_59_364}>Event Planner</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_59_365}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("42_262"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5bc38a4-8682-417e-8f56-81f6226c11a1"
            }}
            style={styles.ImageBackground_59_366}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6574b67-f697-4412-a7c9-5471ca93807b"
            }}
            style={styles.ImageBackground_59_367}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_65_442}>
        <View style={styles.View_I65_442_31_630} />
        <View style={styles.View_I65_442_31_631}>
          <View style={styles.View_I65_442_31_632}>
            <View style={styles.View_I65_442_36_107}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4eb88fb8-9b4c-4b3b-aff8-3b2894be9095"
                }}
                style={styles.ImageBackground_I65_442_36_108}
              />
            </View>
            <View style={styles.View_I65_442_31_635}>
              <Text style={styles.Text_I65_442_31_635}>Need Help?</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_442_31_636}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_371"))
            }
          >
            <View style={styles.View_I65_442_31_637}>
              <Text style={styles.Text_I65_442_31_637}>Saved</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0200a78-27db-4619-a1b1-bbf338a2fa26"
              }}
              style={styles.ImageBackground_I65_442_31_638}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_442_35_835}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_393"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d502be6c-b165-4c89-bff6-138935115bed"
              }}
              style={styles.ImageBackground_I65_442_35_744}
            />
            <View style={styles.View_I65_442_35_745}>
              <Text style={styles.Text_I65_442_35_745}>Invite &amp; Earn</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_442_31_644}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_415"))
            }
          >
            <View style={styles.View_I65_442_35_1029}>
              <View style={styles.View_I65_442_31_645}>
                <Text style={styles.Text_I65_442_31_645}>Create event</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eab5e6f5-a882-4fbd-9ea3-c956673838af"
                }}
                style={styles.ImageBackground_I65_442_31_687}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I65_442_31_648}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("14_247"))
            }
          >
            <View style={styles.View_I65_442_31_649}>
              <Text style={styles.Text_I65_442_31_649}>Home</Text>
            </View>
            <View style={styles.View_I65_442_31_651}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbd035b7-0a76-49b2-b4b5-d6b2485f4913"
                }}
                style={styles.ImageBackground_I65_442_31_651_246_2252}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1778115c-5c34-483e-947f-c9b1dc655176"
          }}
          style={styles.ImageBackground_I65_442_31_680}
        />
      </View>
      <View style={styles.View_65_516} />
      <View style={styles.View_65_796}>
        <View style={styles.View_65_797}>
          <Text style={styles.Text_65_797}>4G</Text>
        </View>
        <View style={styles.View_65_798}>
          <View style={styles.View_65_799} />
          <View style={styles.View_65_800} />
          <View style={styles.View_65_801} />
          <View style={styles.View_65_802} />
        </View>
        <View style={styles.View_65_803}>
          <View style={styles.View_65_804} />
          <View style={styles.View_65_805} />
          <View style={styles.View_65_806} />
        </View>
        <View style={styles.View_65_807}>
          <Text style={styles.Text_65_807}>08:34</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 238, 238, 1)" },
  View_2: { height: hp("182%") },
  View_65_744: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_71_182: {
    width: wp("70%"),
    top: hp("177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "center"
  },
  Text_71_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_181: {
    width: wp("57%"),
    top: hp("169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    justifyContent: "center"
  },
  Text_71_181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_256: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("133%")
  },
  View_71_167: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  ImageBackground_71_168: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_71_169: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_71_170: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_71_171: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_71_174: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_71_175: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_71_177: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_71_178: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_71_179: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_65_836: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_65_836: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_183: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_71_183: {
    color: "rgba(0, 117, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_180: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_71_180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_65_831: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("129%")
  },
  View_71_255: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("117%")
  },
  ImageBackground_65_830: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("4%")
  },
  View_65_827: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_65_827: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_828: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_65_828: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_65_825: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_65_829: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113%")
  },
  View_71_254: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("96%")
  },
  View_65_792: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_65_793: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_65_814: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("2%")
  },
  View_65_813: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_65_812: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_65_812: {
    color: "rgba(42, 169, 82, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_811: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_65_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_810: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_65_810: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_809: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  ImageBackground_65_736: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_65_743: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("37%")
  },
  View_65_808: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("45%")
  },
  View_65_739: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_65_739: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_740: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_65_740: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_305: {
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
  ImageBackground_59_306: {
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
  View_59_307: {
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
  View_59_308: {
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
  ImageBackground_59_309: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_59_311: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_59_313: {
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
  Text_59_313: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_359: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_59_364: {
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
  Text_59_364: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_365: {
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
  ImageBackground_59_366: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_59_367: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_65_442: {
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
  View_I65_442_31_630: {
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
  View_I65_442_31_631: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I65_442_31_632: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I65_442_36_107: {
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
  ImageBackground_I65_442_36_108: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I65_442_31_635: {
    width: wp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_442_31_635: {
    color: "rgba(223, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I65_442_31_636: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_I65_442_31_637: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_442_31_637: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I65_442_31_638: {
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
  TouchableOpacity_I65_442_35_835: {
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
  ImageBackground_I65_442_35_744: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I65_442_35_745: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_442_35_745: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I65_442_31_644: {
    width: wp("16%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I65_442_35_1029: {
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
  View_I65_442_31_645: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_442_31_645: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I65_442_31_687: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_I65_442_31_648: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I65_442_31_649: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I65_442_31_649: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I65_442_31_651: {
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
  ImageBackground_I65_442_31_651_246_2252: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I65_442_31_680: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_65_516: {
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
  View_65_796: {
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
  View_65_797: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_65_797: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_798: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_65_799: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_800: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_801: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_802: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_803: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_65_804: {
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
  View_65_805: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(253, 208, 21, 1)"
  },
  View_65_806: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_65_807: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_65_807: {
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
