'use client'

import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'

import '@schedule-x/theme-default/dist/index.css'
import { useEffect, useState } from "react";
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'

export default function Home() {
  const eventsService = useState(() => createEventsServicePlugin())[0]

  const calendar = useNextCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2023-12-16',
        end: '2026-12-16',
      },
    ],
    selectedDate: '2025-04-24',
    plugins: [
      eventsService,
      createEventModalPlugin(),
      createDragAndDropPlugin()
    ],
    callbacks: {
      onRender: () => {
        // get all events
        eventsService.getAll()
      }
    }
  })
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}
