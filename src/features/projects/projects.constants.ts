import type { Project } from "./projects.types";

export const projectList: Project[] = [
  {
    name: 'SOLO by MYOB',
    description: [
      'SOLO by MYOB is a fresh and new accounting app tailored for sole traders in Australia. It allows them to create invoices easily, track their expenses with ease by capturing their receipts and uploading it to the app, and check out their cash flow and financial reports.',
      'One of the standout features of this app is the Tap to Pay feature which allows users to take a payment on the spot via their phone and getting their customer to tap their card or phone. I was one of the two devs that built this feature in the app, working with the Stripe Terminal SDK to enable this native functionality.',
      'The app was built with React Native and currently has a ~5 star rating on the App Store and a ~4.5 star rating on the Google Play Store (at the time of writing this, it may have changed slightly).'
    ],
    technologies: [
      'React Native',
      'GraphQL',
      'Redux',
      'Stripe',
      'Auth0',
      'Bitrise',
      'Buildkite',
      'RNTL'
    ],
    links: {
      website: 'https://www.myob.com/au/products/solo',
      appStore: 'https://apps.apple.com/au/app/solo-by-myob-admin-made-easy/id6502329894',
      playStore: 'https://play.google.com/store/apps/details?id=com.myob.solo.android&hl=en'
    }
  },
  {
    name: 'Samsung BESPOKE Fridge Configurator',
    description: [
      'The Samsung BESPOKE Fridge Configurator enables customers to choose combinations of fridges and visualise their creations whilst viewing extra details about their order.',
      'I built multiple variations of the configurator, there are two versions that are on in-store tablets in Harvey Norman, The Good Guys, and Winnings Appliances. I also built out another version that I supplied to the developers at these retailers for them to integrate into their websites.',
      'Unfortunately the web app is no longer available as it was only for a promotion for the Samsung BESPOKE Fridge when it first came to the Australian market, which has now ended.'
    ],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'qrcode.js',
      'gulp.js'
    ],
    links: {
      website: 'https://www.linkedin.com/pulse/cheil-australia-gets-personal-integrated-digital-to-retail-/'
    }
  },
  {
    name: "Rise n' SIUUU",
    description: [
      "Rise n' SIUUU is an app that I made for fun. It's a fun little alarm app that plays the SIUUU noise that Cristiano Ronaldo makes when he celebrates. It's available on the App Store and Google Play.",
      "The app had 1600+ downloads on the App Store and 600+ downloads on Google Play. However, it is no longer on the App Store as I didn't renew my developer subscription and it's also no longer available on the Play Store as my account got deactivated recently due to inactivity."
    ],
    technologies: [
      'Swift',
      'Swift UI',
      'Kotlin'
    ],
    links: {
      website: 'https://risensiuuu.netlify.app/',
      github: 'https://github.com/nkhatri7/Rise-n-SIUUU'
    }
  }
]