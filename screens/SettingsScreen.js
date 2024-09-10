import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';

const BookmarkScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Bookmarks</Text>

      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.category, styles.workCategory]}>
            <Text style={styles.categoryText}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.category, styles.personalCategory]}>
            <Text style={styles.categoryText}>Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.category, styles.travelCategory]}>
            <Text style={styles.categoryText}>Travel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.category, styles.othersCategory]}>
            <Text style={styles.categoryText}>Others</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Bookmarks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bookmarks</Text>
        <View style={styles.blocksContainer}>
          <TouchableOpacity style={[styles.block, styles.largeBlock]}>
            <Image 
              source={{ uri: 'https://imgs.search.brave.com/h2vrKSdFP5K3zaOWiz9hBfYYJbZJPx494dFZX9vWlvo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/cHZncy1jb2xsZWdl/LW9mLWVuZ2luZWVy/aW5nLXB2Z2NvZW4t/bmFzaGlrLTE3OTUw/OS5qcGc' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>College </Text>
            <Text style={styles.description}>Most Travelled 
              
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.block, styles.mediumBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/1288951580/photo/young-indian-farmer-showing-smart-phone-at-goat-dairy-farm.jpg?s=612x612&w=0&k=20&c=erDqIkT8GfC-ykkRLC1SzSPFQ_TpDLxt-SLypywXiIo=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>Dairy Shop </Text>
            <Text style={styles.description}> </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.block, styles.smallBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/1152600395/photo/men-running-on-treadmills-at-illuminated-gym.jpg?s=612x612&w=0&k=20&c=XMoTCPj3-hoJs2tt2a-ZvDlFaSp-hKEL_SGc6_Ge9-8=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>Fire Stone Gym</Text>
            <Text style={styles.description}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, styles.smallBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/1252714711/photo/new-market-kolkata-west-bengal-india.jpg?s=612x612&w=0&k=20&c=Siqew3X3MSp8oC-iwjwTNpwm1Qzp5dQKQKVy-nErvoE=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>City Center Mall </Text>
            <Text style={styles.description}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.block, styles.mediumBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/1136161837/photo/gatha-mandir-abode-of-sant-tukaram-revered-poet-saint-dehu-maharashtra-india.jpg?s=612x612&w=0&k=20&c=LoLJtou_MRvWlUQk2mX0u77JQhVmbfJEmeajuCfubGw=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>Mandir </Text>
            <Text style={styles.description}> </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recently Viewed Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently Viewed</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.block, styles.mediumBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/510795912/photo/india-gate.jpg?s=612x612&w=0&k=20&c=kZkdrEDXEtoLK6Qh8XPywc9VYV95mJXXcWLBxHftN_U=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>Bookmark 5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.block, styles.mediumBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/539018660/photo/taj-mahal-hotel-and-gateway-of-india.jpg?s=612x612&w=0&k=20&c=L1LJVrYMS8kj2rJKlQMcUR88vYoAZeWbYIGkcTo6QV0=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>Bookmark 6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, styles.mediumBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/146812172/photo/sunrise-at-taj-mahal-on-jamuna-river.jpg?s=612x612&w=0&k=20&c=SdtUfSDFuJfelsg4qatrtLvGfMSFXp8Ms5WzoZQ7RdA=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>Bookmark 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, styles.mediumBlock]}>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/537064629/photo/tea-plantations-around-the-emerald-lake-in-ooty.jpg?s=612x612&w=0&k=20&c=yEjt_jKZXxSFTvD97YmFUEXWdhVfuu4-7LAkgheVPBE=' }} 
              style={styles.image} 
            />
            <Text style={styles.blockText}>Bookmark 5</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7FAFC', // Soft background color
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2D3748', // Dark grey
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A5568', // Medium grey
    marginBottom: 10,
  },
  category: {
    padding: 12,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#E2E8F0', // Light grey background for default
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds depth effect
  },
  categoryText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  workCategory: {
    backgroundColor: '#7F9CF5', // Blue shade for "Work"
  },
  personalCategory: {
    backgroundColor: '#F56565', // Red shade for "Personal"
  },
  travelCategory: {
    backgroundColor: '#48BB78', // Green shade for "Travel"
  },
  othersCategory: {
    backgroundColor: '#ED8936', // Orange shade for "Others"
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
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Adds shadow for the blocks
  },
  blockText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#718096', // Soft grey
    textAlign: 'center',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  largeBlock: {
    width: '100%',
    height: 250,
  },
  mediumBlock: {
    width: 200, // Adjusted width for horizontal scrolling
    height: 200,
    marginRight: 10, // Spacing between items
  },
  smallBlock: {
    width: '47%',
    height: 200,
  },
});
