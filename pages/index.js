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

export default function Home() {
  const defaultNotes = `c d e f g a b C

cdefgabC

cC cC`;

  const [notes, setNotes] = React.useState(defaultNotes);

  const noteLines = notes.split('\n');

  return (
    <div>
      <Head>
        <title>Note Maker</title>
      </Head>
      <main className="p-3">
        <section>
          <textarea
            value={notes}
            rows={notes.split('\n').length}
            cols={50}
            onChange={(e) => setNotes(e.target.value)}
          />
        </section>
        <section className="flex flex-col font-mono font-semibold text-white space-y-3">
          {noteLines.map((noteLine, lineNumber) => {
            return <NoteLine key={lineNumber} notes={noteLine} />;
          })}
        </section>
      </main>
    </div>
  );
}
