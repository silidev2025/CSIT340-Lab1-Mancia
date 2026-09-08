import './index.css'
function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Francis Dave P. Mancia</h1>
        <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
        <hr className="mt-8 border-slate-200" />
      </header>
      <main className="max-w-2xl mx-auto px-6 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-slate-700">
            I grew up in Talisay and moved to Cebu City for college. I picked IT because I
            wanted to build things people actually open, and I have been slowly figuring out
            what part of that I enjoy most. So far it is the part where something finally runs.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            Hometown: Talisay City, Cebu
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Playing badminton on weekends, badly</li>
            <li>Fixing other people's laptops for free</li>
            <li>Any milk tea that is not too sweet</li>
            <li>Bacarrat</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-slate-700">
            francisdave.mancia@cit.edu
            <br />
            @silidev2025 on most things
          </p>
        </section>
      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </>
  )
}

export default App

