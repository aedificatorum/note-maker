import Head from 'next/head';

const Space = () => {
  return (
    <div className="mx-1 py-2 px-4 rounded-full bg-white font-semibold text-white">
      .
    </div>
  );
};

const Note = ({ note }) => {
  return (
    <div className="mx-1 py-2 px-4 rounded-full text-white font-semibold bg-green-500">
      {note}
    </div>
  );
};

const NoteLine = ({ notes }) => {
  return (
    <div className="flex flex-row">
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
  const notes = `
cc d eef  cfdef
cc d ee
cdefg`;

  const noteArray = notes.split('');
  const noteLines = notes.split('\n');
  console.log(noteArray);

  return (
    <div>
      <Head>
        <title>Note Maker</title>
      </Head>

      <main className="flex flex-col font-mono">
        {noteLines.map((noteLine, lineNumber) => {
          return <NoteLine key={lineNumber} notes={noteLine} />;
        })}
      </main>
    </div>
  );
}
