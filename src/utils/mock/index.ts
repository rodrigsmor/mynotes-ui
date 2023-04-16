import { CategoriesEnums } from "../enums/CategoriesEnums";
import { collectionSummaryType } from "../types/collection";
import { NoteCardTypes } from "../types/note-card";

export const noteCardsHome: Array<NoteCardTypes> = [
  {
    id: 12,
    title: 'Inament nulla posuere sollicitudin aliquam ultrices sagittis',
    content: 'Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed lectus vestibulum mattis ullamcorper velit. Nisi quis eleifend quam adipiscing. Tempor orci dapibus ultrices in iaculis.',
    category: CategoriesEnums.PERSONAL,
    coverUrl: 'https://img.freepik.com/premium-photo/abstract-3d-illustration-colorful-paint-background_562847-565.jpg',
    lastUpdate: new Date('2023-04-17T15:34:04Z'),
    imageUrl: 'https://ipfs.pixura.io/ipfs/QmPv38KxngLEet67cYW8vNMPti8JAkiSiFM3Bnm3gCoqy7/ColorfulSky.jpg'
  }, {
    id: 24,
    title: 'Mi eget mauris pharetra et ultrices',
    content: 'Nullam eget felis eget nunc lobortis mattis. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet. ',
    category: CategoriesEnums.OTHER,
    coverUrl: 'https://crosscut.com/sites/default/files/images/articles/fun_day_cbr-3.jpg',
    lastUpdate: new Date('2019-03-14T21:01:18Z'),
    imageUrl: 'https://ih1.redbubble.net/image.1175401393.9659/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg'
  }, {
    id: 32,
    title: 'Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et',
    content: 'Tincidunt vitae semper quis lectus nulla at. Morbi leo urna molestie at elementum.',
    category: CategoriesEnums.GOALS,
    coverUrl: 'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8',
    lastUpdate: new Date('2015-08-20T19:38:34Z'),
    imageUrl: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iGCW.4KXc0xo/v0/-1x-1.jpg'
  }, {
    id: 4,
    title: 'Magna fermentum iaculis eu non diam phasellus',
    content: 'Tellus id interdum velit laoreet id donec ultrices. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Eget nulla facilisi etiam dignissim diam.',
    category: CategoriesEnums.STUDIES,
    coverUrl: 'https://www.incimages.com/uploaded_files/image/1024x576/getty_1030253878_417781.jpg',
    lastUpdate: new Date('2020-04-08T10:28:42Z'),
    imageUrl: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
  }, {
    id: 23,
    title: 'Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu',
    content: 'Laoreet non curabitur gravida arcu ac tortor dignissim. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. ',
    category: CategoriesEnums.TASKS,
    coverUrl: 'https://www.viewsonic.com/library/wp-content/uploads/2021/03/LB0216-01.jpg',
    lastUpdate: new Date('2020-05-23T20:47:36Z'),
    imageUrl: 'https://www.jotform.com/blog/wp-content/uploads/2020/05/work-from-home-featured-02.png'
  }, {
    id: 52,
    title: 'Nibh tellus molestie nunc non blandit. ',
    content: 'Mi quis hendrerit dolor magna eget. Neque laoreet suspendisse interdum consectetur libero. Curabitur vitae nunc sed velit dignissim. In dictum non consectetur a erat nam at.',
    category: CategoriesEnums.HOME,
    coverUrl: 'https://4kwallpapers.com/images/walls/thumbs_2t/5630.jpg',
    lastUpdate: new Date('2016-05-09T18:04:42Z'),
    imageUrl: 'data:image/jpeg;base64,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'
  }, {
    id: 123,
    title: 'Porta lorem mollis aliquam ut porttitor leo.',
    content: 'Nibh sit amet commodo nulla facilisi nullam. Nullam eget felis eget nunc lobortis mattis. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Fames ac turpis egestas integer eget aliquet. ',
    category: CategoriesEnums.PROFESSIONAL,
    coverUrl: 'https://wallup.net/wp-content/uploads/2015/12/102302-abstract.jpg',
    lastUpdate: new Date('2013-11-07T00:04:47Z'),
    imageUrl: 'https://free4kwallpapers.com/uploads/originals/2022/04/20/rubiks-cube-digital-art-wallpaper.jpg'
  }, {
    id: 82,
    title: 'Lectus quam id leo in vitae. - laoman Et set 8291',
    content: 'Erat velit scelerisque in dictum non consectetur a erat. Volutpat odio facilisis mauris sit amet massa vitae tortor. Proin fermentum leo vel orci porta non pulvinar neque. Nibh tellus molestie nunc non blandit. Duis tristique sollicitudin nibh sit amet commodo nulla. Porta lorem mollis aliquam ut porttitor leo. Velit aliquet sagittis id consectetur purus ut faucibus. Pretium aenean pharetra magna ac. Consequat mauris nunc congue nisi.',
    category: CategoriesEnums.PERSONAL,
    coverUrl: 'https://wallpaperaccess.com/full/1683478.jpg',
    lastUpdate: new Date('2014-08-19T00:58:16Z'),
    imageUrl: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 5,
    title: 'Nisl vel pretium lectus quam id leo. Vitae congue mauris rhoncus aenean vel elit scelerisque. ',
    content: 'Fermentum iaculis eu non diam. Dictum non consectetur a erat nam at lectus urna duis. Tellus at urna condimentum mattis pellentesque id.',
    category: CategoriesEnums.WORK,
    coverUrl: 'https://images8.alphacoders.com/105/1053415.jpg',
    lastUpdate: new Date('2014-03-11T23:45:40Z'),
    imageUrl: 'https://wallpaperaccess.com/full/3480781.jpg'
  }, {
    id: 62,
    title: 'In the deep bosom of the ocean buried.',
    content: 'Fringilla phasellus faucibus scelerisque eleifend donec pretium. Pellentesque habitant morbi tristique senectus et. Facilisis gravida neque convallis a. ',
    category: CategoriesEnums.PROFESSIONAL,
    coverUrl: 'https://guardian.ng/wp-content/uploads/2021/11/Art-X-1062x598.jpg',
    lastUpdate: new Date('2010-01-22T10:13:16Z'),
    imageUrl: 'https://guardian.ng/wp-content/uploads/2021/02/Six-artists-of-Fate-VII-2-591x598.jpg'
  }, {
    id: 110,
    title: 'Now is the winter of our discontent',
    content: 'A arcu cursus vitae congue. A scelerisque purus semper eget duis. Non nisi est sit amet facilisis magna etiam tempor. Fermentum dui faucibus in ornare quam viverra orci sagittis eu.',
    category: CategoriesEnums.TASKS,
    coverUrl: 'https://static01.nyt.com/images/2022/07/31/arts/31ukraine-notebook-rubens/31ukraine-notebook1-mobileMasterAt3x.jpg',
    lastUpdate: new Date('2010-04-16T08:18:36Z'),
    imageUrl: 'https://news.artnet.com/app/news-upload/2021/09/n-6461-00-000039-hd-1024x927.jpeg'
  }, {
    id: 425,
    title: 'Moons in the Storms',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: CategoriesEnums.GOALS,
    coverUrl: 'https://c4.wallpaperflare.com/wallpaper/758/562/507/5c1c8b85e2348-wallpaper-preview.jpg',
    lastUpdate: new Date('2011-05-12T11:08:33Z'),
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4plH4kRNCVSnQkqwU9n-zjEG-iW4cmuehg&usqp=CAU'
  },
]

type NotePendingType = {
  id: number;
  title: string;
  deadline: Date;
  category: CategoriesEnums;
}

export const notePending: Array<NotePendingType> = [
  {
    id: 12,
    category: CategoriesEnums.PURCHASES,
    deadline: new Date('2028-12-02T08:32:28Z'),
    title: 'Pagar o boleto do aluguel'
  }, {
    id: 28,
    category: CategoriesEnums.SCHOOL,
    deadline: new Date('2023-02-28T13:12:58Z'),
    title: 'Passear com o cachorro'
  }, {
    id: 234,
    category: CategoriesEnums.HOME,
    deadline: new Date('2025-06-27T09:38:16Z'),
    title: 'Falar com o gestor sobre a entrega do trabalho'
  }, {
    id: 224,
    category: CategoriesEnums.GOALS,
    deadline: new Date('2025-06-27T09:38:16Z'),
    title: 'Falar com o gestor sobre a entrega do trabalho'
  }, {
    id: 194,
    category: CategoriesEnums.TASKS,
    deadline: new Date('2025-06-27T09:38:16Z'),
    title: 'Falar com o gestor sobre a entrega do trabalho'
  }, {
    id: 314,
    category: CategoriesEnums.WORK,
    deadline: new Date('2025-06-27T09:38:16Z'),
    title: 'Falar com o gestor sobre a entrega do trabalho'
  },
]

export const collectionsSummary: Array<collectionSummaryType> = [
  {
    id: 0,
    notesAmount: 12,
    name: 'Metas de 2023',
    category: CategoriesEnums.GOALS,
  }, {
    id: 1,
    notesAmount: 32,
    name: 'Coisas para fazer no meu final de semana',
    category: CategoriesEnums.PERSONAL,
  }, {
    id: 2,
    notesAmount: 8,
    name: 'Conteúdos de apoio para a faculdade',
    category: CategoriesEnums.SCHOOL,
  }
]