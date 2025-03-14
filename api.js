const { client } = require("./client.js");
const express = require("express");
const app = express();

async function createTablesAndData() {
  try {
    const SQL = `
        DROP TABLE IF EXISTS comments;
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS albums;

        CREATE TABLE albums (
          id SERIAL PRIMARY KEY,
          name varchar(255) UNIQUE NOT NULL,
          artistName varchar(255) NOT NULL,
          releaseYear INTEGER,
          song1 varchar(255) NOT NULL,
          song2 varchar(255) NOT NULL,
          song3 varchar(255) NOT NULL,
          song4 varchar(255) NOT NULL,
          song5 varchar(255) NOT NULL,
          song6 varchar(255) NOT NULL,
          song7 varchar(255) NOT NULL,
          song8 varchar(255) NOT NULL,
          song9 varchar(255) NOT NULL,
          song10 varchar(255) NOT NULL,
          song11 varchar(255) NOT NULL,
          song12 varchar(255) NOT NULL,
          song13 varchar(255) NOT NULL,
          song14 varchar(255) NOT NULL,
          song15 varchar(255) NOT NULL,
          genre varchar(255) NOT NULL,
          albumArtUrl TEXT,
          playlistLink TEXT
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

        INSERT INTO albums (
          name,
          artistName,
          releaseYear,
          song1,
          song2,
          song3,
          song4,
          song5,
          song6,
          song7,
          song8,
          song9,
          song10,
          song11,
          song12,
          song13,
          song14,
          song15,
          genre,
          albumArtUrl,
          playlistLink
          )

         VALUES
         ('Future Nostalgia',
    'Dua Lipa',
    '2020',
    'Future Nostalgia',
    'Dont Start Now',
    'Cool',
    'Physical',
    'Levitating',
    'Pretty Please',
    'Hallucinate',
    'Love Again',
    'Break My Heart',
    'Good in Bed',
    'Boys Will Be Boys',
    '',
    '',
    '',
    '',
    'Pop',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLQhZwW8HhTgLJ6zO0J3RkJc0Aq0c8xq1v'),

         ('Folklore',
    'Taylor Swift',
    '2020',
    'the 1',
    'cardigan',
    'the last great american dynasty',
    'exile (feat. Bon Iver)',
    'my tears ricochet',
    'mirrorball',
    'seven',
    'august',
    'this is me trying',
    'illicit affairs',
    'invisible string',
    'mad woman',
    'epiphany',
    'betty',
    'peace',
    'Indie Folk',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLFgquLnL59alNo1K0gZMEiX-H9L6kZf9d'),

('DAMN.',
    'Kendrick Lamar',
    '2017',
    'BLOOD.',
    'DNA.',
    'YAH.',
    'ELEMENT.',
    'FEEL.',
    'LOYALTY. (feat. Rihanna)',
    'PRIDE.',
    'HUMBLE.',
    'LUST.',
    'LOVE. (feat. Zacari)',
    'XXX. (feat. U2)',
    'FEAR.',
    'GOD.',
    'DUCKWORTH.',
    '',
    'Hip Hop',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLb2P7aOeKwVVcpPYqHusFDHn5jlQHf4Zw'),

('Lover',
    'Taylor Swift',
    '2019',
    'I Forgot That You Existed',
    'Cruel Summer',
    'Lover',
    'The Man',
    'The Archer',
    'I Think He Knows',
    'Miss Americana & The Heartbreak Prince',
    'Paper Rings',
    'Cornelia Street',
    'Death by a Thousand Cuts',
    'London Boy',
    'Soon Youll Get Better',
    'False God',
    'You Need to Calm Down',
    'Daylight',
    'Pop',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLD-Bal1s9oGzq95W3WmnzSng8OKqQfm7J'),

('Blinding Lights',
    'The Weeknd',
    '2020',
    'Blinding Lights',
    'Heartless',
    'Save Your Tears',
    'In Your Eyes',
    'After Hours',
    'Alone Again',
    'Hardest To Love',
    'Scared To Live',
    'Snowchild',
    'Escape From LA',
    'Pray For Me',
    'Faith',
    '',
    '',
    '',
    'R&B',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLlz9Kfm_o0VbBBjoQt3k9bYJtLJd-DW7r'),
(
    'When We All Fall Asleep, Where Do We Go?',
    'Billie Eilish',
    '2019',
    '!!!!!!!',
    'bad guy',
    'xanny',
    'you should see me in a crown',
    'all the good girls go to hell',
    'wish you were gay',
    'when the partys over',
    '8',
    'my strange addiction',
    'bury a friend',
    'ilomilo',
    'listen before i go',
    'i love you',
    'goodbye',
    'everything i wanted',
    'Alternative Pop',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLnQ9NJltnXz_5rOhA-cq_PQ5vHco69tqN'
),
(
    'Happier Than Ever',
    'Billie Eilish',
    '2021',
    'Getting Older',
    'I Didnt Change My Number',
    'Billie Bossa Nova',
    'My Future',
    'Oxytocin',
    'Goldwing',
    'Lost Cause',
    'Halleys Comet',
    'Not My Responsibility',
    'Overheated',
    'Everybody Dies',
    'Your Power',
    'NDA',
    'Therefore I Am',
    'Happier Than Ever',
    'Pop',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLiD-l7ZYwvqf9lZceHTdWDo9xG0cPgg0p'
),
(
    'Good News',
    'Mac Miller',
    '2020',
    'Good News',
    'Everybody',
    'Woods',
    'I Can See',
    'Hands',
    'Surf',
    'Thats On Me',
    'My Name',
    'Something Real',
    'Invisible',
    'The Mood',
    'Listen',
    'One More Time',
    'Sleepyhead',
    'Aint No Sunshine',
    'Hip Hop',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLRmz5dWzHRM9kxJggl0z1y0cBRFvRPtJ3'
),
(
    'Hot Pink',
    'Doja Cat',
    '2019',
    'Cyber Sex',
    'Like That',
    'Juicy',
    'Say So',
    'Mooo!',
    'Tia Tamera',
    'Streets',
    'Bottom Bitch',
    'Better Than Me',
    'Talk Dirty',
    'Lick',
    'Candy',
    'No Drama',
    'Rules',
    'Love To Dream',
    'Pop',
    'https://link_to_album_art.jpg',
    'https://www.youtube.com/playlist?list=PLLO1iZX9FvUBse6fSZZpF3QnTgS2a_JJz'
)
      `;

    await client.query(SQL);
    console.log("tables created");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

app.get("/albums", async (req, res, next) => {
  try {
    const SQL = `
        SELECT * from albums;
      `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

console.log(createTablesAndData());
createTablesAndData();

const getAlbums = async () => {
  try {
    const res = await client.query("SELECT * FROM albums");
    return res.rows;
  } catch (err) {
    console.error("Error fetching albums:", err);
    throw err;
  }
};

module.exports = { createTablesAndData, getAlbums };
