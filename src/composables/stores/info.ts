export const useInfoStore = definePiniaStore('info', {
  state: (): ICreateInfoStore => ({
    jp: {
      name: '私はエゴるで',
      hobbies: ['日本語を勉強すること', 'IT', '本を読むこと'],
      hobbiesText: '私の趣味:',
      age: '16歳だ',
      info: 'ITが好きなんだ',
      techText: '知っているtechs:',
    },
    rus: {
      name: 'Меня зовут Егор',
      hobbies: ['Изучение японского', 'Программирование', 'Чтение'],
      hobbiesText: 'Мои увлечения:',
      age: 'Мне 16 лет',
      info: 'Мне нравится программирование',
      techText: 'Technologies stack:',
    },
    eng: {
      name: 'My name is Egor',
      hobbies: ['Learning japanese', 'Coding', 'Reading'],
      hobbiesText: 'My hobbies:',
      age: "I'm 16",
      info: 'I enjoy coding',
      techText: 'Я знаю:',
    },
    profileImages: [
      '/giga.jpg',
      '/K.jpg',
      '/N.jpg',
      '/I.jpg',
    ],
    techs: {
      frameworks: {text: "Frameworks", techs: ["React", "Vue", "Solid", "Next", "Nuxt", "Nest", "Express"]},
      ui: { text: "UI", techs: ["Materialize", "Tailwind", "MaterialUI", "Bootstrap", "Styled-components", "Emotion"]},
      utilsForFrameworks: {text: "Utilities",techs: ["Vuex", "MobX", "Pinia", "Apollo", "RTK", 'Axios', 'Ky', "React-hook-form", "Formik", ] },
      integrationWithDb: {text: "Databases", techs: ['MongoDB', 'Postgres', 'Mongoose', 'Typeorm']},
      bundlers: { text: "Bundlers", techs: ["Vite", "Webpack", "Esbuild",'Babel',]},
      codeQuality: {text: "Code quality", techs: ['Prettier','ESlint']},
      security: {text: "Security", techs: ['JWT', 'Bcryptjs', 'Env']},
      testing: {text: "Testing", techs: ['Jest',  'Cypress', 'Swagger', 'Supertest', 'Testing-library', 'Vitest', "Postman"]},
      wellKnown: {text: "Extra", techs: ['Typescript','Websockets', 'Graphql', 'PWA', "SOLID", "MV-patterns", "Feature-sliced Arch", "Module Arch",'Canvas','Python',]}
    }
  }),
  getters: {
    getLocals: ({ jp, eng, rus }): ILocalFields[] => {
      return [rus, jp, eng]
    },
    getTechs: ({techs}) => {
      return Object.values(techs)
    }
  },
  persist: false,
})
