const nextCards = '/projects/nextcards'
const social = '/projects/social'
const solidCards = '/projects/solidcards'
export const useProjectsStore = definePiniaStore('projects', {
  state: (): IProjectStore => ({
    nextCards: {
      title: 'UseMemorize',
      description: 'Next/Graphql App, UseMemorize should be helpful tool for memorizing different kind of information like foreign words or maybe math formulas<PROJECT IS UNFINISHED>',
      stack: ['Next', 'Nest', 'GraphQL', 'Apollo'],
      personalRate: 7,
      images: [
        { imageUrl: `${nextCards}/main.jpg`, text: 'Main page' },
        { imageUrl: `${nextCards}/collections.jpg`, text: 'Collections page' },
        { imageUrl: `${nextCards}/quizcards.jpg`, text: 'QuizCards page' },
        { imageUrl: `${nextCards}/reg.jpg`, text: 'Registration page' },
      ],
    },
    social: {
      title: 'WebSocial',
      description: 'Full stack social with JWT(access + refresh) authorization, posts, profile information, friends, view of other profiles',
      stack: ['React', 'Express', 'Mongoose', 'RtkQuery'],
      personalRate: 8,
      images: [
        { imageUrl: `${social}/main.jpg`, text: 'Profile page' },
        { imageUrl: `${social}/friends.jpg`, text: 'Friends page' },
        { imageUrl: `${social}/posts.jpg`, text: '' },
        { imageUrl: `${social}/login.jpg`, text: 'Auth page' },
      ],
    },
    solidCards: {
      title: 'SolidCards',
      description: 'Light version of "UseMemorize", but with REST and Solidjs',
      stack: ['Solid', 'Nest', 'Postgres', 'Typeorm'],
      personalRate: 4,
      images: [
        { imageUrl: `${solidCards}/main.jpg`, text: 'Main page' },
        { imageUrl: `${solidCards}/cards.jpg`, text: 'Cards page' },
        { imageUrl: `${solidCards}/card.jpg`, text: 'QuizCards page' },
        { imageUrl: `${solidCards}/cardedit.jpg`, text: 'Editing card' },
        { imageUrl: `${solidCards}/playcard.jpg`, text: 'Card usage' },
        { imageUrl: `${solidCards}/exp.jpg`, text: 'Explanation page' },
      ],
    },
  }),
  getters: {
    getCards: ({ nextCards, solidCards, social }) => {
      return [nextCards, solidCards, social]
    },
  },
})
