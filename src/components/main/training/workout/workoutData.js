const workoutData = [
  {
    title: 'Squat',
    level: 1,
    image:
      'https://images.unsplash.com/flagged/photo-1566064336477-864e4f308992?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    imageAlt: 'squat',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'gambe e glutei',
  },
  {
    title: 'Push Ups',
    level: 1,
    image:
      'https://images.unsplash.com/photo-1566351566999-d975d35c3325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    imageAlt: 'Push Ups',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'petto',
  },

  {
    title: 'Jumping jacks',
    level: 3,
    image:
      'https://images.unsplash.com/photo-1587433093163-49f2914e17e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    imageAlt: 'Jumping jacks',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'brucia grassi, gambe e glutei',
  },
  {
    title: 'Plank',
    level: 3,
    image:
      'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    imageAlt: 'Plank',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'addominali',
  },
  {
    title: 'Jumping jacks',
    level: 1,
    image:
      'https://images.unsplash.com/photo-1587433093163-49f2914e17e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    imageAlt: 'Jumping jacks',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'brucia grassi',
  },
  {
    title: 'Jumping jacks',
    level: 1,
    image:
      'https://images.unsplash.com/photo-1587433093163-49f2914e17e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    imageAlt: 'Jumping jacks',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'brucia grassi',
  },
  {
    title: 'Plank',
    level: 2,
    image:
      'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    imageAlt: 'Plank',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'legs',
  },
  {
    title: 'Jumping jacks',
    level: 2,
    image:
      'https://images.unsplash.com/photo-1587433093163-49f2914e17e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    imageAlt: 'Jumping jacks',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'brucia grassi',
  },
  {
    title: 'Jumping jacks',
    level: 3,
    image:
      'https://images.unsplash.com/photo-1587433093163-49f2914e17e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    imageAlt: 'Jumping jacks',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'gambe e glutei',
  },
  {
    title: 'Plank',
    level: 1,
    image:
      'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    imageAlt: 'Plank',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'addominali',
  },
  {
    title: 'Jumping jacks',
    level: 1,
    image:
      'https://images.unsplash.com/photo-1587433093163-49f2914e17e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    imageAlt: 'Jumping jacks',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'brucia grassi',
  },
  {
    title: 'Jumping jacks',
    level: 2,
    image:
      'https://images.unsplash.com/photo-1587433093163-49f2914e17e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    imageAlt: 'Jumping jacks',
    description:
      'this is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is athis is a',
    category: 'brucia grassi',
  },
];

export default workoutData;
