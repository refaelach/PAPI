import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Alert, Card, CardContent, CardHeader, useTheme, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import LoadingState from '../components/LoadingState';
import AnimatedComponent from '../components/AnimatedComponent';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
}));

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ lineData: [], pieData: [] });
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setData({
          lineData: [
            {
              id: "Threats",
              color: theme.palette.primary.main,
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
            { id: "High", label: "High", value: 25, color: theme.palette.error.main },
            { id: "Medium", label: "Medium", value: 35, color: theme.palette.warning.main },
            { id: "Low", label: "Low", value: 40, color: theme.palette.success.main },
          ]
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch dashboard data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, [theme]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <AnimatedComponent>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Dashboard
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <StyledCard>
              <CardHeader title="Threat Trend" />
              <CardContent sx={{ flexGrow: 1, height: 400 }}>
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
                  enableSlices="x"
                  enableArea={true}
                  areaOpacity={0.1}
                  enableCrosshair={true}
                  crosshairType="x"
                  theme={{
                    axis: { ticks: { text: { fill: theme.palette.text.secondary } } },
                    grid: { line: { stroke: theme.palette.divider } },
                    crosshair: { line: { stroke: theme.palette.primary.main } },
                  }}
                />
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardHeader title="Risk Distribution" />
              <CardContent sx={{ flexGrow: 1, height: 400 }}>
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
                  arcLinkLabelsTextColor={theme.palette.text.primary}
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                  theme={{
                    labels: { text: { fill: theme.palette.text.primary } },
                    legends: { text: { fill: theme.palette.text.primary } },
                  }}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: theme.palette.text.secondary,
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: theme.palette.text.primary
                          }
                        }
                      ]
                    }
                  ]}
                />
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </AnimatedComponent>
  );
};

export default Dashboard;
