# musician-project

This application helps musicians and bands. A musician can see the bands which are looking for a musician via this application (or vice versa). Users can create new musician and/or band cards, edit and delete them. The first load of the application can take time because of some server and database issues for now but the application is going to continue to be developed.

## Demo

[https://extraordinary-kleicha-630910.netlify.app]

## Structure

```
backend
frontend
└── public
└── src
    └── components 
      └── Select
          └── SelectGenre.js
          └── SelectInstrument.js
          └── SelectLookingFor.js 
      └── ApplyButton.js
      └── ApplyWindow.js
      └── BandCard.js
      └── BandCardForm.js
      └── BandsTab.js
      └── Favorites.js
      └── Heart.js
      └── HomePage.js
      └── HomePageUser.js
      └── LogInForm.js
      └── Logo.js
      └── Message.js
      └── MusicianCard.js
      └── MusicianCardForm.js
      └── MusiciansTab.js
      └── MyBandCard.js
      └── MyCards.js
      └── MyMusicianCard.js
      └── MyNotifications.js
      └── MyPage.js
      └── Nav.js
      └── NavConnectedUser.js
      └── NavDisconnectedUser.js
      └── RegistrationForm.js
      └── Tabs.js
    └── context
      └── GlobalState.js
    └── utils
      └── deleteData.js 
      └── fetchData.js
      └── createOrUpdateCard.js
      └── updateFavorites.js
    └── App.css
    └── App.js
    └── index.js
  
  
```
