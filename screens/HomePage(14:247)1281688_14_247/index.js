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
      <View style={styles.View_39_479}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cc6b10f-ce04-417c-8182-918b7d1a377a"
          }}
          style={styles.ImageBackground_36_227}
        />
        <View style={styles.View_39_230}>
          <View style={styles.View_39_231} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19ed5492-75ac-409f-b829-89038bf25295"
            }}
            style={styles.ImageBackground_39_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a69beee-72a0-4e26-b073-29cdb4e5e430"
            }}
            style={styles.ImageBackground_39_234}
          />
          <View style={styles.View_39_236}>
            <Text style={styles.Text_39_236}>
              Decorater, Cake, Catering, Planner..
            </Text>
          </View>
        </View>
        <View style={styles.View_40_139}>
          <View style={styles.View_40_140}>
            <View style={styles.View_40_141} />
            <View style={styles.View_40_142}>
              <Text style={styles.Text_40_142}>Musician</Text>
            </View>
            <View style={styles.View_40_143}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/674d4372-1af5-4bf8-b5c1-4acba880282f"
                }}
                style={styles.ImageBackground_40_144}
              />
            </View>
          </View>
          <View style={styles.View_40_148}>
            <View style={styles.View_40_149} />
            <View style={styles.View_40_150}>
              <Text style={styles.Text_40_150}>Marriage Garden</Text>
            </View>
            <View style={styles.View_40_151}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0a4eb75-ff9c-459a-8dba-494742b85c97"
                }}
                style={styles.ImageBackground_40_152}
              />
            </View>
          </View>
          <View style={styles.View_40_158}>
            <View style={styles.View_40_159} />
            <View style={styles.View_40_160}>
              <Text style={styles.Text_40_160}>Decorators</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b45a679-26a3-4d72-ac72-634546076df7"
              }}
              style={styles.ImageBackground_40_161}
            />
          </View>
          <View style={styles.View_40_163}>
            <View style={styles.View_40_164} />
            <View style={styles.View_40_165}>
              <Text style={styles.Text_40_165}>Gifts</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/474551e4-dd31-43e8-811e-48d09fb49884"
              }}
              style={styles.ImageBackground_40_166}
            />
          </View>
          <View style={styles.View_40_168}>
            <View style={styles.View_40_169} />
            <View style={styles.View_40_170}>
              <Text style={styles.Text_40_170}>Flower</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/945a3f0e-5380-4ba9-b315-0f35f15a047f"
              }}
              style={styles.ImageBackground_40_171}
            />
          </View>
          <View style={styles.View_40_174}>
            <View style={styles.View_40_175} />
            <View style={styles.View_40_176}>
              <Text style={styles.Text_40_176}>Order Cake</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/607e5701-48e3-419b-b9e7-66e3d882a518"
              }}
              style={styles.ImageBackground_40_177}
            />
          </View>
          <View style={styles.View_40_179}>
            <View style={styles.View_40_180} />
            <View style={styles.View_40_181}>
              <Text style={styles.Text_40_181}>Catering</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1009d003-3077-437d-8788-91aa27d2672b"
              }}
              style={styles.ImageBackground_40_182}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d5fe67-8418-4f48-9239-b673f014551e"
          }}
          style={styles.ImageBackground_39_241}
        />
        <View style={styles.View_39_239}>
          <Text style={styles.Text_39_239}>Event Planner</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_39_246}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("42_262"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b5d0395-386e-4ca2-9fa5-2acddef23f4d"
            }}
            style={styles.ImageBackground_39_247}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16af6538-e1a8-41b0-a6cc-669f4af38400"
            }}
            style={styles.ImageBackground_39_251}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_35_715}>
        <View style={styles.View_I35_715_31_630} />
        <View style={styles.View_I35_715_31_631}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I35_715_31_632}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_304"))
            }
          >
            <View style={styles.View_I35_715_36_107}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f718bd0c-fde2-4209-9cdd-156381204487"
                }}
                style={styles.ImageBackground_I35_715_36_108}
              />
            </View>
            <View style={styles.View_I35_715_31_635}>
              <Text style={styles.Text_I35_715_31_635}>Need Help?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I35_715_31_636}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_371"))
            }
          >
            <View style={styles.View_I35_715_31_637}>
              <Text style={styles.Text_I35_715_31_637}>Saved</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4ab5e73-b1eb-4ed4-9e62-98f5a50997db"
              }}
              style={styles.ImageBackground_I35_715_31_638}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I35_715_35_835}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_393"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c72646a-0de4-4e61-baf8-5053b6c2fbb3"
              }}
              style={styles.ImageBackground_I35_715_35_744}
            />
            <View style={styles.View_I35_715_35_745}>
              <Text style={styles.Text_I35_715_35_745}>Invite &amp; Earn</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I35_715_31_644}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("59_415"))
            }
          >
            <View style={styles.View_I35_715_35_1029}>
              <View style={styles.View_I35_715_31_645}>
                <Text style={styles.Text_I35_715_31_645}>Create event</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a07a438-1f99-4c2f-a2bb-0f08a3fbdf4c"
                }}
                style={styles.ImageBackground_I35_715_31_687}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_I35_715_31_648}>
            <View style={styles.View_I35_715_31_649}>
              <Text style={styles.Text_I35_715_31_649}>Home</Text>
            </View>
            <View style={styles.View_I35_715_31_650}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91dea24a-36bf-46dd-a2bf-bc02b17e6a58"
                }}
                style={styles.ImageBackground_I35_715_31_650_246_2246}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36af3829-42b4-4777-9c15-b16234259158"
          }}
          style={styles.ImageBackground_I35_715_31_680}
        />
      </View>
      <View style={styles.View_20_47} />
      <View style={styles.View_47_169}>
        <View style={styles.View_47_170}>
          <Text style={styles.Text_47_170}>4G</Text>
        </View>
        <View style={styles.View_47_171}>
          <View style={styles.View_47_172} />
          <View style={styles.View_47_173} />
          <View style={styles.View_47_174} />
          <View style={styles.View_47_175} />
        </View>
        <View style={styles.View_47_176}>
          <View style={styles.View_47_177} />
          <View style={styles.View_47_178} />
          <View style={styles.View_47_179} />
        </View>
        <View style={styles.View_47_180}>
          <Text style={styles.Text_47_180}>08:34</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 248, 248, 1)" },
  View_2: { height: hp("308%") },
  View_39_479: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_36_227: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_39_230: {
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
  View_39_231: {
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
  ImageBackground_39_232: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_39_234: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_39_236: {
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
  Text_39_236: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_139: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_140: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("169%"),
    top: hp("0%")
  },
  View_40_141: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_142: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_40_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_143: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_40_144: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_40_148: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("136%"),
    top: hp("0%")
  },
  View_40_149: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_150: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_40_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_151: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_40_152: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_40_158: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("107%"),
    top: hp("0%")
  },
  View_40_159: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_160: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_40_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_161: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_40_163: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%")
  },
  View_40_164: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_165: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_40_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_166: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_40_168: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%")
  },
  View_40_169: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_170: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_40_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_171: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_40_174: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_40_175: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_176: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_40_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_177: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_40_179: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_40_180: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_40_181: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_40_181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_182: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_39_241: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_39_239: {
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
  Text_39_239: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_39_246: {
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
  ImageBackground_39_247: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_39_251: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_35_715: {
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
  View_I35_715_31_630: {
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
  View_I35_715_31_631: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  TouchableOpacity_I35_715_31_632: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I35_715_36_107: {
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
  ImageBackground_I35_715_36_108: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I35_715_31_635: {
    width: wp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I35_715_31_635: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I35_715_31_636: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_I35_715_31_637: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I35_715_31_637: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I35_715_31_638: {
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
  TouchableOpacity_I35_715_35_835: {
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
  ImageBackground_I35_715_35_744: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I35_715_35_745: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I35_715_35_745: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I35_715_31_644: {
    width: wp("16%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I35_715_35_1029: {
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
  View_I35_715_31_645: {
    width: wp("16%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I35_715_31_645: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I35_715_31_687: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I35_715_31_648: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I35_715_31_649: {
    width: wp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I35_715_31_649: {
    color: "rgba(219, 48, 34, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I35_715_31_650: {
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
  ImageBackground_I35_715_31_650_246_2246: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I35_715_31_680: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_20_47: {
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
  View_47_169: {
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
  View_47_170: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_47_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.238027572631836,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_171: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_47_172: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_47_173: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_47_174: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_47_175: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_47_176: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_47_177: {
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
  View_47_178: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(253, 208, 21, 1)"
  },
  View_47_179: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_47_180: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_47_180: {
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
