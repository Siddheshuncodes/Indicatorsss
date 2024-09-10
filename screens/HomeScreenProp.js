import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function CarbonFootprintScreen({ navigation }) {
  // Sample data for the pie chart
  const pieData = [
    { name: 'Transportation', population: 40, color: '#e5383b', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Energy Use', population: 30, color: '#ff477e', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Waste Generation', population: 20, color: '#f26a8d', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Other', population: 10, color: '#f4b9b2', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ];
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
      
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Carbon Footprint Overview</Text>
        <Text style={styles.subtitle}>Visualize and reduce your environmental impact</Text>
      </View>

      {/* Pie Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Mehul's Carbon Footprint Breakdown</Text>
        <PieChart
          data={pieData}
          width={width - 40}
          height={220}
          chartConfig={styles.chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>

      {/* Explanation Text */}
      <View style={styles.textContainer}>
        <Text style={styles.sectionTitle}>What is a Carbon Footprint?</Text>
        <Text style={styles.description}>
          Your carbon footprint measures the total amount of CO2 emissions resulting from your daily activities. Understanding it helps in identifying areas to reduce emissions.
        </Text>
      </View>

      {/* Additional Blocks */}
      <View style={styles.additionalBlocks}>
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Energy Efficiency</Text>
          <Text style={styles.blockDescription}>
            Adopt energy-efficient appliances and practices to reduce your carbon footprint.
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Sustainable Transportation</Text>
          <Text style={styles.blockDescription}>
            Opt for public transportation, biking, or walking to minimize emissions from travel.
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Waste Management</Text>
          <Text style={styles.blockDescription}>
            Implement recycling and composting to cut down on waste and reduce your carbon impact.
          </Text>
        </View>
      </View>

      {/* Further Actions */}
      <View style={styles.buttonContainer}>
        <Button
          title="Explore Reduction Strategies"
          onPress={() => alert('Feature coming soon!')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  chartConfig: {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  },
  textContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  additionalBlocks: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  block: {
    backgroundColor: '#fafafa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  blockDescription: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
