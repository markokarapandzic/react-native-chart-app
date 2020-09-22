import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  LineChart,
  PieChart,
  ProgressChart,
} from "react-native-chart-kit";

const SCREEN_WIDTH = Dimensions.get('window').width;

const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
};

const progressRingData = {
  labels: ["Web", "Mobile", "AI"],
  data: [0.9, 0.4, 0.1]
};
const pieChartData = [
  {
    name: "Web",
    population: 90000,
    color: "#2ec1ac",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Mobile",
    population: 120000,
    color: "#d2e603",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "AI",
    population: 10000,
    color: "#3e978b",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
];

const ChartDisplay = () => {
  return (
    <View>
      <Text style={styles.chartTitle}>Line Chart</Text>
      <LineChart
        data={lineChartData}
        width={SCREEN_WIDTH}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={chartConfig}
        bezier
      />
      <Text style={styles.chartTitle}>Progress Chart</Text>
      <ProgressChart
        data={progressRingData}
        width={SCREEN_WIDTH}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <Text style={styles.chartTitle}>Pie Chart</Text>
      <PieChart
        data={pieChartData}
        width={SCREEN_WIDTH}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartTitle: {
    fontSize: 28,
  }
});

const chartConfig = {
  backgroundGradientFrom: "#1a1a2e",
  backgroundGradientFromOpacity: 0.8,
  backgroundGradientTo: "#16213e",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(40, 223, 153, ${opacity})`,
  strokeWidth: 4,
  barPercentage: 0.1,
};

export default ChartDisplay;
