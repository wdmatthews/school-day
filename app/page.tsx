"use client";

// TODO: FIX BUG WHERE UPDATE DOES NOT OCCUR ON INFORMATION WHEN TIME IS CHANGED

import React, { useEffect } from 'react';
import { Text, Grid, Card, Paper } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomePage() {
  const courses = [
    {
      name: 'Study Hall',
      color: '#fa5252',
      start: 8 * 60 + 30,
      end: 9 * 60 + 12,
      shouldWarn: false,
    },
    {
      name: 'Biology 2',
      color: '#ffa8a8',
      start: 9 * 60 + 16,
      end: 9 * 60 + 58,
      shouldWarn: true,
    },
    {
      name: 'Enviro Sci 3',
      color: '#fd7e14',
      start: 10 * 60 + 2,
      end: 10 * 60 + 44,
      shouldWarn: true,
    },
    {
      name: 'Biology 4',
      color: '#ffc078',
      start: 10 * 60 + 48,
      end: 11 * 60 + 30,
      shouldWarn: true,
    },
    {
      name: 'Biology 5',
      color: '#fab005',
      start: 11 * 60 + 34,
      end: 12 * 60 + 16,
      shouldWarn: true,
    },
    {
      name: 'Lunch',
      color: '#ffe066',
      start: 12 * 60 + 20,
      end: 12 * 60 + 50,
      shouldWarn: false,
    },
    {
      name: 'Honors Bio 6',
      color: '#40c057',
      start: 12 * 60 + 54,
      end: 13 * 60 + 36,
      shouldWarn: true,
    },
    {
      name: 'A & P 7',
      color: '#8ce99a',
      start: 13 * 60 + 40,
      end: 14 * 60 + 22,
      shouldWarn: true,
    },
    {
      name: 'Plan',
      color: '#228be6',
      start: 14 * 60 + 26,
      end: 15 * 60 + 8,
      shouldWarn: false,
    },
    {
      name: 'Homeroom',
      color: '#74c0fc',
      start: 15 * 60 + 12,
      end: 15 * 60 + 30,
      shouldWarn: false,
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
        borderWidth: 4,
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
  let currentCourseIndex = -1;
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
  
  const notificationsCustomization = {
    color: 'white',
    autoClose: 5000,
  };
  
  function updateTime(startAudio?:any, warningAudio?:any, endAudio?:any) {
    const currentDate = new Date();
    currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();
    currentCourseIndex = -1;
    
    for (let c = 0; c < courses.length; c++) {
      const course = courses[c];
      
      if (currentTime >= course.start && currentTime <= course.end
        || c < courses.length - 1 && currentTime > course.end && currentTime < courses[c + 1].start
      ) {
        currentCourseIndex = c;
        break;
      }
    }
    
    currentCourse = currentCourseIndex >= 0 ? courses[currentCourseIndex] : null;
    startHour = currentCourse ? Math.floor(currentCourse.start / 60) : 0;
    startZone = startHour < 12 || startHour === 24 ? 'AM' : 'PM';
    if (startHour > 12) startHour -= 12;
    startMinutes = currentCourse ? currentCourse.start % 60 : 0;
    endHour = currentCourse ? Math.floor(currentCourse.end / 60) : 0;
    endZone = endHour < 12 || endHour === 24 ? 'AM' : 'PM';
    if (endHour > 12) endHour -= 12;
    endMinutes = currentCourse ? currentCourse.end % 60 : 0;
    previousTimeLeft = timeLeft;
    timeLeft = currentCourse ? currentCourse.end - currentTime : 0;
    
    nextCourse = currentCourseIndex < courses.length - 1 ? courses[currentCourseIndex + 1] : null;
    nextHour = nextCourse ? Math.floor(nextCourse.start / 60) : 0;
    nextZone = nextHour < 12 || nextHour === 24 ? 'AM' : 'PM';
    if (nextHour > 12) nextHour -= 12;
    nextMinutes = nextCourse ? nextCourse.start % 60 : 0;
    handAngle = (currentTime - dayStart) / (dayEnd - dayStart) * 360 - 90;
    
    if (currentCourse && previousTimeLeft != timeLeft && startAudio) {
      if (timeLeft === 3 && currentCourse.shouldWarn) {
        warningAudio?.play();
        notifications.show({
          title: `3 minutes left of ${currentCourse.name}!`,
          message: '',
          style: { backgroundColor: '#f76707' },
          ...notificationsCustomization,
        })
      }
    }
  }
  
  updateTime();
  
  useEffect(() => {
    const startAudio = new Audio('./start.wav');
    const warningAudio = new Audio('./warning.wav');
    const endAudio = new Audio('./end.wav');
    setInterval(() => updateTime(startAudio, warningAudio, endAudio), 5000);
  });
  
  return (<>
    <Card m="md" p="md" radius="md">
      <Grid align="center" justify="center">
        <Grid.Col span={{ base: 6, md: 4 }} pos="relative" display={currentCourse ? "block" : "none"}>
          <Pie data={clockData} options={clockOptions}></Pie>
          <Paper bg="white" radius="xl" style={{ position: "absolute", left: "50%", top: "50%", width: "50%", height: "8px", transformOrigin: "4px 4px", translate: "-4px -4px", rotate: `${handAngle}deg` }}></Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 4 }} display={currentCourse ? "block" : "none"}>
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
        <Grid.Col span={{ base: 12 }} display={currentCourse ? "none" : "block"}>
          <Text fw={700} size="xl" c="white" style={{ textAlign: 'center' }} tt="uppercase">
            No class in session
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  </>);
}
