// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/1', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('1', {
    // ↙ сюди вводимо JSON дані
    title: 'Resume',
    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },
    position: 'Junior Fullstack JS Developer',

    social: {
      email: {
        text: 'ivan@mail.com',
        href: 'mailto:ivan@mail.com',
      },

      phone: {
        text: '+3806700001',
        href: 'tel:+380670000123',
      },
      linkedIn: {
        text: '+LinkedIn',
        href: 'https://www.linkedin.com/in/dmytro-test',
      },
    },
  })
})
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    title: 'Resume',
    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },
    position: 'Junior Fullstack JS Developer',

    salary: '600$ в місяць',

    social: {
      email: {
        text: 'ivan@mail.com',
        href: 'mailto:ivan@mail.com',
      },

      phone: {
        text: '+3806700001',
        href: 'tel:+380670000123',
      },
      linkedIn: {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dmytro-test',
      },
      instagram: {
        text: 'instagram',
        href: 'https://www.instagram.com/ework.com.ua',
      },
    },
    experience: {
      title: 'Content manager',
      text: 'from 09.2017 to 01.2022 (4 years 4 months)',
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
