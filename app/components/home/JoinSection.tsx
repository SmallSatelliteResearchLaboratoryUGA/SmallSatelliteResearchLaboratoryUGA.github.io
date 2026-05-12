export default function JoinSection() {
  return (
    <section
      id="join"
      className="min-h-screen flex flex-col justify-center items-center text-center border-b border-white/10 px-4 scroll-mt-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl mb-8">Join Us</h2>
        <p className="text-white/90">
          If you are a student with an interest in spacecraft, why don&apos;t you join us?
        </p>

        <a
          href="https://qualtricsxmfclnmhypx.qualtrics.com/jfe/form/SV_bqhBY8mdHZPuPEG"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-block text-lg mt-8 px-10 py-4 bg-[#BA0C2F] text-white font-bold rounded-[5px] shadow-[0_0_20px_rgba(186,12,47,0.5)] transition hover:bg-white hover:text-[#BA0C2F] hover:-translate-y-1"
        >
          Apply to the Lab
        </a>
      </div>
    </section>
  );
}