const {  
  createUser,
  createAlbums
} = require('./index.js');

require('dotenv').config();
const { client } = require("./client.js");
console.log('DB_USER:', process.env.DB_USER);

async function dropTables() {
    try {
      console.log("Starting to drop tables...");
  
      await client.query(`
        DROP TABLE IF EXISTS comments;
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS albums;
      `);
  
      console.log("Finished dropping tables!");
    } catch (error) {
      console.error("Error dropping tables!");
      throw error;
    }
  }

async function createTables() {
  try {
    console.log("Starting to build tables...");
    await client.query(`

        CREATE TABLE albums (
          id SERIAL PRIMARY KEY,
          name varchar(255) UNIQUE NOT NULL,
          artistName varchar(255) NOT NULL,
          releaseYear INTEGER,
          song1 varchar(255),
          song2 varchar(255),
          song3 varchar(255),
          song4 varchar(255),
          song5 varchar(255),
          song6 varchar(255),
          song7 varchar(255),
          song8 varchar(255),
          song9 varchar(255),
          song10 varchar(255),
          song11 varchar(255),
          song12 varchar(255),
          song13 varchar(255),
          song14 varchar(255),
          song15 varchar(255),
          genre varchar(255) NOT NULL,
          albumArt TEXT,
          spotifyLink TEXT
        );

        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar(255) UNIQUE NOT NULL,
          password varchar(255) NOT NULL,
          active boolean DEFAULT true
        );

        CREATE TABLE reviews (
          id SERIAL PRIMARY KEY,
          "userId" INTEGER REFERENCES users(id),
          content TEXT NOT NULL,
          rating INTEGER,
          active BOOLEAN DEFAULT true
        );

        CREATE TABLE comments (
          id SERIAL PRIMARY KEY,
          "reviewId" INTEGER REFERENCES reviews(id),
          content TEXT NOT NULL,
          active BOOLEAN DEFAULT true
        );
        `)
        console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
  }

  async function createInitialUsers() {
    try {
      console.log("Starting to create users...");

      await createUser({ 
        username: 'albert', 
        password: 'bertie99',
      });
      await createUser({ 
        username: 'sandra', 
        password: '2sandy4me',
      });
      await createUser({ 
        username: 'glamgal',
        password: 'soglam',
      });
      console.log("Finished creating users!");
    } catch (error) {
      console.error("Error creating users!");
      throw error;
    }
  }

  async function createInitialAlbums() {
    try {
  console.log("Starting to seed albums")
      await createAlbums(
        { 
          name: 'Future Nostalgia', 
          artistName: 'Dua Lipa', 
          releaseYear: '2020', 
          song1: 'Future Nostalgia', 
          song2: 'Dont Start Now', 
          song3: 'Cool', 
          song4: 'Physical', 
          song5: 'Levitating', 
          song6: 'Pretty Please', 
          song7: 'Hallucinate', 
          song8: 'Love Again', 
          song9: 'Break My Heart', 
          song10: 'Good in Bed', 
          song11: 'Boys Will Be Boys', 
          song12: '', 
          song13: '', 
          song14: '', 
          song15: '', 
          genre: 'Pop', 
          albumArt: 'futurenostalgia.jpg', 
          spotifyLink: 'https://open.spotify.com/album/7fJJK56U9fHixgO0HQkhtI' 
        },
      );
  
      await createAlbums(  { 
        name: 'Folklore', 
        artistName: 'Taylor Swift', 
        releaseYear: '2020', 
        song1: 'the 1', 
        song2: 'cardigan', 
        song3: 'the last great american dynasty', 
        song4: 'exile (feat. Bon Iver)', 
        song5: 'my tears ricochet', 
        song6: 'mirrorball', 
        song7: 'seven', 
        song8: 'august', 
        song9: 'this is me trying', 
        song10: 'illicit affairs', 
        song11: 'invisible string', 
        song12: 'mad woman', 
        song13: 'epiphany', 
        song14: 'betty', 
        song15: 'peace', 
        genre: 'Folk', 
        albumArt: 'folklore.png', 
        spotifyLink: 'https://open.spotify.com/album/1pzvBxYgT6OVwJLtHkrdQK' 
      },);

      await createAlbums(  { 
        name: 'DAMN.', 
        artistName: 'Kendrick Lamar', 
        releaseYear: '2017', 
        song1: 'BLOOD.', 
        song2: 'DNA.', 
        song3: 'YAH.', 
        song4: 'ELEMENT.', 
        song5: 'FEEL.', 
        song6: 'LOYALTY. (feat. Rihanna)', 
        song7: 'PRIDE.', 
        song8: 'HUMBLE.', 
        song9: 'LUST.', 
        song10: 'LOVE. (feat. Zacari)', 
        song11: 'XXX. (feat. U2)', 
        song12: 'FEAR.', 
        song13: 'GOD.', 
        song14: 'DUCKWORTH.', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'damn.jpeg', 
        spotifyLink: 'https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY' 
      },);

      await createAlbums(    { 
        name: 'Lover', 
        artistName: 'Taylor Swift', 
        releaseYear: '2019', 
        song1: 'I Forgot That You Existed', 
        song2: 'Cruel Summer', 
        song3: 'Lover', 
        song4: 'The Man', 
        song5: 'The Archer', 
        song6: 'I Think He Knows', 
        song7: 'Miss Americana & The Heartbreak Prince', 
        song8: 'Paper Rings', 
        song9: 'Cornelia Street', 
        song10: 'Death by a Thousand Cuts', 
        song11: 'London Boy', 
        song12: 'Soon Youll Get Better', 
        song13: 'False God', 
        song14: 'You Need to Calm Down', 
        song15: 'Daylight', 
        genre: 'Pop', 
        albumArt: 'lover.png', 
        spotifyLink: 'https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI' 
      },);

      await createAlbums(  { 
        name: 'Blinding Lights', 
        artistName: 'The Weeknd', 
        releaseYear: '2020', 
        song1: 'Blinding Lights', 
        song2: 'Heartless', 
        song3: 'Save Your Tears', 
        song4: 'In Your Eyes', 
        song5: 'After Hours', 
        song6: 'Alone Again', 
        song7: 'Hardest To Love', 
        song8: 'Scared To Live', 
        song9: 'Snowchild', 
        song10: 'Escape From LA', 
        song11: 'Pray For Me', 
        song12: 'Faith', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'R&B', 
        albumArt: 'blindinglights.png', 
        spotifyLink: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b' 
      },);

      await createAlbums(  { 
        name: 'When We All Fall Asleep, Where Do We Go?', 
        artistName: 'Billie Eilish', 
        releaseYear: '2019', 
        song1: '!!!!!!!', 
        song2: 'bad guy', 
        song3: 'xanny', 
        song4: 'you should see me in a crown', 
        song5: 'all the good girls go to hell', 
        song6: 'wish you were gay', 
        song7: 'when the partys over', 
        song8: '8', 
        song9: 'my strange addiction', 
        song10: 'bury a friend', 
        song11: 'ilomilo', 
        song12: 'listen before i go', 
        song13: 'i love you', 
        song14: 'goodbye', 
        song15: 'everything i wanted', 
        genre: 'Alternative', 
        albumArt: 'whenweallfallasleep.png', 
        spotifyLink: 'https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh' 
      },);

      await createAlbums(  { 
        name: 'Happier Than Ever', 
        artistName: 'Billie Eilish', 
        releaseYear: '2021', 
        song1: 'Getting Older', 
        song2: 'I Didnt Change My Number', 
        song3: 'Billie Bossa Nova', 
        song4: 'My Future', 
        song5: 'Oxytocin', 
        song6: 'Goldwing', 
        song7: 'Lost Cause', 
        song8: 'Halleys Comet', 
        song9: 'Not My Responsibility', 
        song10: 'Overheated', 
        song11: 'Everybody Dies', 
        song12: 'Your Power', 
        song13: 'NDA', 
        song14: 'Therefore I Am', 
        song15: 'Happier Than Ever', 
        genre: 'Pop', 
        albumArt: 'happierthanever.png', 
        spotifyLink: 'https://open.spotify.com/track/4RVwu0g32PAqgUiJoXsdF8' 
      },);

      await createAlbums( { 
        name: 'Hot Pink', 
        artistName: 'Doja Cat', 
        releaseYear: '2019', 
        song1: 'Cyber Sex', 
        song2: 'Like That', 
        song3: 'Juicy', 
        song4: 'Say So', 
        song5: 'Mooo!', 
        song6: 'Tia Tamera', 
        song7: 'Streets', 
        song8: 'Bottom Bitch', 
        song9: 'Better Than Me', 
        song10: 'Talk Dirty', 
        song11: 'Lick', 
        song12: 'Candy', 
        song13: 'No Drama', 
        song14: 'Rules', 
        song15: 'Love To Dream', 
        genre: 'Pop', 
        albumArt: 'hotpink.jpg', 
        spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX45grRWk2ghU' 
      },);

      await createAlbums(  { 
        name: 'In the Aeroplane Over the Sea', 
        artistName: 'Neutral Milk Hotel', 
        releaseYear: '1998', 
        song1: 'The King of Carrot Flowers Pt. One', 
        song2: 'The King of Carrot Flowers Pt. Two & Three', 
        song3: 'In the Aeroplane Over the Sea', 
        song4: 'Two-Headed Boy', 
        song5: 'The Fool', 
        song6: 'Holland, 1945', 
        song7: 'Communist Daughter', 
        song8: 'Oh Comely', 
        song9: 'Ghost', 
        song10: 'Untitled', 
        song11: 'The King of Carrot Flowers Pt. One',
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Indie Rock', 
        albumArt: 'aeroplane.jpg', 
        spotifyLink: 'https://open.spotify.com/track/5rfT032kGmLvbxZzfHlu5D' 
      },);

      await createAlbums({ 
        name: 'Random Access Memories', 
        artistName: 'Daft Punk', 
        releaseYear: '2013', 
        song1: 'Give Life Back to Music', 
        song2: 'The Game of Love', 
        song3: 'Giorgio by Moroder', 
        song4: 'Within', 
        song5: 'Instant Crush', 
        song6: 'Lose Yourself to Dance', 
        song7: 'Touch', 
        song8: 'Get Lucky', 
        song9: 'Beyond', 
        song10: 'Motherboard', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Electronic', 
        albumArt: 'ram.png', 
        spotifyLink: 'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa' 
      });

      await createAlbums({ 
        name: 'To Pimp a Butterfly', 
        artistName: 'Kendrick Lamar', 
        releaseYear: '2015', 
        song1: 'Wesleys Theory', 
        song2: 'For Free? (Interlude)', 
        song3: 'King Kunta', 
        song4: 'Institutionalized', 
        song5: 'These Walls', 
        song6: 'u', 
        song7: 'Alright', 
        song8: 'For Sale? (Interlude)', 
        song9: 'Momma', 
        song10: 'Hood Politics', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'butterfly.png', 
        spotifyLink: 'https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP' 
      },);

      await createAlbums({ 
        name: 'Channel Orange', 
        artistName: 'Frank Ocean', 
        releaseYear: '2012', 
        song1: 'Start', 
        song2: 'Thinkin Bout You', 
        song3: 'Fertilizer', 
        song4: 'Sierra Leone', 
        song5: 'Sweet Life', 
        song6: 'Not Just Money', 
        song7: 'Super Rich Kids', 
        song8: 'Pilot Jones', 
        song9: 'Crack Rock', 
        song10: 'Pyramids', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'R&B', 
        albumArt: 'channelorange.jpg', 
        spotifyLink: 'https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8' 
      },);

      await createAlbums({ 
        name: 'AM', 
        artistName: 'Arctic Monkeys', 
        releaseYear: '2013', 
        song1: 'Do I Wanna Know?', 
        song2: 'R U Mine?', 
        song3: 'One for the Road', 
        song4: 'Arabella', 
        song5: 'I Wanna Be Yours', 
        song6: 'No. 1 Party Anthem', 
        song7: 'Mad Sounds', 
        song8: 'Fireside', 
        song9: 'Whyd You Only Call Me When Youre High?', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Indie Rock', 
        albumArt: 'am.jpg', 
        spotifyLink: 'https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu' 
      },);

      await createAlbums({ 
        name: 'My Beautiful Dark Twisted Fantasy', 
        artistName: 'Kanye West', 
        releaseYear: '2010', 
        song1: 'Dark Fantasy', 
        song2: 'Gorgeous', 
        song3: 'Power', 
        song4: 'All of the Lights', 
        song5: 'Monster', 
        song6: 'So Appalled', 
        song7: 'Devil in a New Dress', 
        song8: 'Runaway', 
        song9: 'Hell of a Life', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'mybeautiful.jpg', 
        spotifyLink: 'https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv' 
      },);

      await createAlbums({ 
        name: 'Good Kid, M.A.A.D City', 
        artistName: 'Kendrick Lamar', 
        releaseYear: '2012', 
        song1: 'Sherane a.k.a Master Splinters Daughter', 
        song2: 'Bitch, Dont Kill My Vibe', 
        song3: 'Backseat Freestyle', 
        song4: 'The Art of Peer Pressure', 
        song5: 'Money Trees', 
        song6: 'Poetic Justice', 
        song7: 'good kid', 
        song8: 'm.A.A.d city', 
        song9: 'Swimming Pools (Drank)', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'goodkid.jpg', 
        spotifyLink: 'https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w' 
      },);

      await createAlbums({ 
        name: 'The Suburbs', 
        artistName: 'Arcade Fire', 
        releaseYear: '2010', 
        song1: 'The Suburbs', 
        song2: 'Ready to Start', 
        song3: 'Modern Man', 
        song4: 'Rococo', 
        song5: 'Empty Room', 
        song6: 'City with No Children', 
        song7: 'Half Light I', 
        song8: 'Half Light II (No Celebration)', 
        song9: 'Sprawl I', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Indie Rock', 
        albumArt: 'thesuburbs.jpg', 
        spotifyLink: 'https://open.spotify.com/track/2UWdUez9MB9yzL7Y81Mcip' 
      },);

      await createAlbums({ 
        name: 'Hot Fuss', 
        artistName: 'The Killers', 
        releaseYear: '2004', 
        song1: 'Jenny Was a Friend of Mine', 
        song2: 'Mr. Brightside', 
        song3: 'Smile Like You Mean It', 
        song4: 'Somebody Told Me', 
        song5: 'All These Things That Ive Done', 
        song6: 'Midnight Show', 
        song7: 'Everything Will Be Alright', 
        song8: 'Believe Me Natalie', 
        song9: 'Dont Shoot Me Santa', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Indie Rock', 
        albumArt: 'hotfuss.png', 
        spotifyLink: 'https://open.spotify.com/album/4piJq7R3gjUOxnYs6lDCTg' 
      },);

      await createAlbums({ 
        name: 'Blonde', 
        artistName: 'Frank Ocean', 
        releaseYear: '2016', 
        song1: 'Nikes', 
        song2: 'Ivy', 
        song3: 'Pink + White', 
        song4: 'Be Yourself', 
        song5: 'Solo (Reprise)', 
        song6: 'Skyline To', 
        song7: 'Self Control', 
        song8: 'Good Guy', 
        song9: 'Futura Free', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'R&B', 
        albumArt: 'blonde.jpg', 
        spotifyLink: 'https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf' 
      },);

      await createAlbums({ 
        name: '21', 
        artistName: 'Adele', 
        releaseYear: '2011', 
        song1: 'Rolling in the Deep', 
        song2: 'Rumour Has It', 
        song3: 'Turning Tables', 
        song4: 'Dont You Remember', 
        song5: 'Set Fire to the Rain', 
        song6: 'He Wont Go', 
        song7: 'Take It All', 
        song8: 'Ill Be Waiting', 
        song9: 'One and Only', 
        song10: 'Lovesong', 
        song11: 'Someone Like You', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: '21.png', 
        spotifyLink: 'https://open.spotify.com/album/0Lg1uZvI312TPqxNWShFXL' 
      },);

      await createAlbums({ 
        name: 'The Fame', 
        artistName: 'Lady Gaga', 
        releaseYear: '2008', 
        song1: 'Just Dance', 
        song2: 'Lovegame', 
        song3: 'Paparazzi', 
        song4: 'Poker Face', 
        song5: 'Eh, Eh (Nothing Else I Can Say)', 
        song6: 'Beautiful, Dirty, Rich', 
        song7: 'The Fame', 
        song8: 'Money Honey', 
        song9: 'Starstruck', 
        song10: 'Boys Boys Boys', 
        song11: 'Disco Heaven', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: 'fame.png', 
        spotifyLink: 'https://open.spotify.com/album/1jpUMnKpRlng1OJN7LJauV' 
      });

      await createAlbums({ 
        name: 'Blurryface', 
        artistName: 'Twenty One Pilots', 
        releaseYear: '2015', 
        song1: 'Fairly Local', 
        song2: 'Tear in My Heart', 
        song3: 'Stressed Out', 
        song4: 'Ride', 
        song5: 'Foolish Thought', 
        song6: 'The Judge', 
        song7: 'Lane Boy', 
        song8: 'Message Man', 
        song9: 'Hometown', 
        song10: 'Not Today', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Alternative', 
        albumArt: 'blurryface.png', 
        spotifyLink: 'https://open.spotify.com/album/3cQO7jp5S9qLBoIVtbkSM1' 
      },);

      await createAlbums({ 
        name: 'Back to Black', 
        artistName: 'Amy Winehouse', 
        releaseYear: '2006', 
        song1: 'Rehab', 
        song2: 'You Know Im No Good', 
        song3: 'Me & Mr. Jones', 
        song4: 'Just Friends', 
        song5: 'Back to Black', 
        song6: 'Love Is a Losing Game', 
        song7: 'Tears Dry on Their Own', 
        song8: 'Wake Up Alone', 
        song9: 'Some Unholy War', 
        song10: 'He Can Only Hold Her', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'R&B', 
        albumArt: 'backtoblack.png', 
        spotifyLink: 'https://open.spotify.com/track/30FURVTCpbKyykjSEQzGkH' 
      },);

      await createAlbums({ 
        name: 'In the Heights (Original Broadway Cast Recording)', 
        artistName: 'Lin-Manuel Miranda', 
        releaseYear: '2008', 
        song1: 'In the Heights', 
        song2: 'Breathe', 
        song3: 'It Wont Be Long Now', 
        song4: 'No Me Diga', 
        song5: 'Piragua', 
        song6: 'Alabanza', 
        song7: 'Blackout', 
        song8: 'The Club', 
        song9: 'Finale', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Musical Theatre', 
        albumArt: 'heights.jpg', 
        spotifyLink: 'https://open.spotify.com/album/3VPHalWocJfe7VfbEW60zg' 
      },);

      await createAlbums({ 
        name: 'The Marshall Mathers LP 2', 
        artistName: 'Eminem', 
        releaseYear: '2013', 
        song1: 'Bad Guy', 
        song2: 'Parking Lot', 
        song3: 'Rhyme or Reason', 
        song4: 'So Far...', 
        song5: 'Survival', 
        song6: 'Legacy', 
        song7: 'Asshole', 
        song8: 'Berzerk', 
        song9: 'Rap God', 
        song10: 'Headlights', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'marshall2.png', 
        spotifyLink: 'https://open.spotify.com/album/3vOgbDjgsZBAPwV2M3bNOj' 
      },);

      await createAlbums({ 
        name: 'Bon Iver, Bon Iver', 
        artistName: 'Bon Iver', 
        releaseYear: '2011', 
        song1: 'Perth', 
        song2: 'Minnesota, WI', 
        song3: 'Holocene', 
        song4: 'Towers', 
        song5: 'Kamikaze', 
        song6: 'Blood Bank', 
        song7: 'Beth/Rest', 
        song8: '', 
        song9: '', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Folk', 
        albumArt: 'boniver.jpg', 
        spotifyLink: 'https://open.spotify.com/album/2LpfNj3vB5rOXfaawLcOBg' 
      },);

      await createAlbums({ 
        name: 'The 20/20 Experience', 
        artistName: 'Justin Timberlake', 
        releaseYear: '2013', 
        song1: 'Pusher Love Girl', 
        song2: 'Suit & Tie', 
        song3: 'Dont Hold the Wall', 
        song4: 'Strawberry Bubblegum', 
        song5: 'Tunnel Vision', 
        song6: 'Spaceship Coupe', 
        song7: 'That Girl', 
        song8: 'Let the Groove Get In', 
        song9: 'Mirrors', 
        song10: 'Blue Ocean Floor', 
        song11: 'Dress On', 
        song12: 'Body Count', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: '2020.jpg', 
        spotifyLink: 'https://open.spotify.com/album/0O82niJ0NpcptYRxogeEZu' 
      },);

      await createAlbums({ 
        name: 'Life of Pablo', 
        artistName: 'Kanye West', 
        releaseYear: '2016', 
        song1: 'Ultralight Beam', 
        song2: 'Father Stretch My Hands Pt. 1', 
        song3: 'Pt. 2', 
        song4: 'Famous', 
        song5: 'Feedback', 
        song6: 'Low Lights', 
        song7: 'Highlights', 
        song8: 'Waves', 
        song9: 'FML', 
        song10: 'Real Friends', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'pablo.jpg', 
        spotifyLink: 'https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1' 
      },);

      await createAlbums({ 
        name: 'A Rush of Blood to the Head', 
        artistName: 'Coldplay', 
        releaseYear: '2002', 
        song1: 'Politik', 
        song2: 'In My Place', 
        song3: 'God Put a Smile Upon Your Face', 
        song4: 'The Scientist', 
        song5: 'Clocks', 
        song6: 'Daylight', 
        song7: 'Green Eyes', 
        song8: 'Warning Sign', 
        song9: 'A Whisper', 
        song10: 'A Rush of Blood to the Head', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Alternative', 
        albumArt: 'rushofblood.png', 
        spotifyLink: 'https://open.spotify.com/track/4JJ5zGKnb1IpERyBrfmb1y' 
      },);

      await createAlbums({ 
        name: 'Evolve', 
        artistName: 'Imagine Dragons', 
        releaseYear: '2017', 
        song1: 'I Dont Know Why', 
        song2: 'Whatever It Takes', 
        song3: 'Believer', 
        song4: 'Thunder', 
        song5: 'Walking the Wire', 
        song6: 'Born to Be Yours', 
        song7: 'Yesterday', 
        song8: 'Rise Up', 
        song9: 'Ill Make It Up to You', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: 'evolve.jpg', 
        spotifyLink: 'https://open.spotify.com/album/33pt9HBdGlAbRGBHQgsZsU' 
      },);

      await createAlbums({ 
        name: 'LP1', 
        artistName: 'FKA twigs', 
        releaseYear: '2014', 
        song1: 'Preface', 
        song2: 'Glass & Patron', 
        song3: 'Two Weeks', 
        song4: 'Papi Pacify', 
        song5: 'Water Me', 
        song6: 'Hows That', 
        song7: 'Hours', 
        song8: 'Lights On', 
        song9: 'Kicks', 
        song10: 'FKA twigs',
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Electronic', 
        albumArt: 'lp1.png', 
        spotifyLink: 'https://open.spotify.com/album/070rEVRV6FWywkncMWLhs6' 
      });

      await createAlbums(  { 
        name: 'The 1975', 
        artistName: 'The 1975', 
        releaseYear: '2013', 
        song1: 'Love It If We Made It', 
        song2: 'Love Me', 
        song3: 'If I Believe You', 
        song4: 'Guys', 
        song5: 'Its Not Living (If Its Not With You)', 
        song6: 'Sincerity Is Scary', 
        song7: 'Mine', 
        song8: 'I Couldnt Be More in Love', 
        song9: '', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Alternative', 
        albumArt: 'the1975.png', 
        spotifyLink: 'https://open.spotify.com/album/33ZqJmmqFE8Z7Ak1Lxbnfb' 
      });

      await createAlbums(  { 
        name: 'Born to Die', 
        artistName: 'Lana Del Rey', 
        releaseYear: '2012', 
        song1: 'Off to the Races', 
        song2: 'Blue Jeans', 
        song3: 'Video Games', 
        song4: 'Diet Mountain Dew', 
        song5: 'National Anthem', 
        song6: 'Dark Paradise', 
        song7: 'Radio', 
        song8: 'Carmen', 
        song9: '', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: 'borntodie.jpg', 
        spotifyLink: 'https://open.spotify.com/album/4X8hAqIWpQyQks2yRhyqs4' 
      });

      await createAlbums(  { 
        name: 'The Black Parade', 
        artistName: 'My Chemical Romance', 
        releaseYear: '2006', 
        song1: 'The End.', 
        song2: 'Dead!', 
        song3: 'This Is How I Disappear', 
        song4: 'The Sharpest Lives', 
        song5: 'Welcome to the Black Parade', 
        song6: 'I Dont Love You', 
        song7: 'House of Wolves', 
        song8: 'Cancer', 
        song9: 'Mama', 
        song10: 'Sleep', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Alternative', 
        albumArt: 'blackparade.jpg', 
        spotifyLink: 'https://open.spotify.com/track/5wQnmLuC1W7ATsArWACrgW' 
      });

      await createAlbums(  { 
        name: 'Take Care', 
        artistName: 'Drake', 
        releaseYear: '2011', 
        song1: 'Over My Dead Body', 
        song2: 'Shot for Me', 
        song3: 'Headlines', 
        song4: 'Crew Love', 
        song5: 'Take Care', 
        song6: 'Marvins Room', 
        song7: 'Under Ground Kings', 
        song8: 'Doing It Wrong', 
        song9: 'The Ride', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'takecare.jpg', 
        spotifyLink: 'https://open.spotify.com/track/124NFj84ppZ5pAxTuVQYCQ' 
      });

      await createAlbums( { 
        name: 'Anti', 
        artistName: 'Rihanna', 
        releaseYear: '2016', 
        song1: 'Consideration', 
        song2: 'James Joint', 
        song3: 'Kiss It Better', 
        song4: 'Work', 
        song5: 'Desperado', 
        song6: 'Woo', 
        song7: 'Needed Me', 
        song8: 'Yeah, I Said It', 
        song9: 'Love on the Brain', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'R&B', 
        albumArt: 'anti.png', 
        spotifyLink: 'https://open.spotify.com/album/4UlGauD7ROb3YbVOFMgW5u' 
      },);

      await createAlbums({ 
        name: 'Death of a Bachelor', 
        artistName: 'Panic! At The Disco', 
        releaseYear: '2016', 
        song1: 'Victorious', 
        song2: 'Dont Threaten Me with a Good Time', 
        song3: 'Hallelujah', 
        song4: 'Emperors New Clothes', 
        song5: 'Death of a Bachelor', 
        song6: 'Crazy=Genius', 
        song7: 'LA Devotee', 
        song8: 'Golden Days', 
        song9: 'The Good, The Bad, and The Dirty', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Alternative', 
        albumArt: 'deathbachelor.jpg', 
        spotifyLink: 'https://open.spotify.com/track/1BECwm5qkaBwlbfo4kpYx8' 
      },
    );

      await createAlbums(      
        { 
          name: 'Beyoncé', 
          artistName: 'Beyoncé', 
          releaseYear: '2013', 
          song1: 'Pray You Catch Me', 
          song2: 'HOLD UP', 
          song3: 'Drunk in Love', 
          song4: 'Blow', 
          song5: 'No Angel', 
          song6: 'Ivy Park', 
          song7: 'Love Drought', 
          song8: 'Sandcastles', 
          song9: '', 
          song10: '', 
          song11: '', 
          song12: '', 
          song13: '', 
          song14: '', 
          song15: '', 
          genre: 'R&B', 
          albumArt: 'beyonce.png', 
          spotifyLink: 'https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m' 
        },);

      await createAlbums(     { 
        name: 'Currents', 
        artistName: 'Tame Impala', 
        releaseYear: '2015', 
        song1: 'Let It Happen', 
        song2: 'Nangs', 
        song3: 'The Moment', 
        song4: 'Yes Im Changing', 
        song5: 'Eventually', 
        song6: 'Gossip', 
        song7: 'The Less I Know the Better', 
        song8: 'Past Life', 
        song9: 'New Person, Same Old Mistakes', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: 'currents.jpg', 
        spotifyLink: 'https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv' 
      },);

      await createAlbums(      { 
        name: 'The Essential Michael Jackson', 
        artistName: 'Michael Jackson', 
        releaseYear: '2005', 
        song1: 'ABC', 
        song2: 'I Want You Back', 
        song3: 'Billie Jean', 
        song4: 'Thriller', 
        song5: 'Beat It', 
        song6: 'Bad', 
        song7: 'Smooth Criminal', 
        song8: 'Black or White', 
        song9: 'Man in the Mirror', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: 'essentialmichael.jpg', 
        spotifyLink: 'https://open.spotify.com/album/77dNyQA0z8dV33M4so4eRY' 
      },);

      await createAlbums(      { 
        name: 'Sound & Color', 
        artistName: 'Alabama Shakes', 
        releaseYear: '2015', 
        song1: 'Sound & Color', 
        song2: 'Dont Wanna Fight', 
        song3: 'Future People', 
        song4: 'Gimme All Your Love', 
        song5: 'Dunes', 
        song6: 'The Greatest', 
        song7: 'This Feeling', 
        song8: 'Guess Who', 
        song9: '', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Blues', 
        albumArt: 'soundcolor.jpg', 
        spotifyLink: 'https://open.spotify.com/track/42Z8moYh30XOVffltDDUgK' 
      },);

      await createAlbums(      
        { 
          name: 'Lungs', 
          artistName: 'Florence + The Machine', 
          releaseYear: '2009', 
          song1: 'Dog Days Are Over', 
          song2: 'Rabbit Heart (Raise It Up)', 
          song3: 'Im Not Calling You a Liar', 
          song4: 'Howl', 
          song5: 'Kiss with a Fist', 
          song6: 'Drumming Song', 
          song7: 'Between Two Lungs', 
          song8: 'My Boy Builds Coffins', 
          song9: 'Blinding', 
          song10: '', 
          song11: '', 
          song12: '', 
          song13: '', 
          song14: '', 
          song15: '', 
          genre: 'Indie Rock', 
          albumArt: 'lungs.png', 
          spotifyLink: 'https://open.spotify.com/album/6hs55qjerNNOi4ZT5bOhxV' 
        },);

      await createAlbums(      { 
        name: 'Awaken, My Love!', 
        artistName: 'Donald Glover', 
        releaseYear: '2016', 
        song1: 'Me and Your Mama', 
        song2: 'Have Some Love', 
        song3: 'Boogieman', 
        song4: 'Zombies', 
        song5: 'Riot', 
        song6: 'Redbone', 
        song7: 'The Night Me and Your Mama Met', 
        song8: 'Terrified', 
        song9: 'California', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'R&B', 
        albumArt: 'awaken.png', 
        spotifyLink: 'https://open.spotify.com/album/4JCybsNZUXWrK2Jpyn12Ni' 
      },);

      await createAlbums(     { 
        name: 'A Moon Shaped Pool', 
        artistName: 'Radiohead', 
        releaseYear: '2016', 
        song1: 'Bloom', 
        song2: 'Morning Mr Magpie', 
        song3: 'The Numbers', 
        song4: 'Decks Dark', 
        song5: 'Desert Island Disk', 
        song6: 'Ful Stop', 
        song7: 'Glass Eyes', 
        song8: 'Identikit', 
        song9: 'Present Tense', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Alternative', 
        albumArt: 'moonpool.png', 
        spotifyLink: 'https://open.spotify.com/album/2ix8vWvvSp2Yo7rKMiWpkg' 
      },);

      await createAlbums(  { 
        name: 'From Under the Cork Tree', 
        artistName: 'Fall Out Boy', 
        releaseYear: '2005', 
        song1: 'Irresistible', 
        song2: 'Sugar, Were Goin Down', 
        song3: 'Dance, Dance', 
        song4: 'A Little Less Sixteen Candles, a Little More "Touch Me"', 
        song5: 'Nobody Puts Baby in the Corner', 
        song6: 'Ive Got a Dark Alley and a Bad Idea That Says You Should Shut Your Mouth', 
        song7: '7 Minutes in Heaven', 
        song8: 'Champagne for My Real Friends', 
        song9: 'Snitches and Talkers Get Stitches and Walkers', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Alternative', 
        albumArt: 'corktree.jpg', 
        spotifyLink: 'https://open.spotify.com/album/5nkUSlIhtoJZMOUlB0sNCp' 
      },);

      await createAlbums(   { 
        name: 'Days Are Gone', 
        artistName: 'Haim', 
        releaseYear: '2013', 
        song1: 'Falling', 
        song2: 'Forever', 
        song3: 'The Wire', 
        song4: 'If I could Change Your Mind', 
        song5: 'Honey & I', 
        song6: 'Dont Save Me', 
        song7: 'Days Are Gone', 
        song8: 'My Song 5', 
        song9: 'Go Slow', 
        song10: 'Let Me Go', 
        song11: 'Running If You Call My Name', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Indie Rock', 
        albumArt: 'haim.jpg', 
        spotifyLink: 'https://open.spotify.com/album/729Vh0HApsm7hGDVjbmtrf' 
      },);

      await createAlbums(     { 
        name: 'Melodrama', 
        artistName: 'Lorde', 
        releaseYear: '2017', 
        song1: 'Green Light', 
        song2: 'Sober', 
        song3: 'Homemade Dynamite', 
        song4: 'The Louvre', 
        song5: 'Liability', 
        song6: 'Hard Feelings / Loveless', 
        song7: 'Sober II (Melodrama)', 
        song8: 'Writer in the Dark', 
        song9: 'Supercut', 
        song10: 'Perfect Places', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: 'melodrama.png', 
        spotifyLink: 'https://open.spotify.com/album/2B87zXm9bOWvAJdkJBTpzF' 
      },);

      await createAlbums(  { 
        name: 'Starboy', 
        artistName: 'The Weeknd', 
        releaseYear: '2016', 
        song1: 'Starboy', 
        song2: 'Party Monster', 
        song3: 'False Alarm', 
        song4: 'Reminder', 
        song5: 'I Feel It Coming', 
        song6: 'Secrets', 
        song7: 'True Colors', 
        song8: 'A Lonely Night', 
        song9: 'Nothing Without You', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: 'starboy.png', 
        spotifyLink: 'https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB' 
      },);

      await createAlbums(     { 
        name: 'IGOR', 
        artistName: 'Tyler, The Creator', 
        releaseYear: '2019', 
        song1: 'IGORS THEME', 
        song2: 'EARFQUAKE', 
        song3: 'I THINK', 
        song4: 'EXACTLY WHAT YOU RUN FROM YOU END UP CHASING', 
        song5: 'RUNNING OUT OF TIME', 
        song6: 'NEW MAGIC WAND', 
        song7: 'A BOY IS A GUN*', 
        song8: 'PUPPET', 
        song9: 'WHATS GOOD', 
        song10: 'GONE, GONE / THANK YOU', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Hip-Hop', 
        albumArt: 'igor.jpg', 
        spotifyLink: 'https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE' 
      },);

      await createAlbums(      { 
        name: 'For Emma, Forever Ago', 
        artistName: 'Bon Iver', 
        releaseYear: '2007', 
        song1: 'Flume', 
        song2: 'Lump Sum', 
        song3: 'Skinny Love', 
        song4: 'The Wolves (Act I and II)', 
        song5: 'Blindsided', 
        song6: 'Creature Fear', 
        song7: 'Team', 
        song8: 'For Emma', 
        song9: 'Re: Stacks', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Folk', 
        albumArt: 'emma.jpg', 
        spotifyLink: 'https://open.spotify.com/track/2nilAlGEZmwyaLTMMyDdLo' 
      },);

      await createAlbums(  { 
        name: '25', 
        artistName: 'Adele', 
        releaseYear: '2015', 
        song1: 'Hello', 
        song2: 'Send My Love', 
        song3: 'I Miss You', 
        song4: 'When We Were Young', 
        song5: 'Remedy', 
        song6: 'Water Under the Bridge', 
        song7: 'Million Years Ago', 
        song8: 'Love in the Dark', 
        song9: 'Dont You Remember', 
        song10: '', 
        song11: '', 
        song12: '', 
        song13: '', 
        song14: '', 
        song15: '', 
        genre: 'Pop', 
        albumArt: '25.png', 
        spotifyLink: 'https://open.spotify.com/album/3sFhg2dRAOB5ztiC4Rys6B' 
      });
  
      ;
      console.log("Finished creating albums!");
    } catch (error) {
      console.log("Error creating albums!");
      throw error;
    }
  }

async function seed() {

    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialAlbums();
    
  } 

seed().catch(console.error)
