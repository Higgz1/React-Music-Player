import {
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  View,
  Animated,
} from "react-native";
import * as React from "react";
import { Box, Text } from "native-base";

const { width, height } = Dimensions.get("screen");

const data2 = [
  {
    image:
      "https://cdn.dribbble.com/users/372/screenshots/13954804/media/ecb44e020eb98f4c3640777dea080c26.jpg?compress=1&resize=1200x900",
    artistName: "Figure",
    song: "Go Figure",
  },
  {
    image:
      "https://cdn.dribbble.com/users/1692428/screenshots/14710140/media/efb6ea6a530c9fd6be915a0c9c57e699.jpg?compress=1&resize=1200x900",
    artistName: "Akuh",
    song: "Distant Land",
  },
  {
    image:
      "https://cdn.dribbble.com/users/1731254/screenshots/17701109/media/dc43ca62e995df2f014012f09c648cbd.png?compress=1&resize=1200x900",
    artistName: "Ties",
    song: "Friends Forever",
  },
  {
    image:
      "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",
    artistName: "T'Challa",
    song: "Wakanda Forever",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/2589364/file/original-ab9e3fe4ef3b638aaa0fe019ca8a435b.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900",
    artistName: "Chad",
    song: "The lifestyle",
  },
  {
    image:
      "https://cdn.dribbble.com/users/44324/screenshots/7127355/media/e28a8328b6f009c4ea1e129247cd80b4.jpg?compress=1&resize=1200x900",
    artistName: "Naught",
    song: "A Space Odyssey",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/2747248/file/original-cf9654f107b286a8f1496395cd7dbaa6.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1200x900",
    artistName: "Mandem",
    song: "Look into my eyes",
  },
];

const imageW = width * 0.85;
const imageH = imageW * 1.2;

const Actual = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <View style={[StyleSheet.absoluteFill]}>
        {data2.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              source={{ uri: item.image }}
              key={`image-${index}`}
              style={[StyleSheet.absoluteFill, { opacity }]}
              blurRadius={50}
            />
          );
        })}
      </View>

      <View>
        <Animated.FlatList
          data={data2}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          horizontal
          pagingEnabled
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <>
                <View
                  style={{
                    width,
                    alignItems: "center",
                    marginTop: 100,
                    // justifyContent: "center",
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: imageW,
                      height: imageH,
                      resizeMode: "cover",
                      borderRadius: 16,
                    }}
                  />
                </View>

                <View
                  style={{
                    position: "absolute",
                    bottom: 205,
                    width,
                    alignItems: "flex-start",
                    marginLeft: 34,
                    justifyContent: "flex-start",
                  }}
                >
                  <Text fontSize="3xl" color="#F7F5F2">
                    {item.song}
                  </Text>
                  <Text fontSize="xl" color="#F7F5F2">
                    {item.artistName}
                  </Text>
                </View>
              </>
            );
          }}
        />
      </View>
    </>
  );
};

export default Actual;

const styles = StyleSheet.create({});
