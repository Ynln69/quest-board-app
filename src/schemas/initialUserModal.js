export const initialUserModel = {
  username: 'Best User',
  email: 'bestUser@gmail.com',
  password: 'qwerty',
  avatarURL: '',
  token: '',
  theme: 'LIGHT',
  boards: [
    {
      id: '329bbadef31894837aed37f3a6843c396',
      title: 'Best board',
      icon: 'vector',
      background: 'forest',
      boardsData: {
        tasks: {
          '19f0d88c3a50a45f0aa8a111c4dfdd70f': {
            id: '19f0d88c3a50a45f0aa8a111c4dfdd70f',
            title: 'Add tasks',
            description: 'Figure out what to do',
            priority: 'priority',
            deadline: '15:00 15.08.2023',
          },
          '176d3b628c5f44bff97861b5b083a3ff0': {
            id: '176d3b628c5f44bff97861b5b083a3ff0',
            title: 'Create a repository',
            description: 'Instruct someone to create a project repositoryo',
            priority: 'priority',
            deadline: '15:00 15.08.2023',
          },
        },
        columns: {
          '25028b3f295854125bb413ce1a484c0c8': {
            id: '25028b3f295854125bb413ce1a484c0c8',
            title: 'To do',
            taskIds: [
              '19f0d88c3a50a45f0aa8a111c4dfdd70f',
              '176d3b628c5f44bff97861b5b083a3ff0',
            ],
          },
          '2622aab9120e046c3971cb4de36555e64': {
            id: '2622aab9120e046c3971cb4de36555e64',
            title: 'In progress',
            taskIds: [],
          },
        },
        columnOrder: [
          '25028b3f295854125bb413ce1a484c0c8',
          '2622aab9120e046c3971cb4de36555e64',
        ],
      },
    },
  ],
};
