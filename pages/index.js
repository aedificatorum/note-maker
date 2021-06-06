import React from 'react';
import Head from 'next/head';

const getNoteColour = (note) => {
  switch (note) {
    case 'c':
      return '#db2029';
    case 'd':
      return '#f48c12';
    case 'e':
      return '#ffd800';
    case 'f':
      return '#8bc522';
    case 'g':
      return '#0281c5';
    case 'a':
      return '#95d5f8';
    case 'b':
      return '#99509d';
    case 'C':
      return '#bc92c1';
    default:
      return '#9CA3AF';
  }
};

const Space = () => {
  return <div className="py-2 px-4 bg-white">.</div>;
};

const Note = ({ note }) => {
  return (
    <div
      className="py-2 px-4 rounded-full"
      style={{ backgroundColor: getNoteColour(note) }}
    >
      {note}
    </div>
  );
};

const NoteLine = ({ notes }) => {
  if (notes.length === 0) {
    return <div className="h-4"></div>;
  }

  return (
    <div className="flex flex-row flex-wrap space-x-2">
      {notes.split('').map((note, i) => {
        if (note === ' ') {
          return <Space key={i} />;
        }

        return <Note key={i} note={note} />;
      })}
    </div>
  );
};

const SongNotes = ({ noteLines }) => {
  return (
    <div className="flex flex-col font-mono font-semibold text-white space-y-3">
      {noteLines.map((noteLine, lineNumber) => {
        return <NoteLine key={lineNumber} notes={noteLine} />;
      })}
    </div>
  );
};

const parseSong = (song) => {
  const lines = song.split('\n');
  let songLines = lines;
  let title = '';

  if (lines[0].length && lines[0][0] === '#') {
    songLines = lines.slice(1);
    const afterHash = lines[0].split('#')[1].trim();
    if (afterHash.length) {
      title = afterHash;
    }
  }

  return [title, songLines];
};

export default function Home() {
  const defaultSong = `# Song title
c d e f g a b C

cdefgabC

cC cC`;

  const [song, setSong] = React.useState(defaultSong);

  const [songTitle, noteLines] = parseSong(song);

  return (
    <div>
      <Head>
        <title>Note Maker</title>
      </Head>
      <main className="p-3">
        <section>
          <textarea
            value={song}
            rows={song.split('\n').length}
            cols={50}
            onChange={(e) => setSong(e.target.value)}
          />
        </section>
        <section>
          {songTitle.length > 0 ? (
            <h2 className="text-4xl p-2 mb-4 font-bold">{songTitle}</h2>
          ) : null}
          <SongNotes noteLines={noteLines} />
        </section>
      </main>
    </div>
  );
}
