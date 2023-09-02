import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { StatusBar } from "expo-status-bar";
import logo from "../assets/logoCitadel.png";
import { AntDesign } from "@expo/vector-icons";
import VideoListLikes from "../components/VideoListLikes";
import Data from "../components/Data.json";
import Videos from "../components/Videos";

const VideoDetails = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [subcribed, setSubscribe] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={{flex:1,}}>
        <Video
          ref={video}
          style={styles.video}
          posterSource={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW65EIqf7PfCUFcXB1ZkALvdhnyv_H0NZ79g&usqp=CAU",
          }}
          posterStyle={{
            marginVertical: 70,
            marginLeft: 160,
            width: 50,
            height: 50,
            borderRadius: 50,
            resizeMode: "cover",
          }}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          usePoster={true}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
     
        <View style={{ marginTop: 10 }}>
          <FlatList
          ListHeaderComponent={()=>(
            <View>
            <View style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}>
            <View
              style={{
                flexDirection: "row",
                width: "98%",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "87%" }}>
                <Text
                  style={{ textAlign: "left", color: "grey", fontWeight: "900" }}
                >
                  Background Images tailwind | Tailwind css tutorial how far thank
                  you for watching my wonderful
                </Text>
              </View>
  
              <TouchableOpacity style={{ marginRight: 10 }}>
                <AntDesign name="down" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View
              style={{ marginHorizontal: 10, marginTop: 10, marginBottom: 10 }}
            >
              <Text style={{ fontSize: 10, color: "grey" }}>
                65k Views &#8226; 2 days ago
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <VideoListLikes />
            </View>
          </View>
          {/*profile*/}
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              justifyContent: "flex-start",
              alignItems: "center",
              borderBottomColor: "grey",
              borderBottomWidth: 0.5,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 50 }}
                source={{
                  uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA8EAABAwIEAggEBgEEAQUAAAABAAIDBBEFEiExQVEGEyJhcYGR8DKhscEUI0JS0eHxBxVDYsIkM3KCkv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAkEQACAgEEAgIDAQAAAAAAAAAAAQIRAxITITEEQTJRUmGBBf/aAAwDAQACEQMRAD8A9ZXV1dSA4iyZq6uCip3T1cscULPifI7QLKVH+o+BxVJgj/EShpt1kbBlPzQBsrLoCyVN/qF0enLWuqZY3Ef8sRt6i6sT0twRuW2IRHML3YCR8h9UUxWi+sm5eyLpigxKjxBhdRVMU7RvkOybrpHNa621lLdFJWQMWq2xNJzLE4zWiUnLzVviYfOXBztLLPvonF2UKLNlEp3i8lzzTrPhPaVhJQZP0qBUjqWvRY6Gp5XMjVZFNNNVtaNrqdBJ10GVdih6ira/miwo02FQyhgdyAV3TON9XaqooJHObZXFMy7bpWJosYpGtYotVKXnKzin4KZz1MZh19VRBDw2Atfc7rRU47CiU9LkNuSsI26BVEhnCEghP2XMqoVDORAanrIsgKGsqE7ZCAoRZcIynS1zzWWi6V0z/wDkb/8ApU/THpg5mGmkw54/EVIIzi35bOJ981KdlyVIzP8Aqf0mbieItw6lmJo6U3fl2keOPl/KwLn2cAH6jkUSPY58rsxcC7LcjQgf5OhTfWX1+mvp71Fwt0qRyt2yQ2XQ5hr+735+93I6iSMjq5XX37PvuUS+3HXb7e/BdDtBsfE7++f2QNF/h3SGuw6cSxyXPM6EedvqtlRdPX1UOSra17iPjFgR9l5hn1Gx8ePv5fMPRTZSpaTKUmuj0Ks6RZT29IzqHcHJFPjMczwcyyEFfZvVv1jO7L7pU1KJYTJh7nOO/Vk6+RWLx/R0Ry32bifEY3NVDikwlD7bLH/7tKySxc8FvAp442XszPdup0tF60y5w2TIw9xVtTRtnmY53NYyLEi25Y5W+F4sbtzu4pNMcZI9IpI4omAt3sp1PUuzhgVJg9cyrysbvZamkpGus48FDZbSotMMGitmhtgqiHLEnjiEbPictEzJoswxKsodNXRS2yuUvM1XaM9LO2XFwyNQ2RrtEWFHbIshF07CgQuoRYUfKsE075WRRPcXPOUC/NTsUqurAgYfhbkLr8u/xPzVfgz7zyTXt1MZcDycdB9/RJnkhjN5HZjYel/7WiRi5EWmzPdLYaB173529ed1IDNbHTnr32tfx+qjCpe5hvYX0FuBI/kLofnOulx6A/3dMSRIbls7MQRYnXbvH3Sv2tOttdePf4HVMscbCR2jiLk9+zglgBuljlbpccjt6fVJjoUDxcDY678uXeNl0W5i3E30t9guNvaxFnG97cHf373QHaXLQLa27rat+/mkNDzHO4Xv/nf138+akQzODgQ7UHX37/iICQbOJuDvyPA/b7pxjhpYho0seQ/o/I96LHRMrqGHFGlwd1dVbR2Wwf3HT5rLTRSwSmKZvVyNOrXLSRvsL3dzygePPwPp3pOJUX4+m6xg/PgbobXL28iB74JDRnmbqXDI6OzuSiOGR+oI7inmlJlI0/R7pA+mltJ8PBeg4b0tp+q1kaDZeMg5TdD53fucs3js0jkpHtNd0zgjizdY3TvWPxjp46QOEGYG+44rz6SdztMzkwXqo4yJZW+j0/oj05lFR1VU7c6L0hnSqD8OH5uC+a4ZnMeHNOWyuIcenEPVl+gFkpY+eBxyJLk9krunlNG5zesbp3pWC9O6aqcfzG6LwirrHzuu52iRTVssDrxOt3o2xbvPR9OQ9KKR/wDyt9U1V9KqSE5nS6bL5zbjFWyUS9e7MO9LrOkFZUtaHyWsb3G6W3L7K3Y/R9GxdJ6V8YcJG2shfPVN0orYogwPuBsUI25fYbkfoZw2Tq8Kqn/vlDfIC/3UOoe6R7+820994UkAx4bTxHcue752UEu4+fv0XQc46MrSSeFzptoQf5S8zjdosNxc9+oPy+SZD7a/t1+3vwStQLcQLeY29+KAJLJBe4FgTm179D6bpwOGxOjeyR/18lFaQDfhe/K4Pv5pxjvhDtR/7bx3c1LKRJF9ib/pueY1b3bLvWH4h8fxcfAqM55H6rlzdtPib7+QS7EntEMBcQOYNtrJDHc36Wmw+Fp2txafJOMLy2+WwIN/D9Q+ijNPZBiYQ4jRzt7jgD6DfmnR2rlztCQ8cLg7+mpQMltkYLi+ZwNgB+o6H0Nr+PenYpX2HUyEci3S41t8voojLC7SNRYX5cj808Hm/LlfTKL6jwuPqkAzj0L5YoakEvsereePd91VtDi0kbLR05ZK10MgHVyDKRqQOXofomhhoBIduN1Mp0VGGozuWS6DHItKzD47p38BEp3UXssyZgd+1J/DSX+Fa78DEutoo26o3h7BkxRyHXKnWUEjlqxBCnGsiGiN0FgXsygwmRONwaUrUgxDTKlddGNMqncY9mJmBgciP9jfdaV1XGNMqQa2P9qFOQbcChGBushXZxBiE9chbcCvx6mZDHEf0gOaPOyoHaaH2PZK0nSJ+eiaf2v/AJ/hZhxsSPfvUrbG3pMMqqbFDXfY/wB/eyWHAG/g4+Wh9+KbbHI4Hs2B0udNDb+iltyMs5zs5Fjl4d6sgdABJHAaOG9mnb+Uu1gesdpo1wAv4eHBNhxygEBsdsrgOIOxS2szZQ6+nYcHW05e+8JMpCg4EiNuhdcEkm5Pj72XWguGupIuL8XD39VxozW1F3WBPJw299xXblwJAOtn2HMb++9IodBHxRau+P8Ake+a7mDb8WtsR3td/j5JIB2bs3tg8COPd7CWABqCC1u1uLT/AB9lIxbLtcWk2v2L8v2nx4eaWHXu43F79x5O99yZcQBlc69+wXfQqbQ4fX11vw9OQDrmfoO/fw5KZSUVbKjCUnSORktI17V9SGi3HW58CfNWMtQ1+Vw+ItBK5VYC6jpnzVNQ5xa0ENa2w3A3Oqgl4IAGgGyz1xn0a7c8b5JH4hJdVqKQkEJUhOTJjarVDqpQ0J6UGpkh1UufikxZd6tFInVIeNSm3TptzE0W6qkkJykOmZNumSS1ILdU6RDbFGXVCQY1xPgXJa45Vxw0rYnwiQPObXnf36rPOqQDaJjGk/tbbl/C0WNhstA0fskH0KzhY0AeXv5K8fxFk+Qgue7V+2x8OKU0EbaAa258/fgjLmFhx7P1H2CU3M4h4bxDh56e/JWQKaQ3S2nwkcwfdkrMLanUjL4Hgfv6JDG6Dvu0/ZcL2taLcfkfYQFjwJdq46u3B/cPYHqnaYGSYMDrOd2g7iOf8+ir3z8W6HfwKvui9E95/EPZdrtBsco4+H9KJy0qzbDHVNI2PR7BMNfTMnngDTHxfcq3lqMMpYTkjaGt3JtawvdV2J1MNBhBzOGrbmyyuE0GIYlJ1+Iyvc02yRHj3kBeZUp226R7aWPG1FK2XOK4NLUxPxXAYIuvaLyw5QQ/vHJ31+uchqsaqHOLpxAx36QSdD3XXo2GU0NPSlkk7oXO0zMdlVJXdGq6mEQw6piq6MOP5cgYx7CeOa3a81tgyQvTM5PMxT+WNcETDaOOTEo6h3WF0sly3rXZdTqLXtbW1lpq3BcFnpzGyGCnJGZr4m5XfLU7FUmD1FFBOJcRl6uOFvWSXIAFtgSeZsO+6u24/hskInhjbY6NklGXNws3Pa/ku10ujzVqfZTt6HUkdHNU1GOUsLIibdaAy57ruHftyWPlIDtweRBuCtfjHSWkropsOnwuaSBxDZGR9XsDe4LTbTfxVHWRYZVimjwURxRiIktkc7PmvaxJvqLbLOS9mkW3wVV+aLqdVYZVUkYke0OjI+JlyG+PEKAQs07NHFrhiglZ9E2iyYqOlySV0BKQhMSEsMvqkX1S2uTsVHeqQl50JWPShdW+M0QZmzOe4OIHgf8AKppGMu4A3HPnt/PyUF00g061zrJBkkfry9/Yei6YpJUcztuyY7qm3BHAE94vqm31Ddb8iD9VEvzRZMKHZJnPuOaaJvqhCBoXDYu7zoPFbjCo34fHG90rmdUPhJ0HPiC2/cRdZDCQ017C7douO8+z8ltaRpmDI/1cVzZjs8VUNiCpxjE5K2rLRCX5o4mjs+m/rqtdhdO1keZwa0AJuho49GjYDVN431srPw1JMYhlylzdSL8lwTnqdLo9WMNK/ZT9L8UkgnijpG9e57rFm4t/eg9VLwzEKpkIJpjEHDtAuBDB3owfBGU5sWnOLAvebuPmVPq56Onc2MubmIsfBS3BKjWGr2/4ZWvxSE4bibqmJlQPxkbI2OJyuc1r9xfUa38vBZiWtLj1zZnuq5btfK6/5beTdND4bcE7jmemmq6J+/4p0o8C3s/VVfWOHaHVizdjbX2F62P4o+dzfNofE0xY6IyFsTAS9rSADb+dAuxtfJTSTAxMhj7Iz65jvlAtv3/NIuIsPJ4yzZfJov8A+Y9FJq44oGtbK5rgyMNa0Cxzcb+d/QKnKiFCywwHHsRwyITl4noWvEckbnZiy+x7hvbnYhSq58UlZK+ny9U512Zdrd3ms/hTgagwyS5I543MkJcGg6XbcnbtBpup+Gdujiz7i9vVYygu0bwyNqmTWtS8rWi6aYESFyzLB7tUglAY46pQYqJGSdUoFO9UuZEAIQnmt0XEDMyBfXki+YrjjoujsjNzXScpw6FcXVxAHR8JXBsi6EAydhGlS5/7B7+i0mDVboq3MdiLLM4Ye2/wH3VtDJ1ZuufMrR2eM6pm1p6x00wiYbOPyCuqWCMXGbO4bnmsJQVL2ydazkrvD8Xe14D27my4Zx9Hqxdqy0xieqhAZQ0jpZCL3JytHiVmWUOMTVPXVjoDZtg1v6fJbYvbLG05mi4uqrFcRoMMGaoe3OdWt4u8FnH8UjWLp2zzvpayRuJB8nxCJod87fT5KkbbKdj331HgtH0tnFXJBNlsZgbDlbb6n1WcB56L1cDe2jwvLS3pAXOfGI+DSXDxIA+ymmBtXUubAGFznudmLrAtIBt5e9lCUuB1M+mLHF0NQw9l41EgOhB10I18djrZavo506JeFxdXiAc3I8QNdK5xF2mw8dr/AFWlo8Eln6O0dRTQESB7g5lrZhofv8/BZ/D6Y1jWUNCyTrJDeomO2UEEWHLjY9y9OwiKenp20/WflNtlGTYWAtueAC5fIyaaXs7PFwOdv0YJrXMeWvBDgbEEWN117Fouk+HGCqFV+mXcciBv6fQqisoi7VjlHS6G2M0C71eqXktquZ0yeDhjSHRp9r2rkpbZMKRHAQuF+qExcGUCOKEFdRyAUBCBugAQhCAZLw743+A+6tGDsjxVZQC4eeRCtYO0wLnyHZ45PpxlbdT6WPOAW7g3USBrtFa0UJJBG3FcU2etjRPiqOpY0yy5GHidbLH4rWQV+OygFgip7tzX0kAJu62uvcNDZa3HJm02CyBrsryLMPf3aea8uku1xEm4Oq18bHqtnN5ed42mScRq2VdQ54YWxtGWPuHNQ7IHdslxi5y813pKKo8qUnOVsbspUMcRYCW5pHaNGay5+Gexwe5hczuXA8tqmujFgDcA7hS23wioJJ8mwwdjMEon4g51srLkHibaD10Wj6P9I/8AdJi02YANNRc/wvPsUqxVSUsOY2jjzPubjMe7wVzh2IUdG3IySPrOdwMp9D8lxTxalb7Z6sc8VJx9I0nS6pA/DU8swY6WTsa6E22vw33WayODyHgtc02IPAp3E6r8n/c53tmdC3LTxlvYa46X1+LhvYdxT8j21FJDV3a95hYZCP1Ei2vfca+IWkIaYJM4cs1ObI3WNsm3a6puRybEtkyBR7OqbfKnbtIum3NzEpkuxvrUJYiQnwKmZkuXCghBXSYHSdFwLi6PhPvmgAsgBHBDR2wmD6LXDImvswRyPDiCSJALfIq7hoBlY5hlbm17Tc49Rb6KpwuHOQ7O4NtZxB2V3UyUtJGw1Mhc8C7CLi6mUItBDLKLtFlS0zXAgPa88S03t5Kyhp3RMusRRS1E9TJWOeG32INstu/gr0Y8aeJolImAHbu8BzR99iuOfitvg9LF/oqqkiu6Y4larp6aM6xtLn8gToPp81mHtMriTq4do/JaWXo+yqLqt8lQ50n5hbZoI496VHgFISJBLUkN0I7H8LoxqMFRyZpzySv0ZJhs4X1HJPMEXWXc94OujW6jzTuL00NHXOjhc9zRY9qwt6KJuwE8DqtOzBcMthL+XkAJNt3OJUauicyIO0117LQEz1mUA/RcfLnZ2naJKNFOdjLBc3VjQBokDuSroy3OM2ysKcucbQQSyaa5G397qmif2aE5KrDnQB7S43tmdYC/FQOj9UWGfDaghnWWsT3Hby58r9wS4cOmmdGKl7KRj92l15Hny8RukYthDKQOkpGytfT5ZBM5+rvLgdLhTXoq/ZKraaSmeA65jd8Dufd4qMdCVPpaoYphznEhsoiDgGiwBYNfr6H/AKqCfiCyapmydoS57gFyMuJvyTkg0SGvaNOSQN0O50Jki5vzQihajOouhC6DAELi6gATkDXPlAb74JtTMOyteLkZi7QEE7X5DmmhPosqFklJJ1lOx0sxNy3rcgHlb7ruMUlRPD+MeJnTE9qI2dkHO4+yscPDM7y3K9xOY9U7tAf/ABOtlFxeobPJTsoHkiUHNkJuOdxz3umQmRIW0jqEODmvDSGuj7TXEojhpp5RFLStjHB0TiXN7zckHipWHUkNfTFpyiWJ1mTMaL//AG5qVT4dPBIJJgySFgzFxkAA8z9FDtGqUZDFZLiFAyKGWTrqe4dBUNGo81eU02bDoHTRtMnV9tzG/Fe5BKocPw+oFS2ndnNMGh0occoDNSSe7+VeVJlbF1rYpCHi5DACGDSw71PEivjwY2vLaiaYNc3OyR1rm2igBLqrmplLmlpLzcHcapsFaIzHGCN2hzX/AOrU9kiYCBDmc4dlznaeiY4KS0ROgvEWiRti4ZL+PC/L5oGiPA97Jg5nxWsLK3Mss2HtgfJK1+9yA0X4akj5KrYCatpzNc5534G+itYqOt1bGzqxJxaAD6jXfVJhdDzGxy08Dn5utYLCQXsLd5tb0KsI8ThqHujmt1rYyWyPBLTpqL2v6C3koDcNc5ofK4ueziHE+VlLpqdnUtIYXOYRa7TcW0+492SoNRWSOfgtVTOa1nUvc2R0W9i02cAeRB8wVLqYo46l8bXF8d7scdy0i4K50niMuH0k7dTE4scPHb6fNR45c1BQyF7nERujIP8A1cbfIj0UyXBcWT2R5mWKYlhc1OQVAcbDbgpZylixumaPlFV1ltEJyZrS8oVkGc4oIQhbmbOIQhAkdALnBrVY0tIYnRyTSNDA4FwtfS6EKkTJkzHmtgk66ne4f+pkaQDYNIA2XKOUYg4RkNkmAtZ4LXeTx90IS9h6JGGPFFViEdok2dBJvfucNCtXnp6iMwzQ3jAbnY793AIQs8heLsqcTljp61uF0hIjved77k665R3XUqsmcahgimtFGw5xl3OXRCEh+zA1busnnfe+aVx+aZQhaEir6LgzNN2uQhAI6HOLmud8QKuonGONskcji0a5eSEJAy0je50Obi7QuOulha/Pe6cp5usjAtYkBzT8reo97oQgQYgGyYNXN2uwPHcRb35+KqqeO+FUfHsvdfl2yP8AxQhTLoqIhp6vXdOipdlQhZJGjYyanVCEK6RNs//Z",
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: "grey", fontWeight: "900", fontSize: 16 }}>
                  Uknown T
                </Text>
                <Text style={{ fontSize: 10, color: "grey" }}>
                  65k Subscribers
                </Text>
              </View>
            </View>
            <Text style={{ color: "grey" }}> &#8226; </Text>
            <Text
              style={{
                color: "red",
                fontSize: 11,
                fontWeight: subcribed ? "700" : null,
                borderWidth: 2,
                borderColor: subcribed ? "green" : null,
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => setSubscribe(!subcribed)}
            >
              {" "}
              {subcribed ? "SUBSCRIBED" : "SUBSCRIBE"}
            </Text>
          </View>
          </View>
          )}
          contentContainerStyle={{paddingBottom:250}}
            data={Data}
            renderItem={({ item, index }) => (
              <Videos
                key={index}
                item={item}
                width={350}
                menu={true}
                icons={true}
              />
            )}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};
export default VideoDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    alignSelf: "center",
    width: 370,
    aspectRatio: 13 / 8,
    marginTop: 30,
  },
});
