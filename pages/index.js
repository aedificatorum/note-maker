import Head from 'next/head';

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

      <main className="flex flex-col">
        {noteLines.map((noteLine, lineNumber) => {
          return (
            <div key={lineNumber} className="flex flex-row">
              {noteLine.split('').map((note, i) => {
                if (note === ' ') {
                  return (
                    <div
                      key={i}
                      className="mx-1 py-2 px-4 rounded-full bg-white font-semibold text-white"
                    >
                      .
                    </div>
                  );
                }

                return (
                  <div
                    key={i}
                    className="mx-1 py-2 px-4 rounded-full text-white font-semibold bg-green-500"
                  >
                    {note}
                  </div>
                );
              })}
            </div>
          );
        })}
      </main>
    </div>
  );
}
