function SectionComponent({ sectionBg, children }) {
    return (
      <section className={sectionBg}>
        <div
          className={`
            w-[100%] max-w-[1400px] min-h-[100dvh] sm:min-h-[150dvh] xl:min-h-[100dvh] mx-auto flex flex-col
            items-center justify-center overflow-hidden
            md:w-[100%]
          `}
        >
          {children}
        </div>
      </section>
    );
  }

  export default SectionComponent;