import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sportsUpdate',
  title: 'Sports Update',
  type: 'document',
  fields: [
    defineField({
      name: 'sport',
      title: 'Sport',
      type: 'string',
    }),
    defineField({
      name: 'team1',
      title: 'Team 1',
      type: 'string',
    }),
    defineField({
      name: 'team2',
      title: 'Team 2',
      type: 'string',
    }),
    defineField({
      name: 'score',
      title: 'Score',
      type: 'string',
    }),
    defineField({
      name: 'over',
      title: 'Overs/Duration',
      type: 'string',
    }),
    defineField({
      name: 'result',
      title: 'Result',
      type: 'string',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'sport',
      subtitle: 'venue',
    },
  },
})
