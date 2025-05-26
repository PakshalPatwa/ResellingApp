import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Images from '../Images/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientButton from '../Button/Button';

const BrandScreen = () => {
  const navigation = useNavigation();
  const [selectedBrands, setSelectedBrands] = useState([]);

  const brandImages = [
    Images.Brands1,
    Images.Brands2,
    Images.Brands3,
    Images.Brands4,
    Images.Brands5,
    Images.Brands6,
    Images.Brands7,
    Images.Brands8,
    Images.Brands9,
  ];

  const handleSelect = (index) => {
    if (selectedBrands.includes(index)) {
      setSelectedBrands(selectedBrands.filter((i) => i !== index));
    } else {
      if (selectedBrands.length < 3) {
        setSelectedBrands([...selectedBrands, index]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.backWrapper}
        >
          <Image source={Images.backarrow} style={styles.backIcon} />
          <Text style={styles.headerTitle}>Brands</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={22} color="#FFFFFF" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>Choose up to 3 Brands</Text>

        <View style={styles.gridContainer}>
          {brandImages.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.imageWrapper,
                selectedBrands.includes(index) && styles.selected,
              ]}
              onPress={() => handleSelect(index)}
            >
              <Image source={image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <GradientButton style={styles.buttonText} title={"Get Coupon"} />
      </ScrollView>
    </View>
  );
};

export default BrandScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3FA',
  },
  header: {
    height: 60,
    backgroundColor: '#2C398B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: 20,
    width: 20,
    tintColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 15,
    fontFamily:'Poppins-SemiBold'
  },
  searchIcon: {
    marginRight: 5,
  },
  content: {
    paddingVertical: 10,
  },
  text: {
    fontSize: 14,
    color: '#1F3D4D',
    fontFamily:'Poppins-Bold',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  imageWrapper: {
    width: '33%',
    borderRadius: 8,
    padding: 1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  selected: {
    borderWidth: 3,
    borderColor: '#01AAEC',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  buttonText: {
    position: 'relative',
    top: 210,
    borderRadius: 'none'
  },
});
