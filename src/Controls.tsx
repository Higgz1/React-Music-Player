import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text, Button, Progress } from "native-base";
import { Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const imageW = width * 0.85;
const imageH = imageW * 1.2;

const Controls = () => {
  return (
    <>
      <Box position="absolute" bottom="16" width={imageW} py="1">
        <Box mb={4}>
          <Progress size="xs" value={35} mx="2" mb="2" />
          <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Text mx="2" color="#F7F5F2">
              1:06
            </Text>
            <Text mx="2" color="#F7F5F2">
              3:09
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="4"
        >
          {/* shuffle */}
          <Button backgroundColor="transparent">
            <Entypo name="shuffle" size={20} color="#F7F5F2" />
          </Button>

          {/* backbutton */}
          <Button backgroundColor="transparent">
            <Entypo name="controller-jump-to-start" size={30} color="#F7F5F2" />
          </Button>

          {/* play */}
          <Button
            h={16}
            w={16}
            mx={6}
            backgroundColor="white"
            borderRadius="full"
          >
            <Entypo name="controller-play" size={40} color="#413F42" />
          </Button>

          {/* forwardbutton */}
          <Button backgroundColor="transparent" borderRadius="full">
            <Entypo name="controller-next" size={30} color="#F7F5F2" />
          </Button>

          {/* repeat */}
          <Button backgroundColor="transparent" borderRadius="full">
            <Entypo name="shuffle" size={20} color="#F7F5F2" />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Controls;

const styles = StyleSheet.create({});
