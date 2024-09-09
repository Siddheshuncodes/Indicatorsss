import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bookmarks</Text>
      
      <View style={styles.blocksContainer}>
        <TouchableOpacity style={[styles.block, styles.block1]}>
          <Text style={styles.blockText}>Bookmark 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.block, styles.block2]}>
          <Text style={styles.blockText}>Bookmark 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.block, styles.block3]}>
          <Text style={styles.blockText}>Bookmark 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.block, styles.block4]}>
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
    justifyContent: 'space-around',
  },
  block: {
    width: '45%',
    height: 150,
    marginBottom: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  block1: {
    backgroundColor: '#FF6F61',
  },
  block2: {
    backgroundColor: '#6B5B95',
  },
  block3: {
    backgroundColor: '#88B04B',
  },
  block4: {
    backgroundColor: '#F7CAC9',
  },
});
