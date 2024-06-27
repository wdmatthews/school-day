"use client";

import React, { useEffect } from 'react';
import { Text, Grid, Card } from '@mantine/core';
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
  const dayStart = 8 * 60 + 30;
  const dayEnd = 15 * 60 + 30;
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
  
  const currentCourseIndex = 1;
  const currentCourse = courses[currentCourseIndex];
  const nextCourse = courses[currentCourseIndex + 1];
  let startHour = Math.floor(currentCourse.start / 60);
  const startZone = startHour < 12 || startHour === 24 ? 'AM' : 'PM';
  if (startHour > 12) startHour -= 12;
  const startMinutes = currentCourse.start % 60;
  let endHour = Math.floor(currentCourse.end / 60);
  const endZone = endHour < 12 || endHour === 24 ? 'AM' : 'PM';
  if (endHour > 12) endHour -= 12;
  const endMinutes = currentCourse.end % 60;
  const currentTime = 11 * 60 + 0;
  const timeLeft = currentCourse.end - currentTime;
  let nextHour = Math.floor(nextCourse.start / 60);
  const nextZone = nextHour < 12 || nextHour === 24 ? 'AM' : 'PM';
  if (nextHour > 12) nextHour -= 12;
  const nextMinutes = nextCourse.start % 60;
  
  useEffect(() => {
    setTimeout(() => {
      const handCanvasElem:HTMLCanvasElement = document.getElementById('handCanvas') as HTMLCanvasElement;
      const handCanvas = handCanvasElem.getContext("2d")!;
      handCanvas.beginPath();
      handCanvas.moveTo(handCanvasElem.width / 2, handCanvasElem.height / 2);
      handCanvas.lineTo(0, 0);
      handCanvas.closePath();
      handCanvas.strokeStyle = "white";
      handCanvas.lineWidth = 4;
      handCanvas.lineCap = "round";
      handCanvas.stroke();
    }, 1000);
  });
  
  return (<>
    <Card m="md" p="md" radius="md">
      <Grid align="center" justify="center">
        <Grid.Col span={{ base: 6, md: 4 }} pos="relative">
          <Pie data={clockData} options={clockOptions} style={{ marginLeft: "auto" }}></Pie>
          <canvas id="handCanvas" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}></canvas>
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 4 }}>
          <Text fw={700} size="xl" c={currentCourse.color}>
            {currentCourse.name}
          </Text>
          <Text>
            {startHour.toFixed(0).padStart(2, '0')}:{startMinutes.toFixed(0).padStart(2, '0')} {startZone}
            &nbsp;- {endHour.toFixed(0).padStart(2, '0')}:{endMinutes.toFixed(0).padStart(2, '0')} {endZone}
          </Text>
          <Text fw={900} size="xl" c="white" tt="uppercase" mt="md">{timeLeft}</Text>
          <Text fw={900} size="xl" c="white" tt="uppercase" mb="md">minutes left</Text>
          <Text size="sm" tt="uppercase" fw={700}>
            Next
          </Text>
          <Text fw={700} size="lg" c={nextCourse.color}>
            {nextCourse.name}
          </Text>
          <Text>
            at {nextHour.toFixed(0).padStart(2, '0')}:{nextMinutes.toFixed(0).padStart(2, '0')} {nextZone}
          </Text>
        </Grid.Col>
      </Grid>
    </Card>
  </>);
}
