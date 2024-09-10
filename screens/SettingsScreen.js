import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const BookmarkScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bookmarks</Text>
      
      <View style={styles.blocksContainer}>

        <TouchableOpacity style={[styles.block, styles.block1, styles.largeBlock]}>
          <Text style={styles.blockText} onPress={() => navigation.navigate("Bookmark1")}>Bookmark 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.block, styles.block2, styles.mediumBlock]}>
          <Text style={styles.blockText}>Bookmark 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.block, styles.block3, styles.smallBlock]}>
          <Text style={styles.blockText}>Bookmark 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.block, styles.block4, styles.mediumBlock]}>
          <Text style={styles.blockText}>Bookmark 4</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  blocksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  block: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  blockText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Different block sizes
  largeBlock: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  mediumBlock: {
    width: '47%',
    height: 150,
  },
  smallBlock: {
    width: '47%',
    height: 100,
  },
  // Color Schemes
  block1: {
    backgroundColor: '#FF6F61', // Vibrant coral red
  },
  block2: {
    backgroundColor: '#6B5B95', // Purple shade
  },
  block3: {
    backgroundColor: '#88B04B', // Fresh green
  },
  block4: {
    backgroundColor: '#F7CAC9', // Light pink
  },
});
