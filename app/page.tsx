"use client";

import React, { useEffect } from 'react';
import { Text, Grid, Card, Paper } from '@mantine/core';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomePage() {
  const courses = [
    {
      name: 'Course 1',
      color: '#339af0',
      start: 8 * 60 + 30,
      end: 10 * 60 + 0,
    },
    {
      name: 'Course 2',
      color: '#ff6b6b',
      start: 10 * 60 + 4,
      end: 13 * 60 + 0,
    },
    {
      name: 'Course 3',
      color: '#fcc419',
      start: 13 * 60 + 4,
      end: 15 * 60 + 30,
    },
  ];
  
  const clockLabels:string[] = [];
  const clockColors:string[] = [];
  const clockSlices:number[] = [];
  const dayStart = courses[0].start;
  const dayEnd = courses[courses.length - 1].end;
  const dayLength = dayEnd - dayStart;
  
  courses.forEach(course => {
    clockLabels.push(course.name);
    clockColors.push(course.color);
    clockSlices.push((course.end - course.start) / dayLength);
  });
  
  const clockData = {
    labels: clockLabels,
    datasets: [
      {
        label: 'Class Length',
        data: clockSlices,
        backgroundColor: clockColors,
        borderColor: '#2e2e2e',
        borderWidth: 8,
      },
    ],
  };
  const clockOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  
  let currentTime = 0;
  let currentCourseIndex = 0;
  let currentCourse:any = null;
  let startHour = 0;
  let startZone = '';
  let startMinutes = 0;
  let endHour = 0;
  let endZone = '';
  let endMinutes = 0;
  let timeLeft = 0;
  let previousTimeLeft = 0;
  let nextCourse:any = null;
  let nextHour = 0;
  let nextZone = '';
  let nextMinutes = 0;
  let handAngle = 0;
  
  function updateTime() {
    const currentDate = new Date();
    currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();
    
    for (let c = 0; c < courses.length; c++) {
      const course = courses[c];
      
      if (currentTime >= course.start && currentTime <= course.end) {
        currentCourseIndex = c;
        break;
      }
    }
    
    currentCourse = courses[currentCourseIndex];
    startHour = Math.floor(currentCourse.start / 60);
    startZone = startHour < 12 || startHour === 24 ? 'AM' : 'PM';
    if (startHour > 12) startHour -= 12;
    startMinutes = currentCourse.start % 60;
    endHour = Math.floor(currentCourse.end / 60);
    endZone = endHour < 12 || endHour === 24 ? 'AM' : 'PM';
    if (endHour > 12) endHour -= 12;
    endMinutes = currentCourse.end % 60;
    previousTimeLeft = timeLeft;
    timeLeft = currentCourse.end - currentTime;
    
    nextCourse = currentCourseIndex < courses.length - 1 ? courses[currentCourseIndex + 1] : null;
    nextHour = nextCourse ? Math.floor(nextCourse.start / 60) : 0;
    nextZone = nextHour < 12 || nextHour === 24 ? 'AM' : 'PM';
    if (nextHour > 12) nextHour -= 12;
    nextMinutes = nextCourse ? nextCourse.start % 60 : 0;
    handAngle = (currentTime - dayStart) / (dayEnd - dayStart) * 360 - 90;
    
    if (previousTimeLeft != timeLeft) {
      if (timeLeft === currentCourse.end - currentCourse.start) {
        console.log('Class has started!');
      }
      
      if (timeLeft === 5) {
        console.log('5 minutes left!');
      }
      
      if (timeLeft === 0) {
        console.log('Class is over!');
      }
    }
  }
  
  updateTime();
  
  useEffect(() => {
    setInterval(updateTime, 5000);
  });
  
  return (<>
    <Card m="md" p="md" radius="md">
      <Grid align="center" justify="center">
        <Grid.Col span={{ base: 6, md: 4 }} pos="relative">
          <Pie data={clockData} options={clockOptions}></Pie>
          <Paper bg="white" radius="xl" style={{ position: "absolute", left: "50%", top: "50%", width: "50%", height: "16px", transformOrigin: "8px 8px", translate: "-8px -8px", rotate: `${handAngle}deg` }}></Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 4 }}>
          <Text fw={700} size="xl" c={currentCourse?.color} display={timeLeft > 0 ? "block" : "none"}>
            {currentCourse?.name}
          </Text>
          <Text display={timeLeft > 0 ? "block" : "none"}>
            {startHour.toFixed(0).padStart(2, '0')}:{startMinutes.toFixed(0).padStart(2, '0')} {startZone}
            &nbsp;- {endHour.toFixed(0).padStart(2, '0')}:{endMinutes.toFixed(0).padStart(2, '0')} {endZone}
          </Text>
          <Text fw={900} size="xl" c="white" tt="uppercase" mt="md">{timeLeft > 0 ? timeLeft : "Passing period"}</Text>
          <Text fw={900} size="xl" c="white" tt="uppercase" display={timeLeft > 0 ? "block" : "none"}>minutes left</Text>
          <Text size="sm" tt="uppercase" fw={700} mt="md" display={nextCourse ? "block" : "none"}>
            Next
          </Text>
          <Text fw={700} size="lg" c={nextCourse?.color} display={nextCourse ? "block" : "none"}>
            {nextCourse?.name}
          </Text>
          <Text display={nextCourse ? "block" : "none"}>
            at {nextHour.toFixed(0).padStart(2, '0')}:{nextMinutes.toFixed(0).padStart(2, '0')} {nextZone}
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  </>);
}
