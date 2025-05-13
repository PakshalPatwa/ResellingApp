import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../../HomeScreen/Header'
import TrendingOffers from '../../HomeScreen/TrendingOffers'
import PopularBrands from '../../HomeScreen/PopularBrands'
import PopularStores from '../../HomeScreen/PopularStores'
import PopularOffers from '../../HomeScreen/PopularOffers'
import Highlights from '../../HomeScreen/Highlights'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>
      <View>
        <Header />
        <TrendingOffers />
        <PopularBrands />
        <PopularStores />
        <PopularOffers />
        <Highlights />
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})