```tsx
export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* NAV */}
          <nav className="flex items-center justify-between py-8">
            <div className="text-3xl font-extrabold">
              My<span className="text-blue-500">AutoPass</span>
            </div>

            <div className="hidden md:flex gap-8 text-slate-300">
              <a href="#">How It Works</a>
              <a href="#">Owners</a>
              <a href="#">Mechanics</a>
              <a href="#">Dealers</a>
              <a href="#">FAQ</a>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold">
              Join Waitlist
            </button>
          </nav>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">

            <div>
              <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-6">
                Australia's Digital Vehicle Passport
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Every Car Has A Story.
                <span className="block text-blue-500">
                  Keep Yours Verified.
                </span>
              </h1>

              <p className="text-slate-300 text-xl mt-8 max-w-xl leading-relaxed">
                Store service history, repairs, inspections,
                warranties and ownership records in one trusted
                digital passport that stays with your vehicle for life.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold">
                  Join Early Access
                </button>

                <button className="border border-slate-700 hover:border-slate-500 px-7 py-4 rounded-xl">
                  Watch Demo
                </button>
              </div>

              <div className="flex gap-10 mt-12">
                <div>
                  <p className="text-4xl font-bold">10k+</p>
                  <p className="text-slate-400">Future Users</p>
                </div>

                <div>
                  <p className="text-4xl font-bold">500+</p>
                  <p className="text-slate-400">Workshops</p>
                </div>

                <div>
                  <p className="text-4xl font-bold">100%</p>
                  <p className="text-slate-400">Digital Records</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE CARD */}
            <div className="relative">
              <div className="absolute -inset-8 bg-blue-600 blur-3xl opacity-20 rounded-full" />

              <div className="relative bg-white rounded-[32px] p-5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200"
                  alt="Vehicle"
                  className="rounded-2xl w-full h-[340px] object-cover"
                />

                <div className="grid grid-cols-2 gap-4 mt-5">

                  <div className="bg-slate-100 rounded-2xl p-5">
                    <p className="text-slate-500 text-sm">
                      Vehicle Score
                    </p>

                    <p className="text-5xl font-black text-green-600">
                      94%
                    </p>
                  </div>

                  <div className="bg-slate-100 rounded-2xl p-5">
                    <p className="text-slate-500 text-sm">
                      Verified Services
                    </p>

                    <p className="text-5xl font-black text-blue-600">
                      28
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-16">
            Buying A Used Car Shouldn't Be Guesswork
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Missing Service Records",
              "Lost Logbooks",
              "Odometer Uncertainty",
              "Hidden Repair History",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-50 p-8 rounded-3xl"
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-100 mb-6" />

                <h3 className="font-bold text-xl mb-3">
                  {item}
                </h3>

                <p className="text-slate-500">
                  Vehicle history should be transparent and
                  accessible.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl font-black mb-8">
              One Passport For The Life Of Your Vehicle
            </h2>

            <div className="space-y-5 text-lg">

              <p>✓ Upload service invoices</p>
              <p>✓ Verify workshop records</p>
              <p>✓ Track maintenance history</p>
              <p>✓ Store warranties & inspections</p>
              <p>✓ Share with buyers instantly</p>

            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-2xl">
                BMW 330i M Sport
              </h3>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-slate-500">Vehicle Score</p>
                <p className="text-4xl font-black">94%</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-slate-500">Services</p>
                <p className="text-4xl font-black">28</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-slate-500">Documents</p>
                <p className="text-4xl font-black">15</p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-slate-500">Owners</p>
                <p className="text-4xl font-black">2</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* USERS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-black mb-16">
            Built For Everyone
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-green-50 rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-4">
                Vehicle Owners
              </h3>
              <p>Never lose records again.</p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-4">
                Mechanics
              </h3>
              <p>Verify work and build trust.</p>
            </div>

            <div className="bg-purple-50 rounded-3xl p-8">
              <h3 className="font-bold text-2xl mb-4">
                Dealers & Buyers
              </h3>
              <p>See trusted vehicle history instantly.</p>
            </div>

          </div>

        </div>
      </section>

      {/* WAITLIST */}
      <section className="bg-slate-950 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-5xl font-black mb-6">
              Join The MyAutoPass Waitlist
            </h2>

            <p className="text-slate-400 text-lg">
              Be among the first owners, mechanics and dealers
              to access Australia's digital vehicle passport.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl">

            <div className="space-y-4">

              <input
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 text-black"
              />

              <input
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 text-black"
              />

              <select className="w-full border rounded-xl p-4 text-black">
                <option>Vehicle Owner</option>
                <option>Mechanic</option>
                <option>Dealer</option>
              </select>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 font-semibold">
                Join Waitlist
              </button>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
```
