"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Text, Grid, Card, Paper, Container, TextInput, Checkbox, Radio, Group, Button, Accordion } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TimeInput } from '@mantine/dates';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomePage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [openCourse, setOpenCourse] = useState<string | null>('');
  const [clockLabels, setClockLabels] = useState<any[]>([]);
  const [clockColors, setClockColors] = useState<any[]>([]);
  const [clockSlices, setClockSlices] = useState<any[]>([]);
  const dayStart = 8 * 60 + 30;
  const dayEnd = 15 * 60 + 30;
  const dayLength = dayEnd - dayStart;
  
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
  
  const [currentCourse, setCurrentCourse] = useState<any>(null);
  const [startHour, setStartHour] = useState(0);
  const [startZone, setStartZone] = useState('');
  const [startMinutes, setStartMinutes] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [endZone, setEndZone] = useState('');
  const [endMinutes, setEndMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [previousTimeLeft, setPreviousTimeLeft] = useState(0);
  const [nextCourse, setNextCourse] = useState<any>(null);
  const [nextHour, setNextHour] = useState(0);
  const [nextZone, setNextZone] = useState('');
  const [nextMinutes, setNextMinutes] = useState(0);
  const [handAngle, setHandAngle] = useState(0);
  
  const currentDate = useRef<Date>(new Date());
  const currentTime = useRef(0);
  
  const updateTime = useCallback((updateCourses:any[] | null, warningAudio?:any) => {
    if (!updateCourses) updateCourses = courses;
    const notificationsCustomization = {
      color: 'white',
      autoClose: 5000,
    };
    
    let currentCourseIndex = -1;
    
    for (let c = 0; c < updateCourses.length; c++) {
      const course = updateCourses[c];
      
      if (currentTime >= course.start && currentTime <= course.end
        || c < updateCourses.length - 1 && currentTime > course.end && currentTime < updateCourses[c + 1].start
      ) {
        currentCourseIndex = c;
        break;
      }
    }
    
    setCurrentCourse(currentCourseIndex >= 0 ? updateCourses[currentCourseIndex] : null);
    setStartHour(currentCourse ? Math.floor(currentCourse.start / 60) : 0);
    setStartZone(startHour < 12 || startHour === 24 ? 'AM' : 'PM');
    if (startHour > 12) setStartHour(startHour - 12);
    setStartMinutes(currentCourse ? currentCourse.start % 60 : 0);
    setEndHour(currentCourse ? Math.floor(currentCourse.end / 60) : 0);
    setEndZone(endHour < 12 || endHour === 24 ? 'AM' : 'PM');
    if (endHour > 12) setEndHour(endHour - 12);
    setEndMinutes(currentCourse ? currentCourse.end % 60 : 0);
    setPreviousTimeLeft(timeLeft);
    setTimeLeft(currentCourse ? currentCourse.end - currentTime.current : 0);
    
    setNextCourse(currentCourseIndex < updateCourses.length - 1 ? updateCourses[currentCourseIndex + 1] : null);
    setNextHour(nextCourse ? Math.floor(nextCourse.start / 60) : 0);
    setNextZone(nextHour < 12 || nextHour === 24 ? 'AM' : 'PM');
    if (nextHour > 12) setNextHour(nextHour - 12);
    setNextMinutes(nextCourse ? nextCourse.start % 60 : 0);
    setHandAngle((currentTime.current - dayStart) / (dayEnd - dayStart) * 360 - 90);
    
    if (currentCourse && previousTimeLeft != timeLeft && warningAudio) {
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
  }, [currentTime, courses, currentCourse, dayEnd, dayStart, endHour, nextCourse, nextHour, previousTimeLeft, startHour, timeLeft]);
  
  const coursesString = useSearchParams().get('courses') ?? '';
  
  useEffect(() => {
    if (courses.length > 0) return;
    const urlCourses:any[] = [];
    
    if (coursesString.length > 0) {
      const coursesStrings = coursesString.split('|');
      const urlClockLabels:string[] = [];
      const urlClockColors:string[] = [];
      const urlClockSlices:number[] = [];
      
      coursesStrings.forEach(courseString => {
        const courseStrings = courseString.split(';');
        const urlCourse = {
          name: courseStrings[0],
          color: `#${courseStrings[1]}`,
          start: Number(courseStrings[2]),
          end: Number(courseStrings[3]),
          shouldWarn: courseStrings[4] === 'true',
        };
        urlCourses.push(urlCourse);
        urlClockLabels.push(urlCourse.name);
        urlClockColors.push(urlCourse.color);
        urlClockSlices.push((urlCourse.end - urlCourse.start) / dayLength);
      });
      
      if (urlCourses.length > 0) {
        setCourses(urlCourses);
        setClockLabels(urlClockLabels);
        setClockColors(urlClockColors);
        setClockSlices(urlClockSlices);
      }
    }
    
    const warningAudio = new Audio('./warning.wav');
    currentDate.current = new Date();
    currentTime.current = currentDate.current.getHours() * 60 + currentDate.current.getMinutes();
    updateTime(urlCourses.length > 0 ? urlCourses : courses);
    setInterval(() => {
      currentDate.current = new Date();
      currentTime.current = currentDate.current.getHours() * 60 + currentDate.current.getMinutes();
      updateTime(null, warningAudio);
    }, 5000);
  }, [courses, clockLabels, clockColors, clockSlices, updateTime, coursesString, dayLength]);
  
  const colorChoices = [
    '#1c7ed6', '#228be6', '#339af0', '#4dabf7', '#74c0fc',
    '#37b24d', '#40c057', '#51cf66', '#69db7c', '#8ce99a',
    '#f59f00', '#fab005', '#fcc419', '#ffd43b', '#ffe066',
    '#f76707', '#fd7e14', '#ff922b', '#ffa94d', '#ffc078',
    '#f03e3e', '#fa5252', '#ff6b6b', '#ff8787', '#ffa8a8',
    '#7048e8', '#7950f2', '#845ef7', '#9775fa', '#b197fc',
  ];
  const colorNames = [
    'Blue 1', 'Blue 2', 'Blue 3', 'Blue 4', 'Blue 5',
    'Green 1', 'Green 2', 'Green 3', 'Green 4', 'Green 5',
    'Yellow 1', 'Yellow 2', 'Yellow 3', 'Yellow 4', 'Yellow 5',
    'Orange 1', 'Orange 2', 'Orange 3', 'Orange 4', 'Orange 5',
    'Red 1', 'Red 2', 'Red 3', 'Red 4', 'Red 5',
    'Purple 1', 'Purple 2', 'Purple 3', 'Purple 4', 'Purple 5',
  ];
  
  const addCourseForm = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      color: colorChoices[0],
      start: '08:30',
      end: '10:00',
      shouldWarn: true,
    },
    validate: {
      name: (value) => (value.length === 0 ? 'Required' : null),
      color: (value) => (value.length === 0 ? 'Required' : null),
      start: (value) => (value.length === 0 ? 'Required' : null),
      end: (value) => (value.length === 0 ? 'Required' : null),
    },
    transformValues: (values) => {
      const startValues = values.start.split(':');
      const endValues = values.end.split(':');
      
      return {
        name: values.name,
        color: values.color,
        start: Number(startValues[0]) * 60 + Number(startValues[1]),
        end: Number(endValues[0]) * 60 + Number(endValues[1]),
        shouldWarn: values.shouldWarn,
      };
    },
  });
  const editCourseForm = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      color: colorChoices[0],
      start: '08:30',
      end: '10:00',
      shouldWarn: true,
    },
    validate: {
      name: (value) => (value.length === 0 ? 'Required' : null),
      color: (value) => (value.length === 0 ? 'Required' : null),
      start: (value) => (value.length === 0 ? 'Required' : null),
      end: (value) => (value.length === 0 ? 'Required' : null),
    },
    transformValues: (values) => {
      const startValues = values.start.split(':');
      const endValues = values.end.split(':');
      
      return {
        name: values.name,
        color: values.color,
        start: Number(startValues[0]) * 60 + Number(startValues[1]),
        end: Number(endValues[0]) * 60 + Number(endValues[1]),
        shouldWarn: values.shouldWarn,
      };
    },
  });
  
  const router = useRouter();
  const pathname = usePathname();
  
  function updateURL(newCourses:any[]) {
    let searchParams = `${pathname}?courses=`;
    
    newCourses.forEach((course, c) => {
      if (c > 0) searchParams += '|';
      searchParams += `${course.name};${course.color.slice(1)};${course.start};${course.end};${course.shouldWarn}`;
    });
    
    router.push(searchParams);
  }
  
  function addCourse(course:any) {
    setClockLabels([...clockLabels, course.name]);
    setClockColors([...clockColors, course.color]);
    setClockSlices([...clockSlices, (course.end - course.start) / dayLength]);
    const newCourses = [...courses, course];
    setCourses(newCourses);
    updateURL(newCourses);
    updateTime(newCourses);
  }
  
  function editCourse(courseIndex:number, newCourse:any) {
    const newCourses = courses.map((course, c) => (c === courseIndex ? newCourse : course));
    setCourses(newCourses);
    setOpenCourse(newCourse.name);
    updateURL(newCourses);
    updateTime(newCourses);
  }
  
  function updateEditForm(courseName:string | null) {
    if (!courseName || courseName.length === 0) return;
    const course = courses.find(course => course.name === courseName);
    
    if (!course) return;
    
    const startHour = Math.floor(course.start / 60);
    const startMinutes = course.start % 60;
    const endHour = Math.floor(course.end / 60);
    const endMinutes = course.end % 60;
    
    editCourseForm.setValues({
      name: course.name,
      color: course.color,
      start: `${startHour.toFixed(0).padStart(2, '0')}:${startMinutes.toFixed(0).padStart(2, '0')}`,
      end: `${endHour.toFixed(0).padStart(2, '0')}:${endMinutes.toFixed(0).padStart(2, '0')}`,
      shouldWarn: course.shouldWarn,
    });
  }
  
  function deleteCourse(courseIndex:number) {
    const newCourses = courses.filter((course, c) => (c !== courseIndex));
    setCourses(newCourses);
    updateURL(newCourses);
    updateTime(newCourses);
  }
  
  const openDeleteModal = (courseIndex:number) => modals.openConfirmModal({
    title: (
      <Text fw={700}>
        Are you sure?
      </Text>
    ),
    children: (
      <Text>
        Are you sure you want to delete {openCourse}?
      </Text>
    ),
    labels: { confirm: 'Delete', cancel: 'Cancel' },
    confirmProps: { color: 'red' },
    onConfirm: () => deleteCourse(courseIndex),
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
    <Container visibleFrom="md">
      <Card mb="md" p="md" radius="md">
        <form onSubmit={addCourseForm.onSubmit(addCourse)}>
          <TextInput
            label="Name"
            placeholder="Example Class"
            key={addCourseForm.key('name')}
            {...addCourseForm.getInputProps('name')}
          />
          <Checkbox
            mt="md"
            label="Use 3 minute warning"
            key={addCourseForm.key('shouldWarn')}
            {...addCourseForm.getInputProps('shouldWarn', { type: 'checkbox' })}
          />
          <Radio.Group
            mt="md"
            label="Color"
            key={addCourseForm.key('color')}
            {...addCourseForm.getInputProps('color')}
          >
            <Group mt="xs">
              {colorChoices.slice(0, 5).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c]} color={color} />)}
            </Group>
            <Group mt="xs">
              {colorChoices.slice(5, 10).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 5]} color={color} />)}
            </Group>
            <Group mt="xs">
              {colorChoices.slice(10, 15).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 10]} color={color} />)}
            </Group>
            <Group mt="xs">
              {colorChoices.slice(15, 20).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 15]} color={color} />)}
            </Group>
            <Group mt="xs">
              {colorChoices.slice(20, 25).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 20]} color={color} />)}
            </Group>
          </Radio.Group>
          <TimeInput
            mt="md"
            label="Start Time"
            key={addCourseForm.key('start')}
            {...addCourseForm.getInputProps('start')}
          />
          <TimeInput
            mt="md"
            label="End Time"
            key={addCourseForm.key('end')}
            {...addCourseForm.getInputProps('end')}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Add</Button>
          </Group>
        </form>
      </Card>
      <Accordion variant="separated" mb="md" value={openCourse} onChange={(value:string | null) => { setOpenCourse(value); updateEditForm(value); }}>
        {courses.map((course, c) => (
          <Accordion.Item key={course.name} value={course.name}>
            <Accordion.Control style={{ borderRadius: 4, borderColor: course.color, borderWidth: 4, borderStyle: "solid" }}>{course.name}</Accordion.Control>
            <Accordion.Panel>
            <form onSubmit={editCourseForm.onSubmit((newCourse) => editCourse(c, newCourse))}>
              <TextInput
                label="Name"
                placeholder="Example Class"
                key={editCourseForm.key('name')}
                {...editCourseForm.getInputProps('name')}
              />
              <Checkbox
                mt="md"
                label="Use 3 minute warning"
                key={editCourseForm.key('shouldWarn')}
                {...editCourseForm.getInputProps('shouldWarn', { type: 'checkbox' })}
              />
              <Radio.Group
                mt="md"
                label="Color"
                key={editCourseForm.key('color')}
                {...editCourseForm.getInputProps('color')}
              >
                <Group mt="xs">
                  {colorChoices.slice(0, 5).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c]} color={color} />)}
                </Group>
                <Group mt="xs">
                  {colorChoices.slice(5, 10).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 5]} color={color} />)}
                </Group>
                <Group mt="xs">
                  {colorChoices.slice(10, 15).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 10]} color={color} />)}
                </Group>
                <Group mt="xs">
                  {colorChoices.slice(15, 20).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 15]} color={color} />)}
                </Group>
                <Group mt="xs">
                  {colorChoices.slice(20, 25).map((color, c) => <Radio key={`add-${color}`} value={color} label={colorNames[c + 20]} color={color} />)}
                </Group>
              </Radio.Group>
              <TimeInput
                mt="md"
                label="Start Time"
                key={editCourseForm.key('start')}
                {...editCourseForm.getInputProps('start')}
              />
              <TimeInput
                mt="md"
                label="End Time"
                key={editCourseForm.key('end')}
                {...editCourseForm.getInputProps('end')}
              />
              <Group justify="flex-end" mt="md">
                <Button onClick={() => openDeleteModal(c)} color="red">Delete</Button>
                <Button type="submit">Edit</Button>
              </Group>
            </form>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  </>);
}
