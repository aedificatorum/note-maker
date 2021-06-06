import Head from 'next/head';

const getNoteColour = (note) => {
  switch (note) {
    case 'c':
      return '#F87171';
    case 'd':
      return '#FBBF24';
    case 'e':
      return '#34D399';
    case 'f':
      return '#60A5FA';
    case 'g':
      return '#818CF8';
    case 'a':
      return '#A78BFA';
    case 'b':
      return '#F472B6';
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
  const notes = `cc d eef  cfdef
cc d ee
cdefg

abcdefg

gfedcba`;

  const noteLines = notes.split('\n');

  return (
    <div>
      <Head>
        <title>Note Maker</title>
      </Head>

      <main className="p-3 flex flex-col font-mono font-semibold text-white space-y-3">
        {noteLines.map((noteLine, lineNumber) => {
          return <NoteLine key={lineNumber} notes={noteLine} />;
        })}
      </main>
    </div>
  );
}
