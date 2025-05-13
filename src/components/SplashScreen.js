import { useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import images from "./Images/Images";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTabNavigation')
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={images.Logo} style={styles.image} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 152,
  }
})
