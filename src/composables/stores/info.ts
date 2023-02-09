export const useInfoStore = definePiniaStore('info', {
  state: (): ICreateInfoStore => ({
    jp: {
      name: '私はエゴるで',
      hobbies: ['日本語を勉強する', 'IT', '本を読むこと'],
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
      'https://avatars.githubusercontent.com/u/103949460?v=4',
      'https://sun9-68.userapi.com/impg/-YEwOep1yOHZmV6F3-Z8XC_HP2GDiOoEP6XekA/_OTpcMMEyNI.jpg?size=828x807&quality=95&sign=89373c2f858271c65aae3d19fd2beb59&type=album',
      'https://sun9-85.userapi.com/impg/QiH9W0PobEjVjZsuDwGX5iKnDFuuyI7fGVx_5A/VZxGwaA_u1k.jpg?size=850x1185&quality=95&sign=b515481bffd26e100e8256f7ba4e2b79&type=album',
      'https://sun9-53.userapi.com/impf/D_A8deC9rntGbNhK6BwU5Kg41oLByzWNvGHl_Q/-1wdqpUdnI0.jpg?size=1053x1053&quality=96&sign=4af8e5eaf195eebd1c83472e3e0105d2&type=album',
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
