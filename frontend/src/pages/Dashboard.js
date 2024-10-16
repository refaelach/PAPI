import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Box, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import LoadingState from '../components/LoadingState';
import AnimatedComponent from '../components/AnimatedComponent';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
}));

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ lineData: [], pieData: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setData({
          lineData: [
            {
              id: "Threats",
              color: "hsl(271, 70%, 50%)",
              data: [
                { x: "Jan", y: 45 },
                { x: "Feb", y: 52 },
                { x: "Mar", y: 37 },
                { x: "Apr", y: 41 },
                { x: "May", y: 56 },
                { x: "Jun", y: 39 },
              ]
            }
          ],
          pieData: [
            { id: "High", label: "High", value: 25, color: "hsl(0, 70%, 50%)" },
            { id: "Medium", label: "Medium", value: 35, color: "hsl(33, 70%, 50%)" },
            { id: "Low", label: "Low", value: 40, color: "hsl(127, 70%, 50%)" },
          ]
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch dashboard data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <AnimatedComponent>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                Threat Trend
              </Typography>
              <Box sx={{ height: 400 }}>
                <ResponsiveLine
                  data={data.lineData}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Month',
                    legendOffset: 36,
                    legendPosition: 'middle'
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Threats',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                />
              </Box>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Typography variant="h6" gutterBottom>
                Risk Distribution
              </Typography>
              <Box sx={{ height: 400 }}>
                <ResponsivePie
                  data={data.pieData}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                />
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
    </AnimatedComponent>
  );
};

export default Dashboard;
