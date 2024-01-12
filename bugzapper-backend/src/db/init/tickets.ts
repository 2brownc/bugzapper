import type { ticket } from '../../types/types';

export const ticketsProjectCosmos: ticket[] = [
  {
    "title": "Fix the collision detection of the spaceship and the asteroids",
    "description": "The spaceship sometimes passes through the asteroids without taking any damage or triggering any sound effects. This breaks the immersion and the gameplay balance of the game.",
    "eta": new Date("2024-01-15"),
    "comments": [
      {
        "text": "I have reproduced this bug on the latest build. It seems to happen randomly.",
        "date": new Date("2024-01-10")
      },
      {
        "text": "I have found the cause of the bug. It is due to a floating point error in the collision detection algorithm. I am working on a fix.",
        "date": new Date("2024-01-11")
      },
      {
        "text": "I have fixed the bug and pushed the changes to the repository. Please test and confirm.",
        "date": new Date("2024-01-12")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": [
      "bug",
      "collision",
      "spaceship",
      "asteroid"
    ],
    "created_at": new Date("2024-01-09"),
    "updated_at": new Date("2024-01-12")
  },
  {
    "title": "Add more variety and detail to the planets and moons",
    "description": "The planets and moons in the game are currently very bland and repetitive. They need more textures, colors, atmospheres, and features to make them more realistic and interesting.",
    "eta": new Date("2024-01-31"),
    "comments": [
      {
        "text": "I agree that the planets and moons need more work. I have some ideas for improving them.",
        "date": new Date("2024-01-13")
      },
      {
        "text": "I have created some mockups of the new planets and moons. Please review and give feedback.",
        "date": new Date("2024-01-18")
      },
      {
        "text": "I have implemented the new planets and moons in the game. They look much better now.",
        "date": new Date("2024-01-25")
      }
    ],
    "priority": "normal",
    "status": "ongoing",
    "tags": [
      "enhancement",
      "planet",
      "moon",
      "graphics"
    ],
    "created_at": new Date("2024-01-13"),
    "updated_at": new Date("2024-01-25")
  },
  {
    "title": "Implement a save and load system for the game",
    "description": "The game currently does not have a save and load system. The player has to start from the beginning every time they play. This is very frustrating and inconvenient. The game needs a save and load system that allows the player to resume their progress at any time.",
    "eta": new Date("2024-02-15"),
    "comments": [
      {
        "text": "This is a very important feature for the game. I will start working on it as soon as possible.",
        "date": new Date("2024-01-20")
      },
      {
        "text": "I have encountered some difficulties with the save and load system. It is not easy to serialize and deserialize the game state. I need more time to finish it.",
        "date": new Date("2024-01-30")
      },
      {
        "text": "I have completed the save and load system. It works fine on my machine. Please test and confirm.",
        "date": new Date("2024-02-10")
      }
    ],
    "priority": "high",
    "status": "open",
    "tags": [
      "feature",
      "save",
      "load",
      "gameplay"
    ],
    "created_at": new Date("2024-01-20"),
    "updated_at": new Date("2024-02-10")
  },
  {
    "title": "Add a multiplayer mode to the game",
    "description": "The game currently only supports single-player mode. It would be more fun and engaging if it had a multiplayer mode where players can cooperate or compete with each other in exploring the space.",
    "eta": new Date("2024-03-31"),
    "comments": [
      {
        "text": "This is a very ambitious and complex feature. It would require a lot of changes to the game engine, network, and UI. It is not feasible to implement it in the current timeline.",
        "date": new Date("2024-01-22")
      },
      {
        "text": "I understand that this is a big feature, but I think it would greatly improve the game's appeal and replay value. Can we at least consider it for the future updates?",
        "date": new Date("2024-01-23")
      },
      {
        "text": "We can consider it for the future updates, but we have to focus on the core features and polish the game first. We have to prioritize the quality over the quantity of the game.",
        "date": new Date("2024-01-24")
      }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": [
      "feature",
      "multiplayer",
      "network",
      "UI"
    ],
    "created_at": new Date("2024-01-22"),
    "updated_at": new Date("2024-01-24")
  }
];

export const ticketsFoodzillaApp: ticket[] = [
  {
    "title": "Fix the crash when adding items to the cart",
    "description": "The app sometimes crashes when the user tries to add items to the cart from the menu screen. This is a critical bug that affects the user experience and the revenue of the app.",
    "eta": new Date("2024-01-16"),
    "comments": [
      {
        "text": "I have reproduced this bug on the Android version of the app. It seems to happen when the user adds more than 10 items to the cart.",
        "date": new Date("2024-01-10")
      },
      {
        "text": "I have found the cause of the bug. It is due to a memory leak in the cart manager class. I am working on a fix.",
        "date": new Date("2024-01-11")
      },
      {
        "text": "I have fixed the bug and pushed the changes to the repository. Please test and confirm.",
        "date": new Date("2024-01-12")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["bug", "crash", "cart", "android"],
    "created_at": new Date("2024-01-10"),
    "updated_at": new Date("2024-01-12")
  },
  {
    "title": "Implement a rating and review system for the restaurants",
    "description": "The app currently does not have a rating and review system for the restaurants. The users should be able to rate and review the restaurants they have ordered from, and see the ratings and reviews of other users. This would enhance the app's functionality and user satisfaction.",
    "eta": new Date("2024-01-31"),
    "comments": [
      {
        "text": "This is a good feature to have for the app. I will start working on it as soon as possible.",
        "date": new Date("2024-01-15")
      },
      {
        "text": "I have designed the UI for the rating and review system. Please review and give feedback.",
        "date": new Date("2024-01-20")
      },
      {
        "text": "I have implemented the backend for the rating and review system. It uses Firebase as the database and Cloud Functions as the serverless functions. Please test and confirm.",
        "date": new Date("2024-01-25")
      }
    ],
    "priority": "normal",
    "status": "ongoing",
    "tags": ["feature", "rating", "review", "firebase"],
    "created_at": new Date("2024-01-15"),
    "updated_at": new Date("2024-01-25")
  },
  {
    "title": "Add a loyalty program for the users",
    "description": "The app currently does not have a loyalty program for the users. The users should be able to earn points and redeem rewards for using the app. This would increase the app's retention and engagement rates.",
    "eta": new Date("2024-02-28"),
    "comments": [
      {
        "text": "This is a nice feature to have for the app. I have some ideas for the loyalty program.",
        "date": new Date("2024-01-18")
      },
      {
        "text": "I have created a proposal for the loyalty program. It includes the point system, the reward system, and the user interface. Please review and give feedback.",
        "date": new Date("2024-01-23")
      },
      {
        "text": "I have started working on the loyalty program. It will take some time to finish it.",
        "date": new Date("2024-01-30")
      }
    ],
    "priority": "low",
    "status": "open",
    "tags": ["feature", "loyalty", "reward", "point"],
    "created_at": new Date("2024-01-18"),
    "updated_at": new Date("2024-01-30")
  },
  {
    "title": "Integrate the app with Google Pay and Apple Pay",
    "description": "The app currently only supports credit card and cash payments. It would be more convenient and secure if it also supported Google Pay and Apple Pay as payment options.",
    "eta": new Date("2024-03-31"),
    "comments": [
      {
        "text": "This is a very complex and time-consuming feature. It would require a lot of changes to the app's payment system and integration with third-party services. It is not feasible to implement it in the current timeline.",
        "date": new Date("2024-01-22")
      },
      {
        "text": "I understand that this is a big feature, but I think it would greatly improve the app's usability and security. Can we at least consider it for the future updates?",
        "date": new Date("2024-01-24")
      },
      {
        "text": "We can consider it for the future updates, but we have to focus on the core features and polish the app first. We have to prioritize the quality over the quantity of the app.",
        "date": new Date("2024-01-26")
      }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": ["feature", "payment", "google_pay", "apple_pay"],
    "created_at": new Date("2024-01-22"),
    "updated_at": new Date("2024-01-26")
  }
];

export const ticketsHealthTrack: ticket[] = [
  {
    "title": "Redesign the home screen of the app",
    "description": "The home screen of the app is currently cluttered and confusing. It needs to be redesigned to be more user-friendly and intuitive. The home screen should show the user's daily progress, goals, and suggestions in a clear and attractive way.",
    "eta": new Date("2024-01-15"),
    "comments": [
      {
        "text": "I have created some wireframes for the new home screen. Please review and give feedback.",
        "date": new Date("2024-01-05")
      },
      {
        "text": "I have implemented the new home screen design in the app. It looks much better now.",
        "date": new Date("2024-01-10")
      },
      {
        "text": "I have tested the new home screen design on different devices and resolutions. It works fine and is responsive.",
        "date": new Date("2024-01-12")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["design", "home_screen", "UI", "UX"],
    "created_at": new Date("2024-01-05"),
    "updated_at": new Date("2024-01-12")
  },
  {
    "title": "Add a sleep tracking feature to the app",
    "description": "The app currently does not have a sleep tracking feature. The users should be able to track their sleep quality and duration using the app. The app should also provide insights and tips on how to improve their sleep habits.",
    "eta": new Date("2024-01-31"),
    "comments": [
      {
        "text": "This is a good feature to have for the app. I will start working on it as soon as possible.",
        "date": new Date("2024-01-16")
      },
      {
        "text": "I have researched some APIs and libraries for sleep tracking. I have decided to use Google Fit API and Sleep as Android SDK for this feature.",
        "date": new Date("2024-01-20")
      },
      {
        "text": "I have integrated the sleep tracking feature in the app. It can record the user's sleep cycles, duration, and quality. It can also generate reports and suggestions based on the user's sleep data.",
        "date": new Date("2024-01-25")
      }
    ],
    "priority": "normal",
    "status": "ongoing",
    "tags": ["feature", "sleep_tracking", "API", "SDK"],
    "created_at": new Date("2024-01-16"),
    "updated_at": new Date("2024-01-25")
  },
  {
    "title": "Implement a social media integration for the app",
    "description": "The app currently does not have a social media integration. The users should be able to share their progress, achievements, and challenges with their friends and followers on social media platforms such as Facebook, Twitter, and Instagram.",
    "eta": new Date("2024-02-28"),
    "comments": [
      {
        "text": "This is a nice feature to have for the app. I have some ideas for the social media integration.",
        "date": new Date("2024-01-18")
      },
      {
        "text": "I have created a proposal for the social media integration. It includes the UI design, the functionality, and the privacy settings. Please review and give feedback.",
        "date": new Date("2024-01-23")
      },
      {
        "text": "I have started working on the social media integration. It will take some time to finish it.",
        "date": new Date("2024-01-30")
      }
    ],
    "priority": "low",
    "status": "open",
    "tags": ["feature", "social_media", "integration", "sharing"],
    "created_at": new Date("2024-01-18"),
    "updated_at": new Date("2024-01-30")
  },
  {
    "title": "Support dark mode for the app",
    "description": "The app currently only supports light mode. It would be more comfortable and accessible if it also supported dark mode as an option for the users.",
    "eta": new Date("2024-03-31"),
    "comments": [
      {
        "text": "This is a very complex and time-consuming feature. It would require a lot of changes to the app's UI and color scheme. It is not feasible to implement it in the current timeline.",
        "date": new Date("2024-01-22")
      },
      {
        "text": "I understand that this is a big feature, but I think it would greatly improve the app's usability and appearance. Can we at least consider it for the future updates?",
        "date": new Date("2024-01-24")
      },
      {
        "text": "We can consider it for the future updates, but we have to focus on the core features and polish the app first. We have to prioritize the quality over the quantity of the app.",
        "date": new Date("2024-01-26")
      }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": ["feature", "dark_mode", "UI", "color"],
    "created_at": new Date("2024-01-22"),
    "updated_at": new Date("2024-01-26")
  }
];

export const ticketsGreenerEnergyInitiative: ticket[] = [
  {
    "title": "Develop a user authentication and authorization system",
    "description": "The platform needs a user authentication and authorization system that allows users to sign up, log in, and access different features based on their roles and permissions. The system should also support password recovery, email verification, and social login options.",
    "eta": new Date("2024-01-15"),
    "comments": [
      {
        "text": "I have chosen Firebase Authentication as the service for the user authentication and authorization system. It provides a secure and scalable solution that supports various authentication methods and integrates well with other Firebase services.",
        "date": new Date("2024-01-05")
      },
      {
        "text": "I have implemented the basic functionality of the user authentication and authorization system. Users can sign up, log in, and log out using email and password or Google account. Users also have different roles and permissions based on their account type.",
        "date": new Date("2024-01-10")
      },
      {
        "text": "I have added some additional features to the user authentication and authorization system. Users can reset their password, verify their email, and edit their profile. Users can also view their energy consumption and sustainability goals on their dashboard.",
        "date": new Date("2024-01-12")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["development", "user", "authentication", "authorization", "firebase"],
    "created_at": new Date("2024-01-05"),
    "updated_at": new Date("2024-01-12")
  },
  {
    "title": "Design a responsive and user-friendly web interface",
    "description": "The platform needs a responsive and user-friendly web interface that adapts to different screen sizes and devices. The interface should also follow the principles of web accessibility and usability. The interface should have a consistent and appealing look and feel across the platform.",
    "eta": new Date("2024-01-31"),
    "comments": [
      {
        "text": "This is an important task for the platform. I will start working on it as soon as possible.",
        "date": new Date("2024-01-16")
      },
      {
        "text": "I have created some mockups and prototypes for the web interface. Please review and give feedback.",
        "date": new Date("2024-01-20")
      },
      {
        "text": "I have implemented the web interface using HTML, CSS, and Bootstrap. It is responsive and user-friendly. It also follows the web accessibility and usability guidelines.",
        "date": new Date("2024-01-25")
      }
    ],
    "priority": "normal",
    "status": "ongoing",
    "tags": ["design", "web", "interface", "responsive", "user-friendly"],
    "created_at": new Date("2024-01-16"),
    "updated_at": new Date("2024-01-25")
  },
  {
    "title": "Integrate the platform with external APIs for energy data and sustainability metrics",
    "description": "The platform needs to integrate with external APIs for energy data and sustainability metrics. The platform should be able to fetch, store, and display the energy consumption and sustainability goals of the users and the organizations. The platform should also be able to provide recommendations and feedback based on the data and metrics.",
    "eta": new Date("2024-02-28"),
    "comments": [
      {
        "text": "This is a nice feature to have for the platform. I have some ideas for the external APIs to use.",
        "date": new Date("2024-01-18")
      },
      {
        "text": "I have selected some external APIs for energy data and sustainability metrics. They are: Energy Information Administration API, Green Button API, and Carbon Footprint API. They provide reliable and relevant data and metrics for the platform.",
        "date": new Date("2024-01-23")
      },
      {
        "text": "I have started working on the integration of the external APIs with the platform. It will take some time to finish it.",
        "date": new Date("2024-01-30")
      }
    ],
    "priority": "low",
    "status": "open",
    "tags": ["integration", "API", "energy", "sustainability", "data", "metrics"],
    "created_at": new Date("2024-01-18"),
    "updated_at": new Date("2024-01-30")
  },
  {
    "title": "Implement a gamification system for the platform",
    "description": "The platform needs a gamification system that motivates and rewards the users for their energy consumption and sustainability goals. The system should include elements such as points, badges, leaderboards, challenges, and achievements. The system should also be customizable and adaptable to different user preferences and contexts.",
    "eta": new Date("2024-03-31"),
    "comments": [
      {
        "text": "This is a very complex and time-consuming feature. It would require a lot of research, design, and development. It is not feasible to implement it in the current timeline.",
        "date": new Date("2024-01-22")
      },
      {
        "text": "I understand that this is a big feature, but I think it would greatly improve the platform's engagement and retention rates. Can we at least consider it for the future updates?",
        "date": new Date("2024-01-24")
      },
      {
        "text": "We can consider it for the future updates, but we have to focus on the core features and polish the platform first. We have to prioritize the quality over the quantity of the platform.",
        "date": new Date("2024-01-26")
      }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": ["feature", "gamification", "motivation", "reward", "engagement"],
    "created_at": new Date("2024-01-22"),
    "updated_at": new Date("2024-01-26")
  }
];

export const ticketsSchoolConnect: ticket[] = [
  {
    "title": "Fix login issue for parents",
    "description": "Some parents reported that they cannot log in to the app using their email and password. They get an error message saying 'Invalid credentials'. This is affecting their ability to access their children's grades, attendance, and homework.",
    "eta": new Date("2024-01-15"),
    "comments": [
      {
        "text": "I have reproduced the issue on my device. It seems that the authentication service is not validating the email format correctly.",
        "date": new Date("2024-01-12")
      },
      {
        "text": "I have fixed the bug and deployed a new version of the app. Please test and confirm.",
        "date": new Date("2024-01-14")
      },
      {
        "text": "I have tested the app and the login issue is resolved. Thanks for the quick fix.",
        "date": new Date("2024-01-15")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["bug", "login", "parent"],
    "created_at": new Date("2024-01-11"),
    "updated_at": new Date("2024-01-15")
  },
  {
    "title": "Add chat feature for teachers and students",
    "description": "As a teacher, I want to be able to chat with my students individually or in groups, so that I can communicate with them more effectively and provide feedback and support.",
    "eta": new Date("2024-02-01"),
    "comments": [
      {
        "text": "This is a great feature request. I have started working on the design and implementation of the chat feature.",
        "date": new Date("2024-01-16")
      },
      {
        "text": "I have finished the design and implementation of the chat feature. I have attached a screenshot of how it looks like. Please review and provide feedback.",
        "date": new Date("2024-01-25")
      },
      {
        "text": "I have reviewed the chat feature and it looks good. I have tested it and it works as expected. I have approved the pull request and merged it to the main branch.",
        "date": new Date("2024-01-31")
      }
    ],
    "priority": "normal",
    "status": "closed",
    "tags": ["feature", "chat", "teacher", "student"],
    "created_at": new Date("2024-01-15"),
    "updated_at": new Date("2024-01-31")
  },
  {
    "title": "Improve app performance and responsiveness",
    "description": "The app is slow and laggy when loading data or switching between screens. This affects the user experience and satisfaction. We need to optimize the app performance and responsiveness.",
    "eta": new Date("2024-03-01"),
    "comments": [
      {
        "text": "I have analyzed the app performance and identified some bottlenecks and areas for improvement. I have created a list of tasks and assigned them to the team members.",
        "date": new Date("2024-02-05")
      },
      {
        "text": "I have completed my task of caching the data locally and reducing the number of network requests. This should improve the app loading time and data freshness.",
        "date": new Date("2024-02-15")
      },
      {
        "text": "I have completed my task of using lazy loading and pagination for the data lists. This should improve the app scrolling and memory usage.",
        "date": new Date("2024-02-20")
      },
      {
        "text": "I have completed my task of using animations and transitions for the screen changes. This should improve the app visual appeal and user feedback.",
        "date": new Date("2024-02-25")
      }
    ],
    "priority": "low",
    "status": "ongoing",
    "tags": ["enhancement", "performance", "responsiveness"],
    "created_at": new Date("2024-02-01"),
    "updated_at": new Date("2024-02-25")
  },
  {
    "title": "Integrate with third-party calendar service",
    "description": "As a user, I want to be able to sync my app events with my external calendar service, such as Google Calendar or Outlook, so that I can manage my schedule more easily and avoid conflicts.",
    "eta": new Date("2024-04-01"),
    "comments": [
      {
        "text": "This is a nice-to-have feature, but not a priority for the current release. We will revisit this in the future.",
        "date": new Date("2024-02-10")
      }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": ["feature", "calendar", "integration"],
    "created_at": new Date("2024-02-10"),
    "updated_at": new Date("2024-02-10")
  }
];

export const ticketsVibe: ticket[] = [
  {
    "title": "Fix search functionality for music items",
    "description": "Some users reported that they cannot find the music items they are looking for using the search bar. They get either no results or irrelevant results. This is affecting their ability to buy and sell music items on the app.",
    "eta": new Date("2024-01-20"),
    "comments": [
      {
        "text": "I have investigated the issue and found that the search algorithm is not matching the keywords correctly. It is also not filtering the results by the user's location and preferences.",
        "date": new Date("2024-01-15")
      },
      {
        "text": "I have fixed the search algorithm and added more filters and options for the users. I have deployed a new version of the app. Please test and confirm.",
        "date": new Date("2024-01-19")
      },
      {
        "text": "I have tested the app and the search functionality is working as expected. I can find the music items I want easily and quickly. Thanks for the fix.",
        "date": new Date("2024-01-20")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["bug", "search", "music"],
    "created_at": new Date("2024-01-14"),
    "updated_at": new Date("2024-01-20")
  },
  {
    "title": "Add rating and review feature for music items and sellers",
    "description": "As a user, I want to be able to rate and review the music items and sellers I buy from or sell to, so that I can share my feedback and experience with other users and help them make informed decisions.",
    "eta": new Date("2024-02-15"),
    "comments": [
      {
        "text": "This is a great feature request. I have started working on the design and implementation of the rating and review feature.",
        "date": new Date("2024-01-25")
      },
      {
        "text": "I have finished the design and implementation of the rating and review feature. I have attached a screenshot of how it looks like. Please review and provide feedback.",
        "date": new Date("2024-02-10")
      },
      {
        "text": "I have reviewed the rating and review feature and it looks good. I have tested it and it works as expected. I have approved the pull request and merged it to the main branch.",
        "date": new Date("2024-02-14")
      }
    ],
    "priority": "normal",
    "status": "closed",
    "tags": ["feature", "rating", "review", "music", "seller"],
    "created_at": new Date("2024-01-24"),
    "updated_at": new Date("2024-02-14")
  },
  {
    "title": "Improve app security and privacy",
    "description": "The app is vulnerable to some security and privacy risks, such as data breaches, identity theft, phishing, and malware. We need to improve the app security and privacy by implementing best practices and standards.",
    "eta": new Date("2024-03-31"),
    "comments": [
      {
        "text": "I have analyzed the app security and privacy and identified some gaps and areas for improvement. I have created a list of tasks and assigned them to the team members.",
        "date": new Date("2024-02-20")
      },
      {
        "text": "I have completed my task of encrypting the user data and using secure protocols for the network communication. This should prevent data breaches and unauthorized access.",
        "date": new Date("2024-03-10")
      },
      {
        "text": "I have completed my task of verifying the user identity and adding two-factor authentication. This should prevent identity theft and phishing.",
        "date": new Date("2024-03-20")
      },
      {
        "text": "I have completed my task of scanning the app for malware and vulnerabilities and fixing them. This should prevent malware and attacks.",
        "date": new Date("2024-03-30")
      }
    ],
    "priority": "low",
    "status": "ongoing",
    "tags": ["enhancement", "security", "privacy"],
    "created_at": new Date("2024-02-19"),
    "updated_at": new Date("2024-03-30")
  },
  {
    "title": "Integrate with third-party music streaming service",
    "description": "As a user, I want to be able to listen to the music items I buy or sell on the app using a third-party music streaming service, such as Spotify or Apple Music, so that I can enjoy the music without downloading or transferring the files.",
    "eta": new Date("2024-04-30"),
    "comments": [
      {
        "text": "This is a nice-to-have feature, but not a priority for the current release. We will revisit this in the future.",
        "date": new Date("2024-02-28")
      }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": ["feature", "music", "streaming", "integration"],
    "created_at": new Date("2024-02-28"),
    "updated_at": new Date("2024-02-28")
  }
];

export const ticketsVerge: ticket[] = [
  {
    "title": "Fix biometric authentication error on Android devices",
    "description": "Some users reported that they cannot log in to the app using their fingerprint or face recognition on Android devices. The app shows an error message saying 'Biometric authentication failed. Please try again or use your PIN'. This issue affects the user experience and security of the app.",
    "eta": new Date("2024-01-15"),
    "comments": [
      {
        "text": "We are investigating the cause of this error. It seems to be related to the Android SDK version. We will update you as soon as possible.",
        "date": new Date("2024-01-12")
      },
      {
        "text": "We have found a solution for this issue. We need to update the biometric library dependency and add some permissions to the manifest file. We will test the fix and deploy it in the next release.",
        "date": new Date("2024-01-14")
      }
    ],
    "priority": "high",
    "status": "ongoing",
    "tags": ["bug", "android", "biometric", "authentication"],
    "created_at": new Date("2024-01-11"),
    "updated_at": new Date("2024-01-14")
  },
  {
    "title": "Add dark mode option to the app settings",
    "description": "Some users requested a dark mode option for the app, as they prefer a darker theme for their eyes and battery saving. The app currently only supports a light mode theme. We need to design and implement a dark mode option that can be toggled by the user in the app settings.",
    "eta": new Date("2024-01-31"),
    "comments": [
      {
        "text": "We have started working on the dark mode option. We will use the Material Design guidelines and the native dark mode support for iOS and Android. We will also add an option to switch between light and dark mode automatically based on the system settings or the time of the day.",
        "date": new Date("2024-01-16")
      },
      {
        "text": "We have finished the design and implementation of the dark mode option. We have tested it on various devices and screen sizes. We will include it in the next release.",
        "date": new Date("2024-01-30")
      }
    ],
    "priority": "normal",
    "status": "closed",
    "tags": ["feature", "design", "dark mode", "settings"],
    "created_at": new Date("2024-01-15"),
    "updated_at": new Date("2024-01-30")
  },
  {
    "title": "Improve the app performance and loading time",
    "description": "Some users complained that the app is slow and takes too long to load. They also reported some crashes and freezes while using the app. This issue affects the user satisfaction and retention rate of the app. We need to optimize the app performance and loading time by using caching, compression, and other techniques.",
    "eta": new Date("2024-02-15"),
    "comments": [
      {
        "text": "We have analyzed the app performance and loading time using various tools and metrics. We have identified some bottlenecks and areas for improvement. We will work on optimizing the app code, reducing the app size, and implementing caching and compression strategies.",
        "date": new Date("2024-01-20")
      },
      {
        "text": "We have implemented some performance improvements and reduced the app loading time by 50%. We have also fixed some bugs that caused crashes and freezes. We will monitor the app performance and user feedback after the next release.",
        "date": new Date("2024-02-14")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["performance", "optimization", "loading time", "crash", "freeze"],
    "created_at": new Date("2024-01-18"),
    "updated_at": new Date("2024-02-14")
  },
  {
    "title": "Integrate with PayPal and Stripe for payment options",
    "description": "Some users requested more payment options for the app, such as PayPal and Stripe. The app currently only supports credit and debit cards. We need to integrate with PayPal and Stripe APIs and provide a seamless payment experience for the users.",
    "eta": new Date("2024-02-28"),
    "comments": [
      {
        "text": "We have started working on the integration with PayPal and Stripe. We will use their SDKs and follow their best practices. We will also update the app UI and UX to accommodate the new payment options.",
        "date": new Date("2024-02-01")
      },
      {
        "text": "We have completed the integration with PayPal and Stripe. We have tested the payment functionality and security. We will include it in the next release.",
        "date": new Date("2024-02-27")
      }
    ],
    "priority": "normal",
    "status": "closed",
    "tags": ["feature", "integration", "payment", "PayPal", "Stripe"],
    "created_at": new Date("2024-01-31"),
    "updated_at": new Date("2024-02-27")
  },
  {
    "title": "Add a referral program to the app",
    "description": "Some users suggested that we should add a referral program to the app, where they can invite their friends and family to join the app and get rewards. This would help us to grow our user base and increase our revenue. We need to design and implement a referral program that is attractive and easy to use.",
    "eta": new Date("2024-03-31"),
    "comments": [
      {
        "text": "We have started working on the referral program. We will use a unique referral code for each user and a QR code scanner for easy sharing. We will also offer rewards such as cashback, discounts, and free trials for both the referrer and the referee.",
        "date": new Date("2024-03-01")
      },
      {
        "text": "We have finished the design and implementation of the referral program. We have tested it on various scenarios and devices. We will include it in the next release.",
        "date": new Date("2024-03-30")
      }
    ],
    "priority": "low",
    "status": "closed",
    "tags": ["feature", "referral", "reward", "growth", "revenue"],
    "created_at": new Date("2024-02-28"),
    "updated_at": new Date("2024-03-30")
  },
  {
    "title": "Fix currency conversion error for some countries",
    "description": "Some users reported that they cannot convert their money to some currencies, such as INR, BRL, and ZAR. The app shows an error message saying 'Currency conversion failed. Please try again later'. This issue affects the functionality and usability of the app.",
    "eta": new Date("2024-01-25"),
    "comments": [
      {
        "text": "We are looking into this issue. It seems to be related to the currency API that we are using. We will update you as soon as possible.",
        "date": new Date("2024-01-22")
      },
      {
        "text": "We have contacted the currency API provider and they confirmed that there is a problem with their service for some currencies. They are working on fixing it and they expect to resolve it by tomorrow.",
        "date": new Date("2024-01-23")
      },
      {
        "text": "We have received an update from the currency API provider and they have fixed the issue. We have tested the currency conversion functionality and it works fine now. We will close this ticket.",
        "date": new Date("2024-01-24")
      }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["bug", "currency", "conversion", "API"],
    "created_at": new Date("2024-01-21"),
    "updated_at": new Date("2024-01-24")
  },
  {
    "title": "Add a chatbot feature to the app",
    "description": "Some users requested a chatbot feature to the app, where they can ask questions and get answers about the app features, services, and policies. The app currently only has a FAQ section and a contact form. We need to design and implement a chatbot feature that is smart and friendly.",
    "eta": new Date("2024-04-30"),
    "comments": [
      {
        "text": "We have started working on the chatbot feature. We will use a natural language processing (NLP) library and a cloud service to create and host the chatbot. We will also collect and analyze the user queries and feedback to improve the chatbot.",
        "date": new Date("2024-04-01")
      },
      {
        "text": "We have completed the design and implementation of the chatbot feature. We have tested it on various questions and scenarios. We will include it in the next release.",
        "date": new Date("2024-04-29")
      }
    ],
    "priority": "low",
    "status": "closed",
    "tags": ["feature", "chatbot", "NLP", "cloud"],
    "created_at": new Date("2024-03-31"),
    "updated_at": new Date("2024-04-29")
  },
  {
    "title": "Update the app logo and icon",
    "description": "We have decided to update the app logo and icon to match our new branding and vision. The app logo and icon should reflect our core values of innovation, simplicity, and security. We need to design and implement a new logo and icon for the app.",
    "eta": new Date("2024-02-28"),
    "comments": [
      {
        "text": "We have hired a professional graphic designer to create the new logo and icon for the app. We will review their proposals and choose the best one.",
        "date": new Date("2024-02-01")
      },
      {
        "text": "We have chosen the new logo and icon for the app. We have updated the app assets and resources accordingly. We will include them in the next release.",
        "date": new Date("2024-02-27")
      }
    ],
    "priority": "normal",
    "status": "closed",
    "tags": ["design", "logo", "icon", "branding"],
    "created_at": new Date("2024-01-31"),
    "updated_at": new Date("2024-02-27")
  }
];

export const ticketsAscend: ticket[] = [
  {
    "title": "Fix broken links in the course catalog",
    "description": "Some of the links to the course materials are not working or redirecting to the wrong pages. This affects the user experience and the learning outcomes.",
    "eta": new Date("2024-01-15"),
    "comments": [
      { "text": "I have identified the source of the problem and I am working on a solution.", "date": new Date("2024-01-12") },
      { "text": "The links have been fixed and tested. Please review and close the ticket.", "date": new Date("2024-01-14") }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["bug", "course", "link"],
    "created_at": new Date("2024-01-10"),
    "updated_at": new Date("2024-01-14")
  },
  {
    "title": "Add a chat feature for peer-to-peer communication",
    "description": "The users have requested a chat feature that would allow them to communicate with other learners and educators in real time. This would enhance the collaboration and engagement aspects of the platform.",
    "eta": new Date("2024-02-01"),
    "comments": [
      { "text": "This is a great idea and we have added it to our roadmap. We will update you on the progress soon.", "date": new Date("2024-01-11") },
      { "text": "We have started working on the chat feature and we expect to finish it by the end of the month.", "date": new Date("2024-01-20") }
    ],
    "priority": "normal",
    "status": "ongoing",
    "tags": ["feature", "chat", "communication"],
    "created_at": new Date("2024-01-10"),
    "updated_at": new Date("2024-01-20")
  },
  {
    "title": "Improve the UI design of the dashboard",
    "description": "The dashboard is the main interface for the users to access their courses, progress, and feedback. The current design is outdated and not very user-friendly. We need to improve the UI design to make it more appealing and intuitive.",
    "eta": new Date("2024-03-01"),
    "comments": [
      { "text": "We have received your feedback and we agree that the dashboard needs a makeover. We will assign a UI designer to work on this.", "date": new Date("2024-01-13") },
      { "text": "The UI designer has created some mockups and we would like your opinion on them. Please see the attached files and let us know what you think.", "date": new Date("2024-02-10") }
    ],
    "priority": "low",
    "status": "open",
    "tags": ["improvement", "UI", "dashboard"],
    "created_at": new Date("2024-01-12"),
    "updated_at": new Date("2024-02-10")
  },
  {
    "title": "Integrate with Google Classroom",
    "description": "Some of the users have requested the option to integrate Ascend with Google Classroom, a popular online learning platform. This would allow them to sync their courses, assignments, and grades between the two platforms.",
    "eta": null,
    "comments": [
      { "text": "Thank you for your suggestion. However, we have decided not to pursue this integration at this time. We believe that Ascend offers a superior learning experience and we do not want to compromise our quality or identity.", "date": new Date("2024-01-16") }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": ["integration", "google", "classroom"],
    "created_at": new Date("2024-01-15"),
    "updated_at": new Date("2024-01-16")
  }
];

export const ticketsPulse: ticket[] = [
  {
    "title": "Implement a sentiment analysis feature for customer feedback",
    "description": "The users have requested a feature that would allow them to analyze the sentiment of the customer feedback they receive through Pulse. This would help them understand the emotions and opinions of their customers and improve their products and services accordingly.",
    "eta": new Date("2024-02-15"),
    "comments": [
      { "text": "This is a high-priority feature and we have assigned a team of developers and data scientists to work on it.", "date": new Date("2024-01-12") },
      { "text": "We have completed the development and testing of the sentiment analysis feature and we are ready to deploy it. Please review and close the ticket.", "date": new Date("2024-02-14") }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["feature", "sentiment", "feedback"],
    "created_at": new Date("2024-01-10"),
    "updated_at": new Date("2024-02-14")
  },
  {
    "title": "Fix the bug that causes the app to crash when loading large datasets",
    "description": "Some of the users have reported that the app crashes when they try to load large datasets from their sources. This affects the performance and reliability of the app and causes frustration among the users.",
    "eta": new Date("2024-01-31"),
    "comments": [
      { "text": "We have reproduced the bug and we are working on a fix.", "date": new Date("2024-01-16") },
      { "text": "We have fixed the bug and released a patch. Please update the app and confirm that the issue is resolved.", "date": new Date("2024-01-30") }
    ],
    "priority": "high",
    "status": "closed",
    "tags": ["bug", "crash", "dataset"],
    "created_at": new Date("2024-01-15"),
    "updated_at": new Date("2024-01-30")
  },
  {
    "title": "Integrate with Salesforce and HubSpot",
    "description": "The users have requested the option to integrate Pulse with Salesforce and HubSpot, two popular CRM platforms. This would allow them to sync their contacts, leads, and opportunities between the platforms and leverage the insights from Pulse to drive sales and engagement.",
    "eta": new Date("2024-03-01"),
    "comments": [
      { "text": "This is a valuable integration and we have added it to our roadmap. We will update you on the progress soon.", "date": new Date("2024-01-18") },
      { "text": "We have started working on the integration and we expect to finish it by the end of the month.", "date": new Date("2024-02-20") }
    ],
    "priority": "normal",
    "status": "ongoing",
    "tags": ["integration", "salesforce", "hubspot"],
    "created_at": new Date("2024-01-17"),
    "updated_at": new Date("2024-02-20")
  },
  {
    "title": "Improve the UI design of the dashboard",
    "description": "The dashboard is the main interface for the users to access their insights, reports, and actions. The current design is outdated and not very user-friendly. We need to improve the UI design to make it more appealing and intuitive.",
    "eta": new Date("2024-04-01"),
    "comments": [
      { "text": "We have received your feedback and we agree that the dashboard needs a makeover. We will assign a UI designer to work on this.", "date": new Date("2024-01-22") },
      { "text": "The UI designer has created some mockups and we would like your opinion on them. Please see the attached files and let us know what you think.", "date": new Date("2024-03-10") }
    ],
    "priority": "low",
    "status": "open",
    "tags": ["improvement", "UI", "dashboard"],
    "created_at": new Date("2024-01-20"),
    "updated_at": new Date("2024-03-10")
  },
  {
    "title": "Add a voice assistant feature for hands-free navigation",
    "description": "Some of the users have suggested the idea of adding a voice assistant feature that would allow them to navigate the app using voice commands. This would enhance the accessibility and convenience of the app.",
    "eta": null,
    "comments": [
      { "text": "Thank you for your suggestion. However, we have decided not to pursue this feature at this time. We believe that the voice assistant feature is not essential for the core functionality of the app and it would require a lot of resources and maintenance.", "date": new Date("2024-01-25") }
    ],
    "priority": "low",
    "status": "wont_fix",
    "tags": ["feature", "voice", "assistant"],
    "created_at": new Date("2024-01-24"),
    "updated_at": new Date("2024-01-25")
  }
];