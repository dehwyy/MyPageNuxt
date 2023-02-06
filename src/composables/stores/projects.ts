const nextCards = '/projects/nextcards'
export const useProjectsStore = definePiniaStore('projects', {
  state: () => ({
    nextCards: {
      title: 'UseMemorize',
      description: 'this is description',
      stack: ['Next', 'Nest', 'GraphQL', 'Apollo'],
      personalRate: 4,
      images: [
        { imageUrl: `${nextCards}/main.jpg`, text: 'Main page' },
        { imageUrl: `${nextCards}/collections.jpg`, text: 'Collections page' },
        { imageUrl: `${nextCards}/quizcards.jpg`, text: 'QuizCards page' },
        { imageUrl: `${nextCards}/reg.jpg`, text: 'Registration page' },
      ],
    },
  }),
})
